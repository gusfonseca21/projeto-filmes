import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container/Container";

import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
