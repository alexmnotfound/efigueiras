import Link from 'next/link'
import Image from 'next/image'

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {lang === 'es' ? 'Estefanía Figueiras' : 'Estefanía Figueiras'}
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-8">
              {lang === 'es' ? 'Coach Ontológica' : 'Ontological Coach'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'es' 
                ? 'Acompaño a personas a definir y alcanzar sus objetivos personales y profesionales'
                : 'I accompany people to define and reach their personal and professional objectives'}
            </p>
            <Link 
              href={`/${lang}#contact`}
              className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {lang === 'es' ? 'Contactar' : 'Contact'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {lang === 'es' ? 'Sobre Mí' : 'About Me'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                {lang === 'es'
                  ? 'Soy Licenciada en Marketing, Coach Ontológico (avalada por la International Coaching Federation) y tengo un Master en Coaching Deportivo y Organizacional (Unisports - España).'
                  : 'I am a licensed Marketing graduate, Ontological Coach (certified by the International Coaching Federation) and have a Master in Sports and Organizational Coaching (Unisports - Spain).'}
              </p>
              <p className="text-lg mb-4">
                {lang === 'es'
                  ? 'Trabajé en empresas multinacionales, en startups y también freelancee proyectos. '
                  : 'I worked in multinational companies, startups and also freelance projects.'}
              </p>
              <p className="text-lg mb-4">
                {lang === 'es'
                  ? 'Me define y atraviesa el deporte, jugué de manera amateur y profesional al hockey. Actualmente soy intento de crossfitter.'
                  : 'It defines and permeates my life, I played hockey as an amateur and professional. Currently I am an attempt of crossfitter.'}
              </p>
              <p className="text-lg mb-4">
                {lang === 'es'
                  ? 'Me apasiona viajar, conocer nuevos lugares, vivir nuevas experiencias, comer cosas ricas y mi perra Mabel.'
                  : 'I am passionate about traveling, discovering new places, living new experiences, eating good food and my dog Mabel.'}
              </p>
              <p className="text-lg mb-4">
                {lang === 'es'
                  ? 'Mi propósito es generar un impacto positivo en las personas que acompaño. Ayudar a hacer, a mejorar, potenciar, transformar, alivianar, alegrar, a ser.'
                  : 'My purpose is to generate a positive impact on the people I accompany. Helping to do, to improve, to enhance, to transform, to alleviate, to cheer, to be.'}
              </p>
            </div>
            <div>
              <Image src="/tefi_green.png" alt="Estefanía Figueiras" width={300} height={300} className="mb-6 rounded-lg object-cover mx-auto" />
              <div className="bg-gray-100 p-8 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {lang === 'es' ? 'Mi Experiencia' : 'My Experience'}
                </h3>
                <ul className="space-y-2">
                  <li>• {lang === 'es' ? 'Coach Ontológica Certificada' : 'Certified Ontological Coach'}</li>
                  <li>• {lang === 'es' ? '5+ años de experiencia' : '5+ years of experience'}</li>
                  <li>• {lang === 'es' ? 'Especializada en desarrollo personal' : 'Specialized in personal development'}</li>
                  <li>• {lang === 'es' ? 'Sesiones individuales y grupales' : 'Individual and group sessions'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section id="coaching" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {lang === 'es' ? 'Sobre Coaching' : 'About Coaching'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {lang === 'es' ? '¿Qué es el Coaching Ontológico?' : 'What is Ontological Coaching?'}
              </h3>
              <p>
                {lang === 'es'
                  ? 'El coaching ontológico es una disciplina que facilita el aprendizaje transformacional, permitiendo a las personas observar y modificar su forma de ser y estar en el mundo.'
                  : 'Ontological coaching is a discipline that facilitates transformational learning, allowing people to observe and modify their way of being and being in the world.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {lang === 'es' ? 'Beneficios' : 'Benefits'}
              </h3>
              <ul className="space-y-2">
                <li>• {lang === 'es' ? 'Tiene un inicio y un fin (cuando se cumple el objetivo).' : 'Has a beginning and an end (when the goal is achieved).'}</li>
                <li>• {lang === 'es' ? 'Está enfocado en generar acción.' : 'It is focused on generating action.'}</li>
                <li>• {lang === 'es' ? 'Diseñamos futuro, no hacemos arqueología del pasado.' : 'We design the future, not archaeology of the past.'}</li>
                <li>• {lang === 'es' ? 'Crecimiento personal' : 'Personal growth'}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {lang === 'es' ? 'Mi Enfoque' : 'My Approach'}
              </h3>
              <p>
                {lang === 'es'
                  ? 'Trabajo con cada cliente de manera personalizada, adaptando el proceso a sus necesidades específicas y objetivos.'
                  : 'I work with each client in a personalized way, adapting the process to their specific needs and goals.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section id="proposal" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {lang === 'es' ? 'Mi Propuesta' : 'My Proposal'}
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              {lang === 'es' ? '¿Qué te ofrezco?' : 'What do I offer?'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {lang === 'es' ? 'Sesiones Individuales' : 'Individual Sessions'}
                </h4>
                <ul className="space-y-2">
                  <li>• {lang === 'es' ? 'Un servicio 1:1 que se adapta completamente a las necesidades, metas y desafíos del cliente. Ideal si buscás un enfoque flexible y directo.' : 'A 1:1 service that adapts completely to the needs, goals and challenges of the client. Ideal if you are looking for a flexible and direct approach.'}</li>
                  <li>• {lang === 'es' ? 'Algunos temas pueden ser por ejemplo, el balance entre vida personal y profesional.' : 'Some topics may be, for example, the balance between personal and professional life.'}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {lang === 'es' ? 'Programas Integrales' : 'Integral Programs'}
                </h4>
                <ul className="space-y-2">
                  <li>• {lang === 'es' ? 'Un proceso estructurado y continuo que combina objetivos a largo plazo con seguimiento cercano. Te brindo herramientas y conocimientos de coaching para que puedas fundar los cimientos de tu negocio en una cultura flexible, escalable y orientada a las personas.' : 'A structured and continuous process that combines long-term goals with close follow-up. I provide coaching tools and knowledge so you can lay the foundations of your business in a flexible, scalable and people-oriented culture.'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {lang === 'es' ? 'Nombre' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {lang === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
