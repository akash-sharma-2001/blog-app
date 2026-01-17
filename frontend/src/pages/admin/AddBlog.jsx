import React, { useRef, useState, useEffect } from 'react'
import { assests, blog_Categories } from '../../assets/assets'
import Quill from 'quill';
import {useAppContext} from '../../context/AppContext'
import toast from 'react-hot-toast';

const AddBlog = () => {
  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('Lifestyle')
  const [isPublished, setIsPublished] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const {axios} = useAppContext()
  
  // Reference variable 
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title, subtitle,
        description: quillRef.current.root.innerHTML,
        category, isPublished
      }

      const formData = new FormData()
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const {data} = await axios.post('/api/blog/add', formData)
      if(data.success){
        toast.success(data.message)
        setImage(false)
        setTitle('')
        setSubtitle('')
        quillRef.current.root.innerHTML=""
        setCategory("Lifestyle")
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false)
    }
  }

  useEffect(() => {
    // Initiate Quill only once 
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  }, [])

  return (
    <div className='flex-1 px-5 bg-blue-50/50 sm:px-20 lg:px-35'>
      <form onSubmit={handleSubmit} className='bg-white mt-5 rounded-md px-6 py-5 sm:w-3/5 sm:px-12 sm:py-7 max-h-[92%] overflow-auto'>
        <div>
          <p className='font-medium text-sm mb-0.5'>Upload Blog Image</p>
          <label htmlFor="image">
            <img src={!image ? assests.uploadIcon : URL.createObjectURL(image)} alt="upload" className={`h-10 ${image && 'h-20'}`} />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required/>
          </label>
        </div>
        <div className='mt-4 flex flex-col'>
          <p className='font-medium text-sm mb-0.5'>Blog Title</p>
          <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter blog title here" className='text-sm px-1 py-0.5 outline-none border border-gray-300 rounded-sm' required/>
        </div>
        <div className='mt-4 flex flex-col'>
          <p className='font-medium text-sm mb-0.5'>Sub title</p>
          <input type="text" onChange={e => setSubtitle(e.target.value)} value={subtitle} placeholder="Enter sub title here" className='text-sm px-1 py-0.5 outline-none border border-gray-300 rounded-sm' required/>
        </div>
        <div className='my-4 flex flex-col'>
          <p className='font-medium text-sm mb-0.5'>Blog Description</p>
          <div className='max-w-62 sm:max-w-lg h-60 pb-23 sm:pb-10'>
            <div ref={editorRef}></div>
          </div>
        </div>
        <div className='mt-4'>
          <p className='font-medium text-sm mb-0.5'>Blog Category</p>
          <select name="category" onChange={e => setCategory(e.target.value)} className='outline-none border border-gray-300 rounded-sm px-1 py-0.5 text-sm'>
            <option value="">Select Category</option>
            {blog_Categories.map((catItem, index) => (
              <option key={index} value={catItem}>{catItem}</option>
            ))}
          </select>
        </div>
        <div className='flex gap-2 my-4'>
          <p className='font-medium text-sm mb-0.5'>Publish Now</p>
          <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} />
        </div>
        <button disabled={isAdding} type="submit" className='px-3 py-1 text-sm rounded-md bg-blue-500 text-white'>{isAdding ? 'Adding...' : 'Add Blog'}</button>
      </form>
    </div>
  )
}

export default AddBlog