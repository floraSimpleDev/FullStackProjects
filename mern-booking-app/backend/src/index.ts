import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

//create an express app, make sure each express API be parsed into JSON type
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //qs library
app.use(cors()); //cross origin resource sharing

//test code to make sure the express app API is ok.
/* app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" });
}); */

app.use("/api/users", userRoutes);

app.listen(7000, () => {
  console.log("server running on localhost: 7000");
});
