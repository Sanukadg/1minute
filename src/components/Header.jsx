import styles from './header.module.css';

export default function Header(){
  return (
    <div className={styles.header}>
      Can you guess how long
      <span className={styles.italicheader}> 1 minute</span> is?
    </div>
  );
}