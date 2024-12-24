import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`[server] Server running on port ${PORT}`);
});
