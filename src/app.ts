import express from 'express';
import { Request, Response, Router } from 'express';
import router from './router/router';

const app: express.Application = express();

app.set('port', 3000)

app.use(express.static('static'))

app.use('/api', router);
app.use((req: Request, res: Response) => {
  res.status(404).sendFile("templates/what_are_you_looking_for.html", {root: `${__dirname}//..//static//`});
});

export default app;

