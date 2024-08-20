// src/app/_app.tsx
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;