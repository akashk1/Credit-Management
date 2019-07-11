
var express=require('express');
var path= require('path');
var mongoose=require('mongoose');

var bodyparser=require('body-parser');
var cors=require('cors');
var UserRoutes=require('./backend/routes/user');

var app=express();
//app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

//Send all other requests to the Angular app
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

mongoose.connect('mongodb://test:test123@ds347917.mlab.com:47917/credit-management',{
    useCreateIndex: true,
    useNewUrlParser: true
  });
// app.use(express.static(path.join(__dirname,'../../dist/creditManagement')));
// app.get('../',(req,res)=>
// {
// res.sendFile(path.join(__dirname,'../../dist/creditManagement/index.html'))
// });

app.use(bodyparser.json());
app.use('/user',UserRoutes);





const port=process.env.PORT || 3000;
app.listen(port,(req,res)=>
{
console.log(`Running in port ${port}`);
});