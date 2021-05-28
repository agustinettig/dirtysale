import { Joi } from "celebrate";

export const phoneSchema = Joi.object().keys({
    type: Joi.number().max(6).required(),    
    ddd: Joi.number().required(),
    number: Joi.number().required(),
    extension: Joi.string().max(10)
});