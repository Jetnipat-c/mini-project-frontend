import "../styles/globals.css";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>FINANACE | MANAGEMENT</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
