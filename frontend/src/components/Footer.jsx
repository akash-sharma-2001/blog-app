import React from 'react'
import { assests, footerData } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-5 py-2 mt-7 bg-gray-50 sm:px-20'>
      <div className='flex flex-col gap-2 py-1 sm:flex-row sm:justify-between'>
        <div className='w-full sm:w-[35%]'>
          <img src={assests.navbarLogo} alt="Blog App" className='h-8 mb-0.5'/>
          <p className='text-sm text-gray-600'>Discover stories, tips, and insights on Technology, Health, Lifestyle, Travel, and Gaming with Blog App.</p>
        </div>
        <div className='flex justify-around sm:justify-between sm:w-[38%]'>
          {footerData.map((section, index) => (
            <div key={index}>
              <h1>{section.title}</h1>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className='text-gray-600 text-sm'><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='my-0.5 text-gray-400'/>
      <p className='text-center text-sm text-gray-600'>Copyright 2026 &copy; Blog App - All Right Reserved.</p>
    </div>
  )
}

export default Footer