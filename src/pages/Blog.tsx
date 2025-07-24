import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight,
  BookOpen,
  Download,
  Video,
  Mic,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Stethoscope
} from 'lucide-react';
import { AnimationProvider } from '@/components/gsap/AnimationContext';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { value: 'all', label: 'All Topics', icon: BookOpen },
    { value: 'clinical', label: 'Clinical Excellence', icon: Stethoscope },
    { value: 'compliance', label: 'Compliance & Security', icon: Shield },
    { value: 'efficiency', label: 'Operational Efficiency', icon: TrendingUp },
    { value: 'leadership', label: 'Healthcare Leadership', icon: Users }
  ];

  const contentTypes = [
    { value: 'all', label: 'All Content' },
    { value: 'article', label: 'Articles' },
    { value: 'whitepaper', label: 'Whitepapers' },
    { value: 'case-study', label: 'Case Studies' },
    { value: 'webinar', label: 'Webinars' },
    { value: 'podcast', label: 'Podcasts' }
  ];

  const featuredContent = {
    title: 'The Future of AI in Healthcare: 2024 Comprehensive Report',
    excerpt: 'Our annual analysis of AI adoption trends, ROI benchmarks, and implementation best practices across 500+ healthcare organizations.',
    category: 'Research Report',
    readTime: '45 min read',
    date: '2024-01-15',
    image: '/api/placeholder/600/300',
    author: 'Dr. Sarah Chen',
    type: 'whitepaper'
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Reducing Emergency Department Wait Times with AI-Powered Triage',
      excerpt: 'Learn how three major hospitals reduced ED wait times by 40% using intelligent triage systems.',
      category: 'clinical',
      type: 'article',
      date: '2024-01-10',
      author: 'Michael Rodriguez, RN',
      readTime: '8 min read',
      image: '/api/placeholder/300/200',
      tags: ['Emergency Medicine', 'AI Triage', 'Patient Flow']
    },
    {
      id: 2,
      title: 'HIPAA Compliance in the Age of AI: A Complete Guide',
      excerpt: 'Navigate the complex landscape of AI implementation while maintaining strict HIPAA compliance.',
      category: 'compliance',
      type: 'whitepaper',
      date: '2024-01-08',
      author: 'Lisa Thompson, JD',
      readTime: '25 min read',
      image: '/api/placeholder/300/200',
      tags: ['HIPAA', 'Compliance', 'Healthcare AI']
    },
    {
      id: 3,
      title: 'ROI Calculator: Clinical Documentation Automation',
      excerpt: 'Calculate the potential savings from automating clinical documentation in your organization.',
      category: 'efficiency',
      type: 'case-study',
      date: '2024-01-05',
      author: 'David Park, MBA',
      readTime: '12 min read',
      image: '/api/placeholder/300/200',
      tags: ['ROI', 'Documentation', 'Cost Savings']
    },
    {
      id: 4,
      title: 'Leading Change: Implementing AI in Traditional Healthcare Settings',
      excerpt: 'Change management strategies for successful AI adoption from healthcare transformation experts.',
      category: 'leadership',
      type: 'webinar',
      date: '2024-01-03',
      author: 'Dr. Jennifer Walsh',
      readTime: '60 min watch',
      image: '/api/placeholder/300/200',
      tags: ['Change Management', 'Leadership', 'AI Adoption']
    },
    {
      id: 5,
      title: 'The Healthcare AI Podcast: Episode 12 - Nurse Burnout Solutions',
      excerpt: 'Discussion with nursing leaders about reducing burnout through intelligent workflow automation.',
      category: 'clinical',
      type: 'podcast',
      date: '2024-01-01',
      author: 'Anatomia Healthcare Team',
      readTime: '45 min listen',
      image: '/api/placeholder/300/200',
      tags: ['Nursing', 'Burnout', 'Workflow Automation']
    },
    {
      id: 6,
      title: 'Security Best Practices for Healthcare AI Implementations',
      excerpt: 'Essential security measures every healthcare organization should implement when deploying AI solutions.',
      category: 'compliance',
      type: 'article',
      date: '2023-12-28',
      author: 'Robert Kim, CISSP',
      readTime: '10 min read',
      image: '/api/placeholder/300/200',
      tags: ['Security', 'Best Practices', 'Implementation']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesType = selectedType === 'all' || post.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'whitepaper': return BookOpen;
      case 'webinar': return Video;
      case 'podcast': return Mic;
      case 'case-study': return TrendingUp;
      default: return FileText;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
                  <BookOpen className="w-4 h-4 mr-2" />
                  Resources & Insights
                </Badge>
                <h1 className="font-display text-display-xl text-foreground mb-6">
                  Healthcare Intelligence{' '}
                  <span className="text-primary">Hub</span>
                </h1>
                <p className="text-body-lg text-anatomia-text-secondary max-w-3xl mx-auto mb-8">
                  Stay ahead of healthcare innovation with expert insights, research reports, 
                  and practical guides for implementing AI in clinical workflows.
                </p>
                
                {/* Newsletter Signup */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email for updates"
                    className="flex-1"
                  />
                  <Button className="btn btn-primary">
                    Subscribe
                  </Button>
                </div>
                <p className="text-body-xs text-anatomia-text-tertiary mt-2">
                  Weekly insights • No spam • Unsubscribe anytime
                </p>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <h2 className="font-display text-heading-xl text-foreground mb-2">
                    Featured Content
                  </h2>
                  <p className="text-body-md text-anatomia-text-secondary">
                    Our latest and most comprehensive resources
                  </p>
                </div>

                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] lg:aspect-auto">
                      <img 
                        src={featuredContent.image} 
                        alt={featuredContent.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {featuredContent.category}
                          </Badge>
                          <div className="flex items-center space-x-2 text-body-sm text-anatomia-text-tertiary">
                            <Clock className="w-4 h-4" />
                            <span>{featuredContent.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-display text-heading-lg text-foreground">
                          {featuredContent.title}
                        </h3>
                        
                        <p className="text-body-md text-anatomia-text-secondary">
                          {featuredContent.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center space-x-2 text-body-sm text-anatomia-text-tertiary">
                            <User className="w-4 h-4" />
                            <span>{featuredContent.author}</span>
                            <span>•</span>
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(featuredContent.date)}</span>
                          </div>
                          
                          <Button className="btn btn-primary">
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-8 bg-anatomia-surface-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                  {/* Search */}
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anatomia-text-tertiary w-4 h-4" />
                      <Input
                        placeholder="Search articles, whitepapers, case studies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filter by topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center space-x-2">
                              <category.icon className="w-4 h-4" />
                              <span>{category.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Content type" />
                      </SelectTrigger>
                      <SelectContent>
                        {contentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-4 text-body-sm text-anatomia-text-tertiary">
                  {filteredPosts.length} resources found
                </div>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => {
                    const ContentTypeIcon = getContentTypeIcon(post.type);
                    const categoryInfo = categories.find(cat => cat.value === post.category);
                    
                    return (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {categoryInfo && (
                                <Badge variant="outline" className="text-xs">
                                  <categoryInfo.icon className="w-3 h-3 mr-1" />
                                  {categoryInfo.label}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-1 text-anatomia-text-tertiary">
                              <ContentTypeIcon className="w-4 h-4" />
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-heading-sm text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-body-sm text-anatomia-text-secondary line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2 text-body-xs text-anatomia-text-tertiary">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-4 text-body-xs text-anatomia-text-tertiary">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{formatDate(post.date)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="group-hover:text-primary">
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
                
                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" className="btn-lg">
                    Load More Content
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Resource Library CTA */}
          <section className="py-16 bg-gradient-primary">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto text-primary-foreground">
                <h2 className="font-display text-display-lg mb-4">
                  Need More Specific Resources?
                </h2>
                <p className="text-body-lg opacity-90 mb-8">
                  Our team can provide customized research, ROI analyses, and implementation 
                  guides tailored to your organization's specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn btn-hero bg-white text-primary hover:bg-white/90">
                    Request Custom Research
                  </Button>
                  <Button className="btn btn-hero border-white/40 hover:bg-white/10">
                    <Download className="w-5 h-5 mr-2" />
                    Resource Library
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

export default Blog;