import { ReactNode } from "react"

export interface IUserRegister {
    id?: number,
    name: string,
    email: string,
    telephone: string,
    password: string,
    data?: Date
}


export interface IUserLogin {
    email: string,
    password: string
}

export interface IProviderProps {
    children: ReactNode
}

export interface IName {
    name: string
}