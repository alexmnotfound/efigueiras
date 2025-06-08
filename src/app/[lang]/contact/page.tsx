import Image from 'next/image';

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const isEs = lang === 'es';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-8 pb-12">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary text-center mb-12">
          {isEs ? '¡Hablemos!' : "Let's talk!"}
        </h1>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center mb-8">
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6">
              {isEs ? '¿Arrancamos?' : 'Ready to get started?'}
            </h2>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2VFL8SqTFObYzrUGJYn7HD-SA24HPDmyE_XqMLw12fmKDQWiKmjCzgT2-qUoxahDGSAz6IP_vo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-xl font-bold rounded-full px-12 py-4 mb-2 underline hover:bg-primary-dark transition-all shadow-md"
            >
              {isEs ? 'Agendá' : 'Book'}
            </a>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6">
              {isEs ? '¿Te quedó alguna duda?' : 'Any questions left?'}
            </h2>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B541162922618&text=Hola+Tefi%2C+quiero+hacerte+una+pregunta%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-xl font-bold rounded-full px-12 py-4 mb-2 underline hover:bg-primary-dark transition-all shadow-md"
            >
              {isEs ? 'Preguntame' : 'Ask me'}
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-center text-sm mt-4 max-w-lg">
          {isEs
            ? 'El Macro Acuerdo es sin costo, es una instancia para conocernos y alinearnos.'
            : 'The Macro Agreement is free of charge, it is a space to get to know each other and align.'}
        </p>
      </div>
    </div>
  );
} 