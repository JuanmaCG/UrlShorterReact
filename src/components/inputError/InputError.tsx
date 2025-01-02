import styles from './InputError.module.css';

interface InputErrorProps {
  message: string;
}

export const InputError = ({ message }: InputErrorProps) => (
  <div className={styles.errorMessage}>
    {message}
  </div>
);
