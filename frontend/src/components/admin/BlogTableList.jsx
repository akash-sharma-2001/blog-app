import React from 'react'
import {useAppContext} from '../../context/AppContext'
import {toast} from 'react-hot-toast'

const BlogTableList = ({blog, fetchBlogs, index}) => {
    const {title, createdAt} = blog;
    const blogDate = new Date(createdAt);

    const {axios} = useAppContext()

    const togglePublish = async () => {
        try {
            const {data} = await axios.post('/api/blog/toggle-publish', {id: blog._id})
            if(data.success){
                toast.success(data.message)
                await fetchBlogs()  // fetching the blog post again, so it will refresh this data that is the table
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteBlog = async () => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this blog?')
            if(!confirm) return;  

            const {data} = await axios.post('/api/blog/delete', {id: blog._id})
            if(data.success){
                toast.success(data.message)
                await fetchBlogs()  
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <tr className='border-b border-b-gray-200 text-xs'>
        <th className='p-1 sm:px-4 sm:py-2'>{index}</th>
        <td className='p-1 sm:px-4 sm:py-2'>{title}</td>
        <td className='p-1 max-sm:hidden sm:px-4 sm:py-2'>{blogDate.toDateString()}</td>
        <td className='p-1 max-sm:hidden sm:px-4 sm:py-2'>
            <p className={`${blog.isPublished ? 'text-green-500' :'text-orange-500'} text-center`}>{`${blog.isPublished ? 'Publish' : 'UnPublish'}`}</p>
        </td>
        <td className='p-1 flex justify-center gap-1 sm:px-4 sm:py-2 sm:gap-4'>
            <button onClick={togglePublish} className='border border-gray-400 px-1 py-0.5 rounded-sm text-[10px] cursor-pointer'>{`${blog.isPublished ? 'UnPublish' : 'Publish'}`}</button>
            <button onClick={deleteBlog} className='border border-gray-400 px-1 py-0.5 rounded-sm text-[10px] bg-red-50/45 cursor-pointer'>Delete</button>
        </td>
    </tr>
  )
}

export default BlogTableList