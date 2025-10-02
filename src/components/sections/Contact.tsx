import { useEffect, useRef, useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactProps {
  email: string;
}

const Contact = ({ email }: ContactProps) => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/gabrielspaulinod@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: 'Vi seu CV',
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset(); // Limpa o formulário

        // Remove mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
              {t.contact.title} <span className="text-accent-primary">{t.contact.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-text mb-6">{t.contact.subtitle}</h3>
              <p className="text-dark-muted mb-8">
                {t.contact.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-dark-card border border-dark-border rounded-lg">
                    <FiMail className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark-text font-semibold mb-1">{t.contact.email}</h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-dark-muted hover:text-accent-primary transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-dark-card border border-dark-border rounded-lg">
                    <FiMapPin className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark-text font-semibold mb-1">{t.contact.location}</h4>
                    <p className="text-dark-muted">{t.contact.locationText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <div>
                  <label htmlFor="name" className="block text-dark-text font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark-text font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-text font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Enviando...' : t.contact.form.send}</span>
                  {!isSubmitting && <FiSend size={18} />}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                    <p className="text-green-500 text-sm text-center">✓ Mensagem enviada com sucesso!</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                    <p className="text-red-500 text-sm text-center">✗ Erro ao enviar. Tente novamente.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
