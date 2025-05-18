import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import LanguageSelector from '@/components/LanguageSelector'
import Image from 'next/image'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Estefanía Figueiras - Coach Ontológica',
  description: 'Coach Ontológica profesional ayudando a personas a alcanzar su máximo potencial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
