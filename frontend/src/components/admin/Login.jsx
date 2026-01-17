import React, { useState } from 'react'
import {useAppContext} from '../../context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {axios, setToken} = useAppContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/admin/login', {email, password});
            if(data.success){
                setToken(data.token)
                localStorage.setItem('token', data.token)
                axios.defaults.headers.common['Authorization'] = data.token;
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='mx-10 my-20 px-5 py-6 border border-gray-200 shadow rounded-sm sm:w-[25%] sm:mx-auto sm:px-10'>
        <h1 className='font-medium text-center text-xl sm:text-2xl'>Admin Login</h1>
        <p className='text-sm text-gray-600 text-center'>Enter your credentials to access the admin panel</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-0.5'>
                <label className='font-medium text-[14px]'>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Please enter your email here' className='border border-gray-400 outline-none rounded-sm px-1 py-0.5 text-sm' required/>
            </div>
            <div className='flex flex-col gap-0.5'>
                <label className='font-medium text-[14px]'>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Please enter your password" className='border border-gray-400 outline-none rounded-sm px-1 py-0.5 text-sm' required/>
            </div>
            <button type="submit" className='bg-blue-500 text-white rounded-sm text-sm py-0.5'>Login</button>
        </form>
    </div>
  )
}

export default Login