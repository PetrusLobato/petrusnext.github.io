import api from "@/services/api"
import { IUserLogin, IProviderProps, IUserRegister } from "@/types"
import { Box, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { setCookie } from "nookies"
import { createContext, useContext} from "react"

interface IProviderData {
    login: (data: IUserLogin) => void
    registerUser:(data: IUserRegister) => void
}

const globalContext = createContext<IProviderData>({} as IProviderData)

export const AuthProvider = ({children}: IProviderProps) => {
  
    const router = useRouter()
    const toast = useToast()
  
    const login = (data: IUserLogin) => {
        api.post("/api/login", data)
        .then((response) => {
            setCookie(null, 'key.token', response.data.token, { maxAge: 60 * 30, path: '/'})
            setCookie(null, 'name.user', response.data.name, { maxAge: 60 * 30, path: '/'})
           
            toast({
                title: 'sucess',
                variant: 'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'green.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Login realizado com sucesso !
                    </Box>
                  ),
            })
           
            router.push("/dashboard")
        })
        .catch((err) => {
            toast({
                title: 'error',
                variant:'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'red.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Erro ao logar, verifique se o e-mail e senha estão corretos
                    </Box>
                  ),
            })
        })

    }

    const registerUser = (data: IUserRegister) => {
        api.post("/api/register", data)
        .then((response) => { response.data,

            toast({
                title: 'sucess',
                variant: 'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'green.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Cadastro realizado com sucesso!
                    </Box>
                  ),
            })
           
            router.push("/")
        })
        .catch((err) => {
            toast({
                title: 'error',
                variant:'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'red.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Erro ao cadastrar, verifique se todos os campos foram preenchidos corretamente
                    </Box>
                  ),
            })
        })
    }

    return (
        <globalContext.Provider value={{login, registerUser}}>
            {children}
        </globalContext.Provider>
    )
}

export const useAuth = () => useContext(globalContext)