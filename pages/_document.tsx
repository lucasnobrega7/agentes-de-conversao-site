import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Preconnect to improve font loading performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f0f0f" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agentes de Conversão - Inteligência Artificial" />
        <meta property="og:description" content="Desenvolva sistemas de IA personalizados com a plataforma Agentes de Conversão." />
        <meta property="og:url" content="https://agentesdeconversao.com.br" />
        <meta property="og:image" content="https://agentesdeconversao.com.br/images/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agentes de Conversão - Inteligência Artificial" />
        <meta name="twitter:description" content="Desenvolva sistemas de IA personalizados com a plataforma Agentes de Conversão." />
        <meta name="twitter:image" content="https://agentesdeconversao.com.br/images/twitter-image.png" />

        {/* Note: Söhne font is loaded via CSS */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}