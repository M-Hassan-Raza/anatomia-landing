import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Shield, Award, CheckCircle } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';
import heroImage from '@/assets/hero-medical-ai.jpg';

const HeroSection = () => {
  const { 
    animateHero, 
    addMagneticEffect, 
    addFloatingElements,
    createRollingText,
    addGlitchEffect 
  } = useGSAPAnimation();

  useEffect(() => {
    const timeline = animateHero();
    addMagneticEffect();
    addFloatingElements();
    
    return () => {
      timeline.kill();
    };
  }, [animateHero, addMagneticEffect, addFloatingElements]);

  const trustBadges = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Award, text: "SOC 2 Certified" },
    { icon: CheckCircle, text: "HITRUST Validated" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="hero-headline font-display text-display-xl lg:text-display-2xl text-foreground leading-tight">
                Transform Patient Calls into{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Actionable Clinical Intelligence
                </span>
              </h1>
              
              <p className="hero-subtitle text-body-lg lg:text-heading-xs text-anatomia-gray-700 max-w-2xl">
                AI-powered clinical workflow that reduces triage time by{' '}
                <span className="font-bold text-2xl text-primary">73%</span> and transforms 
                every patient interaction into structured, actionable healthcare data.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button className="btn btn-primary btn-lg magnetic-btn group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </Button>
              <Button variant="outline" className="btn btn-lg magnetic-btn border-2">
                Start Free Trial
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges space-y-4">
              <p className="text-body-sm text-anatomia-gray-600 font-medium">
                Trusted by 500+ Healthcare Organizations
              </p>
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((badge, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="badge flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border-border hover-scale"
                  >
                    <badge.icon className="w-4 h-4 text-primary" />
                    <span className="text-body-sm font-medium">{badge.text}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hero-image relative">
            <div className="relative floating-element">
              <img 
                src={heroImage}
                alt="AI-powered healthcare analytics dashboard"
                className="w-full rounded-2xl shadow-anatomia-lg"
              />
              
              {/* Floating elements with enhanced animations */}
              <div className="floating-element absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-anatomia-md border border-border animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-anatomia-success rounded-full animate-pulse"></div>
                  <span className="text-body-sm font-medium">Live Processing</span>
                </div>
              </div>
              
              <div className="floating-element absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-anatomia-md border border-border">
                <div className="space-y-2">
                  <div className="text-body-xs text-anatomia-gray-600">Average Processing Time</div>
                  <div className="text-heading-sm font-bold text-primary">45 seconds</div>
                </div>
              </div>

              {/* Additional floating elements - more subtle */}
              <div className="absolute top-1/2 -left-8 bg-primary/5 backdrop-blur-sm rounded-full p-3 shadow-anatomia-sm">
                <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
              </div>

              <div className="absolute top-1/4 -right-8 bg-anatomia-success/5 backdrop-blur-sm rounded-xl p-3 shadow-anatomia-sm">
                <div className="text-xs font-bold text-anatomia-success">+127%</div>
                <div className="text-xs text-anatomia-gray-600">Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-anatomia-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-anatomia-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;