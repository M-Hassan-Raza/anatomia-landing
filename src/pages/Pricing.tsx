import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Zap, Shield, Users, ArrowRight, Building2, Phone, Clock, DollarSign, Headphones, Lock } from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';
import { useGSAPAnimation } from '@/components/gsap/useGSAPAnimation';
import ROICalculator from '@/components/ROICalculator';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { animatePricingCards, animateScrollSections, addMagneticEffect } = useGSAPAnimation();

  useEffect(() => {
    animatePricingCards();
    animateScrollSections();
    addMagneticEffect();
  }, [animatePricingCards, animateScrollSections, addMagneticEffect]);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? 79 : 99,
      originalPrice: isAnnual ? 99 : 119,
      description: 'Perfect for small practices',
      icon: Users,
      features: [
        'Up to 100 calls/month',
        '5 user seats',
        'Core AI features',
        'Email support',
        'Basic analytics',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: isAnnual ? 399 : 499,
      originalPrice: isAnnual ? 499 : 599,
      description: 'Most popular for growing teams',
      icon: Zap,
      features: [
        'Up to 1,000 calls/month',
        '25 user seats',
        'Advanced AI features',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'HIPAA compliance',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large healthcare systems',
      icon: Shield,
      features: [
        'Unlimited calls',
        'Unlimited seats',
        'Custom AI training',
        'Dedicated success manager',
        'White-label options',
        'On-premise deployment',
        'SLA guarantees',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <h1 className="font-hero text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Pricing That Scales
                <span className="text-primary block">With Your Practice</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the perfect plan for your healthcare organization. 
                All plans include a 14-day free trial with no setup fees.
              </p>
              
              {/* Annual Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    isAnnual ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform top-1 ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
                <span className={`font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual
                </span>
                {isAnnual && (
                  <span className="bg-anatomia-success/10 text-anatomia-success px-3 py-1 rounded-full text-sm font-medium">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.name}
                    className={`pricing-card ${plan.popular ? 'featured' : ''} relative p-8 feature-card interactive-card magnetic-btn animate-on-scroll floating-element ${
                      plan.popular ? 'border-primary shadow-anatomia-primary' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      
                      <div className="mb-6">
                        {typeof plan.price === 'string' ? (
                          <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                            <div className="text-left">
                              <div className="text-sm text-muted-foreground">per month</div>
                              {plan.originalPrice && (
                                <div className="text-sm text-muted-foreground line-through">
                                  ${plan.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-anatomia-success flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full magnetic-btn ${
                        plan.popular ? 'btn-primary' : 'btn-secondary'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Detailed Feature Comparison
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  See exactly what's included in each plan
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-anatomia-surface-tertiary">
                      <tr>
                        <th className="text-left p-6 font-semibold text-foreground">Features</th>
                        <th className="text-center p-6 font-semibold text-foreground">Starter</th>
                        <th className="text-center p-6 font-semibold text-foreground bg-primary/5 relative">
                          Professional
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-primary text-white text-xs">Most Popular</Badge>
                          </div>
                        </th>
                        <th className="text-center p-6 font-semibold text-foreground">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: 'Monthly Call Volume', starter: '100', professional: '1,000', enterprise: 'Unlimited' },
                        { feature: 'User Seats', starter: '5', professional: '25', enterprise: 'Unlimited' },
                        { feature: 'AI Triage', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom AI' },
                        { feature: 'Analytics Dashboard', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
                        { feature: 'HIPAA Compliance', starter: '✓', professional: '✓', enterprise: '✓' },
                        { feature: 'API Access', starter: '✗', professional: '✓', enterprise: '✓' },
                        { feature: 'Custom Integrations', starter: '✗', professional: 'Limited', enterprise: 'Unlimited' },
                        { feature: 'Dedicated Support', starter: '✗', professional: '✗', enterprise: '✓' },
                        { feature: 'On-premise Deployment', starter: '✗', professional: '✗', enterprise: '✓' },
                        { feature: 'SLA Guarantee', starter: '✗', professional: '99.9%', enterprise: '99.99%' }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-anatomia-surface-primary' : 'bg-anatomia-surface-secondary/50'}>
                          <td className="p-4 font-medium text-foreground">{row.feature}</td>
                          <td className="p-4 text-center text-anatomia-text-secondary">{row.starter}</td>
                          <td className="p-4 text-center text-anatomia-text-secondary bg-primary/5">{row.professional}</td>
                          <td className="p-4 text-center text-anatomia-text-secondary">{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <ROICalculator />

        {/* Enterprise Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      <Building2 className="w-4 h-4 mr-2" />
                      Enterprise Solutions
                    </Badge>
                    <h2 className="font-display text-display-lg text-foreground mb-4">
                      Built for Large{' '}
                      <span className="text-primary">Healthcare Systems</span>
                    </h2>
                    <p className="text-body-lg text-anatomia-text-secondary">
                      Enterprise-grade security, compliance, and scalability for 
                      multi-facility health systems and large hospitals.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Lock className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Advanced Security</h3>
                      </div>
                      <p className="text-body-sm text-anatomia-text-secondary">
                        SOC 2 Type II, HIPAA, HITRUST compliance with custom security controls
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Headphones className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Dedicated Support</h3>
                      </div>
                      <p className="text-body-sm text-anatomia-text-secondary">
                        24/7 phone support with dedicated customer success manager
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">SLA Guarantees</h3>
                      </div>
                      <p className="text-body-sm text-anatomia-text-secondary">
                        99.99% uptime guarantee with service level agreements
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Volume Pricing</h3>
                      </div>
                      <p className="text-body-sm text-anatomia-text-secondary">
                        Custom pricing based on your organization's size and needs
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn btn-primary">
                      <Phone className="w-5 h-5 mr-2" />
                      Schedule Enterprise Demo
                    </Button>
                    <Button variant="outline">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      View Case Studies
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Enterprise Features Include:</h3>
                      <div className="space-y-3">
                        {[
                          'Unlimited call volume and users',
                          'Custom AI model training',
                          'White-label deployment options',
                          'Advanced analytics and reporting',
                          'Multi-tenant architecture',
                          'Custom integration development',
                          'Dedicated infrastructure',
                          'Regulatory compliance support'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-body-sm text-anatomia-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="text-center p-6 bg-anatomia-surface-secondary rounded-xl">
                    <p className="text-body-sm text-anatomia-text-secondary mb-2">
                      Trusted by leading health systems
                    </p>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-body-xs text-anatomia-text-tertiary">Healthcare Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Common questions about our pricing and plans
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="billing" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How does billing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    We bill monthly or annually based on your selected plan. Annual plans receive a 20% discount. 
                    All plans include a 14-day free trial with no setup fees or long-term contracts required.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="overage" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What happens if I exceed my call limit?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    If you consistently exceed your plan's call limit, we'll work with you to upgrade to a more 
                    suitable plan. We don't charge overage fees - instead, we'll help you find the right plan 
                    for your volume.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Is my data secure and HIPAA compliant?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    Yes, all plans include full HIPAA compliance with Business Associate Agreements (BAA). 
                    We're also SOC 2 Type II certified and HITRUST validated. Enterprise plans include 
                    additional security controls and compliance features.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="integration" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Do you integrate with our existing EHR?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    We integrate with all major EHR systems including Epic, Cerner, AllScripts, and more. 
                    Standard integrations are included in Professional plans, while Enterprise plans include 
                    custom integration development.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What kind of support do you provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    Starter plans include email support, Professional plans include priority email and chat support, 
                    and Enterprise plans include 24/7 phone support with a dedicated customer success manager.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cancel" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I cancel anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-anatomia-text-secondary">
                    Yes, you can cancel your subscription at any time with 30 days notice. We don't require 
                    long-term contracts. Your data will be available for export for 90 days after cancellation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-display-lg text-foreground mb-8">
                Trusted by Healthcare Leaders
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-body-sm text-anatomia-text-secondary">Uptime Guarantee</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-anatomia-success">500+</div>
                  <div className="text-body-sm text-anatomia-text-secondary">Healthcare Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-anatomia-info">3.2M+</div>
                  <div className="text-body-sm text-anatomia-text-secondary">Patient Interactions</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-anatomia-warning">24/7</div>
                  <div className="text-body-sm text-anatomia-text-secondary">Enterprise Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn btn-primary btn-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button variant="outline" className="btn-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Pricing;