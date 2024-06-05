/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions:{
    additionalData:`
    @import "src/styles/mixins.scss";
    `

  }
};

export default nextConfig;
