import express from "express";
const router = express.Router();
import { getRequest, createData, getData } from "../Controllers/index.js";

router.get("/", getRequest);
router.get("/getData/:subCode/:chapterNo", getData);
router.post("/create", createData); //creating data

export default router;
