class Currency {
    public stringToIdr = ( value : string ) : string => {
        return 'Rp. ' + value.toString().replace( /\B(?=(\d{3})+(?!\d))/g, '.' );
    }

    public idrToString = ( value : string ) : string => {
        return value.replace( /[^0-9]/g, '' );
    }
}

export default new Currency();
