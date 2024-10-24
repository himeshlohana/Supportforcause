// //  import mongoose from "mongoose";


// //  const {Schema,model}=mongoose;

// //  const userSchema=new Schema({
// //     email:{type:String,required:true},
// //     name:{type:String },
// //     username:{type:String,required:true},
// //     profilepic:{type:String},
// //     coverpic:{type:String},
// //     razorpayid:{type:String}, //
// //     razorpaysecret:{type:String},
    
// //     createdAt:{type:Date,default:Date.now},
// //      updatedAt:{type:Date,default:Date.now},
      
// //  })

 
// //  export default mongoose.models.User || model("User",userSchema);;
// import mongoose from "mongoose";
// const {Schema , model} = mongoose;

// const userSchema = new Schema({
//     email : {type : String , required : true},
//     name : {type : String },
//     username : {type : String , required : true},
//     profilepic : {type : String  },
//     coverpic : {type : String  },
//     razorpayid : {type : String},
//     razorpaysecret : {type : String},
//     createdAt : {type : Date , default : Date.now},
//     UpdatedAt : {type : Date , default : Date.now},
// });

// export default mongoose.models.User || model("User" , userSchema);

import mongoose from "mongoose";
const { Schema , model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    profilpicture:{
        type : String,
    },
    coverpicture:{
        type : String,
    },
    razorpayid:{
        type : String,
    },
    razorpaySecret:{
        type : String,
    }

}, {timestamps: true});

export default mongoose.models.User ||  model("User" , UserSchema);