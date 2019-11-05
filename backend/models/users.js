var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=Schema(
    {
        name:{type:String ,required:true },
        email:{type:String ,required:true ,unique:true},
        current_credit:{type:Number,required:true}
    }
)
module.exports=mongoose.model('User',userSchema,'user');