'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSelector({ lang }: { lang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
  }

  return (
    <select 
      className="border rounded-md px-3 py-1 text-sm"
      defaultValue={lang}
      onChange={handleLanguageChange}
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  )
} 