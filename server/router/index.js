import express from 'express';
import grocery from './grocery';

const app = express.Router();
grocery(app);
export default app;
