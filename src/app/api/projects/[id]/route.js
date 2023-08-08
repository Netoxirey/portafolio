import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Project from '@/models/project'

export async function GET(req, {params}) {
try {
    connectDB()
    const project = await Project.findById(params.id)
    if (!project) {
        return NextResponse.json({message: `Project not found`}, {status: 404})
    }
    return NextResponse.json(project)
} catch (error) {
    return NextResponse.json(error.message, {status: 400})
}
}

export async function PUT(req, {params}) {
    try{
        const data = await req.json()
        const project = await Project.findByIdAndUpdate(params.id, data, {new: true})
        return NextResponse.json(project)
    }catch(error){
        return NextResponse.json(error.message, {status: 400})
    }
}

export async function DELETE(req, {params}) {
    try{
        const project = await Project.findByIdAndDelete(params.id)
        if (!project) {
            return NextResponse.json({message: `Project not found`}, {status: 404})
        }
        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json(error.message, {status: 400})
    }
}
