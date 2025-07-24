import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global GSAP configuration
gsap.defaults({
  ease: "power2.inOut",
  duration: 0.6
});

// Animation timing constants
export const TIMING = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  stagger: 0.08
};

// Custom ease curves
const anatomiaEase = "M0,0 C0.25,0.1 0.25,1 1,1";
const anatomiaSpring = "M0,0 C0.5,0 0.15,1 1,1";

interface AnimationContextType {
  TIMING: typeof TIMING;
  gsap: typeof gsap;
  anatomiaEase: string;
  anatomiaSpring: string;
}

const AnimationContext = createContext<AnimationContextType>({
  TIMING,
  gsap,
  anatomiaEase,
  anatomiaSpring
});

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Set up refresh on route changes
      ScrollTrigger.refresh();
      isInitialized.current = true;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const value: AnimationContextType = {
    TIMING,
    gsap,
    anatomiaEase,
    anatomiaSpring
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};