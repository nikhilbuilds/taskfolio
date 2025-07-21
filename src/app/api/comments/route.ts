import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Comment from "@/app/models/Comment";

export async function GET(req: NextRequest) {
  await dbConnect();
  const projectId = req.nextUrl.searchParams.get("projectId");

  try {
    const comments = await Comment.find({ projectId }).sort({ timestamp: -1 });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching comments", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const newComment = new Comment(body);
    await newComment.save();
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating comment", error },
      { status: 500 }
    );
  }
}
