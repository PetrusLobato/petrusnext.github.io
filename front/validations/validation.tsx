import * as yup from 'yup';

export const formRegister = yup.object().shape({
    email: yup.string().required("E-mail obrigatorio").email("Deve ser um e-mail valido"),
    password: yup.string().required("Password obrigatorio"),
    name: yup.string().required("Nome obrigatorio"),
    telephone: yup.string().required("Telefone obrigatorio"),
})

export const formLogin = yup.object().shape({
    email: yup.string().required("E-mail obrigatorio").email("Deve ser um e-mail valido"),
    password: yup.string().required("Password obrigatorio")
})

