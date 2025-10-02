import { FiBriefcase } from 'react-icons/fi';

interface TimelineItemProps {
  position: string;
  company: string;
  dates: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem = ({ position, company, dates, description, isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 bottom-0 w-[2px] bg-dark-border" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
        <FiBriefcase size={16} className="text-white" />
      </div>

      {/* Content */}
      <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-dark-text mb-1">{position}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-sm">
            <span className="text-accent-primary font-medium">{company}</span>
            <span className="hidden sm:inline text-dark-muted">•</span>
            <span className="text-dark-muted">{dates}</span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-dark-muted text-sm flex items-start">
              <span className="text-accent-primary mr-2 mt-1.5">▹</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
