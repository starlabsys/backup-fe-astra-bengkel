import { getICookies } from "../../utils/cookies/ICookies";
import { IConstantEnum } from "../../utils/enum/IConstantEnum";


export const timeOut = 60000 * 10

export const baseUrl = () : string => {
    if ( process.env.ENV === 'prod' ) {
        return process.env.BASE_URL_PROD as string
    }
    return process.env.BASE_URL_DEV as string
}


export const header = async () => {
    const token = await getICookies( IConstantEnum.token )
    return {
        'Authorization' : `Bearer ${ token }`
    }

}
