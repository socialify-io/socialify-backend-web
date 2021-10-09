import express from 'express';
import { Request, Response } from 'express';
import getKeyRouter = require('./router/getKey')

const app = express();

app.set('port', 3000)

app.use(express.static('static'))

app.use('/api', getKeyRouter);
app.use((req: Request, res: Response) => {
  res.status(404).sendFile("templates/what_are_you_looking_for.html", {root: `${__dirname}//..//static//`});
});

export default app;

