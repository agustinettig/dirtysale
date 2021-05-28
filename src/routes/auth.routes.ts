import { Request, Response, Router } from 'express';
import { celebrate } from 'celebrate';

import { AuthService } from '../service/AuthService';
import { authSchema } from '../model/schema/AuthSchema';

const authRouter = Router();

authRouter.post("/", celebrate({
    body: authSchema,
}, {
    abortEarly: false,
    allowUnknown: true
}), (req: Request, res: Response) => {
    const {name, password } = req.body;
    const response = new AuthService().execute(name, password);
    res.send(response);
});

export default authRouter;
