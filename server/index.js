import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Route/index.js";
import cors from "cors";

dotenv.config();

//constants
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
// app.use(express.json());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", router);

const server = mongoose
  .connect(process.env.SECRET_KEY, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Connected on port: ${PORT}`)))
  .catch((e) => console.log("error occoured while connecting to Db", e));
mongoose.set("useFindAndModify", false);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error ${err}`);
  server.close(() => process.exit(1));
});
