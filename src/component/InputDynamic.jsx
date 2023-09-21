import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function InputDynamic({ type, label, InputId, ...props }) {
    const [visible, setVisivle] = useState(false);
    const [field, meta] = useField(props)
  return (
    <div>
        <div className='relative w-full'>
            <div className='flex justify-between w-full'>
                <label htmlFor={field.name} className="capitalize block mb-2 text-sm font-medium text-[#8f9198] dark:text-gray-700">{label}</label>
            </div>
            <input 
                className="bg-transparent border border-gray-800 text-gray-600 text-sm rounded-md focus:ring-0 focus:outline-none focus:border-none block w-full p-2.5 dark:placeholder-gray-400 focus:shadow-2xl transition focus:shadow-black dark:focus:ring-0 dark:focus:border-gray-500 ps-4" 
                type={type === 'password' && !visible ? 'password' : 'text'} 
                id={InputId}
                {...field} {...props}
                autoComplete='off' 
            />
            {type === 'password' && (
                <div className='absolute right-3 top-10 text-black text-lg' onClick={() => setVisivle(!visible)}>
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
            )}
            {<p className='transition-all duration-300 text-red-800 text-xs mt-2'>
                <ErrorMessage name={field.name} />
            </p>}
        </div>
    </div>
  )
}

export default InputDynamic;