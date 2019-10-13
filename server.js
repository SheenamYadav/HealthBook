const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT,function(){
	console.log("Server running on localhost:" + PORT);
});

/*
app.get('/', function(req,res){
	res.send('Hello from server');
})

app.post('/login',function(req,res){
	console.log(req.body);
	res.status(300).send({"message": "Data Received"})
})

app.listen(PORT, function(){
	console.log("Server running on localhost:"+PORT);
})
*/