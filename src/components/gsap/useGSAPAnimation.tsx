import { useEffect, useRef } from 'react';
import { useAnimation } from './AnimationContext';

export const useGSAPAnimation = () => {
  const { gsap, TIMING, anatomiaEase, anatomiaSpring } = useAnimation();

  // Enhanced hero section animation
  const animateHero = () => {
    const heroTimeline = gsap.timeline({
      defaults: { ease: anatomiaEase }
    });

    heroTimeline
      .from(".hero-headline", {
        y: 60,
        opacity: 0,
        duration: TIMING.slow,
        ease: "back.out(1.7)"
      })
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: TIMING.normal
      }, "-=0.4")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: TIMING.normal,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: TIMING.slow,
        ease: "power2.out"
      }, "-=0.5")
      .from(".trust-badges", {
        y: 30,
        opacity: 0,
        duration: TIMING.normal,
        stagger: TIMING.stagger
      }, "-=0.4")
      .from(".floating-elements", {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: TIMING.slow,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.3");

    return heroTimeline;
  };

  // Magnetic button effect
  const addMagneticEffect = () => {
    document.querySelectorAll('.magnetic-btn').forEach((btn: any) => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  };

  // Parallax scrolling effect
  const addParallaxEffect = () => {
    gsap.utils.toArray(".parallax-element").forEach((element: any) => {
      const speed = element.getAttribute("data-speed") || 0.5;
      
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  };

  // Feature cards animation
  const animateFeatureCards = () => {
    gsap.utils.toArray(".feature-card").forEach((card: any, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: TIMING.slow,
        delay: i * TIMING.stagger,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });
  };

  // Statistics counter animation
  const animateCounters = () => {
    gsap.utils.toArray(".stat-number").forEach((stat: any) => {
      let target = { value: 0 };
      let endValue = parseInt(stat.getAttribute("data-value"));
      
      gsap.to(target, {
        value: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 75%",
          once: true
        },
        onUpdate: () => {
          stat.innerText = Math.round(target.value).toLocaleString();
        }
      });
    });
  };

  // Interactive hover effects
  const setupHoverEffects = () => {
    document.querySelectorAll(".interactive-card").forEach((card: any) => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl
        .to(card, {
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          duration: TIMING.fast
        })
        .to(card.querySelector(".card-icon"), {
          scale: 1.1,
          rotation: 5,
          duration: TIMING.fast
        }, 0);
      
      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });
  };

  // Scroll-triggered section reveals
  const animateScrollSections = () => {
    gsap.utils.toArray(".animate-on-scroll").forEach((section: any) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: TIMING.slow,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse"
        }
      });
    });
  };

  // Staggered list animations
  const animateStaggeredLists = () => {
    gsap.utils.toArray(".stagger-list").forEach((list: any) => {
      const items = list.querySelectorAll(".stagger-item");
      
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: TIMING.normal,
        stagger: TIMING.stagger,
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  };

  return {
    animateHero,
    animateFeatureCards,
    animateCounters,
    setupHoverEffects,
    animateScrollSections,
    animateStaggeredLists,
    addMagneticEffect,
    addParallaxEffect,
    gsap,
    TIMING
  };
};