import '@/styles/globals.scss'
import '@/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { UserProvider } from '@/context/UserContext';

export default function App({ Component, pageProps }: AppProps) {
 
  return <>
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
    </>
}
