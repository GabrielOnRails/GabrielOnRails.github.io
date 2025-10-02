import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  repoLink: string;
  demoLink: string;
}

const ProjectCard = ({
  name,
  image,
  description,
  technologies,
  repoLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-accent-primary/50 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-dark-border">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-dark-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-primary rounded-full hover:bg-accent-primary/80 transition-colors duration-200"
              aria-label="View Repository"
            >
              <FiGithub size={20} />
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-secondary rounded-full hover:bg-accent-secondary/80 transition-colors duration-200"
              aria-label="View Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-text mb-2">{name}</h3>
        <p className="text-dark-muted text-sm mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-border text-accent-primary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
