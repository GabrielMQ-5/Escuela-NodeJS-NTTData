import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routers";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors(/*{
    origin: ["http://localhost:3000"],
  }*/)
);
app.use(express.json());
app.use(router);
db().then(() => {
  console.log(`You connected to database.`);
});

app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`));
