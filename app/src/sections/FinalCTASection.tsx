import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'motion/react';

export function FinalCTASection() {
  return (
    <section
      id="contacto"
      className="relative py-20 md:py-[120px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1e3a6a 0%, #29497f 100%)',
      }}
    >
      {/* Decorative Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[30%] left-0 right-0 h-px bg-white/[0.08]" />
        <div className="absolute top-[50%] left-0 right-0 h-px bg-white/[0.08]" />
        <div className="absolute top-[70%] left-0 right-0 h-px bg-white/[0.08]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[640px] mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-[48px] font-semibold leading-[1.12] tracking-[-0.015em] text-white mb-5">
          ¿Transformamos tu manera de ser?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg leading-[1.7] text-white/80 mb-10">
            Agenda una sesión de descubrimiento gratuita. Sin compromiso, sin
            obligaciones. Solo una conversacion honesta sobre donde estas y hacia
            donde quieres ir.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="mailto:hola@coachontológico.es"
            className="inline-flex items-center gap-2 bg-coach-primary text-white text-base font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-coach-primary-dark hover:scale-[1.04] hover:shadow-[0_12px_32px_rgba(41,73,127,0.35)]"
          >
            Agendar sesión gratuita
            <ArrowRight size={18} />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p className="text-sm text-white/50 mt-5">
            Primera sesión gratuita &middot; 100% confidencial &middot; Sin
            compromiso
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
