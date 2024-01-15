import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

const PUBLIC_ROUTES = ["/login"];
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = match(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);
  const isAuthenticated = request.cookies.get("next-auth.session-token");
  // if (
  //   !isAuthenticated &&
  //   PUBLIC_ROUTES.every(
  //     (route) => `/${locale}${route}` !== request.nextUrl.pathname
  //   )
  // ) {
  //   return Response.redirect(new URL(`/${locale}/login`, request.url));
  // }
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  console.log("pathnameHasLocale", pathnameIsMissingLocale);

  if (!pathnameIsMissingLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(
    new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    )
  );
}

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
