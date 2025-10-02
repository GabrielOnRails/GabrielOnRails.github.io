import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  currentYear: number;
}

const Footer = ({ name, githubUrl, linkedinUrl, email, currentYear }: FooterProps) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-dark-card border-t border-dark-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-accent-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-accent-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-dark-muted hover:text-accent-primary transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-dark-muted text-sm">
            © {currentYear} {name}. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
