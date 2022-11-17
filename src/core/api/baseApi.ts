import { getCookie } from "cookies-next";


export const timeOut = 50000

export const baseUrl = () : string => {
    if ( process.env.ENV === 'prod' ) {
        return process.env.BASE_URL_PROD as string
    }
    return process.env.BASE_URL_DEV as string
}


export const header = async () => {
    const token = await getCookie( 'key' );
    return {
        'Authorization' : `Bearer ${ token }`
    }
}
