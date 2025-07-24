import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, Hospital, Users, Activity } from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Solutions = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: 'Clinical Triage',
      description: 'AI-powered patient call routing and priority assessment',
      features: ['Intelligent call routing', 'Symptom analysis', 'Priority scoring', 'Care protocols'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Hospital,
      title: 'Hospital Operations',
      description: 'Streamline workflows across departments and teams',
      features: ['Workflow automation', 'Resource optimization', 'Staff coordination', 'Capacity planning'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Enhance patient experience with intelligent interactions',
      features: ['24/7 availability', 'Multilingual support', 'Follow-up automation', 'Care reminders'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Activity,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making for better outcomes',
      features: ['Performance metrics', 'Outcome tracking', 'Predictive analytics', 'Custom reporting'],
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const useCases = [
    {
      title: 'Emergency Departments',
      description: 'Reduce wait times and improve patient flow with intelligent triage',
      metrics: { primary: '40%', secondary: 'Faster Triage', tertiary: 'avg. 3.2 min' }
    },
    {
      title: 'Primary Care',
      description: 'Enhance routine care with automated appointment scheduling',
      metrics: { primary: '60%', secondary: 'Less Admin Time', tertiary: 'saves 2.4 hrs/day' }
    },
    {
      title: 'Specialty Clinics',
      description: 'Streamline referrals and follow-up care coordination',
      metrics: { primary: '85%', secondary: 'Better Coordination', tertiary: '50% fewer callbacks' }
    }
  ];

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h1 className="font-hero text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Solutions for Every
                <span className="text-primary block">Healthcare Setting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From emergency departments to specialty clinics, Anatomia adapts to your workflow 
                and improves patient outcomes through intelligent automation.
              </p>
              <Button className="btn-primary btn-lg magnetic-btn">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 bg-anatomia-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI platform addresses the unique challenges of modern healthcare delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={solution.title} className="p-6 feature-card interactive-card">
                    <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Proven Results Across Healthcare Settings
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how Anatomia transforms operations in different healthcare environments
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.title} className="p-8 feature-card text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {useCase.metrics.primary}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {useCase.metrics.secondary}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {useCase.metrics.tertiary}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {useCase.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Solutions;