import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.set('port', process.env.PORT || 3000);

mongoose.connect(process.env.MONGODB_URI!, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} ).then(
    () => {
      console.log('Connected to mongo');
    },
).catch((err) => {
  console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  process.exit();
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world');
});


export default app;
