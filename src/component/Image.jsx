import React from 'react';
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from '@dnd-kit/sortable';

// import { useDrag } from 'react-dnd';

const Image = ({ src, id, tags }) => {
//   const [, ref] = useDrag({
//     type: 'IMAGE',
//     item: { index },
//   });

const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
} = useSortable({id: id,})

const style = {
    transform: CSS.Transform.toString(transform),
    transition
}

  return (
    <>
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='group image-box w-[100%] h-[300px] md:w-[30%] lg:h-[400px] xl:h-[500px] rounded-xl overflow-hidden relative'>
        <img className='w-[100%] h-full object-cover' src={src}/>
        {<span className='block absolute bottom-0 translate-y-32 p-5 bg-[#00000040] backdrop-blur-sm text-white group-hover:transition group-hover:duration-300 w-full transition duration-300 group-hover:translate-y-0'>{tags}</span>}
    </div>
    </>
  );
};

export default Image;