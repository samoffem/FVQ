import styles from './form.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
}
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    dob: Yup.date()
    .typeError("Date of birth is required") 
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  });

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
      });
    
    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };
    


  return (
    <div className={styles['form-wrapper']}>

        <form onSubmit={handleSubmit(onSubmit)}>
            <p className={styles['form-header']}>Tell us about yourself</p>

            <div className={styles['form-group-wrap']}>

                <div className={styles['form-group']}>
                    <label>First Name</label>
                    <input className={errors.firstName? styles['input-error'] : ''} type='text' {...register("firstName")} />
                    {errors.firstName && <p className={styles["error"]}>{errors.firstName.message}</p>}
                </div>
                <div className={styles['form-group']}>
                    <label>Last Name</label>
                    <input className={errors.lastName? styles['input-error'] : ''} type='text' {...register("lastName")}/>
                    {errors.lastName && <p className={styles["error"]}>{errors.lastName.message}</p>}
                </div>
                <div className={styles['form-group']}>
                    <label>Email</label>
                    <input className={errors.email? styles['input-error'] : ''} type='email' {...register("email")}/>
                    {errors.email && <p className={styles["error"]}>{errors.email.message}</p>}
                </div>
                <div className={styles['form-group']}>
                    <label>Telephone</label>
                    <input className={errors.phone? styles['input-error'] : ''} type='tel' {...register("phone")}/>
                    {errors.phone && <p className={styles["error"]}>{errors.phone.message}</p>}
                </div>
                <div className={styles['form-group']}>
                    <label>Date of birth</label>
                    <input className={errors.dob? styles['input-error'] : ''} type='date'  {...register("dob")}/>
                    {errors.dob && <p className={styles["error"]}>{errors.dob.message}</p>}
                </div>
            </div>

            <div className={styles['btn-wrap']}>
                <button type='submit'>Continue</button>
            </div>

        </form>

    </div>
  )
}

export default Form