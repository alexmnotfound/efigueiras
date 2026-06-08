import { MessageCircle, Heart, Activity } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';
import { motion } from 'motion/react';

const pillars = [
  {
    icon: MessageCircle,
    title: 'Lenguaje',
    description:
      'Las palabras crean mundos. Tu diálogo interno, las historias que te cuentas y las conversaciones que mantienes definen lo que es posible para ti.',
  },
  {
    icon: Heart,
    title: 'Emociones',
    description:
      'Tus estados de ánimo no son reacciónes automáticas. Son territorios que puedes aprender a habitar con intención. La inteligencia emocional es la base del liderazgo auténtico.',
  },
  {
    icon: Activity,
    title: 'Corporalidad',
    description:
      'Tu cuerpo almacena patrones de tension, posturas y gestos que refuerzan o limitan tu acción. Transformar tu presencia fisica es transformar tu impacto.',
  },
];

export function PhilosophySection() {
  return (
    <section id="filosofia" className="bg-coach-bg-grey py-[72px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[5%]">
          {/* Left Column - Text */}
          <ScrollReveal direction="left" className="lg:w-[45%]">
            <SectionLabel text="FILOSOFÍA" />
            <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-coach-primary mb-6">
              El cambio real ocurre cuando transformas tu manera de ser
            </h2>
            <p className="text-lg leading-[1.7] text-coach-text-muted mb-8">
              El coaching ontológico trabaja sobre tres dominios fundamentales
              que configuran como observas el mundo y como actuas en el. Cuando
              alineas estos tres ejes, los resultados naturalmente emergen.
            </p>
            <p className="text-base font-medium text-coach-primary">
              No se trata de hacer mas. Se trata de{' '}
              <span className="text-coach-primary">ser diferente</span> para
              hacer diferente.
            </p>
          </ScrollReveal>

          {/* Right Column - Feature Blocks */}
          <ScrollReveal
            direction="right"
            staggerChildren={0.15}
            className="lg:w-[50%] space-y-6"
          >
            {pillars.map((pillar) => (
              <ScrollRevealItem key={pillar.title}>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white border-t-[3px] border-coach-primary rounded-[10px] p-8 shadow-card"
                >
                  <pillar.icon
                    size={28}
                    className="text-coach-primary mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-[28px] font-semibold text-coach-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-[1.65] text-coach-text-muted">
                    {pillar.description}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
