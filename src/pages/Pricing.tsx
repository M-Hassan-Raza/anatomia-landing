import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Zap, Shield, Users } from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
                    isAnnual ? 'bg-primary' : 'bg-anatomia-gray-300'
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
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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
                    className={`relative p-8 feature-card ${
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
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
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

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Pricing;