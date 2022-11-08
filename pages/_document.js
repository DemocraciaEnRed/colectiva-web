import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
  NODE_ENV,
  REALM,
  AUTH_SERVER_URL,
  SSL_REQUIRED,
  RESOURCE,
  PUBLIC_CLIENT,
  CONFIDENTIAL_PORT
} } = getConfig()

injectGlobal`
  @font-face {
    font-family: Okta-Neue-Black;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Black.otf');
  }

  @font-face {
    font-family: Okta-Neue-BlackItalic;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-BlackItalic.otf');
  }

  @font-face {
    font-family: Okta-Neue-Bold;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Bold.otf');
  }

  @font-face {
    font-family: Okta-Neue-BoldItalic;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-BoldItalic.otf');
  }

  @font-face {
    font-family: Okta-Neue-Italic;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Italic.otf');
  }

  @font-face {
    font-family: Okta-Neue-Medium;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Medium.otf');
  }

  @font-face {
    font-family: Okta-Neue-MediumItalic;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-MediumItalic.otf');
  }

  @font-face {
    font-family: Okta-Neue-Regular;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Regular.otf');
  }

  @font-face {
    font-family: Okta-Neue-Light;
    src: url('/static/fonts/Okta-Neue/Okta-Neue-Light.otf')
  }

  @font-face {
    font-family: Courier-Regular;
    src: url('/static/fonts/Courier/Courier-Regular.ttf')
  }

  @font-face {
    font-family: Courier-Bold;
    src: url('/static/fonts/Courier/Courier-Bold.ttf')
  }  

  :root {
    /* Colors */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #B8B8B8;
    --primary-color: #5182A0;
    --secondary-color: #A5CEE7;
    --highlight: #ED8862;
    --warning: #E86062;

    /* Fonts */
    --regular: 'Okta-Neue-Regular';
    --alter-regular: 'Courier-Regular';
    --black: 'Okta-Neue-Black';
    --black-italic: 'Okta-Neue-BlackItalic';
    --bold: 'Okta-Neue-Bold';
    --alter-bold: 'Courier-Bold';
    --bold-italic: 'Okta-Neue-BoldItalic';
    --italic: 'Okta-Neue-Italic';
    --medium: 'Okta-Neue-Medium';
    --medium-italic: 'Okta-Neue-MediumItalic';
    --light: Okta-Neue-Light
    --light-Italic: Okta-Neue-LightItalic

    /*background sizes */
    --lined: calc(width/22);

    font-size: 10px;
    @media (max-width: 760px) {
    font-size: 7px;
  }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--regular), 'Okta-Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--black);
  }
  
  body {
    margin:0;
    padding:0;
    width: 100%;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--regular), 'Okta-Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
)
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          <title>Portal de Colectiva - H. Cámara de Diputados de la Nación</title>
          <meta name='viewport' content='width=device-width, minimum-scale=1 ,initial-scale=1' />
          <meta charSet='utf-8' />
          {this.props.styleTags}
          {
            NODE_ENV === 'production' &&
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-109170776-3' />
          }
          {
            NODE_ENV === 'production' &&
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-109170776-3');` }} />
          }
          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon.ico' /> 
          <link rel='stylesheet' href='/static/assets/video-js.min.css' /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
