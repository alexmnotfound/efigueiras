"use client"
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function MobileNav({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: `/${lang}#about`, label: lang === 'es' ? 'Sobre Mí' : 'About Me' },
    { href: `/${lang}#coaching`, label: lang === 'es' ? 'Sobre Coaching' : 'About Coaching' },
    { href: `/${lang}#proposal`, label: lang === 'es' ? 'Mi Propuesta' : 'My Proposal' },
    { href: `/${lang}/contact`, label: lang === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <div className="sm:hidden relative">
      <button
        aria-label="Open menu"
        className="p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 border-b last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
} 