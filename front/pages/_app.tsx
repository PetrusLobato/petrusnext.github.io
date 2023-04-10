import { AuthProvider } from '@/contexts/globalContexts'
import GlobalTheme from '@/styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
  <ChakraProvider theme={GlobalTheme}>
    <SessionProvider session={session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  </ChakraProvider>
  )
}
