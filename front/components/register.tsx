import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalContent,
  Modal,
  useDisclosure,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserRegister } from "@/types";
import { useState } from "react";
import { formRegister } from "@/validations/validation";
import { useAuth } from "@/contexts/globalContexts";

const Register = () => {

  const {registerUser} = useAuth()

  const [yupEmail, setYupEmail] = useState("");
  const [yupPassword, setYupPassword] = useState("");
  const [yupName, setYupName] = useState("");
  const [yuptelephone, setYuptelephone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(formRegister) });

  const submitRegister = (data: IUserRegister) => {

    registerUser(data)

    setYupEmail("");
    setYupPassword("");
    setYupName("");
    setYuptelephone("");
  };

  return (
    <>
      <Button variant={"link"} m={5} onClick={onOpen}>
        Cadastra-se aqui
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent bg={"blue.200"}>
          <ModalHeader color={"black"} textAlign={"center"}>
            {" "}
            Preencha os formulários
          </ModalHeader>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Nome completo</FormLabel>
              <Input
                required
                type="text"
                {...register("name")}
                onChange={(e) => setYupName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input
                required
                type="email"
                {...register("email")}
                onChange={(e) => setYupEmail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telefone</FormLabel>
              <Input
                required
                type="text"
                {...register("telephone")}
                onChange={(e) => setYuptelephone(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                required
                type="password"
                {...register("password")}
                onChange={(e) => setYupPassword(e.target.value)}
              />
            </FormControl>

            <Button
              onClick={handleSubmit(submitRegister)}
              mt={5}
              ml={"25%"}
              w={"50%"}
              variant={"sucess"}
            >
              Enviar
            </Button>
            <Button
              onClick={onClose}
              ml={"25%"}
              mt={5}
              variant={"error"}
              w={"50%"}
            >
              Cancelar
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
