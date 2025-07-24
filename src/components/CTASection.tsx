import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Play } from 'lucide-react';
import { useEffect } from 'react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const CTASection = () => {
  const { animateScrollSections } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
  }, [animateScrollSections]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll text-center mb-12">
          <h2 className="font-display text-display-lg text-primary-foreground mb-6">
            Ready to Transform Your{' '}
            <span className="text-primary-light">Clinical Workflow?</span>
          </h2>
          <p className="text-body-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Join 500+ healthcare organizations already saving time, reducing costs, 
            and improving patient outcomes with Anatomia's AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Demo CTA */}
          <Card className="animate-on-scroll p-8 bg-background/95 backdrop-blur-sm border-0 hover:shadow-anatomia-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-heading-lg text-foreground">
                  Schedule a Live Demo
                </h3>
                <p className="text-body-md text-anatomia-gray-700">
                  See Anatomia in action with a personalized 30-minute demo tailored to your organization.
                </p>
              </div>

              <div className="space-y-4">
                <ul className="text-body-sm text-anatomia-gray-600 space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Live workflow demonstration
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Custom integration planning
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    ROI analysis for your organization
                  </li>
                </ul>

                <Button className="w-full btn btn-primary btn-lg group">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Trial CTA */}
          <Card className="animate-on-scroll p-8 bg-background/95 backdrop-blur-sm border-0 hover:shadow-anatomia-glow transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-anatomia-success/10 rounded-2xl flex items-center justify-center">
                <Play className="w-8 h-8 text-anatomia-success" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-heading-lg text-foreground">
                  Start Free Trial
                </h3>
                <p className="text-body-md text-anatomia-gray-700">
                  Experience the full power of Anatomia with a 14-day free trial. No setup fees, no commitment.
                </p>
              </div>

              <div className="space-y-4">
                <ul className="text-body-sm text-anatomia-gray-600 space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anatomia-success rounded-full"></div>
                    Full platform access
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anatomia-success rounded-full"></div>
                    Unlimited case processing
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anatomia-success rounded-full"></div>
                    Dedicated onboarding support
                  </li>
                </ul>

                <Button variant="outline" className="w-full btn-lg border-2 border-anatomia-success text-anatomia-success hover:bg-anatomia-success hover:text-white group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="animate-on-scroll text-center mt-12">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-anatomia-success rounded-full animate-pulse"></div>
              <span className="text-primary-foreground/90 text-body-sm">HIPAA Compliant</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-anatomia-success rounded-full animate-pulse"></div>
              <span className="text-primary-foreground/90 text-body-sm">SOC 2 Certified</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-anatomia-success rounded-full animate-pulse"></div>
              <span className="text-primary-foreground/90 text-body-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;