const express=require('express');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
mongoose.connect('mongodb://localhost:27017/formdata');
app.use(express.static('public'));
app.use('/img',express.static('img'));
app.use(express.urlencoded({extended : true}));

const result=new mongoose.Schema({
    name:String,
  Mobilenumber:Number,
  Email:String,
  Message:String
});
const place=path.join(__dirname,'html')

app.get('/',(req,res)=>{
      res.sendFile(`${place}/index.html`);
})
app.post('/',async (req,res)=>{
    let data=mongoose.model("Form",result);
    data=new data(req.body);
    data=await data.save();
    res.send("Data send succesfully");
})
app.listen(4200);