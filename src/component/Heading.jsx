import React from 'react'

function Heading({title}) {
  return (
    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl w-full text-center py-4 px-2">{title}</h1>
  )
}

export default Heading;