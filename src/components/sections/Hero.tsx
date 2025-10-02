import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  profileImage: string;
}

const Hero = ({ name, title, bio, githubUrl, linkedinUrl, profileImage }: HeroProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark-text mb-4">
              {t.hero.greeting}{' '}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark-muted mb-6">
              {title}
            </h2>
            <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto lg:mx-0">{bio}</p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-dark-border rounded-full hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-dark-border rounded-full hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-200"
            >
              {t.hero.cta}
            </button>
          </div>

          {/* Profile Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-border">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-dark-muted hover:text-accent-primary transition-colors"
            aria-label="Scroll to About"
          >
            <FiChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
