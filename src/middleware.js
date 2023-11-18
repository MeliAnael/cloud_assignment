import { NextResponse, NextRequest } from "next/server";

export function middleware(NextRequest) {
  if (NextRequest.cookies.has("auth")) {
    let accessToken;
    try {
      accessToken = NextRequest.cookies.get("auth");
    } catch (err) {
      return NextResponse.next();
    }

    if (NextRequest.nextUrl.pathname.startsWith("/chat")) {
      return NextResponse.next();
    }

    if (accessToken) {
      const redirectUrl = "http://localhost:3000";
      return NextResponse.redirect(redirectUrl);
    }
  } else if (NextRequest.nextUrl.pathname.startsWith("/chat")) {
    console.log("we are in chat");
    if (!NextRequest.cookies.has("auth")) {
      console.log(NextRequest.cookies);
      return NextResponse.redirect(
        "http://localhost:3000/auth/login",
        NextRequest.url
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/chat/:path*", "/reset/:path*"],
};
