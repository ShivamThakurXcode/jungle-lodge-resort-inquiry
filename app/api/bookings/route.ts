import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    if (!body.name || !body.email || !body.site || !body.arrival || !body.departure || !body.people) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Save the booking to your database
    // 2. Send notifications to admins
    // 3. Return a success response with the booking ID

    // This is a mock response
    return NextResponse.json(
      {
        success: true,
        message: "Booking received successfully",
        bookingId: `BK-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}

export async function GET() {
  // In a real application, you would fetch bookings from your database
  // This is a mock response
  return NextResponse.json(
    {
      message: "This endpoint is for receiving bookings. Use POST to submit a booking.",
    },
    { status: 200 },
  )
}
