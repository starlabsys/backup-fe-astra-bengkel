class FormatNumber {
    public numberOnly = ( value : string ) : string => {
        const dataValue = value ?? ''
        return dataValue.replace( /[^0-9]/g, '' )
    }
}

export default new FormatNumber();
