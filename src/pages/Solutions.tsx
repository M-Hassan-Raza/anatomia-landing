import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGSAPAnimation } from '@/components/gsap/useGSAPAnimation';
import { 
  ArrowRight, 
  Stethoscope, 
  Hospital, 
  Users, 
  Activity, 
  CheckCircle,
  Play,
  Clock,
  Shield,
  Zap,
  Database,
  Phone,
  MessageSquare,
  BarChart3,
  Settings,
  Brain,
  Monitor,
  AlertTriangle,
  FileText,
  Workflow
} from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('nurses');
  const { animateFeatureCards, animateScrollSections, addMagneticEffect, addFloatingElements } = useGSAPAnimation();

  useEffect(() => {
    animateFeatureCards();
    animateScrollSections();
    addMagneticEffect();
    addFloatingElements();
  }, [animateFeatureCards, animateScrollSections, addMagneticEffect, addFloatingElements]);

  const solutions = [
    {
      icon: Stethoscope,
      title: 'Clinical Triage',
      description: 'AI-powered patient call routing and priority assessment',
      features: ['Intelligent call routing', 'Symptom analysis', 'Priority scoring', 'Care protocols'],
      color: 'bg-anatomia-feature-clinical/10 text-anatomia-feature-clinical'
    },
    {
      icon: Hospital,
      title: 'Hospital Operations',
      description: 'Streamline workflows across departments and teams',
      features: ['Workflow automation', 'Resource optimization', 'Staff coordination', 'Capacity planning'],
      color: 'bg-anatomia-feature-general/10 text-anatomia-feature-general'
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Enhance patient experience with intelligent interactions',
      features: ['24/7 availability', 'Multilingual support', 'Follow-up automation', 'Care reminders'],
      color: 'bg-anatomia-feature-general/10 text-anatomia-feature-general'
    },
    {
      icon: Activity,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making for better outcomes',
      features: ['Performance metrics', 'Outcome tracking', 'Predictive analytics', 'Custom reporting'],
      color: 'bg-anatomia-feature-admin/10 text-anatomia-feature-admin'
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
              <MovingBorderButton variant="primary" size="lg">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </MovingBorderButton>
            </div>
          </div>
        </section>

        {/* Feature Showcase - Tabbed Interface */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Solutions Tailored for{' '}
                  <span className="text-primary">Your Role</span>
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  See how Anatomia transforms workflows for different healthcare professionals
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
                  <TabsTrigger value="nurses" className="feature-tab">
                    <Users className="w-4 h-4 mr-2" />
                    For Nurses
                  </TabsTrigger>
                  <TabsTrigger value="doctors" className="feature-tab">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    For Doctors
                  </TabsTrigger>
                  <TabsTrigger value="administrators" className="feature-tab">
                    <Hospital className="w-4 h-4 mr-2" />
                    For Administrators
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="nurses" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          Nursing Solutions
                        </Badge>
                        <h3 className="font-display text-heading-xl text-foreground mb-4">
                          Reduce Documentation Time by 75%
                        </h3>
                        <p className="text-body-lg text-anatomia-text-secondary">
                          Intelligent triage workflows that automatically capture patient information, 
                          generate structured notes, and integrate seamlessly with your EHR system.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { icon: Phone, title: 'Smart Call Routing', desc: 'Automatically routes calls based on urgency and specialty' },
                          { icon: Brain, title: 'AI-Powered Triage', desc: 'Intelligent symptom analysis and priority scoring' },
                          { icon: FileText, title: 'Auto Documentation', desc: 'Generate clinical notes automatically from conversations' },
                          { icon: Clock, title: 'Time Tracking', desc: 'Monitor and optimize call handling efficiency' }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-anatomia-feature-general/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-anatomia-feature-general" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{feature.title}</h4>
                              <p className="text-body-sm text-anatomia-text-secondary">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn btn-primary">
                          <Play className="w-5 h-5 mr-2" />
                          Watch Nurse Demo
                        </Button>
                        <Button variant="outline">
                          View Case Study
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <img 
                        src="/api/placeholder/500/400" 
                        alt="Nursing workflow dashboard"
                        className="w-full rounded-2xl shadow-anatomia-lg"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-anatomia-md border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">15 min</div>
                          <div className="text-body-xs text-anatomia-text-tertiary">→ 4 min avg triage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="doctors" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-4">
                          <Stethoscope className="w-4 h-4 mr-2" />
                          Clinical Solutions
                        </Badge>
                        <h3 className="font-display text-heading-xl text-foreground mb-4">
                          Enhanced Clinical Decision Support
                        </h3>
                        <p className="text-body-lg text-anatomia-text-secondary">
                          AI-powered insights that help physicians make more informed decisions with 
                          comprehensive patient data analysis and evidence-based recommendations.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { icon: Brain, title: 'Clinical AI Insights', desc: 'Evidence-based recommendations for complex cases' },
                          { icon: BarChart3, title: 'Patient Analytics', desc: 'Comprehensive patient data visualization and trends' },
                          { icon: AlertTriangle, title: 'Early Warning System', desc: 'Predictive alerts for deteriorating patients' },
                          { icon: Database, title: 'Medical History', desc: 'Complete patient timeline with relevant context' }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-anatomia-feature-general/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-anatomia-feature-general" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{feature.title}</h4>
                              <p className="text-body-sm text-anatomia-text-secondary">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn btn-primary">
                          <Play className="w-5 h-5 mr-2" />
                          Watch Clinical Demo
                        </Button>
                        <Button variant="outline">
                          Read Clinical Study
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <img 
                        src="/api/placeholder/500/400" 
                        alt="Clinical dashboard"
                        className="w-full rounded-2xl shadow-anatomia-lg"
                      />
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-anatomia-md border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-anatomia-success">28%</div>
                          <div className="text-body-xs text-anatomia-text-tertiary">Faster diagnosis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="administrators" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-4">
                          <Hospital className="w-4 h-4 mr-2" />
                          Administrative Solutions
                        </Badge>
                        <h3 className="font-display text-heading-xl text-foreground mb-4">
                          Complete Operational Visibility
                        </h3>
                        <p className="text-body-lg text-anatomia-text-secondary">
                          Comprehensive analytics and reporting tools that provide insights into 
                          performance, compliance, and ROI across your entire healthcare organization.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { icon: BarChart3, title: 'Performance Analytics', desc: 'Real-time dashboards and KPI tracking' },
                          { icon: Shield, title: 'Compliance Monitoring', desc: 'Automated HIPAA and regulatory compliance tracking' },
                          { icon: Settings, title: 'Workflow Management', desc: 'Configure and optimize clinical workflows' },
                          { icon: Monitor, title: 'System Integration', desc: 'Seamless integration with existing healthcare systems' }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-anatomia-feature-general/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-anatomia-feature-general" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{feature.title}</h4>
                              <p className="text-body-sm text-anatomia-text-secondary">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn btn-primary">
                          <Play className="w-5 h-5 mr-2" />
                          Watch Admin Demo
                        </Button>
                        <Button variant="outline">
                          ROI Calculator
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <img 
                        src="/api/placeholder/500/400" 
                        alt="Administrative dashboard"
                        className="w-full rounded-2xl shadow-anatomia-lg"
                      />
                      <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-anatomia-md border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-anatomia-warning">$2.3M</div>
                          <div className="text-body-xs text-anatomia-text-tertiary">Annual savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Core Platform Capabilities
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Advanced AI and healthcare expertise combined in one powerful platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <Card key={solution.title} className="p-6 feature-card animate-on-scroll floating-element">
                      <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-4 card-icon`}>
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
                            <CheckCircle className="w-3 h-3 text-anatomia-success mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Seamless Integration Ecosystem
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Works with your existing healthcare technology stack
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-anatomia-feature-general/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-anatomia-feature-general" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">EHR Systems</h3>
                  <p className="text-body-sm text-anatomia-text-secondary mb-4">
                    Epic, Cerner, AllScripts, and 50+ other systems
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Epic', 'Cerner', 'AllScripts', 'NextGen'].map((system) => (
                      <Badge key={system} variant="outline" className="text-xs">{system}</Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-anatomia-feature-clinical/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-anatomia-feature-clinical" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                  <p className="text-body-sm text-anatomia-text-secondary mb-4">
                    Phone systems, messaging, and collaboration tools
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['VoIP', 'Slack', 'Teams', 'Secure Chat'].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-anatomia-feature-admin/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-anatomia-feature-admin" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                  <p className="text-body-sm text-anatomia-text-secondary mb-4">
                    BI tools, reporting systems, and data warehouses
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Tableau', 'Power BI', 'QlikView', 'Custom'].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-body-md text-anatomia-text-secondary mb-6">
                  Don't see your system? We build custom integrations for Enterprise customers.
                </p>
                <Button variant="outline">
                  <Settings className="w-5 h-5 mr-2" />
                  View All Integrations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Setting Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Proven Results Across Healthcare Settings
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  See how Anatomia transforms operations in different healthcare environments
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={useCase.title} className="p-8 feature-card animate-on-scroll floating-element text-center hover:shadow-lg transition-all duration-300">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {useCase.metrics.primary}
                      </div>
                      <div className="text-lg font-semibold text-anatomia-text-primary mb-1">
                        {useCase.metrics.secondary}
                      </div>
                      <div className="text-sm text-anatomia-text-tertiary">
                        {useCase.metrics.tertiary}
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-anatomia-text-secondary mb-6">
                      {useCase.description}
                    </p>
                    
                    <Button variant="outline" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Simple Implementation Process
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Get up and running in weeks, not months
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '1', title: 'Discovery', desc: 'We analyze your current workflows and identify optimization opportunities', duration: '1 week' },
                  { step: '2', title: 'Configuration', desc: 'Custom setup and integration with your existing systems', duration: '2-3 weeks' },
                  { step: '3', title: 'Training', desc: 'Comprehensive staff training and change management support', duration: '1 week' },
                  { step: '4', title: 'Go-Live', desc: 'Phased rollout with ongoing support and optimization', duration: 'Ongoing' }
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto text-anatomia-text-inverse font-bold text-xl">
                        {phase.step}
                      </div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{phase.title}</h3>
                    <p className="text-body-sm text-anatomia-text-secondary mb-2">{phase.desc}</p>
                    <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-body-md text-anatomia-text-secondary mb-6">
                  Average time to full deployment: <strong>4-6 weeks</strong>
                </p>
                <Button className="btn btn-primary">
                  <Workflow className="w-5 h-5 mr-2" />
                  Schedule Implementation Call
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

export default Solutions;