import { Joi } from "celebrate";

export const cardSchema = Joi.object().keys({
    bin: Joi.string().max(6).required(),
    end: Joi.string().max(4).required(),
    ownerName: Joi.string().max(150).required()
});