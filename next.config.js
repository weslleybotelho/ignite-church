/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-ignite',
        permanent: true, // triggers 308
      },
      {
        source: '/school',
        destination: '/ignite-school-of-ministry',
        permanent: true, // triggers 308
      },
    ];
  },
};

module.exports = nextConfig;
