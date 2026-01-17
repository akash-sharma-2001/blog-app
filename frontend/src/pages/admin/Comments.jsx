import React, { useEffect, useState } from 'react'
import CommentTableList from '../../components/admin/CommentTableList'
import { useAppContext } from '../../context/AppContext'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [selected, setSelected] = useState("Not Approved")
  const {axios} = useAppContext()

  const fetchCommentData = async() => {
    try {
      const {data} = await axios.get('/api/admin/comments')
      if(data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=> {
    fetchCommentData()
  },[])

  return (
    <div className='flex-1 px-5 py-5 bg-blue-50/50 sm:px-20 lg:px-35'>
      <div className='flex justify-between'>
        <h1 className='font-medium'>Comments</h1>
        <div className='flex gap-1.5'>
          <button onClick={() => setSelected("Approved")} className={`border rounded-md px-2 py-0.5 text-sm bg-white ${selected === "Approved" ? 'border-blue-500 text-blue-600' : ' border-gray-500 text-gray-600'}`}>Approved</button>
          <button onClick={() => setSelected("Not Approved")} className={`border rounded-md px-2 py-0.5 text-sm bg-white ${selected === "Not Approved" ? 'border-blue-500 text-blue-600' : ' border-gray-500 text-gray-600'}`}>Not Approved</button>
        </div>
      </div>
      <div className='bg-white mt-3 rounded-sm max-h-4/5 overflow-auto scrollbar-hidden'>
        <table className='w-full text-xs text-gray-700'>
          <thead>
            <tr className='text-left border-b border-gray-200'>
              <th scope='col' className='px-1 py-1.5 sm:px-4 sm:py-2'>Blog Title & Comment</th>
              <th scope='col' className='px-1 py-1.5 max-sm:hidden sm:px-4 sm:py-2'>Date</th>
              <th scope='col' className='px-1 py-1.5 sm:px-4 sm:py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              comments.filter((comment) => {
                if(selected === "Approved") return comment.isApproved === true;
                return comment.isApproved === false
              }).map((comment, index) => (
                <CommentTableList key={comment._id} comment={comment} fetchComment={fetchCommentData} index={index+1} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments