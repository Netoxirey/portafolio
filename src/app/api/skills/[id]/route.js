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
    const data = await request.json();
    const savedSkill = await new Skill(data).save();
    return NextResponse.json(savedSkill);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

export async function PUT(req, { params }) {
    try{
        const data = await req.json();
        const updatedSkill =  await Skill.findByIdAndUpdate(params.id, data, {new: true})
        if (!updatedSkill) {
            return NextResponse.json({message: `Skill not found`}, {status: 404})
        }
        return NextResponse.json(updatedSkill)
    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
}

export async function DELETE(req, {params}) {
    try{
        const skill = await Skill.findByIdAndDelete(params.id)
        if (!skill) {
            return NextResponse.json({message: `Skill not found`}, {status: 404})
        }
        return NextResponse.json(skill)
    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
}