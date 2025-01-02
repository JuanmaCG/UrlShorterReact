import { useTheme } from './hooks/theme';

import './App.css';
import { ThemeToggle } from './components/themeToggle/ThemeToggle';
import { UrlForm } from './components/urlForm/UrlForm';

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <UrlForm />
    </>
  );
}

export default App;