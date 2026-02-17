import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { FormSection } from './components/FormSection';
import { FeaturedSection } from './components/FeaturedSection';
import { ClientResultsSection } from './components/ClientResultsSection';
import { MeetTheTeamSection } from './components/MeetTheTeamSection';
import { SectionSeparator } from './components/SectionSeparator';
import { PricingSection } from './components/PricingSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleFormSuccess = (firstName: string) => {
    const thankyouPath = `${import.meta.env.BASE_URL}thankyou`;
    window.location.href = `${thankyouPath}?name=${encodeURIComponent(firstName)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FormSection onSuccess={handleFormSuccess} />
      <SectionSeparator />
      <TrustSection />
      <FeaturedSection />
      <SectionSeparator />
      <ClientResultsSection />
      <SectionSeparator />
      <MeetTheTeamSection />
      <SectionSeparator />
      <PricingSection />
      <SectionSeparator />
      <DifferentiatorsSection />
      <Footer />
    </div>
  );
}
