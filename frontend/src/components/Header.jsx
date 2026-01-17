import React, {useRef} from 'react'
import {useAppContext} from '../context/AppContext'

const Header = () => {
  const {input, setInput} = useAppContext()
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  }
  const handleClear = () => {
    setInput('')
    inputRef.current.value = ""
  }

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        <h1 className='text-3xl mt-6 mb-4 text-center sm:text-6xl sm:mt-10 sm:mb-8'>Welcome to our <span className='text-blue-400'>Blogging</span><br/>Platform</h1>
        <form onSubmit={handleSubmit} className='border border-gray-400 rounded-[7px] px-1 py-1 flex justify-between sm:w-[35%]'>
            <input ref={inputRef} type="text" placeholder='Search here for blogs' className='outline-none text-[14px] w-[80%]'required/>
            <button className='bg-blue-500 text-white px-3 py-1 text-[14px] ml-1 rounded-[5px]'>Search</button>
        </form>
        <div>
          {input && 
          <button onClick={handleClear} className='mt-3 border border-gray-400 text-sm font-light px-2 py-0.5 rounded-sm'>Clear Search</button>
          }
        </div>
    </div>
  )
}

export default Header