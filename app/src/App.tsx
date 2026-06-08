import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ChallengeSection } from '@/sections/ChallengeSection';
import { PhilosophySection } from '@/sections/PhilosophySection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FinalCTASection } from '@/sections/FinalCTASection';

function App() {
  return (
    <div className="font-poppins">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengeSection />
        <PhilosophySection />
        <ServicesSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
