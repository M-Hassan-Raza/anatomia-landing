import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, Users, BarChart3, ArrowRight, Play } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';
import dashboardPreview from '@/assets/dashboard-preview.jpg';

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { animateScrollSections, gsap } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
  }, [animateScrollSections]);

  const tabs = [
    {
      id: 'nurses',
      title: 'For Nurses',
      icon: Stethoscope,
      subtitle: 'Streamlined Triage Workflow',
      description: 'Transform patient calls into structured clinical cases with AI-powered assistance.',
      features: [
        'Voice-to-text transcription in real-time',
        'Intelligent symptom recognition',
        'Automated urgency scoring',
        'Direct EHR integration',
        'Compliance documentation'
      ],
      demo: 'Watch Triage Demo'
    },
    {
      id: 'doctors',
      title: 'For Doctors',
      icon: Users,
      subtitle: 'Clinical Decision Support',
      description: 'Access comprehensive patient insights and evidence-based recommendations.',
      features: [
        'AI-generated differential diagnoses',
        'Treatment protocol suggestions',
        'Drug interaction warnings',
        'Patient history synthesis',
        'Clinical decision trees'
      ],
      demo: 'See Clinical Dashboard'
    },
    {
      id: 'administrators',
      title: 'For Administrators',
      icon: BarChart3,
      subtitle: 'Operational Excellence',
      description: 'Monitor performance, ensure compliance, and optimize resource allocation.',
      features: [
        'Real-time operational metrics',
        'HIPAA compliance monitoring',
        'Cost-per-case analytics',
        'Staff performance insights',
        'ROI tracking dashboard'
      ],
      demo: 'View Analytics'
    }
  ];

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;

    // Animate tab transition
    gsap.to('.tab-content', {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(index);
        gsap.to('.tab-content', {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });
  };

  return (
    <section className="py-20 bg-anatomia-gray-100/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Built for Every Role in{' '}
            <span className="text-primary">Healthcare</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            Anatomia adapts to your specific needs, whether you're on the front lines 
            of patient care or managing organizational strategy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="animate-on-scroll flex justify-center mb-12 overflow-x-auto">
          <div className="flex flex-col sm:flex-row bg-background rounded-2xl p-2 shadow-anatomia-md border border-border min-w-fit">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(index)}
                className={`flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 whitespace-nowrap min-w-0 ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-anatomia-primary'
                    : 'text-anatomia-gray-700 hover:bg-anatomia-gray-100 hover:text-foreground'
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tabs[activeTab].subtitle}
              </Badge>
              
              <h3 className="font-display text-heading-xl text-foreground">
                {tabs[activeTab].title.replace('For ', '')} Love Anatomia
              </h3>
              
              <p className="text-body-lg text-anatomia-gray-700">
                {tabs[activeTab].description}
              </p>
            </div>

            {/* Features List */}
            <div className="stagger-list space-y-4">
              {tabs[activeTab].features.map((feature, index) => (
                <div key={index} className="stagger-item flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-body-md text-anatomia-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-full">
              <Button className="btn btn-primary group">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {tabs[activeTab].demo}
              </Button>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative mx-4 sm:mx-0">
            <Card className="p-1 bg-gradient-primary">
              <div className="bg-background rounded-xl overflow-hidden">
                <img 
                  src={dashboardPreview}
                  alt={`${tabs[activeTab].title} dashboard preview`}
                  className="w-full rounded-xl"
                />
                
                {/* Interactive Hotspots */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-anatomia-success rounded-full animate-pulse shadow-anatomia-glow">
                    <div className="absolute inset-0 bg-anatomia-success rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-pulse shadow-anatomia-glow">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Stats */}
            <div className="absolute -top-2 sm:-top-4 left-2 sm:-left-4 bg-background rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-anatomia-lg border border-border">
              <div className="text-center">
                <div className="text-sm sm:text-heading-sm font-bold text-primary">96%</div>
                <div className="text-xs sm:text-body-xs text-anatomia-gray-600">Accuracy</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 right-2 sm:-right-4 bg-background rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-anatomia-lg border border-border">
              <div className="text-center">
                <div className="text-sm sm:text-heading-sm font-bold text-anatomia-success">-73%</div>
                <div className="text-xs sm:text-body-xs text-anatomia-gray-600">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;