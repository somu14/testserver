const express =require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");
require("dotenv").config();
const cors=require("cors");
const app=express();

app.use(bodyParser.json());

app.use(cors());
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
        to: req.body.emaildata, 
        subject: "Thanks for Contacting",
        text: "Thanks for contacting me "+" "+" subject is: "+req.body.subjectdata+" "+" your text is: "+req.body.bodydata,
      };
      
      console.log(mailOptions.from,mailOptions.to,mailOptions.subject,mailOptions.text);

      transporter.sendMail(mailOptions, (error, info)=> {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).send("sent");
});


app.listen(process.env.PORT,()=>
{
    console.log("server is running")
});
