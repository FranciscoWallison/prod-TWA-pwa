// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <title>Meu PWA com Next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
