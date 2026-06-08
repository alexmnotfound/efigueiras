import { SectionLabel } from '@/components/SectionLabel';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-white py-[72px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[8%]">

          {/* Photo */}
          <ScrollReveal direction="left" className="lg:w-[40%] w-full flex justify-center">
            <div className="relative w-[280px] md:w-[340px] lg:w-full max-w-[400px]">
              <img
                src="/images/tefi_green_hd.png"
                alt="Estefanía Figueiras"
                className="w-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" className="lg:w-[55%]">
            <SectionLabel text="SOBRE MÍ" />
            <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-semibold leading-[1.2] tracking-[-0.01em] text-coach-primary mb-2">
              Un poco sobre mí
            </h2>
            <p className="text-coach-text-muted text-lg mb-8 italic">
              Entremos en confianza :)
            </p>

            <div className="space-y-5 text-base leading-[1.75] text-coach-text-muted">
              <p>
                Soy Licenciada en Marketing, Coach Ontológico (avalada por la{' '}
                <span className="font-medium text-coach-primary">International Coaching Federation</span>
                ) y tengo un Master en Coaching Deportivo y Organizacional (Unisports - España).
              </p>
              <p>
                Trabajé en empresas multinacionales, en startups y también freelancee proyectos.
              </p>
              <p>
                Me define y atraviesa el deporte: jugué de manera amateur y profesional al hockey.
                Actualmente soy intento de crossfitter.
              </p>
              <p>
                Me apasiona viajar, conocer nuevos lugares, vivir nuevas experiencias, comer cosas
                ricas y mi perra Mabel.
              </p>
              <p className="text-coach-primary font-medium text-[17px] leading-[1.7]">
                Mi propósito es generar un impacto positivo en las personas que acompaño. Ayudar a
                hacer, a mejorar, potenciar, transformar, alivianar, alegrar, a ser.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
