import React from 'react'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection'
import Gallery from '../component/Gallery'

function ImageGallery({token}) {
    // console.log(token)
    const firstTwoLetters = token.user.email.substring(0, 2);
  return (
    <>
    <Header nameImg={firstTwoLetters}/>
    <div className='text-gray-800 text-center mt-8'>
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        Explore breathtaking images
        </h1>
        <p className="mb-6 text-sm md:text-lg font-normal  text-gray-500 lg:text-xl px-3 sm:px-16 xl:px-48 dark:text-gray-400">
        Explore stunning visual content with the convenience of effortless image management through drag-and-drop functionality.
        </p>
    </div>
    <Gallery />
    </>
  )
}

export default ImageGallery