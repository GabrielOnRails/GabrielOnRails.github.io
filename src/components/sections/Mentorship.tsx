import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../i18n/translations';

export default function Mentorship() {
  const { language } = useLanguage();
  const t = translations[language].mentorship;

  const handleWhatsAppClick = () => {
    const phoneNumber = '5534984214937';
    const message = encodeURIComponent(t.whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="mentorship" className="py-20 px-4 md:px-8 bg-dark-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.title} <span className="text-accent">{t.titleHighlight}</span>
        </h2>

        <div className="bg-dark-secondary p-8 md:p-12 rounded-lg shadow-lg border border-dark-accent/20">
          <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
            {t.description}
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              {t.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
