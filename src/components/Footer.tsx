import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Shield, Award, CheckCircle, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Security', href: '#security' },
      { name: 'API Docs', href: '#api' },
      { name: 'Pricing', href: '#pricing' }
    ],
    solutions: [
      { name: 'For Hospitals', href: '#hospitals' },
      { name: 'For Clinics', href: '#clinics' },
      { name: 'For Health Systems', href: '#health-systems' },
      { name: 'For Developers', href: '#developers' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Whitepapers', href: '#whitepapers' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'ROI Calculator', href: '#roi' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  const complianceBadges = [
    { icon: Shield, text: "HIPAA" },
    { icon: Award, text: "SOC 2" },
    { icon: CheckCircle, text: "HITRUST" }
  ];

  return (
    <footer className="bg-anatomia-gray-900 text-anatomia-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-anatomia-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-display text-heading-lg text-white">
              Stay Updated on Healthcare Innovation
            </h3>
            <p className="text-body-md text-anatomia-gray-400">
              Get the latest insights on AI in healthcare, regulatory updates, and product news.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-anatomia-gray-800 border border-anatomia-gray-700 rounded-xl text-white placeholder-anatomia-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button className="btn btn-primary">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-body-xs text-anatomia-gray-500">
              No spam. Unsubscribe anytime. Read our{' '}
              <a href="#privacy" className="text-primary hover:underline">privacy policy</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">Anatomia</span>
            </div>
            
            <p className="text-body-md text-anatomia-gray-400 max-w-sm">
              Transforming healthcare through AI-powered clinical intelligence. 
              Trusted by 500+ healthcare organizations worldwide.
            </p>

            {/* Compliance Badges */}
            <div className="space-y-3">
              <p className="text-body-sm font-medium text-anatomia-gray-300">
                Healthcare Compliance
              </p>
              <div className="flex flex-wrap gap-3">
                {complianceBadges.map((badge, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-anatomia-gray-800 text-anatomia-gray-300 border-anatomia-gray-700"
                  >
                    <badge.icon className="w-3 h-3 mr-2" />
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#linkedin" className="p-2 bg-anatomia-gray-800 rounded-lg hover:bg-anatomia-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#twitter" className="p-2 bg-anatomia-gray-800 rounded-lg hover:bg-anatomia-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#github" className="p-2 bg-anatomia-gray-800 rounded-lg hover:bg-anatomia-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-anatomia-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white">Solutions</h4>
            <ul className="space-y-3">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-anatomia-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-anatomia-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-3 mb-6">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-anatomia-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-anatomia-gray-800">
              <h5 className="font-semibold text-white mb-3">Legal</h5>
              <ul className="space-y-2">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-anatomia-gray-500 text-body-sm hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-anatomia-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-body-sm text-anatomia-gray-500">
              © 2024 Anatomia, Inc. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-body-sm text-anatomia-gray-500">
              <span>Built with ❤️ for healthcare</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-anatomia-success rounded-full animate-pulse"></div>
                <span>System Status: All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;