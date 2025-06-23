
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // This is a workaround for a bug in a transitive dependency (googleapis-common).
    // It prevents the build from failing when it tries to resolve a path to package.json.
    config.resolve.alias = {
      ...config.resolve.alias,
      '../../package.json': false,
    };
    return config;
  },
};

export default nextConfig;
