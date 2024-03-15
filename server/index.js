import express from 'express';
import morgan from 'morgan';
//import cors from 'cors';
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js'

const app = express();
//app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(indexRoutes);

app.listen(PORT)
console.log(`server on port ${PORT}`);
