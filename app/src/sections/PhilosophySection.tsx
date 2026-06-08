import { useState } from 'react';
import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal } from '@/components/ScrollReveal';

const pillars = [
  {
    id: 1,
    title: 'Lenguaje',
    description:
      'Las palabras crean mundos. Tu diálogo interno, las historias que te cuentas y las conversaciones que mantienes definen lo que es posible para ti.',
    imageUrl:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Emociones',
    description:
      'Tus estados de ánimo no son reacciones automáticas. Son territorios que puedes aprender a habitar con intención. La inteligencia emocional es la base del liderazgo auténtico.',
    imageUrl:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Corporalidad',
    description:
      'Tu cuerpo almacena patrones de tensión, posturas y gestos que refuerzan o limitan tu acción. Transformar tu presencia física es transformar tu impacto.',
    imageUrl:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
  },
];

export function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="filosofia" className="bg-coach-bg-grey py-[72px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <ScrollReveal centered className="text-center mb-14">
          <SectionLabel text="FILOSOFÍA" centered />
          <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-coach-primary mb-5">
            El cambio real ocurre cuando transformas tu manera de ser
          </h2>
          <p className="text-lg leading-[1.7] text-coach-text-muted max-w-[600px] mx-auto mb-4">
            El coaching ontológico trabaja sobre tres dominios fundamentales que configuran cómo
            observas el mundo y cómo actúas en él.
          </p>
          <p className="text-base font-medium text-coach-primary">
            No se trata de hacer más. Se trata de <em>ser diferente</em> para hacer diferente.
          </p>
        </ScrollReveal>

        {/* Accordion — desktop */}
        <div className="hidden md:flex gap-3 h-[460px]">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={pillar.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                style={{
                  width: isActive ? '60%' : '20%',
                  transition: 'width 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Image */}
                <img
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-600"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(30,30,30,0.85) 0%, rgba(30,30,30,0.3) 60%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(30,30,30,0.75) 0%, rgba(30,30,30,0.55) 100%)',
                  }}
                />

                {/* Inactive: vertical title */}
                <span
                  className="absolute text-white text-base font-semibold whitespace-nowrap transition-all duration-300"
                  style={{
                    opacity: isActive ? 0 : 1,
                    bottom: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(50%) rotate(90deg)',
                    transformOrigin: 'center center',
                  }}
                >
                  {pillar.title}
                </span>

                {/* Active: content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 transition-all duration-500"
                  style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(12px)' }}
                >
                  <h3 className="text-white text-2xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback — stacked cards */}
        <div className="md:hidden space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative rounded-2xl overflow-hidden h-[220px]">
              <img src={pillar.imageUrl} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,30,30,0.88) 0%, rgba(30,30,30,0.4) 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
