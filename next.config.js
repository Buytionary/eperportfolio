const redirects = async () => [
  {
    source: "/chrome",
    destination:
      "https://chrome.google.com/webstore/detail/notion-boost/eciepnnimnjaojlkcpdpcgbfkpcagahd",
    permanent: true,
  },
];

const headers = async () => [
  {
    source: "/fonts/inter-var-latin.woff2",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ],
  },
];

module.exports = {
  future: {
    strictPostcssConfiguration: true,
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  webpack: (config, { dev, isServer }, options) => {
    return config;
  },
  redirects,
  headers,
};
