import { AuthProvider } from '@/contexts/globalContexts'
import GlobalTheme from '@/styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={GlobalTheme}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
  )
}
