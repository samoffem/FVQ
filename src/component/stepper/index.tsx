import styles from './stepper.module.css'

const Stepper = () => {
  return (
    <div className={styles['wrapper']}>
        <div className={`${styles['step-indicator']} ${styles['active']}`}></div>
        <div className={styles['step-indicator']}></div>
        <div className={styles['step-indicator']}></div>
        <div className={styles['step-indicator']}></div>
        
    </div>
  )
}

export default Stepper