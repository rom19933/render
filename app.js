const express=require('express');
const app=express();
const port=4040;

app.get('/',(req,res)=>{
    return res.status(200).jason({Msg:"Hello ninja"});
});



app.listen(port,()=>{
    console.log('server started');
});