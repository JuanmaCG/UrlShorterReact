import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [shortedUrl, setShortedUrl] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const resetForm = () => {
    setUrl('')
    setAlias('')
    setShortedUrl('')
    setIsSubmitted(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://urlshorter-kybx.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          longUrl: url, 
          alias: alias || undefined 
        })
      })
      
      const data = await response.json()
      console.log('Data:', data)
      if (alias) {
        setShortedUrl(data.alias)
      } else {
        setShortedUrl(data.shortedUrl)
      }
      console.log('Shorted URL:', shortedUrl)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortedUrl)
      alert('URL copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <div className="theme-toggle">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-button"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="form-container">
        <h1 className="form-title">URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
          </div>
          {!isSubmitted ? (
            <div className="form-group">
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="Enter alias (optional)"
              />
            </div>
          ) : (
            <div className="form-group result-group">
              <input
                type="text"
                value={shortedUrl}
                readOnly
                className="result-input"
              />
              <div className="button-group">
                <button 
                  type="button" 
                  className="action-button copy-button"
                  onClick={handleCopy}
                >
                  Copy
                </button>
                <button 
                  type="button" 
                  className="action-button visit-button"
                  onClick={() => window.open(shortedUrl, '_blank')}
                >
                  Visit
                </button>
              </div>
            </div>
          )}
          {!isSubmitted ? (
            <button type="submit">Shorten URL</button>
          ) : (
            <button 
              type="button" 
              className="new-url-button"
              onClick={resetForm}
            >
              Shorten Another URL
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default App
