/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        ENV: process.env.ENV,
        BASE_URL_PROD: process.env.BASE_URL_PROD,
        BASE_URL_DEV: process.env.BASE_URL_DEV
    }

}

module.exports = nextConfig
