import cors, { CorsOptions } from 'cors';
import express, { Express } from 'express';
import healthRouter from './routers/health';
import userRouter from './routers/items';

const app: Express = express();

let computedOrigin: string | RegExp = 'http://localhost:3001';

// If running in GitHub Codespace
if (process.env.CODESPACES === 'true') {
  computedOrigin = `https://${process.env.CODESPACE_NAME}-3001.githubpreview.dev`;
}

// If running in Lambda
if (process.env.AWS_EXECUTION_ENV) {
  computedOrigin = /\.s3-website\.eu-central-1\.amazonaws\.com$/;
}

const corsOptions: CorsOptions = {
  origin: computedOrigin,
  methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', healthRouter);
app.use('/users', userRouter);

export { app };
