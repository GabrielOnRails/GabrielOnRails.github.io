import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-dark-card border border-dark-border rounded-lg p-1">
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'pt-BR'
            ? 'bg-accent-primary text-white'
            : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en-US')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en-US'
            ? 'bg-accent-primary text-white'
            : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
