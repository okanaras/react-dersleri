import { useFormik } from 'formik';
import { registerFormSchemas } from '../src/schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, actions) => {
        setTimeout(() => actions.resetForm(), 2000);
    };

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
    });


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label>Email</label>
                    <input type='text' id='email' placeholder='Email Giriniz' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div className='input-div'>
                    <label>Yas</label>
                    <input type='number' min={1} id='age' placeholder='Yas Giriniz' value={values.age} onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>
                <div className='input-div'>
                    <label>Sifre</label>
                    <input type='password' id='password' placeholder='Sifre Giriniz' value={values.password} onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}

                </div>
                <div className='input-div'>
                    <label>Sifre Tekrari</label>
                    <input type='password' id='confirmPassword' placeholder='Sifre Tekrar Giriniz' value={values.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                </div>
                <div className='input-div'>
                    <div className='term-div'>
                        <input className='term-checkbox' type='checkbox' id='term' value={values.term} onChange={handleChange} />
                        <label htmlFor='term'>Kullanici sozlesmesini kabul ediyorum</label>
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}
                </div>
                <button type='submit' className='save-button'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm