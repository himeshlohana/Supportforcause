   
// //check
// "use client"
// import React,{useState,useEffect} from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'
// import { fetchUser,updateProfile } from '@/action/useraction'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 
// import { Bounce } from 'react-toastify';
// const Dashboard = () => {
   
  
//   const { data: session,update } = useSession()
//   const router=useRouter()
//   const [form, setform] = useState({ })
//   useEffect(() => {
    
//       if(!session) {
          
//           router.push('/login')
          
//         }else{
//             getData()

//         }
//         console.log(session)
//   }, [router,session])
  
//   const getData = async()=>{
//     //  if(session) {
//     //                 let u = await fetchuser(session.user.name);
//     //                 setform(u);
//     //  }  
//     let u = await fetchUser(session.user.name);
//                  setform(u);  
        
//   }
//   const handleChange = (e) => {
//     setform({...form, [e.target.name]: e.target.value })
//   }
//   const handleSubmit = async (e) => {
  
//     let a = await updateProfile(e,session.user.name )
//     alert("Update profile");

//   }
// // //check 
//     return (
//  <>
//       <div className='flex flex-col items-center justify-center'>

//       <div className='flex items-center justify-center p-4  flex-col'>
//       <h2 className=' font-bold text-3xl'>Welcome to Dashboard</h2> 
// </div>
 
//   <form className= 'w-[40%]  gap-1 flex flex-col justify-center items-center' action={handleSubmit}>
    
//   <li className='w-full list-none '>Name<input value={form.name ? form.name :""} name='name' id='name' onChange={handleChange}  className='w-full p-1 rounded-sm text-black' type="text" placeholder=''  /></li>

//   <li className='w-full list-none '>Email<input value={form.email?form.email:""}  onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="email" placeholder='' name="email" id="email" /></li>

//   <li className='w-full list-none '>Username<input value={form.username?form.username:""} onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="username" id="username" /></li>

//   <li className='w-full list-none '>Profile Picture<input value={form.profilepic?form.profilepic:""} onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="profilepic" id="profilepic" /></li>

//   <li  className='w-full list-none '>Cover Picture<input value={form.coverpic?form.coverpic:""} onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="coverpic" id="coverpic" /></li>

//   <li htmlFor="razorpayid" className='w-full list-none '>Razorpay ID<input value={form.razorpayid?form.razorpayid:" "} onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="razorpayid" id="razorpayid" /></li>

//   <li htmlFor="razorpaysecret" className='w-full list-none '>Razorpay Secret  <input value={form.razorpaysecret?form.razorpaysecret:""}  onChange={handleChange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="razorpaysecret" id="razorpaysecret" /></li>
     
//      <button type='submit' className='w-full  bg-blue-700 rounded-sm mt-2 p-1 text-xl'>Save</button>
//   </form>
  
// </div>
      


//       </>
//     )
// }
 
// export default Dashboard
'use client'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchUser , updateProfile } from '@/action/useraction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const DashBoard = () => {
    const { data: session , update} = useSession();
    const router = useRouter();
    const [form, setForm] = useState({})

    useEffect(() => {
     getData()
      if(!session) {
        router.push("/login");
      }
    }, [router , session])

    const getData = () =>{
      if(session){
        fetchUser(session.user.name).then((data)=>{
          setForm(data)
        })
      }
    }
    
    const handleChange = (e) => {
      if(e.target.name === 'username'){
        const name = e.target.value
        const slugName = name.split(/[^\w-]+/).join("").toLowerCase()
        setForm({
          ...form,
          [e.target.name]: e.target.value,
          username: slugName
        })
      }
      else{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
    }

    const handelSubmit = async(e)=>{
      let a = await updateProfile(e , session.user.name)
      alert("profile updated")
    }

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition= 'Bounce'
/>
    <div className='min-h-screen'>
    <h2 className='text-2xl font-bold text-center py-5'>Welcome to your dashboard</h2>

    

<form className="max-w-sm md:max-w-lg mx-auto pb-5 px-3 md:px-0" action={handelSubmit} >
  {/* Name */}
  <div className="mb-1">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
    <input type="text" value={form.name ? form.name : ""} onChange={handleChange} name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Email */}
  <div className="mb-1">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
    <input type="email" value={form.email ? form.email : ""} onChange={handleChange} name='email' id="email" className="bg-gray-50 border border-gray-300 dark:border-gray-600 text-gray-900/70 text-sm rounded-lg block w-full px-2.5 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white/70 focus-visible:outline-none cursor-not-allowed" readOnly title='Email can&apos;t be modified' />
  </div>
  {/* Username */}
  <div className="mb-1">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
    <input type="text" value={form.username ? form.username : ""} onChange={handleChange} name='username' id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Profile Picture */}
  <div className="mb-1">
    <label htmlFor="profilpicture" className="block mb-2 text-sm font-medium text-white">Profile Picture</label>
    <input type="url" value={form.profilpicture ? form.profilpicture : ""} onChange={handleChange} name='profilpicture' id="profilpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Cover Image */}
  <div className="mb-1">
    <label htmlFor="coverpicture" className="block mb-2 text-sm font-medium text-white">Cover Picture</label>
    <input type="url" value={form.coverpicture ? form.coverpicture : ""} onChange={handleChange} name='coverpicture' id="coverpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* razorpay id */}
  <div className="mb-1">
    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">razorpay Id</label>
    <input type="text" value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} name='razorpayid' id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  {/* razorpay Secret */}
  <div className="mb-5">
    <label htmlFor="razorpaySecret" className="block mb-2 text-sm font-medium text-white">razorpay Secret</label>
    <input type="text" value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} name='razorpaySecret' id="razorpaySecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  {/* Save button */}
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
</form>
</div>
    </>
  )
}

export default DashBoard