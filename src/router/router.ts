import { Router } from 'express';

// Routes
import getKey from './endpoints/getKey';

let router: Router = Router();
router.use('/getKey', getKey);

export default router;
