import { Joi } from "celebrate";

import { billingSchema } from './BillingSchema';
import { shippingSchema } from './ShippingSchema';
import { paymentSchema } from './PaymentSchema';
import { orderItemSchema } from "./OrderItemSchema";

export const analysisSchema = Joi.object().keys({
    code: Joi.string().max(50).required(),
    sessionID: Joi.string().max(128).required(),
    date: Joi.date().required(), //pattern
    email: Joi.string().email().max(150).required(),
    totalValue: Joi.number().precision(4).required(),
    observation: Joi.string().max(250),
    origin: Joi.string().max(150),
    customSla: Joi.number(),
    billing: billingSchema,
    shipping: shippingSchema,
    payments: Joi.array().items(paymentSchema),
    items: Joi.array().items(orderItemSchema),
})