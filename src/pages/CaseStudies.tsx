import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Award,
  ChevronRight,
  Download,
  Filter,
  Search
} from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'Regional Medical Center Reduces Triage Time by 73%',
      organization: 'Regional Medical Center',
      type: 'Level 1 Trauma Center',
      size: 'large',
      specialty: 'emergency',
      location: 'Phoenix, AZ',
      beds: 450,
      image: '/api/placeholder/400/250',
      challenge: 'Overwhelming ED call volume with 15-minute average triage documentation time',
      solution: 'AI-powered triage automation with real-time clinical decision support',
      results: {
        primaryMetric: '73% reduction in triage time',
        timeReduction: '15 min → 4 min',
        costSavings: '$2.3M annually',
        patientSatisfaction: '+42%',
        additionalMetrics: [
          'Reduced nurse overtime by 35%',
          'Improved patient flow efficiency',
          'Enhanced clinical accuracy by 28%'
        ]
      },
      testimonial: {
        quote: "Anatomia has transformed our emergency department. Our nurses can now focus on patient care instead of documentation.",
        author: "Dr. Maria Rodriguez",
        role: "Emergency Department Director"
      },
      timeline: '3 months to full implementation',
      category: 'emergency'
    },
    {
      id: 2,
      title: 'Metro Health System Achieves 99.9% HIPAA Compliance',
      organization: 'Metro Health System',
      type: 'Multi-facility Health System',
      size: 'enterprise',
      specialty: 'system',
      location: 'Chicago, IL',
      beds: 1200,
      image: '/api/placeholder/400/250',
      challenge: 'Complex compliance tracking across 8 facilities with inconsistent documentation',
      solution: 'Automated compliance monitoring with centralized audit trails',
      results: {
        primaryMetric: '99.9% HIPAA compliance rate',
        timeReduction: '80% reduction in audit prep time',
        costSavings: '$1.8M in avoided penalties',
        patientSatisfaction: '+25%',
        additionalMetrics: [
          'Streamlined compliance reporting',
          'Reduced regulatory risk',
          'Improved staff confidence'
        ]
      },
      testimonial: {
        quote: "The automated compliance features have eliminated our audit anxiety and improved our overall risk posture.",
        author: "Lisa Thompson",
        role: "Chief Compliance Officer"
      },
      timeline: '6 months system-wide rollout',
      category: 'compliance'
    },
    {
      id: 3,
      title: 'Community Hospital Improves Patient Outcomes with AI Insights',
      organization: 'Westside Community Hospital',
      type: 'Community Hospital',
      size: 'medium',
      specialty: 'general',
      location: 'Portland, OR',
      beds: 180,
      image: '/api/placeholder/400/250',
      challenge: 'Missed clinical indicators leading to delayed diagnoses and readmissions',
      solution: 'AI-powered clinical insights with early warning systems',
      results: {
        primaryMetric: '32% reduction in readmissions',
        timeReduction: '45% faster diagnosis time',
        costSavings: '$850K annually',
        patientSatisfaction: '+38%',
        additionalMetrics: [
          'Improved clinical decision making',
          'Enhanced patient safety scores',
          'Reduced length of stay by 1.2 days'
        ]
      },
      testimonial: {
        quote: "The AI insights help us catch things we might have missed, leading to better patient outcomes.",
        author: "Dr. Sarah Chen",
        role: "Chief Medical Officer"
      },
      timeline: '4 months to full deployment',
      category: 'clinical'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Case Studies' },
    { value: 'emergency', label: 'Emergency Medicine' },
    { value: 'compliance', label: 'Compliance & Risk' },
    { value: 'clinical', label: 'Clinical Outcomes' },
    { value: 'efficiency', label: 'Operational Efficiency' }
  ];

  const sizeOptions = [
    { value: 'all', label: 'All Sizes' },
    { value: 'small', label: 'Small (< 100 beds)' },
    { value: 'medium', label: 'Medium (100-500 beds)' },
    { value: 'large', label: 'Large (500+ beds)' },
    { value: 'enterprise', label: 'Health Systems' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedFilter === 'all' || study.category === selectedFilter;
    const matchesSize = selectedSize === 'all' || study.size === selectedSize;
    return matchesCategory && matchesSize;
  });

  const aggregateMetrics = {
    avgTimeReduction: '67%',
    avgCostSavings: '$1.7M',
    avgSatisfactionIncrease: '35%',
    totalOrganizations: '500+'
  };

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
                  Success Stories
                </Badge>
                <h1 className="font-display text-display-xl text-foreground mb-6">
                  Real Results from{' '}
                  <span className="text-primary">Healthcare Leaders</span>
                </h1>
                <p className="text-body-lg text-anatomia-gray-700 max-w-3xl mx-auto mb-8">
                  See how healthcare organizations across the country are transforming 
                  their clinical workflows and improving patient outcomes with Anatomia.
                </p>
              </div>
            </div>
          </section>

          {/* Aggregate Results */}
          <section className="py-12 bg-white border-b">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {aggregateMetrics.avgTimeReduction}
                    </div>
                    <div className="text-body-sm text-anatomia-gray-700">
                      Average Time Reduction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-anatomia-success mb-2">
                      {aggregateMetrics.avgCostSavings}
                    </div>
                    <div className="text-body-sm text-anatomia-gray-700">
                      Average Annual Savings
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-anatomia-info mb-2">
                      {aggregateMetrics.avgSatisfactionIncrease}
                    </div>
                    <div className="text-body-sm text-anatomia-gray-700">
                      Patient Satisfaction Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-anatomia-warning mb-2">
                      {aggregateMetrics.totalOrganizations}
                    </div>
                    <div className="text-body-sm text-anatomia-gray-700">
                      Healthcare Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 bg-anatomia-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-anatomia-gray-600" />
                    <span className="font-medium text-foreground">
                      {filteredCaseStudies.length} case studies
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                  {filteredCaseStudies.map((study, index) => (
                    <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="grid lg:grid-cols-3 gap-8 p-8">
                        {/* Left Column - Image and Organization Info */}
                        <div className="space-y-6">
                          <div className="aspect-video bg-anatomia-gray-200 rounded-lg overflow-hidden">
                            <img 
                              src={study.image} 
                              alt={study.organization}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Building2 className="w-5 h-5 text-primary" />
                              <span className="font-semibold text-foreground">
                                {study.organization}
                              </span>
                            </div>
                            
                            <div className="space-y-2 text-body-sm text-anatomia-gray-700">
                              <div className="flex items-center space-x-2">
                                <Award className="w-4 h-4 text-anatomia-gray-500" />
                                <span>{study.type}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-anatomia-gray-500" />
                                <span>{study.beds} beds • {study.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-anatomia-gray-500" />
                                <span>{study.timeline}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Middle Column - Challenge & Solution */}
                        <div className="space-y-6">
                          <div>
                            <h2 className="font-display text-heading-lg text-foreground mb-4">
                              {study.title}
                            </h2>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                The Challenge
                              </h3>
                              <p className="text-body-sm text-anatomia-gray-700">
                                {study.challenge}
                              </p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                The Solution
                              </h3>
                              <p className="text-body-sm text-anatomia-gray-700">
                                {study.solution}
                              </p>
                            </div>
                          </div>
                          
                          {/* Testimonial */}
                          <div className="p-4 bg-anatomia-gray-50 rounded-lg">
                            <p className="text-body-sm text-anatomia-gray-800 italic mb-3">
                              "{study.testimonial.quote}"
                            </p>
                            <div className="text-body-xs">
                              <div className="font-semibold text-foreground">
                                {study.testimonial.author}
                              </div>
                              <div className="text-anatomia-gray-600">
                                {study.testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Results */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-4">
                              Key Results
                            </h3>
                            
                            <div className="space-y-4">
                              {/* Primary Metric */}
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                                <div className="text-2xl font-bold text-primary mb-1">
                                  {study.results.primaryMetric}
                                </div>
                                <div className="text-body-xs text-anatomia-gray-600">
                                  Primary Outcome
                                </div>
                              </div>
                              
                              {/* Secondary Metrics */}
                              <div className="grid grid-cols-2 gap-3">
                                <div className="text-center p-3 bg-anatomia-gray-50 rounded-lg">
                                  <div className="font-bold text-anatomia-success">
                                    {study.results.timeReduction}
                                  </div>
                                  <div className="text-body-xs text-anatomia-gray-600">
                                    Time Saved
                                  </div>
                                </div>
                                
                                <div className="text-center p-3 bg-anatomia-gray-50 rounded-lg">
                                  <div className="font-bold text-anatomia-info">
                                    {study.results.costSavings}
                                  </div>
                                  <div className="text-body-xs text-anatomia-gray-600">
                                    Annual Savings
                                  </div>
                                </div>
                              </div>
                              
                              {/* Additional Metrics */}
                              <div className="space-y-2">
                                {study.results.additionalMetrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="flex items-center space-x-2 text-body-sm">
                                    <TrendingUp className="w-4 h-4 text-anatomia-success" />
                                    <span className="text-anatomia-gray-700">{metric}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button className="w-full btn btn-primary">
                              <Download className="w-4 h-4 mr-2" />
                              Download Full Study
                            </Button>
                            <Button variant="outline" className="w-full">
                              View Similar Cases
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-primary">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto text-primary-foreground">
                <h2 className="font-display text-display-lg mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-body-lg opacity-90 mb-8">
                  Join these healthcare leaders in transforming clinical workflows 
                  and improving patient outcomes with Anatomia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn btn-hero bg-white text-primary hover:bg-white/90">
                    Schedule Your Demo
                  </Button>
                  <Button className="btn btn-hero border-white/40 hover:bg-white/10">
                    <Download className="w-5 h-5 mr-2" />
                    Get ROI Calculator
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

export default CaseStudies;