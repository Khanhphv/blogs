import { database } from "@/firebase";
import { set, ref, push, getDatabase } from "firebase/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { post } = await req.json();
    const id = post?.id;
    const postRef = ref(database, `posts${id ? "/" + id : ""}`);
    if (id) {
      set(postRef, post);
    } else {
      /**
       * Create new post
       */

      const newPostRef = push(postRef); // Generates a unique ID for the new user
      set(newPostRef, post);
    }
    return NextResponse.json({
      postId: id,
      status: true,
      message: "Successfully Added User to firebase👍",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: "Fail Added User to firebase👍",
    });
  }
}
