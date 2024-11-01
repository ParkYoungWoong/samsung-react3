import type { NextRequest } from 'next/server'

export async function GET() {
  return Response.json({
    name: 'Heropy',
    age: 85,
    method: 'GET'
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // db.Users.insert(body)
  return Response.json({
    name: 'Neo',
    age: 22,
    method: 'POST'
  })
}
