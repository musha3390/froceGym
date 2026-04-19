import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


async function POST(req){
   try{
    const {name,email,message} = await req.json()
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
 
        const multiOption = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Gym Enquiry: ${name}`,
        html: `
        <h3>New Enquiry from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
          `,
        };

        await transporter.sendMail(multiOption);

        return NextResponse.json(
            {status: 200, message: "message send successfully"},
            {success: true},
        )
    
   }catch(error){
    return NextResponse.json({success: false,error:error.message}, {status:500})
   }
}