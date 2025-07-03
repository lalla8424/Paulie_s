/**
 * @file layout.tsx
 * @description App root layout with global page transition (fade in/out) using framer-motion AnimatePresence.
 *
 * - 페이지 전환 시 부드러운 페이드 애니메이션 적용
 * - 경로 변경 감지를 위해 usePathname 사용
 * - 유지보수성을 위해 구조와 의도를 명확히 주석으로 남김
 */

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageTransitionWrapper from "@/components/PageTransitionWrapper"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Paulie's Pizza - New York Style Pizza",
  description: "국내 최고의 정통 뉴욕 스타일 프리미엄 피자, Paulie's.",
  openGraph: {
    title: "Paulie's Pizza - New York Style Pizza",
    description: "국내 최고의 정통 뉴욕 스타일 프리미엄 피자, Paulie's.",
    url: "https://paulieskorea.vercel.app",
    siteName: "Paulie's Pizza",
    images: [
      {
        url: "/location2.jpg",
        width: 1200,
        height: 630,
        alt: "국내 최고의 정통 뉴욕 스타일 프리미엄 피자, Paulie's.",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap" />
        <style>
          {`
            * {
              border: 0 !important;
            }
            .font-raleway {
              font-family: 'Raleway', sans-serif;
              font-weight: 900;
            }
          `}
        </style>
      </head>
      <body 
        className={`${inter.variable} font-sans min-h-screen`}
        style={{ 
          background: `
            radial-gradient(circle at 23% 17%, rgba(118, 96, 78, 0.18) 0.4px, transparent 0.4px),
            radial-gradient(circle at 71% 83%, rgba(139, 113, 92, 0.15) 0.6px, transparent 0.6px),
            radial-gradient(circle at 37% 91%, rgba(160, 134, 108, 0.12) 0.3px, transparent 0.3px),
            radial-gradient(circle at 89% 34%, rgba(142, 118, 96, 0.16) 0.5px, transparent 0.5px),
            radial-gradient(circle at 12% 58%, rgba(125, 102, 82, 0.14) 0.7px, transparent 0.7px),
            radial-gradient(circle at 64% 29%, rgba(135, 110, 88, 0.11) 0.8px, transparent 0.8px),
            radial-gradient(circle at 48% 72%, rgba(148, 124, 98, 0.13) 0.4px, transparent 0.4px),
            radial-gradient(circle at 82% 61%, rgba(128, 105, 85, 0.17) 0.3px, transparent 0.3px),
            radial-gradient(circle at 6% 44%, rgba(138, 115, 93, 0.09) 0.5px, transparent 0.5px),
            radial-gradient(circle at 91% 8%, rgba(132, 108, 87, 0.15) 0.6px, transparent 0.6px),
            radial-gradient(circle at 26% 95%, rgba(145, 121, 96, 0.12) 0.4px, transparent 0.4px),
            radial-gradient(circle at 58% 16%, rgba(151, 127, 101, 0.10) 0.7px, transparent 0.7px),
            radial-gradient(circle at 73% 47%, rgba(129, 106, 86, 0.14) 0.3px, transparent 0.3px),
            radial-gradient(circle at 41% 63%, rgba(144, 120, 95, 0.11) 0.5px, transparent 0.5px),
            radial-gradient(circle at 97% 81%, rgba(123, 100, 80, 0.13) 0.4px, transparent 0.4px),
            radial-gradient(circle at 19% 26%, rgba(147, 123, 98, 0.08) 0.6px, transparent 0.6px),
            radial-gradient(ellipse at 30% 70%, rgba(139, 113, 92, 0.03) 60%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(160, 134, 108, 0.025) 40%, transparent 40%),
            linear-gradient(180deg, 
              #f5f1eb 0%, 
              #ede5d8 25%, 
              #e8dcc8 50%, 
              #e3d4bb 75%, 
              #dfc9a8 100%
            )
          `,
          backgroundSize: `
            17px 19px,
            23px 21px,
            11px 13px,
            19px 17px,
            29px 31px,
            33px 29px,
            13px 15px,
            7px 9px,
            21px 23px,
            15px 17px,
            25px 27px,
            31px 33px,
            9px 11px,
            27px 25px,
            35px 37px,
            19px 21px,
            100% 180px,
            100% 220px,
            100% 100%
          `,
          backgroundPosition: `
            2px 7px,
            13px 19px,
            27px 5px,
            8px 31px,
            21px 14px,
            35px 28px,
            6px 23px,
            29px 11px,
            17px 37px,
            31px 2px,
            9px 26px,
            24px 18px,
            38px 9px,
            14px 35px,
            3px 21px,
            26px 33px,
            0 0,
            0 100%,
            0 0
          `,
          backgroundRepeat: "repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, repeat, no-repeat, no-repeat, no-repeat",
          minHeight: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <Header />
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <Footer />
            <Analytics mode="production" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
