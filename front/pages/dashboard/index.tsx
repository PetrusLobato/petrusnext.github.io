import { IName } from "@/types"
import { GetServerSideProps } from "next"
import nookies from "nookies"
import Head from "next/head"
import { Button, Stack} from "@chakra-ui/react"
import { destroyCookie } from 'nookies';
import { useRouter } from "next/router"

const Dashboard = ({name}: IName) => {

    const router = useRouter()

    const logout = () =>{
        destroyCookie(null, 'key.token')
        destroyCookie(null, 'name.user')
        router.push('/')
    }

    return(
        <>
            <Head>
            <title>Full Stack</title>
            </Head>
            <Stack direction={"row-reverse"} alignItems="center" mt={5}>
                <Button variant={"sucess"} borderRadius="30%"  onClick={() => logout()}>Sair</Button>
                <h1>{name}</h1>
            </Stack>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const cookies = nookies.get(ctx)

    if(!cookies['key.token']){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {name: cookies['name.user']}
    }
}

export default Dashboard