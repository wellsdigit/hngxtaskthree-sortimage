import React, { useState } from 'react';
import Image from './Image';
import { allImages } from '../assets/library/Library';
import { 
    DndContext,
    closestCenter
} from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    rectSwappingStrategy,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

function Gallery() {
    const imagesFetch = allImages;
    const [images, setImages] = useState(imagesFetch);
    const [tagFilter, setTagFilter] = useState('');
    //   const handleImageMove = (draggedIndex, newIndex) => {
    //     const updatedImages = [...images];
    //     const [draggedImage] = updatedImages.splice(draggedIndex, 1);
    //     updatedImages.splice(newIndex, 0, draggedImage);
    //     setImages(updatedImages);
    //   };

    //   console.log(images.map((e) => e))
    
    //   const filteredImages = images.filter((image) => {
    //     return image.tags.some((tag) =>
    //       tag.toLowerCase().includes(tagFilter.toLowerCase())
    //     );
    //   });
   function handleDragEnd(event){
    console.log('Drag end called')
    const {active, over} = event;
    // console.log(active.id)
    // console.log(over.id)
    if (active.id !== over.id) {
        setImages((items) => {
            const activeIndex = items.findIndex((image) => image.id === active.id);
            const overIndex = items.findIndex((image) => image.id === over.id);
            // const overIndex = items.indexOf(over.id);
            // console.log(items.indexOf())
            console.log(arrayMove(items, activeIndex, overIndex))
            return arrayMove(items, activeIndex, overIndex);
        })
    }
   }
  return (
    // <DndProvider backend={HTML5Backend}>
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Search by tag"
    //       value={tagFilter}
    //       onChange={(e) => setTagFilter(e.target.value)}
    //     />
    //   </div>
    //   <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    //   {/* {images.map((image, index) => (
    //       <Image
    //         key={image.id}
    //         src={image.imageUrl}
    //         tags={image.tags}
    //         index={index}
    //         onImageMove={handleImageMove}
    //       />
    //     ))} */}
    //   </div>
    // </DndProvider>
    <>
    <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
    >
        <SortableContext
            items={images}
            strategy={horizontalListSortingStrategy}
        >
            <div className='flex'>
                {images.map(image => (<Image src={image.imageUrl} tags={image.tags} key={image.id} id={image.id}/>))}
            </div>
        </SortableContext>
    </DndContext>
    </>
  )
}

export default Gallery;