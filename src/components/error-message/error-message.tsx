import { useAppSelector } from '../../hooks/use-app-selector';
import styles from './error-message.module.css';

const ErrorMessage = () => {
  const error = useAppSelector((store) => store.error);

  return error ? <div className={styles['error-message']}>{error}</div> : null;
};

export { ErrorMessage };
