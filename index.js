const express =require("express");
const bodyParser=require("body-parser");

const nodemailer=require("nodemailer");
const app=express();

app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  app.get("/",(req,res)=>{
    res.send("hello server is live");
  })

app.post("/",(req,res)=>
{
    const mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
})

app.listen(3000,()=>
{
    console.log("server is running")
});
