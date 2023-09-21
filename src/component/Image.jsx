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
    // <div
    //   ref={ref}
    //   style={{
    //     width: '100px',
    //     height: '100px',
    //     backgroundImage: `url(${src})`,
    //     backgroundSize: 'cover',
    //     cursor: 'pointer',
    //   }}
    //   onClick={() => onImageMove(index)}
    // >
    //   <div className="tags">
    //     {<span>{tags}</span>}
    //   </div>
    // </div>
    <>
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
    <div>
      <div className="tags">
        {<img className='w-[100%]' src={src}/>}
        {<span>{tags}</span>}
      </div>
    </div>
    </div>
    </>
  );
};

export default Image;