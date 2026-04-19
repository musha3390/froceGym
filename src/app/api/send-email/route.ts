import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type RequestBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request){
   try{
    const body:RequestBody = await req.json()
    const {name,email,message} = body;

    if(!name || !email || !message){
      return NextResponse.json({success: false,error:"all fields are required"}, {status:400})
    }
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
        text: message,
        };

        await transporter.sendMail(multiOption);

        return NextResponse.json(
            {success: true}
        )
    
   }catch(error: any){
    return NextResponse.json({success: false,error:error.message}, {status:500})
   }
}