import React from 'react'


function DynamicButton({text}) {
  return (
    <div className='w-full'>
        <button type="submit" className="w-full hover:shadow-2xl hover:shadow-black transition text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{text}</button>
    </div>
  )
}

export default DynamicButton;