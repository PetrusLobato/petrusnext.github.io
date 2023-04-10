import { IName } from "@/types";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import Head from "next/head";
import { Button, Stack } from "@chakra-ui/react";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import { getSession, signOut } from "next-auth/react";

const Dashboard = ({ name }: IName) => {
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "key.token");
    destroyCookie(null, "name.user");
    signOut();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Full Stack</title>
      </Head>
      <Stack direction={"row-reverse"} alignItems="center" mt={5}>
        <Button variant={"sucess"} borderRadius="30%" onClick={() => logout()}>
          Sair
        </Button>
        <h1>{name}</h1>
      </Stack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = await getSession(ctx);

  if (!cookies["key.token"] && !session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      name: cookies["name.user"] || session?.user?.name
    },
  };
};

export default Dashboard;
