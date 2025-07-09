import express from "express";
import cors from "cors"
import dotenv from 'dotenv';
import connectDB from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import projectRoute from "./src/routes/project.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

connectDB();
console.log(process.env.CLIENT_URL);
// cors({
//   origin: "https://entity-craft.vercel.app",
//   credentials: true,
// });

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/project", projectRoute)


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
