import { NextResponse } from "next/server";

export const middleware = (req) => {
    const token = req.cookies.get('token');
    const url = req.nextUrl.clone(); // Menduplikasi URL untuk modifikasi

    // Daftar halaman yang tidak seharusnya diakses jika pengguna sudah terotentikasi
    const noAuthRequiredPages = ['/guest/login', '/guest/register'];

    // Jika pengguna sudah terotentikasi dan mencoba mengakses halaman login atau register
    if (token && noAuthRequiredPages.includes(url.pathname)) {
        url.pathname = '/home'; // Arahkan ke halaman home
        return NextResponse.redirect(url);
    }

    // Jika pengguna tidak terotentikasi dan mencoba mengakses halaman yang memerlukan autentikasi
    if (!token && !noAuthRequiredPages.includes(url.pathname)) {
        url.pathname = '/guest/login'; // Arahkan ke halaman login
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Lanjutkan request jika tidak ada kondisi di atas yang terpenuhi
}

export const config = {
    matcher: ["/profile", "/admin", "/create", "/update/:path*", "/guest/login", "/guest/register"]
}