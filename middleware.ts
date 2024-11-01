import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('pathname:', request.nextUrl.pathname)
  return NextResponse.next()
}
