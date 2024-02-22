/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	transpilePackages: ['three'],
}

export default nextConfig
