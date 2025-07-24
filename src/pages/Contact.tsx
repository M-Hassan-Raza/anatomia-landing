import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  Video,
  Play,
  Download
} from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    hospitalSize: '',
    interests: [] as string[],
    message: '',
    demoType: 'live'
  });

  const demoOptions = [
    {
      type: 'live',
      title: 'Live Demo',
      duration: '30 minutes',
      description: 'Personalized walkthrough with our clinical experts',
      icon: Video,
      features: [
        'Customized to your workflow',
        'Q&A with clinical experts',
        'ROI calculation for your organization',
        'Implementation timeline discussion'
      ]
    },
    {
      type: 'self-guided',
      title: 'Self-Guided Tour',
      duration: '15 minutes',
      description: 'Explore the platform at your own pace',
      icon: Play,
      features: [
        'Interactive product walkthrough',
        'Sample clinical scenarios',
        'Feature exploration',
        'Instant access'
      ]
    },
    {
      type: 'video',
      title: 'Video Overview',
      duration: '5 minutes',
      description: 'Quick introduction to key capabilities',
      icon: Download,
      features: [
        'High-level platform overview',
        'Key use cases demonstrated',
        'Customer success stories',
        'No registration required'
      ]
    }
  ];

  const interestOptions = [
    'Clinical Workflow Optimization',
    'AI-Powered Triage',
    'Documentation Automation',
    'Analytics & Reporting',
    'HIPAA Compliance',
    'EHR Integration',
    'Quality Improvement',
    'Cost Reduction'
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
                  Schedule Demo
                </Badge>
                <h1 className="font-display text-display-xl text-foreground mb-6">
                  See Anatomia in{' '}
                  <span className="text-primary">Action</span>
                </h1>
                <p className="text-body-lg text-anatomia-text-secondary max-w-2xl mx-auto">
                  Experience how AI-powered clinical intelligence can transform your 
                  healthcare workflows. Choose the demo format that works best for you.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Left Sidebar - Demo Options */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h2 className="font-display text-heading-lg text-foreground mb-4">
                      Demo Options
                    </h2>
                    <p className="text-body-md text-anatomia-text-secondary mb-6">
                      Choose the format that best fits your schedule and evaluation needs.
                    </p>
                  </div>

                  {demoOptions.map((option, index) => (
                    <Card 
                      key={index}
                      className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        formData.demoType === option.type 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, demoType: option.type }))}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            formData.demoType === option.type 
                              ? 'bg-primary text-white' 
                              : 'bg-anatomia-surface-tertiary text-anatomia-text-tertiary'
                          }`}>
                            <option.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-foreground">{option.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {option.duration}
                              </Badge>
                            </div>
                            <p className="text-body-sm text-anatomia-text-secondary">
                              {option.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="pl-11">
                          <ul className="space-y-1">
                            {option.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-body-sm text-anatomia-text-tertiary">
                                <CheckCircle className="w-3 h-3 text-anatomia-success" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  ))}

                  {/* Contact Info */}
                  <Card className="p-6 bg-anatomia-surface-secondary">
                    <h3 className="font-semibold text-foreground mb-4">
                      Alternative Contact Methods
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-body-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-anatomia-text-secondary">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3 text-body-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-anatomia-text-secondary">demo@anatomia.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-body-sm">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-anatomia-text-secondary">Live chat available 24/7</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Right Content - Form */}
                <div className="lg:col-span-2">
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="font-display text-heading-lg text-foreground">
                          Request Your Demo
                        </h2>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${formStep >= 1 ? 'bg-primary' : 'bg-border'}`} />
                          <div className={`w-3 h-3 rounded-full ${formStep >= 2 ? 'bg-primary' : 'bg-border'}`} />
                          <div className={`w-3 h-3 rounded-full ${formStep >= 3 ? 'bg-primary' : 'bg-border'}`} />
                        </div>
                      </div>

                      {/* Step 1: Basic Information */}
                      {formStep === 1 && (
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-body-sm font-medium text-foreground mb-2">
                                First Name *
                              </label>
                              <Input
                                value={formData.firstName}
                                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                                required
                                className="focus-ring"
                              />
                            </div>
                            <div>
                              <label className="block text-body-sm font-medium text-foreground mb-2">
                                Last Name *
                              </label>
                              <Input
                                value={formData.lastName}
                                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                                required
                                className="focus-ring"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-body-sm font-medium text-foreground mb-2">
                              Work Email *
                            </label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              required
                              className="focus-ring"
                            />
                          </div>

                          <div>
                            <label className="block text-body-sm font-medium text-foreground mb-2">
                              Organization *
                            </label>
                            <Input
                              value={formData.company}
                              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                              required
                              className="focus-ring"
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-body-sm font-medium text-foreground mb-2">
                                Role *
                              </label>
                              <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                                <SelectTrigger className="focus-ring">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="physician">Physician</SelectItem>
                                  <SelectItem value="nurse">Nurse/Nursing Leadership</SelectItem>
                                  <SelectItem value="admin">Healthcare Administrator</SelectItem>
                                  <SelectItem value="it">IT Director</SelectItem>
                                  <SelectItem value="quality">Quality Director</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <label className="block text-body-sm font-medium text-foreground mb-2">
                                Organization Size
                              </label>
                              <Select value={formData.hospitalSize} onValueChange={(value) => setFormData(prev => ({ ...prev, hospitalSize: value }))}>
                                <SelectTrigger className="focus-ring">
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="small">1-100 beds</SelectItem>
                                  <SelectItem value="medium">101-500 beds</SelectItem>
                                  <SelectItem value="large">500+ beds</SelectItem>
                                  <SelectItem value="system">Health System</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button 
                              type="button" 
                              onClick={() => setFormStep(2)}
                              className="btn btn-primary"
                              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
                            >
                              Next Step
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Interests */}
                      {formStep === 2 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              What are you most interested in learning about? (Optional)
                            </h3>
                            <p className="text-body-sm text-anatomia-gray-700 mb-4">
                              Select all that apply to customize your demo experience.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-3">
                              {interestOptions.map((interest) => (
                                <div key={interest} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={interest}
                                    checked={formData.interests.includes(interest)}
                                    onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                                  />
                                  <label 
                                    htmlFor={interest}
                                    className="text-body-sm text-foreground cursor-pointer"
                                  >
                                    {interest}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-body-sm font-medium text-foreground mb-2">
                              Any specific questions or use cases you'd like to discuss?
                            </label>
                            <Textarea
                              value={formData.message}
                              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                              rows={4}
                              placeholder="Tell us about your current challenges or what you'd like to achieve..."
                              className="focus-ring"
                            />
                          </div>

                          <div className="flex justify-between">
                            <Button 
                              type="button" 
                              variant="outline"
                              onClick={() => setFormStep(1)}
                            >
                              Back
                            </Button>
                            <Button 
                              type="button" 
                              onClick={() => setFormStep(3)}
                              className="btn btn-primary"
                            >
                              Next Step
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Confirmation */}
                      {formStep === 3 && (
                        <div className="space-y-6">
                          <div className="bg-primary/5 rounded-lg p-6">
                            <h3 className="font-semibold text-foreground mb-4">
                              Demo Summary
                            </h3>
                            <div className="space-y-2 text-body-sm">
                              <div className="flex justify-between">
                                <span className="text-anatomia-text-secondary">Demo Type:</span>
                                <span className="font-medium">
                                  {demoOptions.find(opt => opt.type === formData.demoType)?.title}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-anatomia-text-secondary">Duration:</span>
                                <span className="font-medium">
                                  {demoOptions.find(opt => opt.type === formData.demoType)?.duration}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-anatomia-text-secondary">Contact:</span>
                                <span className="font-medium">{formData.email}</span>
                              </div>
                              {formData.interests.length > 0 && (
                                <div className="mt-3">
                                  <span className="text-anatomia-text-secondary block mb-2">Areas of Interest:</span>
                                  <div className="flex flex-wrap gap-2">
                                    {formData.interests.map((interest) => (
                                      <Badge key={interest} variant="secondary" className="text-xs">
                                        {interest}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="font-semibold text-foreground">
                              What happens next?
                            </h3>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-foreground">We'll schedule your demo</p>
                                  <p className="text-body-sm text-anatomia-text-secondary">
                                    Our team will contact you within 1 business day to schedule at your convenience
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Users className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-foreground">Meet your clinical expert</p>
                                  <p className="text-body-sm text-anatomia-text-secondary">
                                    We'll match you with a clinical expert familiar with your type of organization
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-foreground">Get your ROI analysis</p>
                                  <p className="text-body-sm text-anatomia-text-secondary">
                                    Receive a personalized ROI report based on your organization's specifics
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button 
                              type="button" 
                              variant="outline"
                              onClick={() => setFormStep(2)}
                            >
                              Back
                            </Button>
                            <Button 
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              <Calendar className="w-5 h-5 mr-2" />
                              Request Demo
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </Card>
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

export default Contact;