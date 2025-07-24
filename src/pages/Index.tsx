import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SocialProofBar from '@/components/SocialProofBar';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeatureShowcase from '@/components/FeatureShowcase';
import MetricsSection from '@/components/MetricsSection';
import IntegrationSection from '@/components/IntegrationSection';
import ROICalculator from '@/components/ROICalculator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Index = () => {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <SocialProofBar />
          <ProblemSolutionSection />
          <FeatureShowcase />
          <MetricsSection />
          <IntegrationSection />
          <ROICalculator />
          <CTASection />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Index;
