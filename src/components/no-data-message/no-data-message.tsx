import styles from './no-data-message.module.css';

const NoDataMessage = () => (
  <div className={styles['no-data-message']}>
    There is no suitable data to display!
  </div>
);

export { NoDataMessage };
