import Link from "next/link"
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

 const NavBar= async ()=> {
    const session = await getSession();
  return (
    <div>
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                 
                <Link href="/" className="text-xl font-bold text-blue-500">Hello World!</Link>

                <div className="flex items-center space-x-4">
                    { session ?(
                        <>
                        <Link href="/contact" className="hover:text-gray-900">Contact</Link>
                         <LogoutButton />
                        </>
                       
                    ):(<>
                        <Link href="/login" className="hover:text-blue-600 mr-8">Login</Link>
                        <Link href="/register" className="hover:text-blue-600 mr-8">Register</Link>
                    </>)}
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar