export default {
  github: 'https://github.com/shaan-alam',
  docsRepositoryBase: 'https://github.com/shaan-alam/shaan-docs',
  titleSuffix: ' 👨‍💻',
  logo: (
    <>
      <span className="mr-2 font-extrabold logo dark">
        <img src="/logo-dark.svg" className="logo-img" />
        <img src="/logo-dark-small.svg" className="logo-img small" />
      </span>
      <span className="mr-2 font-extrabold logo light">
        <img src="/logo-light.svg" className="logo-img" />
        <img src="/logo-light-small.svg" className="logo-img small" />
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Shaan's Personal Documentation site" />
      <meta
        name="og:description"
        content="Shaan's Personal Documentation site"
      />
      <meta
        name="twitter:card"
        content="This is Shaan Alam's personal Documentation site that he made for managing his notes related to Web Dev and Programming in general"
      />
      <meta
        name="twitter:image"
        content="https://photos.smugmug.com/Wallpapers/i-qKBhDbD/0/b9267d3b/X2/HDRshooter-super-ultra-wide-wallpaper-030-X2.jpg"
      />
      <meta name="twitter:site:domain" content="shaan-docs.vercel.app" />
      <meta name="twitter:url" content="https://shaan-docs.vercel.app" />
      <meta name="og:title" content="Shaan Alam Docs 👨‍💻" />
      <meta name="og:image" content="https://shaan-docs.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Shaan Alam Docs" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://shaanalam.vercel.app/" target="_blank">
        Shaan Alam.
      </a>
    </>
  ),
  unstable_faviconGlyph: '👋',
}
