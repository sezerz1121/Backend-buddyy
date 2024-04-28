import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    
          "ref_id":{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
            },
            "link":String
         
       
},
{
  timestamps: true
}
);

const UserPdf = mongoose.model("PDF", newSchema);

export default UserPdf;