"use client"

import { loginAction } from "@/app/actions/auth"

function LoginForm() {
  return (
    <div>
        <form  action={loginAction} className="space-x-4">
            <div>
                <label className="mt-5 block">Email</label>
                <input type="email" name="email" placeholder="" className="pl-3 mt-1 block rounded-md border-gray-600 shadow-sm h-10 w-100" required />
                 <label className="mt-5 block">Password</label>
                <input type="password" name="password" placeholder="" className="pl-3 mt-1 block rounded-md border-gray-600 shadow-sm h-10 w-100" required />
                <button type="submit" className="mt-4 block rounded-md bg-blue-500 text-white shadow-sm h-10 w-100">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm 