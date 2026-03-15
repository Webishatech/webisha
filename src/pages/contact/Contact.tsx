import React, { useState, useRef, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import heroImage from '../../assets/images/contact/featured.jpg';
import { contactInfo } from '../../data/contactData';
import Button from '../../components/ui/Button/Button';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
import './Contact.css';

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);
  const stepsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, []);

  useEffect(() => {
    if (!formSectionRef.current) return;
    revealSection(formSectionRef.current, '.contact-section-heading, .contact-section-desc', { stagger: 0.08 });
    revealSection(formSectionRef.current, '.contact-form', { start: 'top 82%' });
    revealSection(formSectionRef.current, '.contact-info-box', { start: 'top 80%' });
    revealSection(formSectionRef.current, '.contact-map-small', { start: 'top 75%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!stepsSectionRef.current) return;
    revealSection(stepsSectionRef.current, '.contact-steps-heading, .contact-steps-desc', { stagger: 0.08 });
    revealSection(stepsSectionRef.current, '.contact-step-card', { stagger: 0.15 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <div className="contact-page">
      {/* Hero section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src={heroImage}
            alt=""
            className="contact-hero-image"
            aria-hidden
          />
          <div className="contact-hero-overlay" aria-hidden />
        </div>
        <div className="contact-hero-inner section-container">
          <div className="contact-hero-content" ref={heroRef}>
            <h1 className="contact-hero-title">Get in Touch with Us</h1>
            <p className="contact-hero-text">
              We're here to help with your technology needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form & information */}
      <section className="contact-section contact-section--light" ref={formSectionRef}>
        <div className="contact-section-inner section-container">
          <div className="contact-main-grid">
            <div className="contact-form-wrap">
              <h2 className="contact-section-heading">Contact Us</h2>
              <p className="contact-section-desc">
                Have questions? We're here to help. Fill out the form below, and
                we'll get back to you as soon as possible.
              </p>
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <label className="contact-label" htmlFor="contact-name">
                  <span className="contact-label-text">Your Name</span>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="contact-input"
                    autoComplete="name"
                  />
                </label>
                <label className="contact-label" htmlFor="contact-email">
                  <span className="contact-label-text">Your Email</span>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="contact-input"
                    autoComplete="email"
                  />
                </label>
                <label className="contact-label" htmlFor="contact-subject">
                  <span className="contact-label-text">Subject</span>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="contact-input"
                  />
                </label>
                <label className="contact-label" htmlFor="contact-message">
                  <span className="contact-label-text">Message</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="contact-input contact-textarea"
                    rows={5}
                  />
                </label>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="contact-submit-btn"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="contact-info-wrap">
              <div className="contact-info-box">
                <h3 className="contact-info-title">Contact Information</h3>
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <LocationOnIcon className="contact-info-icon" aria-hidden />
                    <span>{contactInfo.address}</span>
                  </li>
                  <li className="contact-info-item">
                    <EmailIcon className="contact-info-icon" aria-hidden />
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                  <li className="contact-info-item">
                    <PhoneIcon className="contact-info-icon" aria-hidden />
                    <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="contact-info-item">
                    <ScheduleIcon className="contact-info-icon" aria-hidden />
                    <span>{contactInfo.hours}</span>
                  </li>
                </ul>
              </div>
              <div className="contact-map-small">
                <iframe
                  title="Office location - Seattle"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.395483657!2d-122.351466!3d47.608013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c74e6a1c9%3A0x8e2e0f0e0e0e0e0e!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="contact-section contact-section--light contact-section--steps" ref={stepsSectionRef}>
        <div className="contact-section-inner section-container">
          <h2 className="contact-steps-heading">What Happens Next?</h2>
          <p className="contact-steps-desc">
            We aim to respond within one business day. Here's what to expect after you reach out.
          </p>
          <div className="contact-steps-grid">
            <div className="contact-step-card">
              <span className="contact-step-number" aria-hidden>1</span>
              <h3 className="contact-step-title">Submit your message</h3>
              <p className="contact-step-text">
                Fill out the form or email us directly. Include as much detail as you can about your project or question.
              </p>
            </div>
            <div className="contact-step-card">
              <span className="contact-step-number" aria-hidden>2</span>
              <h3 className="contact-step-title">We review & respond</h3>
              <p className="contact-step-text">
                Our team reviews your inquiry and will get back to you with next steps or a time to discuss further.
              </p>
            </div>
            <div className="contact-step-card">
              <span className="contact-step-number" aria-hidden>3</span>
              <h3 className="contact-step-title">Let's work together</h3>
              <p className="contact-step-text">
                We'll schedule a call or meeting to understand your needs and propose the right solution for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
