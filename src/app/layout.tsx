import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel McGrath - Galactic Software Engineer",
  description: "Full-stack / backend software engineer with 5+ years across Java/JavaFX/Web apps, data platforms, and AWS. Known for improving concurrency, scaling messaging systems, and shipping internal tools that cut cycle time.",
  keywords: ["software engineer", "full-stack", "backend", "Java", "AWS", "performance", "galactic", "star wars", "space"],
  authors: [{ name: "Daniel McGrath" }],
  creator: "Daniel McGrath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielmcgrath.dev",
    title: "Daniel McGrath - Galactic Software Engineer",
    description: "Full-stack / backend software engineer with 5+ years across Java/JavaFX/Web apps, data platforms, and AWS.",
    siteName: "Daniel McGrath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel McGrath - Galactic Software Engineer",
    description: "Full-stack / backend software engineer with 5+ years across Java/JavaFX/Web apps, data platforms, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} star-wars-bg`}>
        <div className="relative min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
