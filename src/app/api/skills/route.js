import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Skill from "@/models/skill";

export async function GET() {
  connectDB();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}

export async function POST(request) {
  try {
    connectDB();
    const data = await request.json();
    const savedSkill = await new Skill(data).save();
    return NextResponse.json(savedSkill);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}