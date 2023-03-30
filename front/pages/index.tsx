import {Heading, Flex} from "@chakra-ui/react"
import Formulario from "@/components/formulario"
import Head from "next/head"


const Home = () => {
  
  return (
    <>
    <Head>
      <title>Full Stack</title>
    </Head>
    <Flex height={"100vh"} alignItems= "center" justifyContent={"center"}>
      <Flex direction={"column"}  height={"50%"} width={"30%"}>
        <Heading mb={4} textAlign="center"> Login</Heading>
        <Formulario/>
      </Flex>
    </Flex>
    </>
  )
}


export default Home