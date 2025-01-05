import { ShortenResponse } from '../../types/shortenResponse';
import { QrButton } from '../qrButton/QrButton';
import styles from './UrlResult.module.css';

interface UrlResultProps {
    shortenData: ShortenResponse
}

export const UrlResult = ({ shortenData }: UrlResultProps) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortenData.aliasCompleteUrl ?? shortenData.shortedCompleteUrl);
        alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className={styles.formGroup}>
            <input
                type="text"
                value={shortenData.aliasCompleteUrl ?? shortenData.shortedCompleteUrl}
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
                <QrButton url={shortenData.alias ?? shortenData.shortedUrl} token={shortenData.token} />
                <button 
                    type="button" 
                    className={styles.actionButton}
                    onClick={() => window.open(shortenData.aliasCompleteUrl ?? shortenData.shortedCompleteUrl, '_blank')}
                >
                    Visit
                </button>
            </div>
        </div>
    );
};