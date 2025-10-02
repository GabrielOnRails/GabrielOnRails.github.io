import { LanguageProvider } from './contexts/LanguageContext';
import AppContent from './AppContent';

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
