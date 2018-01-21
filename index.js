var express=require('express');
var app=express();
var path=require('path');
const fs = require('fs');
app.set('trust proxy', true)
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Love.html'));
	// fs.stats("/login/is_ting_login",(err,stats)=>{
 //       if(err){
 //       	fs.
 //       }
	// })
	// console.log(req)
	let content = `IP:${req.ip},在:${new Date()}登录了.\n`

	var logStream = fs.createWriteStream(path.join(__dirname+"/login/is_ting_login.txt"), {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    logStream.write(content);
    logStream.end('------ end\n')
   
})
app.get('/letter1',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Love_files/letter/letter1.html'))
	let content = `IP:${req.ip},在:${new Date()}浏览了letter1.\n`

	var logStream = fs.createWriteStream(path.join(__dirname+"/login/is_ting_login.txt"), {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    logStream.write(content);
    logStream.end('----- end\n')
   

})
app.get('/letter2',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Love_files/letter/letter2.html'))
		let content = `IP:${req.ip},在:${new Date()}浏览了letter2.\n`

	var logStream = fs.createWriteStream(path.join(__dirname+"/login/is_ting_login.txt"), {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    logStream.write(content);
    logStream.end('----- end\n')
})
app.get('/letter3',(req,res)=>{
	let content = `IP:${req.ip},在:${new Date()}浏览了letter3.\n`
	res.sendFile(path.join(__dirname+'/Love_files/letter/letter3.html'))
		var logStream = fs.createWriteStream(path.join(__dirname+"/login/is_ting_login.txt"), {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    logStream.write(content);
    logStream.end('----- end\n')
})
app.use(express.static('Love_files'));
var server=app.listen(3000,process.argv[2],()=>{
	var host=server.address().address;
	var port=server.address().port;
	console.log("Running on at http://%s:%s",host,port);
});

// console.log("Running on port 80! hao.wu")