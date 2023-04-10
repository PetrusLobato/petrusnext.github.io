import * as yup from "yup"
import { Schema} from "yup"
import { IClient, IClientResponse } from "../interface/global"


export const clienteSchema: Schema<IClient> = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
})

export const clienteSchemaResponse: Schema<IClientResponse> = yup.object().shape({
    id:yup.string().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.string().required(),
    email: yup.string().email().required(),
    createDateAtt: yup.date().required(),
})

export const listClient = yup.array(clienteSchemaResponse)