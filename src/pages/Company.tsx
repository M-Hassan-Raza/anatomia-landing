import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, Shield, Lightbulb, Users } from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Company = () => {
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
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former Emergency Medicine Physician, Harvard Medical School',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Former Principal Engineer at Google Health, Stanford CS',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dr. James Park',
      role: 'Chief Medical Officer',
      background: 'Former Director of Clinical Informatics, Mayo Clinic',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Engineering',
      background: 'Former Lead AI Researcher at Microsoft Healthcare',
      image: '/api/placeholder/300/300'
    }
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
        <section className="py-16 bg-anatomia-gray-100">
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

        {/* Leadership Team */}
        <section className="py-16 lg:py-24 bg-anatomia-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders from healthcare and technology working together to transform patient care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={member.name} className="p-6 feature-card text-center">
                  <div className="w-24 h-24 bg-anatomia-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-primary opacity-20"></div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Join Our Mission?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a healthcare professional, developer, or someone passionate about 
                improving patient care, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary btn-lg magnetic-btn">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="btn-lg">
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