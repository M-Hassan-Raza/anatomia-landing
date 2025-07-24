import { useEffect } from 'react';
import { useAnimation } from './AnimationContext';
import { 
  animationUtils, 
  pageAnimations,
  ANIMATION_PRESETS,
  ANIMATION_TIMING,
  ANIMATION_EASE 
} from '@/lib/animations';

export const useGSAPAnimation = () => {
  const { gsap, TIMING } = useAnimation();

  // Use centralized hero animation
  const animateHero = () => pageAnimations.hero.init();

  // Use centralized animation utilities
  const addMagneticEffect = () => animationUtils.addMagneticEffect('.magnetic-btn');
  const addParallaxEffect = () => animationUtils.addParallaxEffect('.parallax-element');
  const animateFeatureCards = () => pageAnimations.features.init();
  const animateCounters = () => pageAnimations.metrics.init();
  const animatePricingCards = () => pageAnimations.pricing.init();
  const animateTimeline = () => pageAnimations.timeline.init();
  
  const setupHoverEffects = () => {
    document.querySelectorAll('.interactive-card').forEach((card: any) => {
      animationUtils.createHoverTimeline(card, [
        {
          props: {
            y: -8,
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            duration: ANIMATION_TIMING.fast,
          }
        },
        {
          target: card.querySelector('.card-icon'),
          props: {
            scale: 1.2,
            rotation: 10,
            duration: ANIMATION_TIMING.fast,
          },
          position: 0,
        }
      ]);
    });
  };
  
  const animateScrollSections = () => {
    // Premium subtle animations only
    const premiumAnimations = [
      ANIMATION_PRESETS.fadeInUp,
      ANIMATION_PRESETS.scaleInSubtle,
      ANIMATION_PRESETS.slideInUpGentle,
      ANIMATION_PRESETS.gentleFlipX
    ];
    
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any, index: number) => {
      const animation = premiumAnimations[index % premiumAnimations.length];
      animationUtils.animateOnScroll(element, animation);
    });
  };
  
  const animateStaggeredLists = () => {
    gsap.utils.toArray('.stagger-list').forEach((list: any) => {
      animationUtils.staggerChildren(list, '.stagger-item', ANIMATION_PRESETS.fadeInUp);
    });
  };

  // Text effects
  const addTextEffects = () => {
    pageAnimations.textEffects.init();
  };

  // Advanced animations
  const addFloatingElements = () => {
    animationUtils.floatingAnimation('.floating-element', 20);
  };

  const addGlitchEffect = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      Array.from(elements).forEach(element => {
        element.addEventListener('mouseenter', () => {
          animationUtils.glitchEffect(element);
        });
      });
    }
  };

  const createTypewriter = (selector: string, text: string) => {
    const element = document.querySelector(selector);
    if (element) {
      animationUtils.typeWriter(element, text);
    }
  };

  const createRollingText = (selector: string, texts: string[]) => {
    const element = document.querySelector(selector);
    if (element) {
      animationUtils.createRollingText(element, texts);
    }
  };

  return {
    animateHero,
    animateFeatureCards,
    animateCounters,
    animatePricingCards,
    animateTimeline,
    setupHoverEffects,
    animateScrollSections,
    animateStaggeredLists,
    addMagneticEffect,
    addParallaxEffect,
    addTextEffects,
    addFloatingElements,
    addGlitchEffect,
    createTypewriter,
    createRollingText,
    gsap,
    TIMING
  };
};