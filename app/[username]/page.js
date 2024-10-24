// /// check
// import React from 'react'
// import PaymentPage from '@/components/paymentpage'
// import { notFound } from 'next/navigation'
//  import connectDB from '@/app/db/connectDB'
 
 
// import User from '@/models/User'

// const Username = async({ params }) => {
//   // const checkUser = async() => {
//    await connectDB()  // connect to database

//     let u = await User.findOne({username:params.username})
//     if (!u) {
//       return notFound()
//     }
    
//     //  await checkUser()
    
    
//     return (
//       < >

//         <PaymentPage username={params.username} />
//       </>
//     )
//   }
  


// export default Username


import PaymentPage from "@/components/paymentpage";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import React from "react";

const Username = ({ params }) => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <PaymentPage username={params.username}/>
    </Suspense>
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} | Get Me A Chai`,
  };
}