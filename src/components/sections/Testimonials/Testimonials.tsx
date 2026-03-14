import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonialsData } from '../../../data/testimonialsData';
import { revealSection, ScrollTrigger } from '../../../utils/gsapAnimations';
import './Testimonials.css';

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  rating?: number;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

const defaultTitle = 'What Our Clients Say';
const defaultSubtitle = 'Our clients trust us to deliver reliable technology solutions that drive business success.';

const Testimonials: React.FC<TestimonialsProps> = ({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  testimonials = testimonialsData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    revealSection(sectionRef.current, '.testimonials-header *', { stagger: 0.08 });
    revealSection(sectionRef.current, '.testimonial-card', { stagger: 0.06, start: 'top 78%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const nextSlide = () => {
    const next = (currentIndex + 1) % testimonials.length;
    const el = scrollRef.current?.querySelector(`[data-index="${next}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const el = scrollRef.current?.querySelector(`[data-index="${prev}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(prev);
  };

  const goToSlide = (index: number) => {
    const el = scrollRef.current?.querySelector(`[data-index="${index}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container section-container">
        <div className="testimonials-header">
          <SectionTitle>{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
        </div>
        <div className="testimonials-carousel">
          <button
            className="testimonials-arrow testimonials-arrow-left"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </button>
          <div className="testimonials-track" ref={scrollRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
                data-index={index}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-title">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
                {testimonial.rating != null && testimonial.rating > 0 && (
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star" aria-hidden>★</span>
                    ))}
                  </div>
                )}
                <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
          <button
            className="testimonials-arrow testimonials-arrow-right"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div className="testimonials-pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonials-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
