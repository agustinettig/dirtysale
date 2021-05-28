import { Joi } from "celebrate";

export const addressSchema = Joi.object().keys({
    street: Joi.string().max(200).required(),
    number: Joi.string().max(15).required(),
    additionalInformation: Joi.string().max(250),
    county: Joi.string().max(150).required(),
    city: Joi.string().max(150).required(),
    state: Joi.string().max(2).required(),
    zipcode: Joi.string().max(10).required(),
    reference: Joi.string().max(250),
});