/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PersonalWebsite',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
