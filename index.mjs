import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.log(error);
  }
}
connectDB().then(() => {
  app.listen(process.env.PORT)
}).catch((err) => {
  console.log(err)
})