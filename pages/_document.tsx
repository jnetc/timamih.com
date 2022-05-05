import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { setInitialTheme, extraCSS } from '@Helpers/critical';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <style dangerouslySetInnerHTML={{ __html: extraCSS }} />
        </Head>
        <body id="home">
          <Main />
          <div id="portal-details" />
          <div id="portal-contacts" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
