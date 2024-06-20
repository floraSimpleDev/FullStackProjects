import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();

//post user's email and password to login
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    //find user based on the email
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      //compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Invalid Password Credentials" });
      }

      //create the token and setting the expiresIn type
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      //transfer the auth_token to res.cookie
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000, // 1 day
      });
      res.status(200).json({ userId: user._id }); //user._id from MongoDB
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

//check the http cookie, if token is valid, send back 200 and the userId of that token
router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
  //get from the auth.ts of middleware folder: req.userId = (decoded as JwtPayload).userId;
  res.status(200).send({ userId: req.userId });
});

//logout router
router.post("/logout", (req: Request, res: Response) => {
  res.cookie("auth_token", "", { expires: new Date(0) }); //expired as while as it is created
  res.send(); // in case of pending
});

export default router;
