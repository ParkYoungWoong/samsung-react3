import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // const body = await request.json()
  const searchText = request.nextUrl.searchParams.get('s')
  const res = await fetch(`http://omdbapi.com/?apikey=7035c60c&s=${searchText}`)
  const data = await res.json()
  return Response.json(data)
}
