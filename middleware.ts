import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the token cookie value
  const token = request.cookies.get("user")?.value;

  // Define which routes you want to protect
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  const Routes = ["/Login", "/signup"];
  // Check if the current path is protected
  const isRoute = Routes.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  if (isRoute) {
    console.log("tt");
    if (token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to proceed if token exists or route is public
  return NextResponse.next();
}

// Optional: define matcher so Middleware only runs on relevant routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
