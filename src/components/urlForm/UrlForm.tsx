import { useState } from 'react';
import { shortenUrl } from '../../services/urlService';
import { InputError } from '../inputError/InputError';
import { UrlResult } from '../urlResult/UrlResult';
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner';
import styles from './UrlForm.module.css';
import { ApiResult } from '../../types/apiResult';

export const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<ApiResult['data'] | undefined>();
  const [alias, setAlias] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setUrl('');
    setAlias('');
    setData(undefined);
    setIsSubmitted(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const result: ApiResult = await shortenUrl(url, alias);
      
      if (result.error) {
        setError(result.error.message);
        return;
      }

      if (result.data) {
        setData(result.data);
        setAlias(result.data.alias);
        setIsSubmitted(true);
      }
    } finally {
      setIsLoading(false);
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
            className={error ? styles.inputError : ''}
          />
        </div>
        {!isSubmitted && (
          <div className={styles.formGroup}>
            <input
              type="text"
              value={data?.alias || alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Enter alias (optional)"
              className={error ? styles.inputError : ''}
            />
          </div>
        )}
        {error && <InputError message={error} />}
        {isSubmitted && data ? (
          <>
            <UrlResult shortenData={data} />
            <button 
              type="button" 
              className={styles.newUrlButton}
              onClick={resetForm}
            >
              Shorten Another URL
            </button>
          </>
        ) : (
          <button 
            type="submit" 
            disabled={isLoading}
            className={isLoading ? styles.loading : ''}
          >
            {isLoading ? <LoadingSpinner size="small" /> : 'Shorten URL'}
          </button>
        )}
      </form>
    </div>
  );
};
