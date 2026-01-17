import React, { useState, useEffect } from 'react'
import BlogTableList from '../../components/admin/BlogTableList'
import {useAppContext} from '../../context/AppContext'
import {toast} from 'react-hot-toast'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])
  const {axios} = useAppContext()

  const fetchBlogs = async() => {
    try {
      const {data} = await axios.get('/api/admin/listblogs')
      if(data.success){
        setBlogs(data.blogs)
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 px-5 bg-blue-50/50 sm:px-20 lg:px-35'>
      <h1 className='font-medium mt-5 mb-1'>All Blogs</h1>
      <div className='bg-white rounded-sm max-h-4/5 overflow-auto scrollbar-hidden'>
        <table className='text-xs text-gray-700 w-full'>
          <thead>
            <tr className='border-b border-gray-200'>
              <th scope='col' className='p-1 sm:px-4 sm:py-2'>No.</th>
              <th scope='col' className='p-1 sm:px-4 sm:py-2'>Blog Title</th>
              <th scope='col' className='p-1 max-sm:hidden sm:px-4 sm:py-2'>Date</th>
              <th scope='col' className='p-1 max-sm:hidden sm:px-4 sm:py-2'>Status</th>
              <th scope='col' className='p-1 sm:px-4 sm:py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((blog, index) => (
                <BlogTableList key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBlog