import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const defaultEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Atleta en momento de contemplación"
          className="w-full h-full object-cover"
          style={{ transform: 'scaleX(-1)' }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(135deg, rgba(30, 30, 30, 0.65) 0%, rgba(50, 50, 50, 0.55) 50%, rgba(30, 30, 30, 0.62) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 pt-[120px] pb-20">
        <div className="max-w-[640px]">
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: defaultEasing }}
            className="inline-block text-[13px] font-semibold leading-[1.4] tracking-[0.12em] uppercase text-white/70 mb-6"
          >
            COACHING ONTOLÓGICO PROFESIONAL
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: defaultEasing }}
            className="text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.08] tracking-[-0.02em] text-white mb-6"
          >
            Transforma tu manera de{' '}
            <span className="text-coach-primary">ser</span> para transformar tus
            resultados
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: defaultEasing }}
            className="text-lg leading-[1.7] text-white/85 max-w-[520px] mb-9"
          >
            Acompaño procesos profundos de cambio en el mundo del deporte y la
            empresa, trabajando sobre el lenguaje, las emociones y la
            corporalidad para generar nuevas posibilidades de acción y liderazgo.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: defaultEasing }}
            className="flex flex-col sm:flex-row gap-4 mb-5"
          >
            <a
              href="https://wa.me/5491162922618?text=Hola%20Estefi%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20de%20descubrimiento%20%3A%29" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coach-primary text-white text-[15px] font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-coach-primary-dark hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(41,73,127,0.3)]"
            >
              Agendá tu sesión de descubrimiento
              <ArrowRight size={16} />
            </a>
            <a
              href="#filosofia"
              className="inline-flex items-center justify-center text-white text-[15px] font-medium px-7 py-3.5 rounded-full border-[1.5px] border-white/50 transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Conocer más
            </a>
          </motion.div>

          {/* Trust Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1, ease: defaultEasing }}
            className="text-sm text-white/60"
          >
            Primera sesión gratuita &middot; Sin compromiso
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4, ease: defaultEasing }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 12], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-white/40"
        />
        <div className="w-px h-6 bg-white/40 -mt-0.5" />
      </motion.div>
    </section>
  );
}
