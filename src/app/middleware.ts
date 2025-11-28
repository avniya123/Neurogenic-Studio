// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Get the "role" cookie (In real app, this would be a verified JWT)
  const role = request.cookies.get('user_role')?.value

  // 2. Define protected paths
  const path = request.nextUrl.pathname
  const isUserPath = path.startsWith('/studio') || path.startsWith('/studio')
  const isAdminPath = path.startsWith('/admin') || path.includes('/admin/')
  const isEmployeePath = path.startsWith('/ops') || path.includes('/ops/')

  // 3. Logic: If trying to access a protected route without the right role...
  if ((isUserPath && role !== 'user') || 
      (isAdminPath && role !== 'admin') || 
      (isEmployeePath && role !== 'employee')) {
      
    // Redirect back to login
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// 4. Matcher configuration
export const config = {
  matcher: ['/studio/:path*', '/admin/:path*', '/ops/:path*', '/admin/dashboard/:path*'],
}