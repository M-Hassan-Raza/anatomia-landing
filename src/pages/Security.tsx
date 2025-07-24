import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Key, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  Download,
  ExternalLink,
  Users,
  Clock,
  Database,
  Zap
} from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Security = () => {
  const certifications = [
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      lastAudit: '2024-01-15',
      icon: Shield,
      details: 'Full HIPAA compliance with comprehensive administrative, physical, and technical safeguards'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      status: 'Certified',
      lastAudit: '2024-02-20',
      icon: FileCheck,
      details: 'Annual audit covering security, availability, processing integrity, confidentiality, and privacy'
    },
    {
      name: 'HITRUST',
      description: 'Health Information Trust Alliance',
      status: 'Validated',
      lastAudit: '2024-01-30',
      icon: CheckCircle,
      details: 'HITRUST CSF validation demonstrating comprehensive information protection program'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program',
      status: 'In Progress',
      lastAudit: '2024-03-01',
      icon: Lock,
      details: 'Pursuing FedRAMP authorization for government healthcare organizations'
    }
  ];

  const securityFeatures = [
    {
      category: 'Data Encryption',
      icon: Lock,
      features: [
        'AES-256 encryption at rest',
        'TLS 1.3 encryption in transit',
        'End-to-end encryption for PHI',
        'Hardware security modules (HSM)'
      ]
    },
    {
      category: 'Access Control',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management'
      ]
    },
    {
      category: 'Monitoring & Logging',
      icon: Eye,
      features: [
        'Real-time security monitoring',
        'Comprehensive audit trails',
        'Anomaly detection',
        'SIEM integration'
      ]
    },
    {
      category: 'Infrastructure',
      icon: Server,
      features: [
        'AWS HealthLake integration',
        'Isolated network segments',
        'DDoS protection',
        'Regular penetration testing'
      ]
    }
  ];

  const dataHandling = {
    retention: [
      { type: 'Clinical Data', period: '7 years minimum', note: 'Configurable based on state requirements' },
      { type: 'Audit Logs', period: '7 years', note: 'Immutable logging for compliance' },
      { type: 'User Activity', period: '2 years', note: 'For security monitoring' },
      { type: 'System Logs', period: '1 year', note: 'Technical maintenance logs' }
    ],
    rights: [
      'Right to access personal data',
      'Right to rectification',
      'Right to erasure ("right to be forgotten")',
      'Right to restrict processing',
      'Right to data portability',
      'Right to object to processing'
    ]
  };

  const incidentResponse = [
    {
      step: 1,
      title: 'Detection & Assessment',
      description: 'Automated monitoring systems detect potential security incidents within minutes',
      timeframe: '< 5 minutes'
    },
    {
      step: 2,
      title: 'Immediate Response',
      description: 'Security team activated, affected systems isolated if necessary',
      timeframe: '< 15 minutes'
    },
    {
      step: 3,
      title: 'Customer Notification',
      description: 'Affected customers notified via multiple channels',
      timeframe: '< 1 hour'
    },
    {
      step: 4,
      title: 'Regulatory Reporting',
      description: 'Required notifications to regulatory bodies (HHS, state authorities)',
      timeframe: '< 72 hours'
    }
  ];

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Security & Compliance
                </Badge>
                <h1 className="font-display text-display-xl text-foreground mb-6">
                  Enterprise-Grade Security,{' '}
                  <span className="text-primary">Healthcare-Grade Compliance</span>
                </h1>
                <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto mb-8">
                  Anatomia is built with security at its core, meeting the highest standards 
                  for healthcare data protection and regulatory compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn btn-primary">
                    <Download className="w-5 h-5 mr-2" />
                    Download Security Overview
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Trust Center
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Overview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-display text-display-lg text-foreground mb-4">
                    Compliance Certifications
                  </h2>
                  <p className="text-body-lg text-anatomia-gray-700">
                    Independently verified security and compliance standards
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                      <div className="space-y-4">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          <cert.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-heading-sm mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-body-xs text-anatomia-gray-600 mb-2">
                            {cert.description}
                          </p>
                          <Badge 
                            variant={cert.status === 'In Progress' ? 'outline' : 'secondary'}
                            className={cert.status === 'Compliant' || cert.status === 'Certified' || cert.status === 'Validated' 
                              ? 'bg-anatomia-success/10 text-anatomia-success border-anatomia-success/20' 
                              : ''
                            }
                          >
                            {cert.status}
                          </Badge>
                        </div>
                        <div className="text-body-xs text-anatomia-gray-500">
                          Last audit: {new Date(cert.lastAudit).toLocaleDateString()}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="py-16 bg-anatomia-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-display text-display-lg text-foreground mb-4">
                    Security Architecture
                  </h2>
                  <p className="text-body-lg text-anatomia-gray-700">
                    Multi-layered security controls protecting your healthcare data
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {securityFeatures.map((category, index) => (
                    <Card key={index} className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <category.icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-semibold text-foreground">
                            {category.category}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-body-sm">
                              <CheckCircle className="w-4 h-4 text-anatomia-success mt-0.5 flex-shrink-0" />
                              <span className="text-anatomia-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Compliance Tabs */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <Tabs defaultValue="data-handling" className="space-y-8">
                  <div className="text-center">
                    <h2 className="font-display text-display-lg text-foreground mb-4">
                      Compliance Details
                    </h2>
                    <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                      <TabsTrigger value="data-handling">Data Handling</TabsTrigger>
                      <TabsTrigger value="access-control">Access Control</TabsTrigger>
                      <TabsTrigger value="incident-response">Incident Response</TabsTrigger>
                      <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="data-handling" className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <Card className="p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center">
                          <Database className="w-5 h-5 mr-2 text-primary" />
                          Data Retention Policies
                        </h3>
                        <div className="space-y-4">
                          {dataHandling.retention.map((item, index) => (
                            <div key={index} className="border-l-4 border-primary/20 pl-4">
                              <div className="flex justify-between items-start mb-1">
                                <span className="font-medium text-foreground">{item.type}</span>
                                <Badge variant="outline">{item.period}</Badge>
                              </div>
                              <p className="text-body-sm text-anatomia-gray-700">{item.note}</p>
                            </div>
                          ))}
                        </div>
                      </Card>

                      <Card className="p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-primary" />
                          Patient Rights (GDPR/CCPA)
                        </h3>
                        <div className="space-y-3">
                          {dataHandling.rights.map((right, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-anatomia-success mt-0.5" />
                              <span className="text-body-sm text-anatomia-gray-700">{right}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 bg-anatomia-info/10 rounded-lg">
                          <p className="text-body-sm text-anatomia-info">
                            <strong>Response Time:</strong> Patient rights requests processed within 30 days
                          </p>
                        </div>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="access-control" className="space-y-8">
                    <Card className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                            <Key className="w-6 h-6" />
                          </div>
                          <h3 className="font-semibold text-foreground">Authentication</h3>
                          <ul className="space-y-2 text-body-sm text-anatomia-gray-700">
                            <li>• Multi-factor authentication required</li>
                            <li>• SSO integration (SAML, OIDC)</li>
                            <li>• Passwordless options available</li>
                            <li>• Session management controls</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                            <Users className="w-6 h-6" />
                          </div>
                          <h3 className="font-semibold text-foreground">Authorization</h3>
                          <ul className="space-y-2 text-body-sm text-anatomia-gray-700">
                            <li>• Role-based access control</li>
                            <li>• Attribute-based permissions</li>
                            <li>• Least privilege principle</li>
                            <li>• Regular access reviews</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                            <Eye className="w-6 h-6" />
                          </div>
                          <h3 className="font-semibold text-foreground">Monitoring</h3>
                          <ul className="space-y-2 text-body-sm text-anatomia-gray-700">
                            <li>• Real-time access logging</li>
                            <li>• Anomaly detection</li>
                            <li>• Failed login monitoring</li>
                            <li>• Privileged access tracking</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="incident-response" className="space-y-8">
                    <Card className="p-8">
                      <h3 className="font-semibold text-foreground mb-6 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-2 text-anatomia-warning" />
                        Security Incident Response Process
                      </h3>
                      <div className="space-y-6">
                        {incidentResponse.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-foreground">{step.title}</h4>
                                <Badge variant="outline" className="ml-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {step.timeframe}
                                </Badge>
                              </div>
                              <p className="text-body-sm text-anatomia-gray-700">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-anatomia-warning/10 rounded-lg border border-anatomia-warning/20">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-5 h-5 text-anatomia-warning mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">24/7 Security Operations Center</h4>
                            <p className="text-body-sm text-anatomia-gray-700">
                              Our security team monitors systems around the clock and can be reached at 
                              security@anatomia.com or +1 (555) 123-SECURITY for urgent security matters.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="monitoring" className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <Card className="p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-primary" />
                          Real-Time Monitoring
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-anatomia-success/10 rounded-lg">
                            <span className="text-body-sm font-medium">System Uptime</span>
                            <span className="text-anatomia-success font-bold">99.99%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                            <span className="text-body-sm font-medium">Security Events Monitored</span>
                            <span className="text-primary font-bold">24/7</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-anatomia-info/10 rounded-lg">
                            <span className="text-body-sm font-medium">Average Detection Time</span>
                            <span className="text-anatomia-info font-bold">&lt; 2 min</span>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center">
                          <FileCheck className="w-5 h-5 mr-2 text-primary" />
                          Audit & Compliance
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-body-sm text-anatomia-gray-700">Audit log retention</span>
                            <span className="font-medium">7 years</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-body-sm text-anatomia-gray-700">Log integrity verification</span>
                            <CheckCircle className="w-4 h-4 text-anatomia-success" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-body-sm text-anatomia-gray-700">Automated compliance reports</span>
                            <CheckCircle className="w-4 h-4 text-anatomia-success" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-body-sm text-anatomia-gray-700">Real-time compliance dashboard</span>
                            <CheckCircle className="w-4 h-4 text-anatomia-success" />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-primary">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto text-primary-foreground">
                <h2 className="font-display text-display-lg mb-4">
                  Questions About Our Security?
                </h2>
                <p className="text-body-lg opacity-90 mb-8">
                  Our security and compliance experts are here to answer your questions 
                  and provide detailed documentation for your evaluation process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn btn-hero bg-white text-primary hover:bg-white/90">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Security Team
                  </Button>
                  <Button className="btn btn-hero border-white/40 hover:bg-white/10">
                    <Download className="w-5 h-5 mr-2" />
                    Download Documentation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Security;