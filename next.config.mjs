// Use ES module import instead of require
import createNextIntlPlugin from "next-intl/plugin";

// Initialize the plugin
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

// Use ES module export instead of module.exports
export default withNextIntl(nextConfig);
