import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {_id, image, title, category, description} = blog;
    const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full shadow rounded-lg overflow-hidden cursor-pointer'>
        <img src={image} alt="img" className='aspect-video'/>
        <span className='inline-block ml-2 mt-2 px-2 bg-blue-500 rounded-sm text-sm text-white py-0.5'>{category}</span>
        <div className='px-2 py-4'>
            <h5 className='font-medium mb-1'>{title}</h5>
            <p dangerouslySetInnerHTML={{"__html": description.slice(0,100)}} className='text-sm text-gray-500'></p>
        </div>
    </div>
  )
}

export default BlogCard