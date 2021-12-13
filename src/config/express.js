import express from "express";
import bodyParser from "body-parser";
import compress from 'compression';
import cors from 'cors';
import mobileRouter from '../router/v1/mobile.router';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// gzip compression
app.use(compress());

app.use('/api/v1/mobile', mobileRouter);

export default app;