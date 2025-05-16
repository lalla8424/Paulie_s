import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Paulie's Pizza - New York Style Pizza",
  description: "Paulie's Pizza는 뉴욕 스타일의 정통 브릭 오븐 피자를 제공하는 최고의 피자 레스토랑입니다. 신선한 재료와 전통 레시피로 만든 다양한 피자를 경험해보세요.",
  openGraph: {
    title: "Paulie's Pizza - New York Style Pizza",
    description: "Paulie's Pizza는 뉴욕 스타일의 정통 브릭 오븐 피자를 제공하는 최고의 피자 레스토랑입니다. 신선한 재료와 전통 레시피로 만든 다양한 피자를 경험해보세요.",
    url: "https://paulieskorea.vercel.app",
    siteName: "Paulie's Pizza",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Paulie's Pizza Logo",
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
          backgroundImage: "url('/bg_2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          minHeight: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Analytics mode="production" />
        </ThemeProvider>
      </body>
    </html>
  )
}
