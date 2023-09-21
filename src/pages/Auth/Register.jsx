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
    email: '',
    password: '',
    cpassword: '',
}

function Register() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const onSubmitHandler = async (values, { resetForm }) => {
        // Exclude the 'confirmPassword' field when sending data to the server
        const { cpassword, ...dataToSend } = values;
        // Send 'dataToSend' to the server
        console.log(dataToSend);
        setLoading(true);
            try {
                const { data, error } = await supabase.auth.signUp({
                    email: dataToSend.email,
                    password: dataToSend.password,
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
                  toast.success('Check your mailbox!', {
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

    // Validation process
    const validate = Yup.object({
        email: Yup.string().email('Enter a valid email').required('Email is required'),
        password: Yup.string().required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, 'Password must be at least 8 characters long and have only letters, numbers'),
        cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Password is required'),
    })
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmitHandler}
        >
            {formik => (
                <div className='w-[90%] sm:w-[80%] md:w-[40%] lg:w-[34%] xl:w-[25%] flex flex-col gap-4'>
                    <Heading title={'Register'}/>
                    <Form>
                        <div className='flex flex-col gap-4'>
                            <InputDynamic name={'email'} type={'email'} label={'Email'} InputId={'eml'}/>
                            <InputDynamic name={'password'} type={'password'} label={'Password'} InputId={'pswd'}/>
                            <InputDynamic name={'cpassword'} type={'password'} label={'Confirm Password'} InputId={'ceml'}/>
                            {loading ? 
                            <>
                            <button
                            disabled=""
                            type="button"
                            className="w-full text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                                />
                                <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                                />
                            </svg>
                            Loading...
                            </button>
                            </>
                            :
                            <DynamicButton text={'Sign up'}/>}
                            <p className='text-center text-gray-600'>Already have an account? <Link to='/' className='text-gray-800 font-bold hover:underline'>Login</Link></p>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
  )
}

export default Register;