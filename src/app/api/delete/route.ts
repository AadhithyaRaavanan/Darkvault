import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest) {
  return NextResponse.json({ success: true, message: 'delete endpoint stub' })
}
