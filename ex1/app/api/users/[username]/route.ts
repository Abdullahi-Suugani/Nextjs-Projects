import { NextResponse } from "next/server";

type RouteContext = { params: Promise<{ username: string }> };

export async function GET(_request: Request, { params }: RouteContext) {
  const { username } = await params;

  if (!username.trim()) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  return NextResponse.json({ username });
}
