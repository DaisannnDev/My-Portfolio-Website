import express from "express";
import mongoose from "mongoose";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "ชื่อ อีเมล และข้อความจำเป็นต้องกรอกให้ครบ",
    });
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        error: "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ในขณะนี้",
      });
    }

    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
