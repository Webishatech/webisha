import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import client1 from '../../../assets/images/clients/client1.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Miller',
    title: 'CEO',
    company: 'Sextisers',
    rating: 5,
    quote: 'WebIsha Tech delivered an exceptional solution that transformed our business operations. Their team is professional, innovative, and truly understands our needs.',
    image: client1,
  },
  {
    id: 2,
    name: 'John Anderson',
    title: 'CTO',
    company: 'TechCorp',
    rating: 5,
    quote: 'Working with WebIsha Tech has been a game-changer. Their expertise in cloud solutions helped us scale efficiently and reduce costs significantly.',
    image: client1,
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Product Manager',
    company: 'InnovateLabs',
    rating: 5,
    quote: 'The mobile app they developed exceeded our expectations. The user experience is flawless, and the performance is outstanding.',
    image: client1,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>Check out some of our recent projects.</SectionSubtitle>
        </div>
        <div className="testimonials-swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
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
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
