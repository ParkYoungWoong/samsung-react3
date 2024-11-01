export async function GET() {
  return Response.json({
    name: 'Heropy',
    age: 85,
    method: 'GET'
  })
}

export async function POST() {
  return Response.json({
    name: 'Neo',
    age: 22,
    method: 'POST'
  })
}
