import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import './index.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
