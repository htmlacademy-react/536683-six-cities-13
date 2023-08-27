import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles['spinner']} data-testid="spinner">
    <div className={styles['spinner__inner']}></div>
  </div>
);

export { Spinner };
