import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={styles.errorMessage}>
    {message}
  </div>
);
