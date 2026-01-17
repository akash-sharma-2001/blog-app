import React from 'react'
import { assests } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const {navigate, token} = useAppContext()

  return (
    <div className='flex justify-between h-12 px-4 sm:px-20 items-center border-b border-b-gray-200'>
        <img onClick={() => navigate('/')} src={assests.navbarLogo} alt="Blog App" className='h-8 cursor-pointer'/>
        <button onClick={() => navigate("/admin")} className='bg-blue-500 px-2 py-1 text-[13px] text-white rounded-lg flex justify-between items-center cursor-pointer'>
          {token ? 'Dashboard' : 'Login'}
        <img src={assests.arrowRight} className='w-5 pl-1' alt="arrow" />
        </button>
    </div>
  )
}

export default Navbar