import { useAppSelector } from '../../hooks/use-app-selector';
import { getErrorInfo } from '../../store/app-process/selectors';
import styles from './error-message.module.css';

const ErrorMessage = () => {
  const error = useAppSelector(getErrorInfo);

  return error ? (
    <div className={styles['error-message']} data-testid="error-message">
      {error.messageStatus && <span>{error.messageStatus}</span>}
      <span>{error.message}</span>
    </div>
  ) : null;
};

export { ErrorMessage };
