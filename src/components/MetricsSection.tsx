import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Clock, Users, Shield } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const MetricsSection = () => {
  const { animateCounters, animateScrollSections } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
    animateCounters();
  }, [animateCounters, animateScrollSections]);

  const metrics = [
    {
      icon: TrendingUp,
      value: "87",
      suffix: "%",
      label: "Reduction in Documentation Time",
      description: "Nurses save 2.5 hours per shift on average",
      color: "text-anatomia-success"
    },
    {
      icon: Users,
      value: "3200000",
      suffix: "+",
      label: "Patient Interactions Processed",
      description: "Across 500+ healthcare organizations",
      color: "text-primary"
    },
    {
      icon: Clock,
      value: "45",
      suffix: " sec",
      label: "Average Call-to-Case Time",
      description: "From phone call to structured clinical case",
      color: "text-anatomia-info"
    },
    {
      icon: Shield,
      value: "99.9",
      suffix: "%",
      label: "HIPAA Compliance Rate",
      description: "Full audit trail with every interaction",
      color: "text-anatomia-warning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Proven Results That{' '}
            <span className="text-primary">Transform Healthcare</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            Real metrics from healthcare organizations using Anatomia to revolutionize 
            their clinical workflows and patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="feature-card interactive-card p-8 text-center bg-gradient-to-br from-background to-anatomia-gray-100/30 hover:shadow-anatomia-lg transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center ${metric.color}`}>
                  <metric.icon className="w-8 h-8 card-icon" />
                </div>

                {/* Metric */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span 
                      className="stat-number font-display text-display-lg font-bold text-foreground"
                      data-value={metric.value.replace(/[^0-9]/g, '')}
                    >
                      0
                    </span>
                    <span className="text-heading-md font-bold text-anatomia-gray-600">
                      {metric.suffix}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-heading-sm text-foreground leading-tight">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-body-sm text-anatomia-gray-700">
                  {metric.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="animate-on-scroll mt-16 text-center">
          <Card className="inline-block p-8 gradient-primary text-primary-foreground">
            <div className="space-y-4">
              <h3 className="font-display text-heading-lg">
                Ready to See These Results in Your Organization?
              </h3>
              <p className="text-body-md opacity-90">
                Join 500+ healthcare organizations already transforming with Anatomia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="btn btn-hero">
                  Schedule Demo
                </button>
                <button className="btn btn-hero border-white/40 hover:bg-white hover:text-primary">
                  View Case Studies
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;