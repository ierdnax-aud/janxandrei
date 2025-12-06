import { sql } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // Fetch all subscribers from database
    const subscribers = await sql("SELECT id, email, created_at FROM subscribers ORDER BY created_at DESC")

    return NextResponse.json({
      subscribers,
      count: subscribers.length,
    })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 })
  }
}
