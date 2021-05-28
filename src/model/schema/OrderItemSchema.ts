import { Joi } from "celebrate";

export const orderItemSchema = Joi.object().keys({
    name: Joi.string().max(150).required(),
    value: Joi.number().precision(4),
    amount: Joi.number(),
});
