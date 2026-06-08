import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Historias', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="bg-coach-primary-dark">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        {/* Top band - Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Estefania Figueiras</h3>
            <p className="text-sm text-white/60 mb-4">
              Coaching Ontológico para deportistas y profesionales
            </p>
            <p className="text-sm text-white/40">
              Transformá tu manera de ser para transformar tus resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Menú
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-coach-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={16} className="text-coach-primary shrink-0" />
                <span className="text-[15px]">+54 9 11 6292-2618</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={16} className="text-coach-primary shrink-0" />
                <span className="text-[15px]">hola@estefaniafigueiras.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin size={16} className="text-coach-primary shrink-0" />
                <span className="text-[15px]">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom band - Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[13px] text-white/40">
            &copy; 2026 Estefania Figueiras. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
