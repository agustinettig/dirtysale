import { celebrate } from 'celebrate';
import { Request, Response, Router } from 'express';

import { authRequired } from "../middleware/AuthRequired";
import { analysisSchema } from '../model/schema/AnalysisSchema';
import { CreateOrderService } from "../service/CreateOrderService";
import { GetStatusService } from "../service/GetStatusService";

const orderRouter = Router();

orderRouter.get("/:orderId/status", authRequired, (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const response = new GetStatusService().execute(orderId);
    res.send(response);
});

orderRouter.post("/", authRequired, celebrate({
    body: analysisSchema,
}, {
    abortEarly: false,
    allowUnknown: true
}),
    (req: Request, res: Response) => {
        const order = req.body;
        const response = new CreateOrderService().execute(order.code, order.billing.primaryDocument);
        res.send(response);
    });

export default orderRouter;