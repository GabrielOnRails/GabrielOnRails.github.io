import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPython,
  SiAmazon,
  SiKubernetes,
  SiMongodb,
} from 'react-icons/si';

interface SkillsProps {
  skills: string[];
}

// Map skill names to icons
const skillIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Next.js': SiNextdotjs,
  SQL: SiPostgresql,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  Python: SiPython,
  AWS: SiAmazon,
  Kubernetes: SiKubernetes,
  MongoDB: SiMongodb,
};

const Skills = ({ skills }: SkillsProps) => {
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

  const getIcon = (skill: string) => {
    // Try exact match first
    if (skillIcons[skill]) {
      return skillIcons[skill];
    }
    // Try partial match
    const matchedKey = Object.keys(skillIcons).find((key) =>
      skill.toLowerCase().includes(key.toLowerCase())
    );
    return matchedKey ? skillIcons[matchedKey] : null;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              {t.skills.title} <span className="text-accent-primary">{t.skills.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = getIcon(skill);
              return (
                <div
                  key={index}
                  className="bg-dark-card border border-dark-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {Icon && (
                    <Icon
                      size={48}
                      className="mb-3 text-accent-primary group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <span className="text-dark-text text-center text-sm font-medium">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
