import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-header transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-anatomia-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Anatomia</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-anatomia-gray-700 hover:text-primary transition-colors">
                <span>Product</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>
            <a href="#solutions" className="text-anatomia-gray-700 hover:text-primary transition-colors">Solutions</a>
            <a href="#pricing" className="text-anatomia-gray-700 hover:text-primary transition-colors">Pricing</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-anatomia-gray-700 hover:text-primary transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>
            <a href="#company" className="text-anatomia-gray-700 hover:text-primary transition-colors">Company</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-anatomia-gray-700">
              Login
            </Button>
            <Button className="btn btn-primary">
              Get Demo
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-anatomia-gray-700 hover:text-primary transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu ${isOpen ? 'active' : ''} fixed inset-y-0 right-0 w-80 bg-background border-l border-border shadow-anatomia-lg z-50`}>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <a href="#product" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors">Product</a>
            <a href="#solutions" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors">Solutions</a>
            <a href="#pricing" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors">Pricing</a>
            <a href="#resources" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors">Resources</a>
            <a href="#company" className="block text-lg text-anatomia-gray-700 hover:text-primary transition-colors">Company</a>
          </div>
          
          <div className="pt-6 border-t border-border space-y-3">
            <Button variant="ghost" className="w-full justify-start text-left">
              Login
            </Button>
            <Button className="w-full btn btn-primary">
              Get Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;