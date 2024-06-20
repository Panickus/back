import express, { Request, Response } from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});