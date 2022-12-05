import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Digital Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
