
// //page chacked
// "use server"

// import Razorpay from "razorpay"
// import Payment from "@/models/Payment"
// import connectDB from "@/app/db/connectDB"
// import User from "@/models/User"





// export const initiate = async (amount, to_username, paymentform) => {
//     await connectDB()
//     let user = await User.findOne({ username:to_username})
//     const secret =user.razorpaysecret;
    
//      var instance = new Razorpay({ key_id:user.razorpayid, key_secret:secret })

//     let options = {
    
//         amount: Number.parseInt(amount),
//         currency: "INR",

//     }

//     let x = await instance.orders.create(options)
//     // create a object which show the pending payments
//     await Payment.create({
//         oid: x.id, amount: amount / 100, to_user:to_username,
//         name: paymentform.name, message: paymentform.message
//     })
    
//     return x

// }

// export const fetchUser = async (username) => {
//     await connectDB()
//     let u = await User.findOne({ username:username})
    
//     let user = u.toObject({ flattenObjectIds: true })
//     return user
// }
 

// export const fetchpayments = async (username) => {
//     await connectDB()
//     // find paymet sorted by decreasing amount
//     let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).limit(10).lean()
//     return p
// }

// export const updateProfile = async (data, oldusername) => {
//     await connectDB()
//     let ndata = Object.fromEntries(data)

//     if (oldusername !== ndata.username) {

//         let u = await User.findOne({ username: ndata.username })

//         if (u) {
//             return { error: "username already exist " }
//         }
//         await User.updateOne({ email: ndata.email }, ndata) 
//         await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
//     }
//     else{
        
//         await User.updateOne({ email: ndata.email }, ndata)
//     }
// } 

 "use server";

 import Razorpay from "razorpay"
 import Payment from "@/models/Payment"
 import connectDB from "@/app/db/connectDB"
 import User from "@/models/User"
 
 

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  const user = await User.findOne({ username: to_username });
  const secret = user?.razorpaySecret;
  const id = user?.razorpayid;
  var instance = new Razorpay({ key_id: id, key_secret: secret });

  const options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // create a payment object that shows the pending payment in the database
  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};
export const fetchUser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username:username})
    
    let user = u.toObject({ flattenObjectIds: true })
    return user
}
// export const fetchUser = async (username) => {
//   await connectDB();
//   let u = await User.findOne({ username: username });
//   if (u) {
//     let user = u.toObject({ flatternObjectIds: true });
//     return JSON.stringify(user);
//   }
//   return JSON.stringify({ error: "User not found" });
// };

export const fetchPayments = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    // .limit(2)
    .lean(true);
  // console.log("payment", p.toString())
  return JSON.stringify(p);
};



export const updateProfile = async (data, oldUsername) => {
  await connectDB();
  const oldEmail = await User.findOne({ username : oldUsername });

  let newData = Object.fromEntries(data);

  if (oldUsername !== newData.username) {
    let u = await User.findOne({
      username: newData.username,
    });
    
    if (u) {
      return JSON.stringify({
        message: "Username already exists",
      });
    }


// **************************************************************
    /* This block of code is updating a user's profile information in the database. Here's a breakdown
    of what it does: */
    let updatedProfile = await User.findOneAndUpdate(
        { email: oldEmail.email },
        { ...newData, email: oldEmail.email },
        { new: true }
    );

    if (updatedProfile) {
      await Payment.updateMany(
        { to_user: oldUsername },
        { to_user: newData.username },
        { new: true}
      );
    }
    return JSON.stringify({
      message: "Profile Updated Successfully",
      data: updatedProfile,
    });
  }

// *********************************************************************
  /* This block of code is updating a user's profile information in the database. Here's a breakdown of
  what it does: */
  let updatedProfile = await User.findOneAndUpdate(
    { email: oldEmail.email },
    { ...newData, email: oldEmail.email },
    { new: true }
  );
  return JSON.stringify({
    message: "Profile Updated Successfully",
    data: updatedProfile,
  });
};