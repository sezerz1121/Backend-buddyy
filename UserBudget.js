import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    
          "ref_id":{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
            },
          "price": Number,
          "emoji":{
            type: String,
            collation: { locale: 'en', strength: 2 }
            },
          "item_name":String,
          "datetime":Date,
         
       
});

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;