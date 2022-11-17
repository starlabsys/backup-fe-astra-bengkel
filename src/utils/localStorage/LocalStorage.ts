export const setDataStorage = async ( key : string, value : string ) => {
    if ( typeof window !== "undefined" ) {
        localStorage.setItem( key, value )
        console.log( `success add storage ${ key } ${ process.env.ENV === 'dev' ? value : '' }` )
    }
}

export const getDataStorage = async ( key : string ) => {
    if ( typeof window !== "undefined" ) {
        const data = localStorage.getItem( key )
        console.log( `success get storage ${ key } ${ process.env.ENV === 'dev' ? data : '' }` )
        return data
    }
    return ""
}
