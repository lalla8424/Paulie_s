/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 페이지 전환 성능 최적화
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  reactStrictMode: false,
  experimental: {
    scrollRestoration: false, // 스크롤 복원 비활성화로 깜빡거림 방지
  },
  // CSS 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
