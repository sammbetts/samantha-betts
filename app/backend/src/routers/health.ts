import express, { Request, Response } from 'express';

const healthRouter = express.Router();

healthRouter.get('/', (req: Request, res: Response) => {
  res.send({ healthy: true });
});

export default healthRouter;
