import { NextResponse } from "next/server"
import { connectDB } from "@/utils/mongoose"
import Project from '@/models/project';

export async function GET() {
  connectDB();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(request) {
  try {
  connectDB();
  const data = await request.json();
  const savedProject = await new Project(data).save();
  return NextResponse.json(savedProject);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
