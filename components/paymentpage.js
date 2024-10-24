
// "use client"
// import React, { useState, useEffect } from 'react'
// import Script from 'next/script'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation';
// import { Bounce } from 'react-toastify';
 
// import { fetchuser, fetchpayments, initiate } from '@/action/useraction'
// import { useSearchParams } from 'next/navigation'
//  // import Razorpay from 'razorpay';
 
 
 


// const paymentpage = ({ username }) => {
//     // const{data:session}=useSession()
//     const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
//      const [currentUser, setcurrentUser] = useState({})
//      const [payment, setpayment] = useState([])
//      const searchParams=useSearchParams( )
//      const router =useRouter()
//      useEffect(() => {
         
//          getData()
//         }, [])
        
//         useEffect(() => {
            
//             if(searchParams.get("paymentdone")== "true" ) {
//                 toast('Payment has been made', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                     transition: Bounce,
//                 });
                
//             }
//             router.push(`/${username}`)
            
//         }, [])
        
//         const handlleChange = (e) => {
//             setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
            
//         }

//     const getData = async () => {
//         let u = await fetchuser(username)
//         setcurrentUser(u)
//         let dbpayments = await fetchpayments(username)
//         setpayment(dbpayments)
//         console.log(dbpayments, u)
//     }
//     const pay = async (amount) => {
//         let a =  initiate(amount, username, paymentform)
//         let orderid = a.id
//         var options = {
//             "key":currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
//             "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             "currency": "INR",
//             "name": "Get me a chai", //your business name
//             "description": "Test Transaction",
//             "image": "https://example.com/your_logo",
//             "order_id":orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//           //  "callback_url":`${process.env.NEXT_PUBLIC_URL}/${username}`,
//            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
//             "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//                 "name": "Ajit Yadav", //your customer's name
//                 "email": "yadvajit123@example.com",
//                 "contact": "9359399891" //Provide the customer's phone number for better conversion rates 
//             },
//             "notes": {
//                 "address": "Razorpay Corporate Office"
//             },
//             "theme": {
//                 "color": "#3399cc"
//             }
//         }
//         var rzp1 = new Razorpay(options);
//         rzp1.open();

//     }  
// //wrcha chaek ahe



//     return (
//         <>
//             <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

//             <ToastContainer
// position="top-right"
// autoClose={5000}
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
//             <div className='  cover w-full relative '>

//                 <img className=' object-cover w-full h-[350]'  src={currentUser.coverpic}/>

//                 <div className='absolute right-[45%] -bottom-16 rounded-full border-2 border-white'>
//                     <img className='rounded-full' width={120} src={currentUser.profilepic} />
//                 </div>

//             </div>
//             <div className='flex items-center flex-col justify-center py-16'>
//                 <div className='font-bold text-lg '>

//                     @{username}
//                 </div>

//                 <div>
//                    Let help {username} to get a Chai!
//                 </div>
//                 <div>
//                    {payment.length } Payments. ₹ {payment.reduce((a,b)=>a+b.amount,0)} raised
//                 </div>


//                 {/* // suppeorts ans payments */}


//                 <div className="payments flex  w-[80%] gap-3 mt-11   ">

//                     <div className="supporters bg-[#06061a] w-1/2  p-4">

//                         <h2 className='font-bold text-2xl'>Supporters</h2>

//                         <ul className='mx-5'>
//                             {payment.length==0 && <li>No payment yet</li>}

//                             {payment.map((p, i) => {
//                                 return <li key={i} className='my items-center flex gap-4'>
//                                 <img src="user.gif" alt="" width={22} />
//                                 <span>
//                                     {p.name} Donater a
//                                     <span> {p.amount}₹ </span>
//                                     with a message "{p.message}"
//                                 </span>
//                             </li>
//                             })}





//                         </ul>
//                     </div>

//                     <div className="pay bg-[#06061a] w-1/2   p-4 ">

//                         <h2 className='font-bold text-2xl pb-2'>Make a Payment</h2>

//                         <div className='pb-2 flex flex-col gap-2'>

//                             <input onChange={handlleChange} value={paymentform.name} className='  bg-slate-600 rounded-sm pl-2 ' type="text" placeholder='Enter a Name' name="name" id="name" />

//                             <input onChange={handlleChange} value={paymentform.amount} className='   bg-slate-600 rounded-sm pl-2 ' type="text" placeholder='Enter a Amount' name="amount" id="amount" />
//                             <input onChange={handlleChange} value={paymentform.message} className=' bg-slate-600 rounded-sm pl-2' type="text" placeholder='Enter a Message' name="message" id="message" />

//                             <button onClick={() => pay(Number.parseInt(paymentform.amount)*100 )} type="button" className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-pink-300 disabled:from-purple-300"disabled={paymentform.message?.length<3 || paymentform.name?.length<3} >Pay</button>

//                         </div>
//                         <ul className='flex  gap-2'>

//                             <li>
//                                 <button className='p-1  pl-2 pr-2 rounded-lg bg-slate-600 ' onClick={() => pay(1000)}>Pay 10₹</button>
//                             </li>
//                             <li>
//                                 <button className='p-1  pl-2 pr-2 rounded-lg bg-slate-600 ' onClick={() => pay(2000)}>Pay 20₹</button>
//                             </li>
//                             <li>
//                                 <button className='p-1  pl-2 pr-2 rounded-lg bg-slate-600 ' onClick={() => pay(3000)}>Pay 30₹ </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )


// }

// export default paymentpage

 

"use client";
import React, { useEffect, useState ,useRef } from "react";
import Script from "next/script";
import { initiate, fetchUser, fetchPayments } from "@/action/useraction";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import CoverpicSkeleteon from "./CoverpicSkeleteon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setPaymentform] = useState({name: "" , message: "" , amount: ""});
  const [currentUser, setCurrentUser] = useState({});
  const [payment, setPayment] = useState([]);
//  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef()

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Payment Has Been made", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const handelChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
     
    let u = await fetchUser(username);
    setCurrentUser(u);
    let paymentAmount = await fetchPayments(username);
    setPayment(JSON.parse(paymentAmount));
    
  };

  const pay = async (amount) => {
    // get the order id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser?.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "./tea.gif",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: username, //your customer's name
        email: session?.user.email,
        contact: "9999999999", //your customer's phone number
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      {/* ***************************************************************************************************************************************** */}
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
        transition="Bounce"
      />
    
      {currentUser.error && (
        <div className="text-center text-4xl my-20 font-extrabold">
          User {username} not found ☹
        </div>
      )}
      {!currentUser.error && (
        <>
          <div className="bg-cover relative w-full">
            {currentUser.coverpicture ? (
              <img
                className="object-cover h-40 md:md:h-[21rem] w-full"
                src={currentUser.coverpicture}
                alt="coverImage"
               onError={(e) => (e.target.src = <CoverpicSkeleteon/>)}
              />
            ) : (
              <CoverpicSkeleteon />
            )}

            {/* ******************************************* */}
            <div className=" size-20 md:size-32 object-center absolute mx-auto right-0 left-0 -bottom-12 md:-bottom-16 border-2 overflow-hidden border-white rounded-full bg-black">
              <img
                className="object-cover size-20 md:size-32 "
                src={
                  currentUser.profilpicture
                    ? currentUser.profilpicture
                    : "./avatar.gif"
                }
                alt="avatarImage"
               // onError={(e) => (e.target.src = "./avatar.gif")}
              />
            </div>
          </div>
          {/* ******************************************************************************************************** */}
          <div className="info flex items-center justify-center py-20 flex-col gap-2 ">
            <div className="font-bold text-lg">@{username}</div>
            <div className="text-slate-300">
              let&apos;s Help {username} to get a cup of tea
            </div>
            <div className="text-slate-400">
            {payment.length} supporters . ₹{payment.reduce((a,b)=>(a+b.amount), 0)} raised 
            </div>

            {/* *********************************************************************************** */}

            <div className="payment flex flex-col-reverse md:flex-row gap-3 container mt-12 px-5 md:px-0 ">
              <div className="supporters w-full bg-slate-800/40 rounded-lg backdrop-blur-sm h-[28rem] p-5 md:p-10 overflow-auto">
                {/* list of all supportes as a leaderboard */}
                <h2 className="text-xl font-bold mb-5">Supporters</h2>

                {payment.length === 0 && (
                  <div className="text-center font-extrabold text-lg">
                    No supporters yet ☹
                  </div>
                )}
                <ul className="mx-2.5 md:mx-5 text-md">
                  {payment.map((p) => (
                    <li key={p._id} className="my-4 flex gap-2 items-center">
                      <img src="./user.gif" alt="user avatar" width={28} />
                      <span className="text-sm md:text-base">
                        {p.name} donated{" "}
                        <span className="font-semibold">₹{p.amount}</span> with
                        a message &quot;{p.message}&quot;
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* **********************************************************************************************/}
              <div className="makePayment w-full bg-slate-800/40 rounded-lg backdrop-blur-sm p-10">
                <h2 className="text-xl font-bold mb-5">Make a payment</h2>
                <form action={()=>{searchRef.current.reset()}} ref={searchRef} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.name}
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.message}
                    name="message"
                    required
                  />
                  <input
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Amount"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.amount}
                    name="amount"
                  />
                  {/* <button className='p-2 bg-slate-700/70 rounded-md hover:bg-slate-600'>Support</button> */}
                  <button
                    type="button"
                    className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-pink-300 disabled:from-gray-500 disabled:cursor-not-allowed disabled:shadow-gray-800/80 disabled:hover:bg-gradient-to-r"
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5 ||
                      paymentform.amount?.length < 1
                    }
                    onClick={() => pay(paymentform.amount * 100)}
                  >
                    Support
                  </button>
                </form>
                {/* or choose from these options */}
                <div className="flex gap-3 mt-5">
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(10 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹10
                  </button>
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(20 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹20
                  </button>
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(30 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹50
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentPage;