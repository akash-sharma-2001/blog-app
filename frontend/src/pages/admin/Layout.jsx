import React from 'react'
import { assests } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
    const {axios, setToken, navigate} = useAppContext()

    const logout = () =>{
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null
        setToken(null)
        navigate('/')
    }

  return (
    <>
    {/* Admin Navbar */}
    <div className='flex h-12 justify-between items-center px-4 border-b border-b-gray-200 sm:px-20'>
        <img src={assests.navbarLogo} alt="Logo" onClick={() => navigate('/')} className='h-8 cursor-pointer' />
        <button onClick={logout} className='bg-blue-500 text-white px-3 py-0.5 text-sm rounded-sm cursor-pointer'>Logout</button>
    </div>

    {/* SideBar and Dashboard */}
    <div className='flex h-[calc(100vh-50px)]'>
        <Sidebar />
        <Outlet />
    </div>
    </>
  )
}

export default Layout