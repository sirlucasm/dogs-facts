import '../styles/fonts.css';
import type { AppProps } from 'next/app'
import { GlobaStyle } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobaStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
