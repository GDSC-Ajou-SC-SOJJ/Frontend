import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pockie</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
