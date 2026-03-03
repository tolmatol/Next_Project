"use client"
import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth" 

function LogoutButton() {
  const router = useRouter();
  const handleLogout= async ()=>{
    
    try{
      await logoutAction();
      //redirect('/login')
      router.push("/login"); 
      router.refresh();
    }
    catch(error){
      console.log("logout failed", error)
    }
  }

  return (
    <div>
      <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default LogoutButton