import React from 'react'
import { useState } from 'react'
import { blog_Categories } from '../assets/assets'
import BlogCard from './BlogCard'
import {useAppContext} from '../context/AppContext'

const BlogList = () => {
    const [cat, setCat] = useState("All")
    const {blogs, input} = useAppContext()

    const blogCategories = ["All", ...blog_Categories]

    const filterBlogsBySearch = () => {
        if(input === ""){
            return blogs
        }
        return blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

    const filteredBlogs = cat === "All" ? filterBlogsBySearch() : filterBlogsBySearch().filter((blog) => blog.category === cat);
    
  return (
    <div className='mt-7'>
        <div className='flex justify-center mb-7'>
            {blogCategories.map((blogs)=> (
                <div key={blogs}>
                     <button onClick={()=> setCat(blogs)} className={`px-1.5 py-0.5 rounded-lg mx-0.5 text-[15px] sm:px-3.5 sm:rounded-3xl sm:mx-1 ${cat === blogs && 'bg-blue-500 text-white'}`}>{blogs}</button>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 mx-6 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-16'>
            {filteredBlogs.map(blog => (
                <BlogCard key={blog._id} blog={blog}/>
            ))}
        </div>
    </div>
  )
}

export default BlogList