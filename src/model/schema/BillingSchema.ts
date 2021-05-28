import { Joi } from "celebrate";

import { addressSchema } from "./AddressSchema";
import { phoneSchema } from "./PhoneSchema";

export const billingSchema = Joi.object().keys({
    type: Joi.number().max(2).required(),
    primaryDocument: Joi.string().min(11).max(14).required(),
    name: Joi.string().max(500).required(),
    birthDate: Joi.date(),
    email: Joi.string().email().max(500),
    gender: Joi.string().valid('M', 'F'),
    address: addressSchema,
    phones: Joi.array().items(phoneSchema).min(1).required()
});
