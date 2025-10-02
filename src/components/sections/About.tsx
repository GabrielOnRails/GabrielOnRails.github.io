import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface AboutProps {
  description: string;
}

const About = ({ description }: AboutProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              {t.about.title} <span className="text-accent-primary">{t.about.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-8 hover:border-accent-primary/50 transition-all duration-300">
            <p className="text-dark-muted leading-relaxed whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
