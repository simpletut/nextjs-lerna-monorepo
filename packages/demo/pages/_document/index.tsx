import Document, { Head, Html, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import React from 'react';

type TDocument = DocumentInitialProps;

class MyDocument extends Document<TDocument> {
  static async getInitialProps(ctx: DocumentContext): Promise<TDocument> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
