export interface IUser{
    name: string
    lastName: string
    contact: string
    email: string
    password: string
}

export interface IUserResponse{
    id: string
    name: string
    lastName: string
    contact: string
    email: string
    createDateAtt: Date
    clientes: IClient[] | undefined
}

export interface IClient{
    name: string
    lastName: string
    contact: string
    email: string
    
}

export interface IClientResponse{
    id: string
    name: string
    lastName: string
    contact: string
    email: string
    createDateAtt: Date
}

export interface Ilogin{
    email: string
    password: string
}

export interface ILoginResponse {
    token: string
}

