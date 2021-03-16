import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apolloClient";
import "../styles/globals.css";

import "../assets/css/bootstrap.min.css"
import "../assets/css/fontawsom-all.min.css"
// import "../assets/css/fontawesome.min.css"

import "../assets/css/style.css"

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
