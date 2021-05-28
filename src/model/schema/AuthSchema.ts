import { Joi } from 'celebrate';

export const authSchema =  Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
})