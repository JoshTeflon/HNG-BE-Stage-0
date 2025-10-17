import express, { Request, Response } from 'express';
import cors from 'cors';

import { getProfile } from './controllers/profileController';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/me', getProfile);

app.get('/', (req: Request, res: Response) => {
  res.send('Profile API is operational. Access /me for data.');
});

export default app;
