import { Router } from 'express';

import orderRouter from './order.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/orders', orderRouter);
routes.use('/authenticate', authRouter);

export default routes;