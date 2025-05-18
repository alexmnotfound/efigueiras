import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import LanguageSelector from '@/components/LanguageSelector'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Estefanía Figueiras - Coach Ontológica',
  description: 'Coach Ontológica profesional ayudando a personas a alcanzar su máximo potencial',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params;
  const safeLang = ['es', 'en'].includes(lang) ? lang : 'es';

  return (
    <html lang={safeLang}>
      <body className={`${inter.variable} font-sans`}>
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={`/${safeLang}`} className="flex items-center">
                    <Image src="/image.png" alt="Estefanía Figueiras Logo" height={40} width={160} className="h-10 w-auto" priority />
                  </Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="hidden sm:flex sm:space-x-8">
                    <Link href={`/${safeLang}#about`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                      {safeLang === 'es' ? 'Sobre Mí' : 'About Me'}
                    </Link>
                    <Link href={`/${safeLang}#coaching`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                      {safeLang === 'es' ? 'Sobre Coaching' : 'About Coaching'}
                    </Link>
                    <Link href={`/${safeLang}#proposal`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                      {safeLang === 'es' ? 'Mi Propuesta' : 'My Proposal'}
                    </Link>
                    <Link href={`/${safeLang}#contact`} className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                      {safeLang === 'es' ? 'Contacto' : 'Contact'}
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <LanguageSelector lang={safeLang} />
                </div>
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