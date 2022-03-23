import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
