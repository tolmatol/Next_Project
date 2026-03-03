import React from 'react'
import Style from './login.module.css'
import LoginForm from './LoginForm'
import Link from 'next/link'
function LoginPage() {
  return (
    <>
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h1 className="text-2xl">Login</h1>
      <LoginForm /> 
      <p className='mt-4 text-center'>Don't have an account ? <Link href="/register" className='text-blue-500 hover:underline'>Register</Link></p>
    </div>
    </>
  )
}

export default LoginPage