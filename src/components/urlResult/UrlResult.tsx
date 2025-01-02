import styles from './UrlResult.module.css';

interface UrlResultProps {
  shortedUrl: string;
}

export const UrlResult = ({ shortedUrl }: UrlResultProps) => {
    console.log(shortedUrl);
    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(shortedUrl);
        alert('URL copied to clipboard!');
        } catch (err) {
        console.error('Failed to copy:', err);
        }
    };

    return (
        <div className={styles.formGroup}>
        <input
            type="text"
            value={shortedUrl}
            readOnly
            className={styles.resultInput}
        />
        <div className={styles.buttonGroup}>
            <button 
            type="button" 
            className={styles.actionButton}
            onClick={handleCopy}
            >
            Copy
            </button>
            <button 
            type="button" 
            className={styles.actionButton}
            onClick={() => window.open(shortedUrl, '_blank')}
            >
            Visit
            </button>
        </div>
        </div>
    );
};