import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  webpack: (config) => {
    config.externals.push({
      'sharp': 'commonjs sharp',
      'canvas': 'commonjs canvas'
    });
    
    // Adicione esta configuração para resolver módulos .js
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    };
    
    return config;
  }
};

export default nextConfig;
