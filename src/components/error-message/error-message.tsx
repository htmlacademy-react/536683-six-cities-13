import { useAppSelector } from '../../hooks/use-app-selector';
import styles from './error-message.module.css';

const ErrorMessage = () => {
  const error = useAppSelector((store) => store.error);

  return error ? (
    <div className={styles['error-message']}>
      {error.messageStatus && <span>{error.messageStatus}</span>}
      <span>{error.message}</span>
    </div>
  ) : null;
};

export { ErrorMessage };
