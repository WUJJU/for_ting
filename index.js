var express=require('express');
var app=express();
var path=require('path');

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Love.html'));
})
app.listen(80);

console.log("Running on port 80! hao.wu")