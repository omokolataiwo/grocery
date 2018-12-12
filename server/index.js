import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import baseRoute from './router';

mongoose.connect(
  'mongodb://localhost/grocery-store',
  { useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', baseRoute);

app.listen('7000', () => console.log('Server started on port: 7000'));

export default app;
