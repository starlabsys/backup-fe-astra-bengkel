import { setCookie } from "cookies-next";


export const setICookies = async ( key : string, value : string, time : number ) => {
    const date = new Date();
    date.setTime( date.getTime() + time * 24 * 60 * 60 * 1000 );
    console.log( date )
    await setCookie( key, value, {
        expires : date,
    } );
    console.log( 'success set cookie' + key );
}
