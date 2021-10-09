import { Request, Response, Router } from 'express';

let getKeyRouter: Router = Router()

getKeyRouter.get('/', async (req: Request, res: Response) => {
   res.json({"dupa": "dupa"});
});

export default getKeyRouter;
