import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectCard from '../ui/ProjectCard';

interface Project {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  repoLink: string;
  demoLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              {t.projects.title} <span className="text-accent-primary">{t.projects.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  technologies={project.technologies}
                  repoLink={project.repoLink}
                  demoLink={project.demoLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
