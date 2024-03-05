/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: '402d SWEG DSO',
    description: 'The official store for 402d DSO Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://codemastergohan.github.io/',
    contactUrl: 'https://dso.sern.mil',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
//  basePath: '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
