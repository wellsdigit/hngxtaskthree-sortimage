import React, { useState } from 'react';
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
  return (
    <>
    <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
    >
        <SortableContext
            items={images}
            strategy={rectSwappingStrategy}
        >
            <div className='flex flex-wrap justify-between p-10 gap-5'>
                {images.map(image => (<Image src={image.imageUrl} tags={image.tags} key={image.id} id={image.id}/>))}
            </div>
        </SortableContext>
    </DndContext>
    </>
  )
}

export default Gallery;