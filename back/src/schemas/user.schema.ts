import * as yup from "yup"
import { Schema} from "yup"
import { IUser, IUserResponse, Ilogin } from "../interface/global"
import { clienteSchemaResponse } from "./client.schema"



export const userSchema: Schema<IUser> = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
})

export const userSchemaResponse: Schema<IUserResponse> = yup.object().shape({
    id:yup.string().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
    createDateAtt: yup.date().required(),
    clientes: yup.array(clienteSchemaResponse).required()
})

export const loginSchema: Schema<Ilogin> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})