import React, { useEffect, useState } from 'react'
import BlogTableList from '../../components/admin/BlogTableList'
import {useAppContext} from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBlogs: 0,
    totalComments: 0,
    draftBlogs:0,
    recentBlogs: []
  })

  const {axios} = useAppContext()

  const fetchDashboardData = async () => {
    try {
      const {data} = await axios.get('/api/admin/dashboard')
      if(data.success){
        setDashboardData(data.dashboardData)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [dashboardData])

  return (
    <div className='flex-1 p-5 bg-blue-50/50 sm:px-20 lg:px-35'>
      <div className='flex max-sm:justify-between sm:gap-10'>
        <div className='bg-white mb-5 px-4 py-3 text-center rounded-sm'>
          <p className='text-sm'>Total Blogs: {dashboardData.totalBlogs}</p>
        </div>
        <div className='bg-white mb-5 px-4 py-3 text-center rounded-sm'>
          <p className='text-sm'>Total Comments: {dashboardData.totalComments}</p>
        </div>
        <div className='bg-white mb-5 px-4 py-3 text-center rounded-sm max-sm:hidden'>
          <p className='text-sm'>Drafts Blogs: {dashboardData.draftBlogs}</p>
        </div>
      </div>
      
      {/* Displaying Recent Blogs */}
      <div className='bg-white rounded-sm max-h-4/5 overflow-auto'>
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
              dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableList key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index+1}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard