import styles from './result.module.css';

export default function Result({stoppedTime, message}){
  return(
    <div className={styles.result}>
      <span className={styles.message}>
        {message && <div>{message}</div>}
      </span>

      <span className={styles.stoppedtime}>
        {stoppedTime !== null && <div>{`Stopped Time: ${stoppedTime} seconds`}</div>}
      </span>
    </div>
  );
}