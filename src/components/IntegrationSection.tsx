import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Workflow } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';
import integrationsPreview from '@/assets/integrations-preview.jpg';

const IntegrationSection = () => {
  const { animateScrollSections, setupHoverEffects } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
    setupHoverEffects();
  }, [animateScrollSections, setupHoverEffects]);

  const integrations = [
    { name: "Epic", category: "EHR", status: "active" },
    { name: "Cerner", category: "EHR", status: "active" },
    { name: "Allscripts", category: "EHR", status: "active" },
    { name: "athenahealth", category: "EHR", status: "active" },
    { name: "eClinicalWorks", category: "EHR", status: "active" },
    { name: "NextGen", category: "EHR", status: "active" },
    { name: "Meditech", category: "EHR", status: "active" },
    { name: "Salesforce Health Cloud", category: "CRM", status: "active" },
    { name: "Microsoft Teams", category: "Communication", status: "active" },
    { name: "Slack", category: "Communication", status: "active" },
    { name: "Zoom", category: "Communication", status: "active" },
    { name: "Tableau", category: "Analytics", status: "active" },
    { name: "Power BI", category: "Analytics", status: "active" },
    { name: "Snowflake", category: "Data", status: "coming-soon" },
    { name: "AWS HealthLake", category: "Cloud", status: "active" },
    { name: "Azure Health Bot", category: "AI", status: "coming-soon" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Connect to your existing EHR in under 24 hours with our pre-built integrations"
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "All integrations are HIPAA compliant with end-to-end encryption"
    },
    {
      icon: Workflow,
      title: "Bi-directional Sync",
      description: "Real-time data exchange between Anatomia and your healthcare stack"
    }
  ];

  return (
    <section className="py-20 bg-anatomia-gray-100/30">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Works With Your{' '}
            <span className="text-primary">Entire Health Stack</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            Seamlessly integrate with 50+ healthcare platforms. No disruption to your 
            existing workflows, just enhanced intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll space-y-8">
            {/* Features */}
            <div className="stagger-list space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="stagger-item interactive-card p-6 border-l-4 border-l-primary">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6 card-icon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-heading-sm text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-body-sm text-anatomia-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Integration Categories */}
            <div className="space-y-6">
              <h3 className="font-display text-heading-md text-foreground">
                Popular Integration Categories
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {["EHR Systems", "Communication", "Analytics", "Cloud Services"].map((category, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-anatomia-md transition-all duration-300">
                    <div className="text-heading-sm font-semibold text-foreground mb-1">
                      {category}
                    </div>
                    <div className="text-body-sm text-anatomia-gray-600">
                      {integrations.filter(i => i.category.toLowerCase().includes(category.toLowerCase().split(' ')[0])).length}+ integrations
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Button className="btn btn-primary group">
              View All Integrations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Integration Grid */}
          <div className="animate-on-scroll">
            <Card className="p-8 bg-background">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-display text-heading-md text-foreground mb-2">
                    50+ Pre-Built Integrations
                  </h3>
                  <p className="text-body-sm text-anatomia-gray-600">
                    Connect with your existing tools in minutes
                  </p>
                </div>

                {/* Integration Preview Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={integrationsPreview}
                    alt="Healthcare system integrations"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                {/* Integration Badges Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {integrations.slice(0, 12).map((integration, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-anatomia-gray-100/50 hover:bg-anatomia-gray-100 transition-colors">
                      <div className="font-medium text-body-xs text-foreground mb-1">
                        {integration.name}
                      </div>
                      <Badge 
                        variant={integration.status === 'active' ? 'default' : 'secondary'}
                        className={`text-xs ${
                          integration.status === 'active' 
                            ? 'bg-anatomia-success/10 text-anatomia-success border-anatomia-success/20' 
                            : 'bg-anatomia-warning/10 text-anatomia-warning border-anatomia-warning/20'
                        }`}
                      >
                        {integration.status === 'active' ? 'Live' : 'Soon'}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button variant="outline" className="btn-sm">
                    Request Integration
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;