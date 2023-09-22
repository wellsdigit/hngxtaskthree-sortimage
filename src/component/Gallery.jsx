import React, { useEffect, useState } from 'react';
import Image from './Image';
import { allImages } from '../assets/library/Library';
import { 
    DndContext,
    closestCenter
} from '@dnd-kit/core';
import {
    arrayMove,
    rectSwappingStrategy,
    SortableContext,
} from "@dnd-kit/sortable";
import HeroSection from './HeroSection';

function Gallery() {
    const imagesFetch = allImages;
    const [images, setImages] = useState(imagesFetch);
    const [tagFilter, setTagFilter] = useState('');

   function handleDragEnd(event){
    const {active, over} = event;
    if (active.id !== over.id) {
        setImages((items) => {
            const activeIndex = items.findIndex((image) => image.id === active.id);
            const overIndex = items.findIndex((image) => image.id === over.id);
            return arrayMove(items, activeIndex, overIndex);
        })
    }
   }

   const handleChange = (e) => {
    const inputTerm = e.target.value.toLowerCase();
    setTagFilter(inputTerm);
  };

  useEffect(() => {
    if (tagFilter === '') {
      // If the tag filter is empty, reset images to the original imagesFetch
      setImages(imagesFetch);
    } else {
      // Otherwise, filter images based on the tag filter
      const filteredImages = imagesFetch.filter((image) => {
        const itemTagsLower = image.tags.toLowerCase();
        return itemTagsLower.includes(tagFilter);
      });
      setImages(filteredImages);
    }
  }, [tagFilter, imagesFetch]);
   const handleSearch = (e) => {
    
   }

  return (
    <>
    <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
    >
        <HeroSection onChange={handleChange} handleSearch={handleSearch}/>
        <SortableContext
            items={images}
            strategy={rectSwappingStrategy}
        >
            <div className='flex flex-wrap justify-between p-10 px-8 md:px-16 gap-5'>
                {images.map(image => (<Image src={image.imageUrl} tags={image.tags} key={image.id} id={image.id}/>))}
            </div>
        </SortableContext>
    </DndContext>
    </>
  )
}

export default Gallery;