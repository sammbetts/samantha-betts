import cors, { CorsOptions } from 'cors';
import express, { Express } from 'express';
import healthRouter from './routers/health';
import itemRouter from './routers/items';

const app: Express = express();

let computedOrigin: string | RegExp = 'http://localhost:3001';

const corsOptions: CorsOptions = {
  origin: computedOrigin,
  methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', healthRouter);
app.use('/items', itemRouter);

export { app };
