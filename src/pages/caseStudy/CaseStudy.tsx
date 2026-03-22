import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import heroImage from '../../assets/images/sections/hero-section.jpeg';
import { getCaseStudyByProjectId } from '../../data/portfolioPageData';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
import './CaseStudy.css';


const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : NaN;
  const caseStudy = Number.isNaN(projectId) ? null : getCaseStudyByProjectId(projectId);

  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const challengeRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!caseStudy) return;
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !overviewRef.current) return;
    revealSection(overviewRef.current, '.case-study-section-heading, .case-study-section-text', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !galleryRef.current) return;
    revealSection(galleryRef.current, '.case-study-section-heading', {});
    revealSection(galleryRef.current, '.case-study-gallery-item', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !techRef.current) return;
    revealSection(techRef.current, '.case-study-section-heading', {});
    revealSection(techRef.current, '.case-study-tech-item', { stagger: 0.06 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !challengeRef.current) return;
    revealSection(challengeRef.current, '.case-study-section-heading, .case-study-section-text', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !solutionRef.current) return;
    revealSection(solutionRef.current, '.case-study-section-heading, .case-study-section-text', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  useEffect(() => {
    if (!caseStudy || !resultsRef.current) return;
    revealSection(resultsRef.current, '.case-study-section-heading, .case-study-section-text', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="case-study-page case-study-page--not-found">
        <div className="case-study-not-found-inner section-container">
          <h1 className="case-study-not-found-title">Project not found</h1>
          <p className="case-study-not-found-text">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/portfolio" className="case-study-back-link">
            <ArrowBackIcon className="case-study-back-icon" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, sector, overview, challenge, solution, results, technologies } = caseStudy;
  const projectImages = caseStudy.galleryImages && caseStudy.galleryImages.length > 0
    ? caseStudy.galleryImages
    : Array.from({ length: 3 }, () => caseStudy.image);

  return (
    <div className="case-study-page">
      {/* Hero — same pattern as About/Contact */}
      <section className="case-study-hero">
        <div className="case-study-hero-bg">
          <img src={heroImage} alt="" className="case-study-hero-image" aria-hidden />
          <div className="case-study-hero-overlay" aria-hidden />
        </div>
        <div className="case-study-hero-inner section-container">
          <div className="case-study-hero-content" ref={heroRef}>
            <span className="case-study-sector">{sector}</span>
            <h1 className="case-study-hero-title">{title}</h1>
            <p className="case-study-hero-desc">{description}</p>
          </div>
        </div>
      </section>

      {/* Overview — same section layout as other pages */}
      <section className="case-study-section case-study-section--light" ref={overviewRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">Overview</h2>
          <p className="case-study-section-text">{overview}</p>
        </div>
      </section>

      {/* Project gallery */}
      <section className="case-study-section case-study-section--light case-study-section--gallery" ref={galleryRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">Project Highlights</h2>
          <div className="case-study-gallery">
            {projectImages.map((img, index) => (
              <div key={index} className="case-study-gallery-item">
                <img src={img} alt="" className="case-study-gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies — prominent, same section pattern */}
      <section className="case-study-section case-study-section--light" ref={techRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">Technologies Used</h2>
          <ul className="case-study-tech-list">
            {technologies.map((tech, index) => (
              <li key={index} className="case-study-tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Challenge */}
      <section className="case-study-section case-study-section--light" ref={challengeRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">The Challenge</h2>
          <p className="case-study-section-text">{challenge}</p>
        </div>
      </section>

      {/* The Solution */}
      <section className="case-study-section case-study-section--light" ref={solutionRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">The Solution</h2>
          <p className="case-study-section-text">{solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="case-study-section case-study-section--light case-study-section--last" ref={resultsRef}>
        <div className="case-study-section-inner section-container">
          <h2 className="case-study-section-heading">Results</h2>
          <p className="case-study-section-text">{results}</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
