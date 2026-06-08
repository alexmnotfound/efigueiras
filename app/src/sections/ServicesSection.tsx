import { Trophy, Briefcase, Check, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';
import { motion } from 'motion/react';

const services = [
  {
    image: '/images/service-sports.jpg',
    icon: Trophy,
    title: 'Coaching para Deportistas',
    subtitle: 'RENDIMIENTO BAJO PRESIÓN &middot; MENTALIDAD DE CAMPEÓN',
    description:
      'Procesos de coaching ontológico orientados a deportistas de alto rendimiento que buscan superar bloqueos mentales, gestiónar la presión competitiva y desarrollar una mentalidad sólida y flexible.',
    features: [
      'Gestión de emociones pre-competitivas',
      'Superación de bloqueos y miedos',
      'Construcción de liderazgo en equipo',
      'Comunicación efectiva con cuerpo técnico',
      'Redefinicion de la relación con el rendimiento',
    ],
  },
  {
    image: '/images/service-pro.jpg',
    icon: Briefcase,
    title: 'Coaching para Profesionales',
    subtitle: 'LIDERAZGO &middot; COMUNICACIÓN &middot; GESTIÓN DEL CAMBIO',
    description:
      'Acompañamiento para líderes, ejecutivos y equipos que quieren transformar su impacto profesional desarrollando nuevas competencias en lenguaje, emociones y presencia corporal.',
    features: [
      'Desarrollo del liderazgo ontológico',
      'Gestión de conversaciones difíciles',
      'Construcción de equipos de alto rendimiento',
      'Manejo del estrés y la incertidumbre',
      'Diseño de proyectos y acciónes efectivas',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-coach-bg-light py-[72px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal centered className="text-center mb-16">
          <SectionLabel text="SERVICIOS" centered />
          <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-coach-primary mb-4">
            Acompañamiento diseñado para tu contexto
          </h2>
          <p className="text-lg leading-[1.7] text-coach-text-muted max-w-[560px] mx-auto">
            Procesos personalizados que se adaptan a tus objetivos, ya seas
            deportista o profesional.
          </p>
        </ScrollReveal>

        {/* Service Cards */}
        <ScrollReveal
          staggerChildren={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1000px] mx-auto"
        >
          {services.map((service) => (
            <ScrollRevealItem key={service.title}>
              <motion.div
                initial={{ scale: 0.98 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-250 hover:-translate-y-1.5 hover:shadow-elevated h-full flex flex-col"
              >
                {/* Header Image */}
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-coach-primary/10 flex items-center justify-center mb-5">
                    <service.icon
                      size={32}
                      className="text-coach-primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[28px] font-semibold text-coach-primary mb-2">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="text-sm text-coach-text-light uppercase tracking-[0.08em] mb-4"
                    dangerouslySetInnerHTML={{ __html: service.subtitle }}
                  />

                  {/* Description */}
                  <p className="text-base leading-[1.65] text-coach-text-muted mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.08 * i,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={16}
                          className="text-coach-primary shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm text-coach-text-muted">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href="https://wa.me/5491162922618?text=Hola%20Estefi%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20de%20descubrimiento%20%3A%29" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-coach-primary text-[15px] font-medium group relative"
                    >
                      Quiero saber más
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                      <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-coach-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
