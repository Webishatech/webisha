import React, { useState, useRef } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonialsData } from '../../../data/testimonialsData';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    const next = (currentIndex + 1) % testimonialsData.length;
    const el = scrollRef.current?.querySelector(`[data-index="${next}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
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
    <section className="testimonials-section">
      <div className="testimonials-container section-container">
        <div className="testimonials-header">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>Check out some of our recent projects.</SectionSubtitle>
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
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
                data-index={index}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-title">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star" aria-hidden>★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
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
          {testimonialsData.map((_, index) => (
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
      <div className="testimonials-wave" aria-hidden />
    </section>
  );
};

export default Testimonials;
