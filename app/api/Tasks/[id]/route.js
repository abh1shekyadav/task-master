import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTask = await Task.findOne({ _id: id });
    return NextResponse.json({ foundTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const taskData = body.formData;
    const updateTaskData = await Task.findByIdAndUpdate(id, {
      ...taskData,
    });
    return NextResponse.json({ message: "Task Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
