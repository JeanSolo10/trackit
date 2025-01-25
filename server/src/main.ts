import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

const bootstrapServer = () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!");
  })

  app.listen(PORT, () => {
    console.log(`[server] Server running on port ${PORT}`);
  })
};

bootstrapServer();