import { deleteCookie, getCookie, setCookie } from "cookies-next";


export const setICookies = async (key: string, value: string, time: number) => {
    await setCookie(key, value, {
        expires: new Date(Date.now() + time * 24 * 60 * 60 * 1000),
    });
    console.log('success set cookie ' + key);
}

export const getICookies = async (key: string) => {
    try {
        const data = await getCookie(key);
        if (data === undefined) {
            console.log('error get cookie ' + key);
            return ''
        }
        console.log('success get cookie ' + key);
        return data;
    } catch (e) {
        console.log('error get cookie ' + e);
        return ''
    }
}

export const removeICookies = async (key: string) => {
    try {
        await deleteCookie(key)
        console.log('success remove cookie')
    } catch (e) {
        console.log(e)
    }
}
