import { useEffect } from 'react';
import { useGSAPAnimation } from './gsap/useGSAPAnimation';

const SocialProofBar = () => {
  const { gsap } = useGSAPAnimation();

  // Mock healthcare organization logos (in a real app, these would be actual logos)
  const partners = [
    "Mayo Clinic Network",
    "Kaiser Permanente",
    "Cleveland Clinic",
    "Johns Hopkins Medicine", 
    "Partners HealthCare",
    "UCSF Health",
    "Presbyterian Healthcare",
    "Intermountain Healthcare"
  ];

  useEffect(() => {
    // Infinite scroll animation for partner logos
    const scrollElements = document.querySelectorAll('.partner-scroll');
    
    scrollElements.forEach((element: any) => {
      const width = element.scrollWidth / 2;
      
      gsap.to(element, {
        x: -width,
        duration: 30,
        ease: "none",
        repeat: -1
      });
    });
  }, [gsap]);

  return (
    <section className="py-12 bg-anatomia-gray-100/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-body-sm text-anatomia-gray-600 font-medium">
            Trusted by 500+ Healthcare Organizations
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-anatomia-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-anatomia-gray-100 to-transparent z-10"></div>
          
          {/* Scrolling partner names */}
          <div className="partner-scroll flex items-center space-x-16 whitespace-nowrap">
            {/* First set */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <span className="text-anatomia-gray-600 font-medium text-lg tracking-wide">
                  {partner}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <span className="text-anatomia-gray-600 font-medium text-lg tracking-wide">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;