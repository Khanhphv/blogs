import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const res = await fetch(`${process.env.API_URL}/room/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
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
