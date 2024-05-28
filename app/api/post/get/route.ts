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
    // const snapshot = await getFirebaseData(completedTasksRef);

    const postdQuery = query(completedTasksRef, orderByChild("created_at"));

    const data = await getFirebaseData(postdQuery);
    if (data.exists()) {
      return NextResponse.json({
        data: {
          ...data.val(),
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
