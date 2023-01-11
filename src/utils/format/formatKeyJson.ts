export const FormatKeyJson = ( data : any ) => {
    const result : any = {};
    Object.keys( data ).forEach( ( key ) => {
            // result[ key.replace( /([A-Z])/g, '$1' ).toLowerCase() ] = data[ key ];
            result[ key.replaceAll( ' ', '_' ).toLowerCase().replaceAll( '*', '' ).replaceAll( '/', '' ).replaceAll( '(', '' ).replaceAll( ')', '' ) ] = data[ key ];
            // data[ key.replaceAll( '*', '' ) ] = data[ key ];
        }
    );
    return result;
}
