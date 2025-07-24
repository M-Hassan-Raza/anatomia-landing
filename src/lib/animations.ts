import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation timing constants - Premium subtle timings
export const ANIMATION_TIMING = {
  instant: 0,
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2,
  stagger: 0.12,
  staggerSlow: 0.18,
  premium: 0.9,
  luxurious: 1.4,
} as const;

// Easing functions - Premium smooth curves
export const ANIMATION_EASE = {
  // Premium eases for luxury feel
  premium: 'power3.out',
  luxurious: 'power4.out',
  silk: 'power2.inOut',
  butter: 'power1.inOut',
  
  // Standard eases
  default: 'power2.out',
  in: 'power2.in',
  out: 'power2.out',
  inOut: 'power2.inOut',
  
  // Subtle special eases
  bounce: 'bounce.out',
  elastic: 'elastic.out(1, 0.1)',
  back: 'back.out(1.2)',
  
  // Custom premium curves
  anatomiaEase: 'M0,0 C0.25,0.1 0.25,1 1,1',
  anatomiaSpring: 'M0,0 C0.5,0 0.15,1 1,1',
  anatomiaLux: 'M0,0 C0.165,0.84 0.44,1 1,1',
} as const;

// Animation presets - Premium & Subtle
export const ANIMATION_PRESETS = {
  // Premium fade animations - very subtle
  fadeIn: {
    opacity: 0,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.premium,
  },
  fadeInUp: {
    opacity: 0,
    y: 24,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.luxurious,
  },
  fadeInDown: {
    opacity: 0,
    y: -24,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.luxurious,
  },
  fadeInLeft: {
    opacity: 0,
    x: -32,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.silk,
  },
  fadeInRight: {
    opacity: 0,
    x: 32,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.silk,
  },
  
  // Premium scale animations - very subtle
  scaleIn: {
    scale: 0.95,
    opacity: 0,
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.anatomiaLux,
  },
  scaleInSubtle: {
    scale: 0.98,
    opacity: 0,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.silk,
  },
  
  // Gentle bounce - premium feel
  bounceInSubtle: {
    scale: 0.9,
    opacity: 0,
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.back,
  },
  
  // Smooth slide animations
  slideInLeft: {
    x: '-32px',
    opacity: 0,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.premium,
  },
  slideInRight: {
    x: '32px',
    opacity: 0,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.premium,
  },
  
  // Premium special effects - much more subtle
  gentleFlipX: {
    rotationX: -15,
    opacity: 0,
    transformOrigin: '50% 50%',
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.silk,
  },
  gentleFlipY: {
    rotationY: -15,
    opacity: 0,
    transformOrigin: '50% 50%',
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.silk,
  },
  premiumRotate: {
    scale: 0.95,
    rotation: 8,
    opacity: 0,
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.anatomiaLux,
  },
  slideInUpGentle: {
    y: 40,
    opacity: 0,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.luxurious,
  },
  
  // Hero-specific premium animations
  heroTitle: {
    opacity: 0,
    y: 20,
    duration: ANIMATION_TIMING.luxurious,
    ease: ANIMATION_EASE.anatomiaLux,
  },
  heroSubtitle: {
    opacity: 0,
    y: 16,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.silk,
  },
  heroCTA: {
    opacity: 0,
    scale: 0.98,
    y: 12,
    duration: ANIMATION_TIMING.premium,
    ease: ANIMATION_EASE.butter,
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

  // Premium floating animation - very subtle
  floatingAnimation: (elements: string | NodeList, intensity = 8) => {
    const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    
    if (!els || els.length === 0) return;
    
    Array.from(els).forEach((el: any, index: number) => {
      gsap.to(el, {
        y: `+=${intensity}`,
        duration: 4 + (index * 0.3),
        ease: ANIMATION_EASE.silk,
        yoyo: true,
        repeat: -1,
        delay: index * 0.2
      });
    });
  },

  // Premium button hover effect - very subtle
  createButtonHover: (button: Element) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(button, {
      scale: 1.02,
      y: -2,
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASE.silk
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
  // Hero animations - Premium & Subtle
  hero: {
    init: () => {
      const tl = gsap.timeline({
        defaults: { ease: ANIMATION_EASE.anatomiaLux }
      });
      
      // Premium headline animation - no text split to avoid spacing issues
      tl.from('.hero-headline', ANIMATION_PRESETS.heroTitle)
        .from('.hero-subtitle', ANIMATION_PRESETS.heroSubtitle, '-=0.8')
        .from('.hero-cta', ANIMATION_PRESETS.heroCTA, '-=0.6')
        .from('.hero-image', ANIMATION_PRESETS.scaleInSubtle, '-=0.4')
        .from('.trust-badges .badge', {
          ...ANIMATION_PRESETS.fadeInUp,
          stagger: ANIMATION_TIMING.staggerSlow,
        }, '-=0.3');
      
      // Very subtle floating animation
      animationUtils.floatingAnimation('.hero-image', 8);
      
      return tl;
    },
  },
  
  // Feature cards animations - Premium & Subtle
  features: {
    init: () => {
      // Premium staggered card animations
      gsap.utils.toArray('.feature-card').forEach((card: any, index: number) => {
        const premiumAnimations = [
          ANIMATION_PRESETS.fadeInUp,
          ANIMATION_PRESETS.gentleFlipX,
          ANIMATION_PRESETS.scaleInSubtle,
          ANIMATION_PRESETS.slideInUpGentle
        ];
        
        animationUtils.animateOnScroll(card, premiumAnimations[index % premiumAnimations.length]);
        
        // Subtle hover effect
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