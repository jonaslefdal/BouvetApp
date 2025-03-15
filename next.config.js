/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: false,
	skipWaiting: true,
  });
  
  module.exports = withPWA({
	reactStrictMode: true,
	output: "export",
	images: {
	  unoptimized: true, // Fixes Next.js image issues in static export
	},
	basePath: "/BouvetApp", 
	assetPrefix: "/BouvetApp/", 
  });
  