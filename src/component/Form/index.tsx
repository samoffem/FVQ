import styles from './form.module.css'


const Form = () => {
  return (
    <div className={styles['form-wrapper']}>

        <form>
            <p className={styles['form-header']}>Tell us about yourself</p>

            <div className={styles['form-group-wrap']}>

                <div className={styles['form-group']}>
                    <label>First Name</label>
                    <input type='text' />
                </div>
                <div className={styles['form-group']}>
                    <label>Last Name</label>
                    <input type='text' />
                </div>
                <div className={styles['form-group']}>
                    <label>Email</label>
                    <input type='email' />
                </div>
                <div className={styles['form-group']}>
                    <label>Telephone</label>
                    <input type='text' />
                </div>
                <div className={styles['form-group']}>
                    <label>Date of birth</label>
                    <input type='text' />
                </div>
            </div>

            <div className={styles['btn-wrap']}>
                <button>Continue</button>
            </div>

        </form>

    </div>
  )
}

export default Form