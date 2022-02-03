import { AppProvider } from "@shopify/polaris";
import App from "next/app";
import Head from "next/head";
import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import { Provider } from "@shopify/app-bridge-react";
import ClientRouter from "../components/ClientRouter";

class MyApp extends App {
    render() {
      const { Component, pageProps, host } = this.props;

      const config = { apiKey: API_KEY, host, forceRedirect: true };
      return (
        <React.Fragment>
          <Head>
              <title>Haya Fittness</title>
              <meta charSet="utf-8" />
          </Head>
          <Provider config={config}>
              <ClientRouter />
            <AppProvider i18n={translations}>
                <Component {...pageProps} />
            </AppProvider>
          </Provider>
          
        </React.Fragment>
      );
    }
  }

  MyApp.getInitialProps = async ({ ctx }) => {
    return {
      host: ctx.query.host,
      API_KEY: process.env.SHOPIFY_API_KEY
    };
  };

  export default MyApp