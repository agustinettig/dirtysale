import { Joi } from "celebrate";

import { cardSchema } from "./CardSchema";

export const paymentSchema = Joi.object().keys({
    type: Joi.number().max(21).required(),
    card: cardSchema
});