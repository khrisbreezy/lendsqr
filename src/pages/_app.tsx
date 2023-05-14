import React from 'react';
import '@/styles/globals.scss'
import '@/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import type { AppProps } from 'next/app'
import { UserProvider } from '@/context/UserContext';

export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        // Bootstrap JavaScript has been loaded
      })
      .catch((error) => {
        // Handle error if necessary
        console.error('Failed to load Bootstrap JavaScript', error);
      });
  }, []);
 
  return <>
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
    </>
}
