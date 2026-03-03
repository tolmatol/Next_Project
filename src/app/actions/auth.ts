// "use server"

// import axios from "axios";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
// import { UserType } from "../_types/user";

// const API_URL = 'http://localhost:3001';

// export const loginAction = async (formData: FormData) => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
//     );
 

//     const user: UserType = response.data[0];

//     if (!user) {
//       throw new Error("Invalid Credentials");
//     }
 
//   } catch (error: any) {
//     throw new Error(error.message || "Failed to login");
//   }

//   redirect("/contact");
// };

// export const logout = async () => { 
//   redirect("/login");
// };



// "use server"

// import axios from "axios";
// import { redirect } from "next/navigation";

// const API_URL = "http://localhost:3001";

// export const loginAction = async (formData: FormData) => {
//   try {
//     const email = formData.get("email")?.toString().trim();
//     const password = formData.get("password")?.toString().trim();

//     const response = await axios.get(
//       `${API_URL}/users?email=${email}&password=${password}`
//     );

//     const user = response.data[0];

//     if (!user) {
//       return { error: "Invalid Credentials" }; // ✅ return instead of throw
//     }

//   } catch (error) {
//     return { error: "Something went wrong" };
//   }

//   redirect("/contact"); // only runs if login success
// };

"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    const response = await axios.get(
      `${API_URL}/users?email=${email}&password=${password}`
    );

    const user = response.data[0];

    if (!user) {
      return { error: "Invalid Credentials" }; // ✅ return instead of throw

     }
await setSession({name: user.name, email:user.email, id:user.id})
  } catch (error) {
    return { error: "Something went wrong" };
  }

  redirect("/contact"); // only runs if login success
};

export const logoutAction = async() =>{
  await deleteSession();
}