import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation timing constants
export const ANIMATION_TIMING = {
  instant: 0,
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 0.8,
  stagger: 0.08,
  staggerSlow: 0.12,
} as const;

// Easing functions
export const ANIMATION_EASE = {
  // Standard eases
  default: 'power2.inOut',
  in: 'power2.in',
  out: 'power2.out',
  inOut: 'power2.inOut',
  
  // Special eases
  bounce: 'bounce.out',
  elastic: 'elastic.out(1, 0.3)',
  back: 'back.out(1.7)',
  
  // Custom eases
  anatomiaEase: 'M0,0 C0.25,0.1 0.25,1 1,1',
  anatomiaSpring: 'M0,0 C0.5,0 0.15,1 1,1',
} as const;

// Animation presets
export const ANIMATION_PRESETS = {
  // Fade animations
  fadeIn: {
    opacity: 0,
    duration: ANIMATION_TIMING.normal,
    ease: ANIMATION_EASE.out,
  },
  fadeInUp: {
    opacity: 0,
    y: 50,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  fadeInDown: {
    opacity: 0,
    y: -50,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  fadeInLeft: {
    opacity: 0,
    x: -60,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  fadeInRight: {
    opacity: 0,
    x: 60,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  
  // Scale animations
  scaleIn: {
    scale: 0.7,
    opacity: 0,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.back,
  },
  scaleInRotate: {
    scale: 0.5,
    rotation: -180,
    opacity: 0,
    duration: ANIMATION_TIMING.verySlow,
    ease: ANIMATION_EASE.back,
  },
  
  // Bounce animations
  bounceIn: {
    scale: 0.3,
    opacity: 0,
    duration: ANIMATION_TIMING.verySlow,
    ease: ANIMATION_EASE.bounce,
  },
  
  // Slide animations
  slideInLeft: {
    x: '-100%',
    opacity: 0,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  slideInRight: {
    x: '100%',
    opacity: 0,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  
  // Exciting new animations
  flipInX: {
    rotationX: -90,
    opacity: 0,
    transformOrigin: '50% 50%',
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.back,
  },
  flipInY: {
    rotationY: -90,
    opacity: 0,
    transformOrigin: '50% 50%',
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.back,
  },
  zoomInRotate: {
    scale: 0.5,
    rotation: 360,
    opacity: 0,
    duration: ANIMATION_TIMING.verySlow,
    ease: ANIMATION_EASE.elastic,
  },
  slideInUpBig: {
    y: 100,
    opacity: 0,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.back,
  },
  rollIn: {
    x: -100,
    rotation: -120,
    opacity: 0,
    duration: ANIMATION_TIMING.slow,
    ease: ANIMATION_EASE.out,
  },
  wobble: {
    x: 0,
    skewX: 0,
    skewY: 0,
    duration: ANIMATION_TIMING.normal,
    ease: ANIMATION_EASE.out,
  },
} as const;

// ScrollTrigger presets
export const SCROLL_TRIGGER_PRESETS = {
  fadeInOnScroll: {
    trigger: null, // Will be set dynamically
    start: 'top 80%',
    end: 'top 50%',
    toggleActions: 'play none none reverse',
  },
  parallax: {
    trigger: null,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
  pinSection: {
    trigger: null,
    start: 'top top',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  },
} as const;

// Animation utilities
export const animationUtils = {
  // Stagger children elements
  staggerChildren: (parent: string | Element, childSelector: string, animation: any, staggerTime = ANIMATION_TIMING.stagger) => {
    const parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent;
    if (!parentEl) return;
    
    const children = parentEl.querySelectorAll(childSelector);
    if (!children || children.length === 0) return;
    
    return gsap.from(Array.from(children), {
      ...animation,
      stagger: staggerTime,
    });
  },
  
  // Animate on scroll with intersection observer
  animateOnScroll: (elements: string | NodeList, animation: any, scrollTriggerOptions = {}) => {
    const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    
    if (!els || els.length === 0) return;
    
    Array.from(els).forEach((el) => {
      gsap.from(el, {
        ...animation,
        scrollTrigger: {
          trigger: el,
          ...SCROLL_TRIGGER_PRESETS.fadeInOnScroll,
          ...scrollTriggerOptions,
        },
      });
    });
  },
  
  // Counter animation
  animateCounter: (element: string | Element, endValue: number, duration = 2, prefix = '', suffix = '') => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    const target = { value: 0 };
    return gsap.to(target, {
      value: endValue,
      duration,
      ease: ANIMATION_EASE.out,
      onUpdate: () => {
        if (el) {
          el.textContent = `${prefix}${Math.round(target.value).toLocaleString()}${suffix}`;
        }
      },
    });
  },
  
  // Magnetic effect for buttons
  addMagneticEffect: (elements: string | NodeList) => {
    const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    
    if (!els || els.length === 0) return;
    
    Array.from(els).forEach((el: any) => {
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: ANIMATION_EASE.out,
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: ANIMATION_EASE.elastic,
        });
      });
    });
  },
  
  // Parallax effect
  addParallaxEffect: (elements: string | NodeList, speed = 0.5) => {
    const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    
    if (!els || els.length === 0) return;
    
    Array.from(els).forEach((el: any) => {
      const elementSpeed = el.getAttribute('data-speed') || speed;
      
      gsap.to(el, {
        yPercent: -50 * elementSpeed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          ...SCROLL_TRIGGER_PRESETS.parallax,
        },
      });
    });
  },
  
  // Hover timeline creator
  createHoverTimeline: (element: Element, animations: any[]) => {
    const tl = gsap.timeline({ paused: true });
    
    animations.forEach((anim) => {
      tl.to(anim.target || element, anim.props, anim.position || '');
    });
    
    element.addEventListener('mouseenter', () => tl.play());
    element.addEventListener('mouseleave', () => tl.reverse());
    
    return tl;
  },
  
  // Text split animation
  animateTextSplit: (element: string | Element, splitType: 'chars' | 'words' | 'lines' = 'chars') => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el || !el.textContent) return;
    
    const text = el.textContent;
    el.innerHTML = '';
    
    const splits = splitType === 'chars' 
      ? text.split('') 
      : splitType === 'words' 
      ? text.split(' ') 
      : text.split('\n');
    
    splits.forEach((split, i) => {
      const span = document.createElement('span');
      span.textContent = split + (splitType === 'words' ? ' ' : '');
      span.style.display = splitType === 'lines' ? 'block' : 'inline-block';
      span.classList.add(`split-${splitType}`);
      el.appendChild(span);
    });
    
    return gsap.from(el.querySelectorAll('span'), {
      ...ANIMATION_PRESETS.rollIn,
      stagger: ANIMATION_TIMING.stagger,
    });
  },

  // Rolling text effect
  createRollingText: (element: string | Element, texts: string[], interval = 3000) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    let currentIndex = 0;
    
    const animate = () => {
      gsap.to(el, {
        y: -20,
        opacity: 0,
        duration: ANIMATION_TIMING.fast,
        ease: ANIMATION_EASE.in,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % texts.length;
          el.textContent = texts[currentIndex];
          gsap.from(el, {
            y: 20,
            opacity: 0,
            duration: ANIMATION_TIMING.fast,
            ease: ANIMATION_EASE.out,
          });
        }
      });
    };
    
    setInterval(animate, interval);
  },

  // Typewriter effect
  typeWriter: (element: string | Element, text: string, speed = 50) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    el.textContent = '';
    const chars = text.split('');
    
    return gsap.to({}, {
      duration: chars.length * speed / 1000,
      ease: 'none',
      onUpdate: function() {
        const progress = this.progress();
        const currentIndex = Math.floor(progress * chars.length);
        el.textContent = chars.slice(0, currentIndex + 1).join('');
      }
    });
  },

  // Glitch effect
  glitchEffect: (element: string | Element, duration = 0.5) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    const tl = gsap.timeline();
    
    tl.to(el, {
      scaleX: 1.1,
      skewX: 5,
      duration: 0.1,
      ease: 'none'
    })
    .to(el, {
      scaleX: 0.9,
      skewX: -5,
      duration: 0.1,
      ease: 'none'
    })
    .to(el, {
      scaleX: 1,
      skewX: 0,
      duration: 0.1,
      ease: 'none'
    });
    
    return tl;
  },

  // Floating animation
  floatingAnimation: (elements: string | NodeList, intensity = 20) => {
    const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    
    if (!els || els.length === 0) return;
    
    Array.from(els).forEach((el: any, index: number) => {
      gsap.to(el, {
        y: `+=${intensity}`,
        duration: 2 + (index * 0.2),
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.1
      });
    });
  },

  // Button hover effect
  createButtonHover: (button: Element) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(button, {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASE.out
    });
    
    button.addEventListener('mouseenter', () => tl.play());
    button.addEventListener('mouseleave', () => tl.reverse());
    
    return tl;
  },

  // Card flip animation
  flipCard: (card: Element, direction: 'x' | 'y' = 'y') => {
    const rotation = direction === 'x' ? 'rotationX' : 'rotationY';
    
    return gsap.timeline()
      .to(card, {
        [rotation]: 90,
        duration: ANIMATION_TIMING.fast,
        ease: ANIMATION_EASE.in
      })
      .to(card, {
        [rotation]: 0,
        duration: ANIMATION_TIMING.fast,
        ease: ANIMATION_EASE.out
      });
  },
};

// Page-specific animation collections
export const pageAnimations = {
  // Hero animations
  hero: {
    init: () => {
      const tl = gsap.timeline({
        defaults: { ease: ANIMATION_EASE.default }
      });
      
      // Split text animation for headline
      animationUtils.animateTextSplit('.hero-headline', 'words');
      
      tl.from('.hero-subtitle', ANIMATION_PRESETS.slideInUpBig, '+=0.3')
        .from('.hero-cta', ANIMATION_PRESETS.bounceIn, '-=0.2')
        .from('.hero-image', ANIMATION_PRESETS.zoomInRotate, '-=0.6')
        .from('.trust-badges', {
          ...ANIMATION_PRESETS.flipInY,
          stagger: ANIMATION_TIMING.stagger,
        }, '-=0.4');
      
      // Add floating animation to hero elements
      animationUtils.floatingAnimation('.hero-image', 15);
      
      return tl;
    },
  },
  
  // Feature cards animations
  features: {
    init: () => {
      // Staggered card animations with different effects
      gsap.utils.toArray('.feature-card').forEach((card: any, index: number) => {
        const animations = [
          ANIMATION_PRESETS.flipInX,
          ANIMATION_PRESETS.rollIn,
          ANIMATION_PRESETS.zoomInRotate,
          ANIMATION_PRESETS.slideInUpBig
        ];
        
        animationUtils.animateOnScroll(card, animations[index % animations.length]);
        
        // Add hover effect
        animationUtils.createButtonHover(card);
      });
    },
  },
  
  // Metrics animations
  metrics: {
    init: () => {
      gsap.utils.toArray('.stat-number').forEach((stat: any) => {
        const value = parseInt(stat.getAttribute('data-value') || '0');
        
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            // Add glitch effect before counting
            animationUtils.glitchEffect(stat);
            setTimeout(() => {
              animationUtils.animateCounter(stat, value);
            }, 300);
          },
        });
      });
      
      // Add floating animation to stat cards
      animationUtils.floatingAnimation('.stat-card', 10);
    },
  },
  
  // Timeline animations
  timeline: {
    init: () => {
      gsap.utils.toArray('.timeline-item').forEach((item: any, index: number) => {
        const isLeft = index % 2 === 0;
        const animation = isLeft ? ANIMATION_PRESETS.slideInLeft : ANIMATION_PRESETS.slideInRight;
        
        animationUtils.animateOnScroll(item, {
          ...animation,
          delay: index * ANIMATION_TIMING.stagger
        });
      });
    },
  },
  
  // Navigation animations
  navigation: {
    init: () => {
      // Animate navigation items on load
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: ANIMATION_TIMING.normal,
        stagger: ANIMATION_TIMING.stagger,
        ease: ANIMATION_EASE.out
      });
      
      // Add button hover effects
      const navButtons = document.querySelectorAll('.nav-button');
      if (navButtons.length > 0) {
        Array.from(navButtons).forEach(btn => {
          animationUtils.createButtonHover(btn);
        });
      }
    },
  },
  
  // Pricing cards animations
  pricing: {
    init: () => {
      gsap.utils.toArray('.pricing-card').forEach((card: any, index: number) => {
        // Featured card gets special treatment
        const isFeatured = card.classList.contains('featured');
        const animation = isFeatured ? ANIMATION_PRESETS.zoomInRotate : ANIMATION_PRESETS.flipInY;
        
        animationUtils.animateOnScroll(card, {
          ...animation,
          delay: index * ANIMATION_TIMING.stagger
        });
        
        // Add card flip on hover for non-featured cards
        if (!isFeatured) {
          card.addEventListener('mouseenter', () => {
            animationUtils.flipCard(card, 'y');
          });
        }
      });
    },
  },
  
  // Text rolling effects
  textEffects: {
    init: () => {
      // Find elements with rolling text
      const rollingElements = document.querySelectorAll('[data-rolling-text]');
      if (rollingElements.length > 0) {
        Array.from(rollingElements).forEach((el: any) => {
          const texts = el.getAttribute('data-rolling-text')?.split('|') || [];
          if (texts.length > 0) {
            animationUtils.createRollingText(el, texts);
          }
        });
      }
      
      // Typewriter effect for specific elements
      const typewriterElements = document.querySelectorAll('[data-typewriter]');
      if (typewriterElements.length > 0) {
        Array.from(typewriterElements).forEach((el: any) => {
          const text = el.getAttribute('data-typewriter');
          if (text) {
            ScrollTrigger.create({
              trigger: el,
              start: 'top 80%',
              once: true,
              onEnter: () => {
                animationUtils.typeWriter(el, text);
              }
            });
          }
        });
      }
    },
  },
};

// Global initialization
export const initializeAnimations = () => {
  // Set global defaults
  gsap.defaults({
    ease: ANIMATION_EASE.default,
    duration: ANIMATION_TIMING.normal,
  });
  
  // Refresh ScrollTrigger on route changes
  ScrollTrigger.refresh();
  
  // Initialize common animations
  animationUtils.addMagneticEffect('.magnetic-btn');
  animationUtils.addParallaxEffect('.parallax-element');
  animationUtils.animateOnScroll('.animate-on-scroll', ANIMATION_PRESETS.fadeInUp);
  
  // Initialize page-specific animations
  pageAnimations.navigation.init();
  pageAnimations.textEffects.init();
  
  // Add button hover effects globally
  const hoverElements = document.querySelectorAll('.btn, .card, .interactive-card');
  if (hoverElements.length > 0) {
    Array.from(hoverElements).forEach(element => {
      animationUtils.createButtonHover(element);
    });
  }
  
  // Add floating animation to floating elements
  animationUtils.floatingAnimation('.floating-element');
  
  // Initialize scroll-based animations
  gsap.utils.toArray('.stagger-animation').forEach((container: any) => {
    const children = container.querySelectorAll('.stagger-item');
    animationUtils.staggerChildren(container, '.stagger-item', ANIMATION_PRESETS.fadeInUp);
  });
  
  return gsap;
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};