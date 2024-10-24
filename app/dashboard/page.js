// "use client"
// import React,{useState,useEffect} from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'
// import { fetchuser,updateprofile } from '@/action/useraction'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 
// import { Bounce } from 'react-toastify';
// const Dashboard = () => {
   
  
//   const { data: session,update } = useSession()
//   const router=useRouter()
//   const [form, setform] = useState({
//     name: '',
//     email: '',
//     username: '',
//     profilepic: '',
//     coverpic: '',
//     razorpayid: '',
//     razorpaysecret: ''
//   })
//   useEffect(() => {
    
//     getData()
//     if(!session) {
     
//       router.push('/login')
      
//     }
//   }, [router,session])
  
//   const getData = async()=>{
//     let u= await fetchuser(session.user.name)
//     setform(u)
//   }
//   const handlechange = (e) => {
//     setform({...form, [e.target.name]: e.target.value })
//   }
//   const handlesubmit = async (e) => {
  
//     let a = await updateprofile(e,session.user.name )
//     toast('Profile updated', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//       });

//   }
//     return (
//       <>
//       <ToastContainer
// position="top-right"
// autoClose={2000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"
 
// />
// {/* Same as */}
// <ToastContainer />
//       <div className='flex flex-col items-center justify-center'>

//       <div className='flex items-center justify-center p-4  flex-col'>
//       <h2 className=' font-bold text-3xl'>Welcome to Dashboard</h2> 
// </div>
 
//   <form className= 'w-[40%]  gap-1 flex flex-col justify-center items-center' action={handlesubmit}>
    
//   <li className='w-full list-none '>Name<input value={form.name?form.name:" "} onChange={handlechange}  className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="name" id="name" /></li>

//   <li className='w-full list-none '>Email<input value={form.email?form.email:" "}  onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="email" placeholder='' name="email" id="email" /></li>

//   <li className='w-full list-none '>Username<input value={form.username?form.username:" "} onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="username" id="username" /></li>

//   <li className='w-full list-none '>Profile Picture<input value={form.profilepic?form.profilepic:" "} onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="profilepic" id="profilepic" /></li>

//   <li  className='w-full list-none '>Cover Picture<input value={form.coverpic?form.coverpic:" "} onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="coverpic" id="coverpic" /></li>

//   <li htmlfor="razorpayid" className='w-full list-none '>Razorpay ID<input value={form.razorpayid?form.razorpayid:" "} onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="razorpayid" id="razorpayid" /></li>

//   <li htmlfor="razorpaysecret" className='w-full list-none '>Razorpay Secret  <input value={form.razorpaysecret?form.razorpaysecret:""}  onChange={handlechange} className='w-full p-1 rounded-sm text-black' type="text" placeholder='' name="razorpaysecret" id="razorpaysecret" /></li>
     
//      <button className='w-full  bg-blue-700 rounded-sm mt-2 p-1 text-xl'>Save</button>
//   </form>
  
// </div>
      


//       </>
//     )
// }
 
// export default Dashboard


import React from 'react'
import Dashboard from '@/components/dashboard'

const DashboardPage = () => {
  return (
    <Dashboard/>
  )
}

export default DashboardPage

//setting page title
export const metadata = {
  title : "Dashboard - Get Me a CHAI",
}