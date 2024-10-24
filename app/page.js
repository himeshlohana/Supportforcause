// import Image from "next/image";


// export default function Home() {
//   return (
//     <>
//     <div className=" flex text-white gap-4 flex-col items-center justify-center h-80    ">
//       <div className="font-bold  flex gap-2 justify-center items-center text-5xl">
        
//         Buy Me a chai!
//         <span> 
//           <img className=' pb-6' src="coffee-lover.gif" alt="" width={54} />
//         </span>
//       </div>

//       <p className=''>A 
//         Crowd funding platfrom for creators. Get funded by your fans and followers ... Start Now
//       </p>
//       <div  >
//         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
//           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Start Here
//           </span>
//         </button>
//         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
//           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Read More
//           </span>
//         </button>
//       </div>
//     </div>

//     <div className='bg-white h-1 opacity-10'>

//     </div>

//     <div className='text-white h-80 flex flex-col text-center items-center gap-4 pt-10'>

//       <div className='font-bold text-xl pb-8'>
//         Your fans can buy you  a chai .
//       </div>

// <div className='flex items-center justify-around container '>

//       <div className='flex flex-col items-center justify-center'>
//         <img className="rounded-full "   src="work" alt=""  width={85} />
//         <h1 className='font-bold '>Fans want to help</h1>
//         <p>Your fans are available to help you</p>
//       </div>
//       <div className='flex flex-col items-center justify-center'>
//            <img className='rounded-full ' src="mon" alt="" width={150} />
//         <h1 className='font-bold '>Fans want to help</h1>
//         <p>Your fans are available to help you</p>
//       </div>
//       <div className='flex flex-col items-center justify-center'>
//         <img className='rounded-full' src="support" alt="" width={200} />
//         <h1 className='font-bold mt-1'>Fans want to help</h1>
//         <p>Your fans are available to help you</p>
//       </div>
// </div>
//     </div>



//     <div className='bg-white h-1 opacity-10'> </div>

//     <div className='flex  flex-col  gap-4  mt-8 justify-center items-center text-white font-bold'>

//       <div className='font-bold text-xl mb-8'>
//         Your fans can buy you  a chai .
//       </div>

//       <div className='mb-8'>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/6Ecz7I0FshQ?si=UlxMl6MUBNTzfrfu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//       </div>
//     </div>

//     </>

//   );
// }

import Link from "next/link";

const Page = () => {
  return (
    // <div className="flex flex-col  justify-center items-center h-[100dvh] gap-10">
    //   <div className="font-bold text-4xl md:text-6xl items-end justify-center flex gap-0">
    //     <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent ">

    //     Get Me A Chai{" "}
    //     </span>
    //     <span className="">
    //       <img
    //         src="/tea.gif"
    //         alt=""
    //         className="bg-blend-luminosity w-[62px] md:w-[70px] mb-[-7px]"
    //       />
    //     </span>
    //   </div>
    //   <p className="px-5 text-wrap text-center text-lg font-bold">
    //     A Crowdfunding platform for creaters. Get funded by your fans and
    //     followers. Start Now!
    //   </p>
    //   <div>
    //     <Link href="/login"> 
    //       <button
    //         type="button"
    //         className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    //         >
    //         Start Here
    //       </button>
    //     </Link>
    //     <Link href="/about">
    //       <button
    //         type="button"
    //         className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    //         >
    //         Read More
    //       </button>
    //       </Link>
    //   </div>
    // </div>
    // {/* ************************************************************************************************* */}
    // <div className="bg-white h-1 opacity-10"></div>
    // {/* ************************************************************************************************* */}

    // <div className="text-white container mx-auto py-14 px-10 md:px-0">
    //   <h2 className="text-2xl text-center font-bold mb-14">
    //     Your fans can buy you a chai
    //   </h2>
    //   <div className="flex gap-5 justify-around">
    //     {/* *********************************** */}
    //     <div className="item space-y-4 flex flex-col items-center text-center">
    //       <img
    //         src="/man.gif"
    //         alt="studying"
    //         className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
    //       />
    //       <p className="text-center font-bold">Fund Yourself</p>
    //       <p>your fans are available to help you</p>
    //     </div>
    //     {/* *********************************** */}
    //     <div className="item space-y-4 flex flex-col items-center text-center">
    //       <img
    //         src="/dollar.gif"
    //         alt="dollar"
    //         className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
            
    //       />
    //       <p className="text-center font-bold">Fund Yourself</p>
    //       <p>your fans are available to help you</p>
    //     </div>
    //     {/* *********************************** */}
    //     <div className="item space-y-4 flex flex-col items-center text-center">
    //       <img
    //         src="/group.gif"
    //         alt="group"
    //         className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
            
    //       />
    //       <p className="text-center font-bold">Fans wants to help</p>
    //       <p>your fans are available to help you</p>
    //     </div>
    //     {/* *********************************** */}
    //   </div>
    // </div>
    // {/* ************************************************************************************************* */}
    // <div className="bg-white h-1 opacity-10"></div>
    // {/* ************************************************************************************************* */}

    // <div className="text-white container py-14 mx-auto">
    //   <h2 className="text-2xl text-center font-bold mb-14">
    //     Learn More About Us
    //   </h2>
    //   {/* <div className="flex gap-0 md:gap-5 flex-wrap justify-evenly px-5 md:px-0">
    //     <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //     <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //     <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //   </div> */}
    //   <div className="px-1 md:px-5 mt-20">
        
       
    //     <p className="p-4 text-gray-200 text-md text-center font-sans">
    //       At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.
    //     </p>
    //     <p className="p-4 text-gray-200 text-md text-center font-sans">
    //       Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you&apos;re a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.
    //     </p>
    //     <p className="p-4 text-gray-200 text-md text-center font-sans">
    //       We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.
    //     </p>
    //   </div>

    // </div>




    <>

    <div className=" flex text-white gap-4 flex-col items-center px=5 md:px-0 text-xs md:text-base p-5 md:p-0 justify-center h-80     ">
    <div className="font-bold  flex gap-2  justify-center items-center text-xl sm:text-5xl">
      
      Buy Me a chai!
      <span> 
        <img className=' pb-6' src="coffee-lover.gif" alt="" width={54} />
      </span>
    </div>

    <p className='flex text-center items-center justify-center'>A 
      Crowd funding platfrom for creators. Get funded by your fans and followers ... Start Now
    </p>
    <div  >
      <Link href={"/login"}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Start Here
        </span>
      </button>
      </Link>

      <Link href={"/about"}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
      </Link>
    </div>
  </div>

  <div className='bg-white h-1 opacity-10'>

  </div>

  <div className='text-white h-80 flex flex-col text-center items-center gap-4 pt-10 px-10'>

    <div className='font-bold text-xl pb-8'>
      Your fans can buy you  a chai .
    </div>

<div className='flex items-center justify-around container '>

    <div className='flex flex-col items-center justify-center '>
      <img className="rounded-full "   src="work" alt=""  width={65} />
      <h1 className='sm:font-bold font-semibold text-base'>Fans want to help</h1>
      <p>Your fans are available to help you</p>
    </div>
    <div className='flex flex-col items-center justify-center'>
         <img className='rounded-full ' src="mon" alt="" width={150} />
      <h1 className='font-bold '>Fans want to help</h1>
      <p>Your fans are available to help you</p>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <img className='rounded-full' src="support" alt="" width={200} />
      <h1 className='font-bold mt-1'>Fans want to help</h1>
      <p>Your fans are available to help you</p>
    </div>
</div>
  </div>



  <div className='bg-white h-1 opacity-10'> </div>

  <div className='flex  flex-col  gap-4  mt-8 justify-center items-center text-white font-bold'>

    <div className='font-bold text-xl mb-8'>
      Your fans can buy you  a chai .
    </div>

    <div className='mb-8'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6Ecz7I0FshQ?si=UlxMl6MUBNTzfrfu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </div>
  </>
  )
}

export default Page