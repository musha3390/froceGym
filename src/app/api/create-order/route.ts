import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const PLAN_PRICES: Record<string, number> = {
    monthly: 1000,
    quarterly: 2500,
    yearly: 8000,
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { plan } = body;

        if (!plan || !PLAN_PRICES[plan]) {
            return NextResponse.json({ success: false, error: "Invalid plan" }, { status: 400 });
        }

        const amount = PLAN_PRICES[plan] * 100; // Razorpay expects amount in paise (smallest currency unit)

        const razorpay = new Razorpay({
            key_id: process.env.KEY_ID!,
            key_secret: process.env.KEY_SECRET!,
        });

        const order = await razorpay.orders.create({
            amount,
            currency: "INR",
        });

        return NextResponse.json({
            success: true,
            order,
            keyId: process.env.KEY_ID, // Sending Key ID to frontend so it doesn't need to be public in .env
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}