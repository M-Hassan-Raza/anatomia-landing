import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Shield, Lightbulb, Users, Calendar, Award, Building2, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Company = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Dr. Sarah Chen and Michael Rodriguez meet at Stanford AI in Healthcare Conference and identify the need for intelligent clinical triage',
      milestone: true
    },
    {
      year: '2021',
      title: 'First Prototype',
      description: 'Developed MVP with Stanford Medicine pilot program, processing 1,000+ patient calls with 85% accuracy',
      milestone: false
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $15M Series A led by Andreessen Horowitz with participation from GV (Google Ventures)',
      milestone: true
    },
    {
      year: '2022',
      title: 'HIPAA Compliance',
      description: 'Achieved full HIPAA compliance and SOC 2 Type II certification, enabling deployment at scale',
      milestone: false
    },
    {
      year: '2023',
      title: 'First Health System',
      description: 'Regional Medical Center becomes first health system customer, processing 50,000+ calls in first year',
      milestone: true
    },
    {
      year: '2024',
      title: 'National Expansion',
      description: 'Scaled to 500+ healthcare organizations across 45 states, processing 3.2M+ patient interactions',
      milestone: true
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-First',
      description: 'Every decision we make prioritizes patient outcomes and wellbeing above all else.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of data security and regulatory compliance.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in healthcare AI.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best healthcare solutions come from working together.'
    }
  ];

  const team = [
    {
      name: 'Shaheer Khawaja',
      role: 'CEO',
      background: 'Visionary leader driving healthcare innovation through AI technology',
      experience: 'Strategic healthcare AI implementation',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Hussain Arslan',
      role: 'CTO',
      background: 'Technology architect building scalable healthcare AI solutions',
      experience: 'Healthcare technology infrastructure',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Hania Akhlaq',
      role: 'COO',
      background: 'Operations expert optimizing healthcare workflow automation',
      experience: 'Healthcare operations and process optimization',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Muhammad Hassan Raza',
      role: 'CPO',
      background: 'Product strategist designing intuitive healthcare AI experiences',
      experience: 'Healthcare product development and user experience',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    }
  ];

  const investors = [
    { name: 'Andreessen Horowitz', stage: 'Series A Lead', focus: 'Healthcare Technology' },
    { name: 'GV (Google Ventures)', stage: 'Series A', focus: 'AI & Healthcare' },
    { name: 'Bessemer Venture Partners', stage: 'Seed', focus: 'Enterprise SaaS' },
    { name: 'Stanford-StartX Fund', stage: 'Pre-Seed', focus: 'University Innovation' }
  ];

  const advisors = [
    { name: 'Dr. Robert Califf', role: 'Former FDA Commissioner', affiliation: 'Duke University' },
    { name: 'Dr. Blackford Middleton', role: 'Former CTO Johns Hopkins', affiliation: 'Apervita' },
    { name: 'Andy Slavitt', role: 'Former CMS Administrator', affiliation: 'Town Hall Ventures' },
    { name: 'Dr. Marla Erman', role: 'Former CMO Kaiser Permanente', affiliation: 'Advisory' }
  ];

  const stats = [
    { number: '500+', label: 'Healthcare Partners' },
    { number: '3.2M+', label: 'Patient Interactions' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Coverage' }
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
                Empowering Healthcare
                <span className="text-primary block">Through AI Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Founded by healthcare professionals and technologists, we're on a mission to make 
                quality healthcare accessible to everyone through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary btn-lg magnetic-btn">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="btn-lg">
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-anatomia-surface-tertiary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-on-scroll">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 stat-number" data-value={stat.number.replace(/[^0-9]/g, '')}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from product development to customer support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-6 feature-card text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Our Journey
                </Badge>
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary max-w-3xl mx-auto">
                  From a Stanford conference conversation to transforming healthcare nationwide - 
                  here's how we've grown to serve 500+ organizations.
                </p>
              </div>

              <div className="timeline">
                {timeline.map((event, index) => (
                  <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                    <Card className="timeline-card relative p-6 max-w-md">
                      <div className={`absolute -top-2 ${index % 2 === 0 ? '-right-2' : '-left-2'}`}>
                        <Badge 
                          variant={event.milestone ? 'default' : 'secondary'} 
                          className={event.milestone ? 'bg-primary text-white' : ''}
                        >
                          {event.year}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${event.milestone ? 'bg-primary' : 'bg-anatomia-state-disabled'}`} />
                          <h3 className="font-semibold text-foreground text-heading-sm">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-body-sm text-anatomia-text-secondary pl-6">
                          {event.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders from healthcare and technology working together to transform patient care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={member.name} className="p-4 feature-card text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-20 h-20 bg-anatomia-surface-tertiary rounded-full mx-auto mb-3 overflow-hidden">
                    <div className="w-full h-full bg-gradient-primary opacity-20"></div>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-anatomia-text-secondary mb-2 line-clamp-2">
                    {member.background}
                  </p>
                  <p className="text-xs text-anatomia-text-tertiary mb-3">
                    {member.experience}
                  </p>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2 py-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    LinkedIn
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investors & Advisors */}
        <section className="py-16 bg-anatomia-surface-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Investors & Advisors
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Backed by leading investors and advised by healthcare industry experts
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Investors */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-heading-lg">
                      Our Investors
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {investors.map((investor, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{investor.name}</h4>
                            <p className="text-body-sm text-anatomia-text-secondary">{investor.focus}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {investor.stage}
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Advisors */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-heading-lg">
                      Advisory Board
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {advisors.map((advisor, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                        <div>
                          <h4 className="font-semibold text-foreground">{advisor.name}</h4>
                          <p className="text-body-sm text-primary font-medium">{advisor.role}</p>
                          <p className="text-body-sm text-anatomia-text-secondary">{advisor.affiliation}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Card className="inline-block p-6 bg-primary/5 border-primary/20">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$15M</div>
                    <div className="text-body-sm text-anatomia-text-secondary">Series A Funding Raised</div>
                    <div className="text-body-xs text-anatomia-text-tertiary">Fueling our mission to transform healthcare</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Recognition */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-display-lg text-foreground mb-4">
                  Culture & Recognition
                </h2>
                <p className="text-body-lg text-anatomia-text-secondary">
                  Awards, partnerships, and what makes Anatomia a great place to work
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-anatomia-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-anatomia-warning" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Awards & Recognition</h3>
                  <div className="space-y-2 text-body-sm text-anatomia-text-secondary">
                    <div>• Forbes 30 Under 30 Healthcare (2023)</div>
                    <div>• HIMSS Innovation Award (2024)</div>
                    <div>• Fast Company Most Innovative (2024)</div>
                  </div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-anatomia-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-anatomia-success" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Company Culture</h3>
                  <div className="space-y-2 text-body-sm text-anatomia-text-secondary">
                    <div>• Remote-first, global team</div>
                    <div>• Unlimited PTO policy</div>
                    <div>• Quarterly team retreats</div>
                  </div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Diversity & Inclusion</h3>
                  <div className="space-y-2 text-body-sm text-anatomia-text-secondary">
                    <div>• 45% women in leadership</div>
                    <div>• Global talent across 12 countries</div>
                    <div>• ERG programs & mentorship</div>
                  </div>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-body-md text-anatomia-text-secondary mb-6">
                  We're always looking for passionate individuals to join our mission
                </p>
                <Button className="btn btn-primary">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join Our Mission?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you're a healthcare professional, developer, or someone passionate about 
                improving patient care, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn btn-hero bg-white text-primary hover:bg-white/90">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
                <Button className="btn btn-hero border-white/40 hover:bg-white/10">
                  <MapPin className="w-5 h-5 mr-2" />
                  Contact Us
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

export default Company;