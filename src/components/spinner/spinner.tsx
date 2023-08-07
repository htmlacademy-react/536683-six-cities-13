import { LoadingStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import styles from './spinner.module.css';

const Spinner = () => {
  const loadingStatus = useAppSelector((store) => store.loadingStatus);

  return loadingStatus === LoadingStatus.Loading ? (
    <div className={styles['spinner']}>
      <div className={styles['spinner__inner']}></div>
    </div>
  ) : null;
};

export { Spinner };
