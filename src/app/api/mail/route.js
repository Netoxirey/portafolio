import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Mail from "@/models/mail";

export async function POST(request) {
  try {
    connectDB();
    const data = await request.json();
    const savedMail = await new Mail(data).save();
    return NextResponse.json(savedMail);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}