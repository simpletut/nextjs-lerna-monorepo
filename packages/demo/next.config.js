/* eslint @typescript-eslint/no-var-requires: "off" */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['shared']);

const distDir = '.next';
const basePath = '';

const nextConfig = {
  distDir,
  basePath,
  images: {
    domains: [],
  },
  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    config.plugins.push(new webpack.IgnorePlugin(/spec\.tsx$/));

    return config;
  }
};

module.exports = withPlugins([withTM], nextConfig);
