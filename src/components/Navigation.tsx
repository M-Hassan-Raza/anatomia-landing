import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { useGSAPAnimation } from '@/components/gsap/useGSAPAnimation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { gsap, TIMING } = useGSAPAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple logo animation
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: TIMING.normal, ease: "power2.out" }
      );
    }
  }, [gsap, TIMING]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: TIMING.normal, ease: "power2.out" }
        );
        
        // Animate menu items
        gsap.fromTo(mobileMenuRef.current.querySelectorAll('.mobile-menu-item'),
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: TIMING.normal, stagger: TIMING.stagger, delay: 0.1 }
        );
      }
    }
  }, [isOpen, gsap, TIMING]);

  const productDropdownItems = [
    { name: 'AI Triage System', desc: 'Smart patient call routing' },
    { name: 'Clinical Dashboard', desc: 'Real-time case management' },
    { name: 'Analytics Suite', desc: 'Performance insights' },
    { name: 'API Platform', desc: 'Developer tools' }
  ];

  const resourcesDropdownItems = [
    { name: 'Case Studies', desc: 'Success stories', href: '/case-studies' },
    { name: 'Blog', desc: 'Latest insights', href: '/blog' },
    { name: 'Security', desc: 'Compliance & safety', href: '/security' },
    { name: 'Documentation', desc: 'Technical guides', href: '#' }
  ];

  return (
    <>
      <nav className={`nav-header transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-anatomia-sm border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Enhanced Logo */}
          <div ref={logoRef} className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-anatomia-primary group">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform">A</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-hero font-bold text-xl text-foreground tracking-tight">
              Anatomia
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {/* Product Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('product')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-anatomia-gray-700 hover:text-primary transition-colors font-medium">
                  <span>Product</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Enhanced Dropdown */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-2xl shadow-anatomia-lg p-4 transition-all duration-300 ${
                  activeDropdown === 'product' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="space-y-3">
                    {productDropdownItems.map((item, index) => (
                      <a 
                        key={item.name}
                        href="#" 
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-anatomia-gray-100 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/solutions" className="text-anatomia-gray-700 hover:text-primary transition-colors font-medium">Solutions</a>
              <a href="/pricing" className="text-anatomia-gray-700 hover:text-primary transition-colors font-medium">Pricing</a>
              
              {/* Resources Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-anatomia-gray-700 hover:text-primary transition-colors font-medium">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-2xl shadow-anatomia-lg p-4 transition-all duration-300 ${
                  activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="space-y-2">
                    {resourcesDropdownItems.map((item) => (
                      <a 
                        key={item.name}
                        href={item.href} 
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-anatomia-gray-100 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/company" className="text-anatomia-gray-700 hover:text-primary transition-colors font-medium">Company</a>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-anatomia-gray-700 hover:text-primary font-medium">
                <a href="https://anatomia.entropyand.co" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button className="btn btn-primary font-semibold">
                <a href="/demo" className="text-white">Get Started</a>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-anatomia-gray-700 hover:text-primary transition-colors relative group"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-background border-l border-border shadow-anatomia-lg z-50 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mobile-menu-item">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-hero font-bold text-lg">Anatomia</span>
              </div>
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <div className="mobile-menu-item">
                <h3 className="font-semibold text-foreground mb-3">Product</h3>
                <div className="space-y-2 ml-4">
                  {productDropdownItems.map((item) => (
                    <a key={item.name} href="#" className="block text-anatomia-gray-700 hover:text-primary transition-colors py-2">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="/solutions" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors mobile-menu-item">Solutions</a>
              <a href="/pricing" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors mobile-menu-item">Pricing</a>
              
              <div className="mobile-menu-item">
                <h3 className="font-semibold text-foreground mb-3">Resources</h3>
                <div className="space-y-2 ml-4">
                  {resourcesDropdownItems.map((item) => (
                    <a key={item.name} href={item.href} className="block text-anatomia-gray-700 hover:text-primary transition-colors py-2">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="/company" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors mobile-menu-item">Company</a>
            </div>
            
            {/* Mobile CTA Section */}
            <div className="pt-6 border-t border-border space-y-3 mobile-menu-item">
              <Button variant="ghost" className="w-full justify-start text-left font-medium">
                <a href="https://anatomia.entropyand.co" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button className="w-full btn btn-primary font-semibold">
                <a href="/demo" className="text-white">Get Started</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;