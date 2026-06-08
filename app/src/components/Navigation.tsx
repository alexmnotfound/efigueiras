import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navigation() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-[12px] shadow-[0_2px_20px_rgba(41,73,127,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col">
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${
                scrolled ? 'text-coach-primary' : 'text-white'
              }`}
            >
              Coach Ontologico
            </span>
            <span
              className={`text-xs font-normal transition-colors duration-300 ${
                scrolled ? 'text-coach-text-light' : 'text-white/70'
              }`}
            >
              Transforma tu manera de ser
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-coach-accent ${
                  scrolled ? 'text-coach-primary' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center bg-coach-accent text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-coach-accent-hover hover:scale-[1.03]"
          >
            Agenda tu sesion
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-coach-primary' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-coach-primary-dark flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-2xl font-medium text-white hover:text-coach-accent transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contacto"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length, duration: 0.4 }}
                className="mt-4 bg-coach-accent text-white text-lg font-medium px-8 py-3 rounded-full"
              >
                Agenda tu sesion
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
