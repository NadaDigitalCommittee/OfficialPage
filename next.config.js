const withMDX = require("@next/mdx")({});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
	pageExtensions: ["tsx", "mdx"],
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	}
});

module.exports = nextConfig;
