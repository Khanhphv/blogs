import { database } from "@/firebase";
import { set, ref, push, getDatabase, remove } from "firebase/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    console.log("id", id);
    const postRef = ref(database, `posts${id ? "/" + id : ""}`);
    remove(postRef);
    return NextResponse.json({
      postId: id,
      status: true,
      message: "Successfully Deleted  to firebase👍",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: "Fail Deleted to firebase👍",
    });
  }
}
