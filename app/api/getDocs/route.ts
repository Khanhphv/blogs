import { database } from "@/firebase";
import { ref, get as getFirebaseData, Query } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const id = searchParams.get("id");
    const completedTasksRef: Query = ref(
      database,
      `posts${id ? "/" + id : ""}`
    );
    const snapshot = await getFirebaseData(completedTasksRef);
    if (snapshot.exists()) {
      return NextResponse.json({
        data: snapshot.val(),
      });
    } else {
      return NextResponse.json({
        data: "No data found",
      });
    }
  } catch (error: any) {
    console.log("Error");
    return NextResponse.json({
      data: [],
    });
  }
}
