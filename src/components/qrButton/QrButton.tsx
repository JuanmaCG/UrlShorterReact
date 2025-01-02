import { qrResponse } from '../../services/urlService';
import styles from './QrButton.module.css';

interface QrButtonProps {
  url: string;
}

export const QrButton = ({ url }: QrButtonProps) => {
  const handleGenerateQR = async () => {
    try {
      
      const link = document.createElement('a');
      link.href = await qrResponse(url)
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating QR:', error);
    }
  };

  return (
    <button 
      type="button"
      className={styles.qrButton}
      onClick={handleGenerateQR}
      title="Download QR Code"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={styles.qrIcon}
      >
        <path d="M3 3h6v6H3zm2 2v2h2V5zm-2 8h6v6H3zm2 2v2h2v-2zm8-12h6v6h-6zm2 2v2h2V5zm3 11h-3v-3h1v2h2zm-1 1h1v3h-3v-1h2zm-2-2h-1v-1h1zm-1 2h1v1h-1zm5-1h1v3h-1zm-2-2v1h-1v-1zm2 0h1v1h-1z"/>
      </svg>
    </button>
  );
};
