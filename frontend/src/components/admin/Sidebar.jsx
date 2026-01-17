import React from 'react'
import { NavLink } from 'react-router-dom'
import { assests } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='border-r border-r-gray-200 flex flex-col'>
      <NavLink end={true} to={'/admin'} className={({isActive}) => `flex gap-2 px-4 py-2 ${isActive && "bg-blue-200/10 border-r-4 border-r-blue-300"}`}>
        <img src={assests.dashbordIcon} alt="DashboardIcon" className='w-5' />
        <p className='hidden sm:inline-block'>Dashboard</p>
      </NavLink>
      <NavLink to={'/admin/AddBlog'} className={({isActive}) => `flex gap-2 px-4 py-2 ${isActive && "bg-blue-200/10 border-r-4 border-r-blue-300"}`}>
        <img src={assests.addIcon} alt="AddIcon" className='w-5' />
        <p className='hidden sm:inline-block'>Add Blogs</p>
      </NavLink>
      <NavLink to={'/admin/listBlog'} className={({isActive}) => `flex gap-2 px-4 py-2 ${isActive && "bg-blue-200/10 border-r-4 border-r-blue-300"}`}>
        <img src={assests.listIcon} alt="ListIcon" className='w-5' />
        <p className='hidden sm:inline-block'>Blogs List</p>
      </NavLink>
      <NavLink to={'/admin/comments'} className={({isActive}) => `flex gap-2 px-4 py-2 ${isActive && "bg-blue-200/10 border-r-4 border-r-blue-300"}`}>
        <img src={assests.commentIcon} alt="commentIcon" className='w-5' />
        <p className='hidden sm:inline-block'>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar