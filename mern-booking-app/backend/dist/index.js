"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
//connect mongodb database, and display which database is connecting now
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Connected to database: ", process.env.MONGODB_CONNECTION_STRING));
//create an express app, make sure each express API be parsed into JSON type
const app = (0, express_1.default)();
//use cookie-parser
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); //qs library
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
})); //cross origin resource sharing
//test code to make sure the express app API is ok.
/* app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" });
});

{
  "email": "1@11.com",
  "password": "password1234"
}
*/
//post the frontend static page via the backend
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.listen(7000, () => {
    console.log("server running on http://localhost:7000");
});
