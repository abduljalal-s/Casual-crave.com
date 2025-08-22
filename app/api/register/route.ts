import { NextResponse } from "next/server"

// 🔹 Replace with DB logic
export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  // TODO: Save user in your DB (e.g. Prisma, Mongo, SQL, etc.)
  console.log("Registering user:", email)

  // Dummy success
  return NextResponse.json({ message: "User registered" }, { status: 201 })
}
