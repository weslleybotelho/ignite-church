/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-ignite',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|nl)/about',
        destination: '/:locale/about-ignite',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
