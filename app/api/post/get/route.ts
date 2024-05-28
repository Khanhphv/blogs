import { database } from "@/firebase";
import {
  ref,
  get as getFirebaseData,
  Query,
  query,
  orderByChild,
} from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const id = searchParams.get("id");
    const completedTasksRef: Query = ref(
      database,
      `posts${id ? "/" + id : ""}`
    );

    const posts = query(completedTasksRef, orderByChild("created_at"));
    if (posts) {
      return NextResponse.json({
        data: {
          posts,
        },
      });
    } else {
      return NextResponse.json({
        data: {},
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      data: {},
    });
  }
}
