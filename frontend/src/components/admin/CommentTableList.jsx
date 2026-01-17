import React from 'react'
import { assests } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import {toast} from 'react-hot-toast'

const CommentTableList = ({comment, fetchComment, index}) => {
    const {title} = comment.blog;
    const commentDate = new Date(comment.createdAt)
    const {axios} = useAppContext()

    const approveComment = async () => {
        try {
            const {data} = await axios.post('/api/admin/approve-comment', {id: comment._id})
            if(data.success){
                toast.success(data.message)
                await fetchComment()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteComment = async () => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this comment?')
            if(!confirm) return; 

            const {data} = await axios.post('/api/admin/delete-comment', {id: comment._id})
            if(data.success){
                toast.success(data.message)
                await fetchComment()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <tr className='border-b border-b-gray-200 text-xs'>
        <td className='px-1 py-1.5 sm:px-4 sm:py-2'>
            <b>Blog: </b>{title}
            <br />
            <b>Name: </b>{comment.name}
            <br />
            <b>Comment: </b>{comment.content}
        </td>
        <td className='px-1 py-1.5 max-sm:hidden sm:px-4 sm:py-2'>{commentDate.toLocaleDateString()}</td>
        <td className='px-1 py-1.5 flex flex-col items-center justify-center gap-2 sm:px-4 sm:py-2 sm:flex-row'>
            {comment.isApproved ? 
            <p className='text-xs px-1 py-0.5 border border-green-500 text-green-500 rounded-sm'>Approved</p> 
            : <button onClick={approveComment} className='text-xs border border-gray-300 px-1 py-0.5 text-gray-600 rounded-sm cursor-pointer'>Approve</button>}
            <img onClick={deleteComment} src={assests.deleteIcon} alt="deleteIcon" className='w-4 cursor-pointer'/>
        </td>
    </tr>
  )
}

export default CommentTableList