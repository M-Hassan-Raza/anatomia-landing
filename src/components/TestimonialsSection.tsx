import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const TestimonialsSection = () => {
  const { animateScrollSections, animateStaggeredLists } = useGSAPAnimation();

  useEffect(() => {
    animateScrollSections();
    animateStaggeredLists();
  }, [animateScrollSections, animateStaggeredLists]);

  const testimonials = [
    {
      quote: "Anatomia has revolutionized our triage process. What used to take 15 minutes of documentation now takes under 2 minutes, allowing our nurses to focus on patient care.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      organization: "St. Mary's Hospital",
      organizationType: "500-bed acute care hospital",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      metrics: "73% reduction in triage time"
    },
    {
      quote: "The AI insights help our physicians make more informed decisions. The system catches details that might be missed during busy shifts, improving patient safety.",
      author: "Michael Rodriguez, RN",
      role: "Charge Nurse, Emergency Department",
      organization: "Regional Medical Center",
      organizationType: "Level 1 trauma center",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      metrics: "45% improvement in diagnostic accuracy"
    },
    {
      quote: "From an administrative standpoint, the compliance reporting and audit trails have been invaluable. HIPAA compliance is seamless and transparent.",
      author: "Lisa Thompson",
      role: "Healthcare IT Director",
      organization: "Metro Health System",
      organizationType: "Multi-facility health system",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      metrics: "99.9% compliance audit score"
    }
  ];

  const stats = [
    { value: "4.9", label: "Average Rating", suffix: "/5" },
    { value: "500", label: "Healthcare Partners", suffix: "+" },
    { value: "98", label: "Customer Satisfaction", suffix: "%" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-anatomia-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Customer Stories
          </Badge>
          <h2 className="font-display text-display-lg text-foreground mb-4">
            Trusted by Healthcare Leaders{' '}
            <span className="text-primary">Nationwide</span>
          </h2>
          <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto">
            See how healthcare organizations are transforming patient care with Anatomia's 
            AI-powered clinical intelligence platform.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="animate-on-scroll mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-8 px-8 bg-white rounded-2xl shadow-anatomia-sm">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span 
                    className="stat-number font-display text-2xl font-bold text-primary"
                    data-value={stat.value.replace(/[^0-9]/g, '')}
                  >
                    0
                  </span>
                  <span className="text-lg font-semibold text-anatomia-gray-600">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-body-sm text-anatomia-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="stagger-list grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="stagger-item testimonial-card interactive-element bg-white">
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-body-md text-anatomia-gray-800 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Metrics */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-body-sm font-semibold text-primary">
                    Key Result: {testimonial.metrics}
                  </p>
                </div>

                {/* Author */}
                <div className="border-t pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-body-md">
                        {testimonial.author}
                      </h4>
                      <p className="text-body-sm text-anatomia-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-body-sm font-medium text-primary">
                        {testimonial.organization}
                      </p>
                      <p className="text-body-xs text-anatomia-gray-500">
                        {testimonial.organizationType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
            <div className="space-y-4">
              <h3 className="font-display text-heading-lg">
                Join These Healthcare Leaders
              </h3>
              <p className="text-body-md opacity-90 max-w-md">
                See how Anatomia can transform your clinical workflows with a personalized demo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="btn btn-hero bg-white text-primary hover:bg-white/90">
                  Schedule Your Demo
                </button>
                <button className="btn btn-hero border-white/40 hover:bg-white/10">
                  Read More Stories
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;