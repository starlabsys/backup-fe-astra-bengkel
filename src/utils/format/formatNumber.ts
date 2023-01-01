class FormatNumber {
    public numberOnly = ( value : string ) : string => {
        return value.replace( /[^0-9]/g, '' )
    }
}

export default new FormatNumber();
