import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import formRoute from "./routes/formRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDB_URL = process.env.MONGODB_URL;

app.use(cors());

app.use(express.json());

app.use('/api/form', formRoute);

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App is connected to Database Successfully");
    app.listen(PORT, () => {
      console.log(`App is listening to Port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

