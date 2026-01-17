import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {
  const { id } = useParams() 
  const [data, setData] = useState(null)
  const [commentData, setCommentData] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const {axios, } = useAppContext()
  
  // Fetching Blog from database using id in url
  const fetchBlogData = async() => {
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      if(data.success){
        setData(data.blog)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // Fetching all Comments 
  const fetchCommentData = async() => {
    try {
      const {data} = await axios.post('/api/blog/comments', {blogId: id})
      if(data.success){
        setCommentData(data.comments)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogData()
    fetchCommentData()
  }, [])
  
  const postComment = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/blog/add-comment', {blog: id, name, content})
      if(data.success){
        toast.success(data.message)
        setName('')
        setContent('')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return data ? (
    <div>
      <Navbar />
      <div className='my-5 px-5 sm:px-40'>
        <h1 className='font-medium text-lg text-center px-10 sm:text-4xl'>{data.title}</h1>
        <p className='text-center text-gray-500 text-sm sm:text-2xl'>({data.category})</p>
        <div className='flex justify-between my-1'>
          <p className='text-sm text-gray-600'>Published on {moment(data.createdAt).format("MMM Do YYYY")}</p>
          <p className='text-sm text-gray-600'>Author: {data.author}</p>
        </div>
        <div>
          <img src={data.image} alt="Blog Image" className='aspect-video rounded-sm' />
          <div className='rich-text my-2' dangerouslySetInnerHTML={{"__html": data.description}}></div>
        </div>

        {/* Displaying all Comment */}
        <div>
          <h1 className='font-medium text-xl mb-1'>Comments: ({commentData.length})</h1>
          <div className='flex flex-col gap-2'>
            {commentData.map((item, index) => (
              <div key={index} className='bg-gray-100 p-1.5 rounded-md'>
                <div className='flex gap-2 items-center'>
                  <div className='w-6 h-6 rounded-full bg-blue-500 text-white flex justify-center items-center'>
                    {item.name[0].toUpperCase()}
                  </div>
                  <p className='text-[17px]'>{item.name}</p>
                </div>
                <div className='flex flex-col justify-between'>
                  <p className='ml-8 text-sm'>{item.content}</p>
                  <p className='text-right text-sm text-gray-500'>{moment(item.createdAt).fromNow()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Adding Comment  */}
        <div className='my-5 sm:w-[50%]'>
          <h1 className='font-medium text-xl mb-1'>Add Your Comment</h1>
          <form onSubmit={postComment} className='flex flex-col gap-3'>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name'className='text-sm border border-gray-400 px-1 py-0.5 outline-none rounded-sm' required />
            <textarea placeholder='Comment' onChange={(e) => setContent(e.target.value)} value={content} className='text-sm border border-gray-400 px-1 py-0.5 rounded-sm outline-none min-h-30' required></textarea>
            <div>
              <button type="submit"className='flex- bg-blue-500 text-sm text-white px-2 py-0.5 rounded-sm cursor-pointer'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
  : 
  (
    <div><h1>Loading...</h1></div>
  )
}

export default Blog