const express =require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");
require("dotenv").config();
const app=express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
  });

  app.get("/",(req,res)=>
{
    res.send("hi");
})

app.post("/send",(req,res)=>
{
    const mailOptions = {
        from: "somu111725@gmail.com",
        to: req.body.email, 
        subject: req.body.subject,
        text: req.body.text,
      };
      

      transporter.sendMail(mailOptions, (error, info)=> {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});


app.listen(process.env.PORT,()=>
{
    console.log("server is running")
});
