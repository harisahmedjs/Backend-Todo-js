import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const Port = process.env.PORT ; // Default to 3000 if PORT is not defined in the environment

app.get('/', (req, res) => {
  res.send('hello haris!');
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.error(error);
  }
}

connectDB().then(() => {
  app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`);
  });
}).catch((err) => {
  console.error(err);
});