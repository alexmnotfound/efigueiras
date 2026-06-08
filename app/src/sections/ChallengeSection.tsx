import { TrendingUp, Brain, Heart } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';

const challenges = [
  {
    icon: TrendingUp,
    title: 'Más esfuerzo, mismos resultados',
    description:
      'Entrenás más horas. Trabajás más duro. Pero los resultados no llegan. El esfuerzo desenfrenado sin un cambio en tu manera de ser produce agotamiento, no excelencia.',
  },
  {
    icon: Brain,
    title: 'Tu mente te sabotea',
    description:
      'En los momentos clave, aparecen los pensamientos limitantes. El miedo al fracaso, la autocrítica destructiva, la comparación constante. Tu lenguaje interno se convierte en tu mayor obstáculo.',
  },
  {
    icon: Heart,
    title: 'Las emociones te dominan',
    description:
      'La frustración, la ansiedad pre-competitiva, el bloqueo bajo presión. Cuando no integrás emociones y corporalidad, tu rendimiento se ve secuestrado por estados que no elegís.',
  },
];

export function ChallengeSection() {
  return (
    <section className="bg-coach-bg-light py-[72px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal centered className="text-center">
          <SectionLabel text="EL DESAFÍO" centered />
          <h2 className="text-3xl md:text-[48px] font-semibold leading-[1.12] tracking-[-0.015em] text-coach-primary max-w-[700px] mx-auto mb-16">
          ¿Intentás cambiar tus resultados solo desde la acción?
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {challenges.map((challenge) => (
            <ScrollRevealItem key={challenge.title}>
              <div className="bg-white border border-coach-border-light rounded-[10px] p-10 shadow-card text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-elevated h-full">
                <div className="w-12 h-12 rounded-full bg-coach-primary/5 flex items-center justify-center mx-auto mb-5">
                  <challenge.icon
                    size={24}
                    className="text-coach-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-coach-primary mb-3">
                  {challenge.title}
                </h3>
                <p className="text-base leading-[1.65] text-coach-text-muted">
                  {challenge.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
