import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Umami Tracking */}
        <script
          defer
          src="https://umami-nine-black.vercel.app/script.js"
          data-website-id="23a10cdd-8909-4000-9c03-85fc0cc73af0"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
