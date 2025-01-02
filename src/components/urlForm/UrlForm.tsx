import { useState } from 'react';
import { shortenUrl } from '../../services/urlService';
import styles from './UrlForm.module.css';
import { UrlResult } from '../urlResult/UrlResult';

export const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [shortedUrl, setShortedUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setUrl('');
    setAlias('');
    setShortedUrl('');
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await shortenUrl(url, alias);
      setShortedUrl(result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            required
          />
        </div>
        {!isSubmitted ? (
          <div className={styles.formGroup}>
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Enter alias (optional)"
            />
          </div>
        ) : (
          <UrlResult shortedUrl={shortedUrl} />
        )}
        {!isSubmitted ? (
          <button type="submit">Shorten URL</button>
        ) : (
          <button 
            type="button" 
            className={styles.newUrlButton}
            onClick={resetForm}
          >
            Shorten Another URL
          </button>
        )}
      </form>
    </div>
  );
};