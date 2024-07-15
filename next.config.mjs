/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'www.ashesi.edu.gh',
          port: '',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
