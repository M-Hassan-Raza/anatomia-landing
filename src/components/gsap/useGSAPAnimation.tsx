import { useEffect, useRef } from 'react';
import { useAnimation } from './AnimationContext';

export const useGSAPAnimation = () => {
  const { gsap, TIMING, anatomiaEase, anatomiaSpring } = useAnimation();

  // Hero section animation
  const animateHero = () => {
    const heroTimeline = gsap.timeline({
      defaults: { ease: anatomiaEase }
    });

    heroTimeline
      .from(".hero-headline", {
        y: 30,
        opacity: 0,
        duration: TIMING.slow
      })
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: TIMING.normal
      }, "-=0.3")
      .from(".hero-cta", {
        scale: 0.9,
        opacity: 0,
        duration: TIMING.normal
      }, "-=0.2")
      .from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: TIMING.slow
      }, "-=0.4")
      .from(".trust-badges", {
        y: 20,
        opacity: 0,
        duration: TIMING.normal,
        stagger: TIMING.stagger
      }, "-=0.3");

    return heroTimeline;
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
    gsap,
    TIMING
  };
};