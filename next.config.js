const withMDX = require("@next/mdx")({});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
	pageExtensions: ["tsx", "mdx"],
	reactStrictMode: true,
	swcMinify: true,
});

module.exports = nextConfig;
