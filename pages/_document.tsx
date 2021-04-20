import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-modewhite text-bgx dark:bg-bgx dark:text-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;