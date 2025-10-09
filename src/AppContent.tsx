import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
// import Projects from './components/sections/Projects';
import Mentorship from './components/sections/Mentorship';
import Contact from './components/sections/Contact';
import { portfolioData, getLocalizedData } from './data/portfolio';

function AppContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Navbar />

      <main>
        <Hero
          name={portfolioData.name}
          title={getLocalizedData(portfolioData.title, language)}
          bio={getLocalizedData(portfolioData.bio, language)}
          githubUrl={portfolioData.githubUrl}
          linkedinUrl={portfolioData.linkedinUrl}
          profileImage={portfolioData.profileImage}
        />

        <About description={getLocalizedData(portfolioData.about, language)} />

        <Skills skills={portfolioData.skills} />

        <Experience experiences={getLocalizedData(portfolioData.experiences, language)} />

        {/* <Projects projects={getLocalizedData(portfolioData.projects, language)} /> */}

        <Mentorship />

        <Contact email={portfolioData.email} />
      </main>

      <Footer
        name={portfolioData.name}
        githubUrl={portfolioData.githubUrl}
        linkedinUrl={portfolioData.linkedinUrl}
        currentYear={portfolioData.currentYear}
      />
    </div>
  );
}

export default AppContent;
