import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
} 
from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react"
import { formLogin } from "@/validations/validation"
import { IUserLogin } from "@/types"
import Register from "./register"
import { useAuth } from "@/contexts/globalContexts"



const Formulario= () => {

    const {login} = useAuth()
    
   
    const [yupEmail, setYupEmail] = useState("")
    const [yupPassword, setYupPassword] = useState("")
    const [viewPassword, setViewPassword] = useState(false)

    const errorEmail = yupEmail === ""
    const errorPassword = yupPassword === ""

    const { register, handleSubmit, formState: {errors}} = useForm<IUserLogin>({resolver: yupResolver(formLogin)})

    const formSubmit = (data: IUserLogin) => {
        login(data)
        
    }

    return (
        <>  
        
            <FormControl isRequired isInvalid={errorEmail}>
                <FormLabel>E-mail</FormLabel>
                <Input required type="email" {...register("email")} onChange={(e) => setYupEmail(e.target.value)}/>
                {!errorEmail ? (<FormErrorMessage>{errors.email?.message}</FormErrorMessage>) : (<FormHelperText>Digite seu e-mail</FormHelperText>) }

            </FormControl>

            <FormControl isRequired isInvalid={errorPassword}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input required type={viewPassword ? "text" : "password"} {...register("password")} onChange={(e) => setYupPassword(e.target.value)} />
                    <InputRightElement>
                            <Button variant={"trans"} onClick={() =>setViewPassword((viewPassword) => !viewPassword)}>
                                {viewPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                    </InputRightElement>
                </InputGroup>
                {!errorPassword ? (<FormErrorMessage>{errors.password?.message}</FormErrorMessage>) : (<FormHelperText>Digite sua senha</FormHelperText>)}
            </FormControl>

        
            <Register/>

            <Button variant={"default"} size="lg" onClick={handleSubmit(formSubmit)}>Entrar</Button>
            
           
        </>
    )
}

export default Formulario