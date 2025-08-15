import type React from "react"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["500", "600", "700"],
})

export const metadata = {
  title: "Second Veterinarian | Expert Veterinary Second Opinions",
  description:
    "Connect with elite, board-certified veterinary specialists in Canada for premium tele-advice consultations. Get clarity for your pet's serious diagnosis.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} antialiased scroll-smooth`}>
      <body className="bg-brand-offwhite font-sans text-brand-charcoal antialiased">{children}</body>
    </html>
  )
}
