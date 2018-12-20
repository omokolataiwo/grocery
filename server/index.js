import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import baseRoute from './router';
import enVariable from './envConfig';

const { dbConnection } = enVariable;

console.log(dbConnection);

mongoose.connect(
  dbConnection,
  { useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', baseRoute);

app.listen(process.env.PORT, () => console.log('Server started on port: ', process.env.PORT));

export default app;
