import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => (
  <div className={styles.themeToggle}>
    <button onClick={toggleTheme} className={styles.themeButton}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  </div>
);