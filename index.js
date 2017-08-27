var express=require('express');
var app=express();
var path=require('path');

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Love.html'));
	// res.send('hello wolrd')
})
app.use(express.static('Love_files'));
var server=app.listen(3000,process.argv[2],()=>{
	var host=server.address().address;
	var port=server.address().port;
	console.log("Running on at http://%s:%s",host,port);
});

// console.log("Running on port 80! hao.wu")