import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { cookies } = req;
    const { value: token } = cookies.get("Authorization") ?? { value: null };
    const res = await fetch(`${process.env.API_URL}/key/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    const data = await res.json();
    const response = NextResponse.json(data, {
      status: res.status,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { data: error.message },
      {
        status: 401,
      }
    );
  }
}
