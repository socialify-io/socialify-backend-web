import * as express from 'express';
import { Request, Response } from 'express';

let getKeyRouter = express.Router();

getKeyRouter.get('/getKey', async (req: Request, res: Response) => {
   res.json({"dupa": "dupa"});
});

export = getKeyRouter;
