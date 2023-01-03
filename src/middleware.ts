import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";


export async function middleware( request : NextRequest ) {
    const token = await request.cookies.get( 'token' )?.value
    const url = process.env.ENV === 'dev' ? process.env.DEV_MODE : process.env.PROD_MODE
    if ( request.nextUrl.pathname === '/auth/login' ) {
        if ( token !== undefined ) {
            return NextResponse.redirect( url + '/master-data' )
        }
    }
    else {
        if ( token === undefined ) {
            return NextResponse.redirect( url + '/auth/login' )
        }
    }
}

export const config = {
    matcher : [ '/', '/report/:path*', '/auth/login', '/services/:path*', '/customer/:path*' ]
}
