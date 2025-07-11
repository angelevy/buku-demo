import express, { Application, Request, Response } from "express";
import path from "path";
import router from "./route/route";
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "../public")));

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Buku API!");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});