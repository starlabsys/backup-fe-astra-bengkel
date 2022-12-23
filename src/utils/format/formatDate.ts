class DateFormatData {
    public dateToYear = ( date : Date | string ) : string => {
        const data = new Date( date );
        return data.getFullYear().toString();
    }
}

export default new DateFormatData()
