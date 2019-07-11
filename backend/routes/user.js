var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');
var User=require('../models/users');

//console.log("Akash");
router.get('/getAll',(req,res,next)=>
{
 // console.log("Akash");
    User.find({},(err,list)=>
    {
      if(err)
      {
        console.log("there is error in getting list");
        res.send({success:"Failed to get List",status:500});
      }
    // console.log(list);
      res.status(200).json(list);
    });
});
router.post('/sendCredit',(req,res,next)=>{
  var to  = req.body.to;
  var from = req.body.from;
  var credit = req.body.credit;
 // console.log(to+" "+from+" "+credit);
User.findOne({email:from},(err,result)=>{
  if(err){
   
   
    res.send({success:"Some errror happend!!",error:true,status:500});
    return ; 
  }
    if(result==null){
      res.send({success:"User not Found!!",error:true,status:500});
      return ;
    }
  if(result.current_credit<credit){
   res.send({success:"Not have enough Credits",error:true,status:500});
  // console.log(credit+" "+result.current_credit);
   return ;
  }

   var creditDeducted = result.current_credit-credit;
   User.findOneAndUpdate({email:from},{current_credit:creditDeducted},(err,res1)=>{
   // console.log("Akash"+" "+res1);
   });
   User.findOne({email:to},(err,res2)=>{
     var creditInc = res2.current_credit+credit;
    // console.log("Curent Credit"+" "+res2.current_credit+" "+creditInc);
     User.findOneAndUpdate({email:to},{current_credit:creditInc},(err,res3)=>{
      console.log({response:res3,error:false});
     });
   })
 // console.log((result));
  res.send({response:result,success:"Credit Send",error:false});
})

})
module.exports=router;

   
