import Document, {Html, Head, Main, NextScript} from 'next/document';
import {COMMON_INFO} from '../const';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='format-detection' content='telephone=no' />

          <meta property='og:site_name' content={COMMON_INFO.TITLE} />
          <meta property='og:title' content={COMMON_INFO.TITLE} />
          <meta property='og:description' content={COMMON_INFO.DESCRIPTION} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={COMMON_INFO.URL} />
          <meta property='og:image' content={COMMON_INFO.ICON_URL} />
          <meta name='twitter:card' content='summary' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
