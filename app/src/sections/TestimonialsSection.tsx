import React from 'react';
import { motion } from 'motion/react';
import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
  {
    quote: 'Antes vivia atrapado en mi autocritica. Cada error en competicion me destrozaba durante dias. El coaching me dio herramientas para relacionarme diferente con la presion. Ahora compito con libertad.',
    name: 'Carlos Martinez',
    role: 'Tenista profesional',
    tag: 'Deportivo',
  },
  {
    quote: 'Liderar un equipo de 40 personas me generaba ansiedad constante. Aprendi que el problema no era mi equipo, era mi manera de observar el liderazgo. Mi relacion con el trabajo cambio por completo.',
    name: 'Ana Beltran',
    role: 'Directora de Operaciones',
    tag: 'Profesional',
  },
  {
    quote: 'Como entrenador, sabia mucho de tactica pero no gestionaba las emociones de mis jugadores ni las mias. Este proceso me transformo como lider y como persona.',
    name: 'Miguel Sanchez',
    role: 'Entrenador de futbol base',
    tag: 'Deportivo',
  },
  {
    quote: 'Encontre un espacio para cuestionarme cosas que siempre di por sentadas. Fue un proceso exigente y transformador a la vez.',
    name: 'Laura Gomez',
    role: 'Emprendedora',
    tag: 'Profesional',
  },
  {
    quote: 'Tenia miedo de las conversaciones dificiles con mi equipo. Hoy las enfrento con otra presencia y los resultados hablan solos.',
    name: 'Diego Peralta',
    role: 'Gerente Comercial',
    tag: 'Liderazgo',
  },
  {
    quote: 'Volvi a conectar con lo que realmente me mueve. Fue mas que coaching, fue un punto de inflexion en mi vida.',
    name: 'Valeria Torres',
    role: 'Atleta amateur',
    tag: 'Deportivo',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(0, 3);

function TestimonialCard({ quote, name, role, tag }: typeof testimonials[0]) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <div className="p-8 rounded-[10px] border border-gray-100 shadow-card max-w-xs w-full bg-white border-t-[3px] border-t-coach-accent">
      <p className="text-coach-primary/80 text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-5">
        <div className="h-10 w-10 rounded-full bg-coach-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-coach-primary">{initials}</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-coach-primary text-sm truncate">{name}</span>
          <span className="text-coach-text-light text-xs truncate">{role}</span>
        </div>
        <span className="ml-auto text-xs font-medium text-coach-primary bg-coach-primary/[0.06] px-2 py-0.5 rounded-full whitespace-nowrap">
          {tag}
        </span>
      </div>
    </div>
  );
}

function TestimonialsColumn({ testimonials: items, duration = 10, className }: {
  testimonials: typeof testimonials;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((i) => (
          <React.Fragment key={i}>
            {items.map((t) => (
              <TestimonialCard key={`${i}-${t.name}`} {...t} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-coach-bg-grey py-[72px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal centered className="text-center mb-16">
          <SectionLabel text="TESTIMONIOS" centered />
          <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-coach-primary">
            Historias de transformacion
          </h2>
        </ScrollReveal>
      </div>

      <div
        className="flex justify-center gap-6"
        style={{
          height: 480,
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
        <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
      </div>
    </section>
  );
}
