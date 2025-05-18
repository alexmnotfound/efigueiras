import Link from 'next/link'

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const { lang } = await params

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
                ? 'Ayudando a personas a alcanzar su máximo potencial a través del coaching ontológico'
                : 'Helping people reach their full potential through ontological coaching'}
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
                  ? 'Soy una Coach Ontológica certificada con más de 5 años de experiencia ayudando a personas a transformar sus vidas.'
                  : 'I am a certified Ontological Coach with over 5 years of experience helping people transform their lives.'}
              </p>
              <p className="text-lg">
                {lang === 'es'
                  ? 'Mi enfoque se centra en el desarrollo personal y profesional, utilizando herramientas del coaching ontológico para generar cambios profundos y sostenibles.'
                  : 'My approach focuses on personal and professional development, using ontological coaching tools to generate deep and sustainable changes.'}
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
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
                <li>• {lang === 'es' ? 'Mayor autoconocimiento' : 'Greater self-knowledge'}</li>
                <li>• {lang === 'es' ? 'Mejora en las relaciones' : 'Improved relationships'}</li>
                <li>• {lang === 'es' ? 'Desarrollo de liderazgo' : 'Leadership development'}</li>
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
                  <li>• {lang === 'es' ? 'Sesiones de 1 hora' : '1-hour sessions'}</li>
                  <li>• {lang === 'es' ? 'Plan personalizado' : 'Personalized plan'}</li>
                  <li>• {lang === 'es' ? 'Seguimiento continuo' : 'Continuous follow-up'}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {lang === 'es' ? 'Sesiones Grupales' : 'Group Sessions'}
                </h4>
                <ul className="space-y-2">
                  <li>• {lang === 'es' ? 'Talleres temáticos' : 'Thematic workshops'}</li>
                  <li>• {lang === 'es' ? 'Grupos de crecimiento' : 'Growth groups'}</li>
                  <li>• {lang === 'es' ? 'Dinámicas grupales' : 'Group dynamics'}</li>
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
