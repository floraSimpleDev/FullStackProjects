import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";

//connect mongodb database, and display which database is connecting now
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() =>
    console.log(
      "Connected to database: ",
      process.env.MONGODB_CONNECTION_STRING
    )
  );

//create an express app, make sure each express API be parsed into JSON type
const app = express();
//use cookie-parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //qs library
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
); //cross origin resource sharing

//test code to make sure the express app API is ok.
/* app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" });
}); 

{
  "email": "1@11.com",
  "password": "password1234"
}
*/

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7000, () => {
  console.log("server running on http://localhost:7000");
});
