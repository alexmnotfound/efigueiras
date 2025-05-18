import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import LanguageSelector from '@/components/LanguageSelector'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Camila Palacios - Coach Ontológica',
  description: 'Coach Ontológica profesional ayudando a personas a alcanzar su máximo potencial',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body className={`${inter.variable} font-sans`}>
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={`/${lang}`} className="text-xl font-bold text-primary">Camila Palacios</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href={`/${lang}#about`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {lang === 'es' ? 'Sobre Mí' : 'About Me'}
                  </Link>
                  <Link href={`/${lang}#coaching`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {lang === 'es' ? 'Sobre Coaching' : 'About Coaching'}
                  </Link>
                  <Link href={`/${lang}#proposal`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {lang === 'es' ? 'Mi Propuesta' : 'My Proposal'}
                  </Link>
                  <Link href={`/${lang}#contact`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {lang === 'es' ? 'Contacto' : 'Contact'}
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <LanguageSelector lang={lang} />
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 