import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const taskData = body.formData;
    await Task.create(taskData);
    return NextResponse.json({ message: "Task created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const tasks = await Task.find();
    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
