 
// "use client"
// import React, { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'
// import signout from '@/app/signout/page'



// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setshowdropdown] = useState(false)
//   // if(session) {
//   //   return <>
//   //     Signed in as {session.user.email} <br/>
//   //     <button onClick={() => signOut()}>Sign out</button>
//   //   </>
//   // }

//   return (
//     <nav className='bg-black text-white flex justify-between p-3' >


//       <Link href={"/"} className='font-bold flex  items-center justify-center '>
//         <span>

//           GetMeaChai

//         </span>

//         <img className='pb-2 pl-2' src="coffee-lover.gif" alt="" width={30} />
//       </Link>



//       <div className='relative'>
//         {session && <> <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => {
//           setTimeout(() => { 
//             setshowdropdown(false)
//           }, 100);
//         }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white  mx-4 bg-blue-700 hover:bg-blue-800   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:bg-blue-600"
//         type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//         </svg>
//         </button>
        
//         <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-36 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
//         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//       <li>
//         <Link href="/dashboard " className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//       </li>
//       <li>
//         <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
//       </li>
       
//       <li>
//         <Link onClick={()=> signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
//       </li>
//     </ul>


//         </div>




 

//         <a href='/dashboard'>
//         <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 '   >
//           Dashboard
//         </button>
//         </a>
//         <a href={`/${session.user.name}`}>
//         <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 '   >
//           Your Page
//         </button>
//         </a>
//         </>
//         }


//         {session && <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ' onClick={() => { signOut() }} >
//           Logout
//         </button>
//         }
//         {!session &&
//           <Link href={"/login"}>
//             <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 '>
//               Login
//             </button>
//           </Link>
//         }
//       </div>

//       {/*   
//       <ul  className='flex gap-2 ' >
//         <li className="hover:font-bold">Home</li>
//         <li className="hover:font-bold">About</li>
//         <li className="hover:font-bold">Projects</li>
//         <li className="hover:font-bold">Sign Up</li>
//         <li className="hover:font-bold">Login</li>
//       </ul> */}

//     </nav>
//   )
// }

// export default Navbar
 
"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setShowDropDown] = useState(false)
  
  
  return (
    
      <nav className="bg-black w-auto text-white flex justify-between items-center px-5 md:px-10 pt-2 md:h-16">
        <div className="logo font-bold md:text-lg ">
          {/* <Link href={'/'}>
            <span className="hidden md:block">GetMeAChai!</span>
            <span className=" block md:hidden">
            <img
              src="/tea.gif"
              alt=""
              className="bg-blend-luminosity w-[60px] pb-6"
            />
          </span>
              </Link> */}
              
      <Link href={"/"} className='font-bold flex  items-center justify-center '>
       <span>

        GetMeaChai

        </span>

      <img className='pb-2 pl-2' src="coffee-lover.gif" alt="" width={30} />
      </Link>
          </div>
       

        <div className="relative flex">
          <Search />
          {session ? (
            <>



              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white mx-1 md:mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 md:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                type="button"
                onClick={() => setShowDropDown(!showDropDown)}
                onBlur={()=>{setTimeout(()=>{setShowDropDown(false)},300) }}
              >
                <span className="hidden md:inline">Welcome&nbsp;</span> {" "}<span className="">{" "}{session.user.name}</span>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className={`z-10 ${showDropDown ? "" : 'hidden'} absolute top-12 right-0 md:right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href={"/dashboard"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      href="/login"
                      onClick={() => signOut()}
                      className="block px-4 py-2 border border-x-0 border-b-0 rounded-sm border-t-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>{" "}
           
{/* ******************************************* */}

              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hidden"
                onClick={() => signOut()}
              >
                {" "}
                LogOut
              </button>
            </>
          ) : (
            <Link href={"/login"}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"
              >
                {" "}
                LogIn
              </button>
            </Link>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
