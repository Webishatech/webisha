import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Default reveal: fade up with slight y, once */
export function revealOnce(
  targets: gsap.TweenTarget,
  options?: { y?: number; duration?: number; stagger?: number; delay?: number; start?: string }
) {
  const { y = 32, duration = 0.6, stagger = 0, delay = 0, start = 'top 85%' } = options ?? {};
  return gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger: stagger || undefined,
    ease: 'power3.out',
    immediateRender: false,
    scrollTrigger: {
      trigger: Array.isArray(targets) ? targets[0] : targets,
      start,
      toggleActions: 'play none none none',
    },
  });
}

/** Reveal section: trigger is the section element, animate children matching childSelector */
export function revealSection(
  trigger: HTMLElement | null,
  childSelector: string,
  options?: { y?: number; duration?: number; stagger?: number; start?: string }
) {
  const { y = 40, duration = 0.6, stagger = 0.12, start = 'top 82%' } = options ?? {};
  if (!trigger) return gsap.timeline();
  const targets = trigger.querySelectorAll(childSelector);
  if (!targets.length) return gsap.timeline();
  return gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: 'power3.out',
    immediateRender: false, // don't hide content until ScrollTrigger runs
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
}

/** Hero entrance: stagger title, text, button (no scroll) */
export function heroEntrance(
  container: HTMLElement | null,
  options?: { y?: number; duration?: number; stagger?: number }
) {
  if (!container) return () => {};
  const { y = 48, duration = 0.7, stagger = 0.15 } = options ?? {};
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const title = container.querySelector('.hero-title, .about-featured-title, .contact-hero-title, .services-hero-title, .portfolio-hero-title, .case-study-hero-title');
  const text = container.querySelector('.hero-description, .about-featured-text, .contact-hero-text, .services-hero-text, .portfolio-hero-text, .case-study-hero-desc');
  const extra = container.querySelector('.case-study-sector');
  const button = container.querySelector('a[href], button');
  const els = [extra, title, text, button].filter(Boolean);
  if (!els.length) return () => {};
  // Use fromTo so content stays visible if timeline is killed (e.g. Strict Mode)
  tl.fromTo(els, { opacity: 0, y }, { opacity: 1, y: 0, duration, stagger });
  return () => tl.kill();
}

/** Parallax for background image (subtle scale or y) */
export function parallaxBg(element: HTMLElement | null, speed = 0.3) {
  if (!element) return () => {};
  const st = ScrollTrigger.create({
    trigger: element,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      const y = (1 - self.progress) * 30 * speed;
      gsap.set(element, { y: `${y}%` });
    },
  });
  return () => st.kill();
}

