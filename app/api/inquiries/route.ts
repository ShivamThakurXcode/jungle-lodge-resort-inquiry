import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    if (!body.name || !body.email || !body.site || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Save the inquiry to your database
    // 2. Send notifications to admins
    // 3. Return a success response with the inquiry ID

    // This is a mock response
    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully",
        inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing inquiry:", error)
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 })
  }
}

export async function GET() {
  // In a real application, you would fetch inquiries from your database
  // This is a mock response
  return NextResponse.json(
    {
      message: "This endpoint is for receiving inquiries. Use POST to submit an inquiry.",
    },
    { status: 200 },
  )
}
