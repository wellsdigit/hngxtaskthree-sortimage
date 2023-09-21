import { Formik, Form } from 'formik';
import React, { useState } from 'react'
import Heading from '../../component/Heading';
import InputDynamic from '../../component/InputDynamic';
import DynamicButton from '../../component/DynamicButton';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import supabase from '../../config/supabaseClient'


const initialValues = {
    email: 'user@example.com',
    password: '1Password'
}

function Login() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmitHandler = async (values, { resetForm }) => {
        setLoading(true);
            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: values.email,
                    password: values.password,
                  })
                  if (error) throw error;
                  setLoading(false);
                  toast.success('Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                  navigate('/');
            } catch (error) {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                  setLoading(false);
            }
        
        // Reset the form after successful submission
        resetForm();
      };

    // Validation processing
    const validate = Yup.object({
        email: Yup.string().email('Enter a valid email').required('Email is required'),
        password: Yup.string().required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        , 'Password must be at least 8 characters long and have only letters, numbers and/or special characters'),
    })
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmitHandler}
        >
            {formik => (
                <div className='w-[90%] md:w-[40%] lg:w-[34%] xl:w-[25%] flex flex-col gap-4'>
                    <Heading title={'Sign In'}/>
                    <Form>
                        <div className='flex flex-col gap-4'>
                            <InputDynamic name={'email'} type={'email'} label={'Email'} InputId={'eml'}/>
                            <InputDynamic name={'password'} type={'password'} label={'Password'} InputId={'eml'}/>
                            <DynamicButton text={'Login'}/>
                            <p className='text-center text-gray-600'>Don't have an account yet? <Link to='register' className='text-gray-800 font-bold hover:underline'>Register</Link></p>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
  )
}

export default Login;