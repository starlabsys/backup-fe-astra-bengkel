class DateFormatData {
    public dateToYear = ( date : Date | string ) : string => {
        const data = new Date( date );
        return data.getFullYear().toString();
    }

    public dateSend = ( date : string ) : string => {
        // const data = new Date( date );
        return date + 'T00:00:00+07:07';
    }

    public nowDate = () : string => {
        const date = new Date();
        const month = date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    }

    private addOneDay( date : Date ) {
        date.setDate( date.getDate() + 1 );
        return date;
    }

    public stringToDateInput = ( date : string ) : string => {
        const data = new Date( date );
        const newDate = this.addOneDay( data );
        const month = newDate.getMonth().toString().length === 1 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
        const day = newDate.getDate().toString().length === 1 ? "0" + newDate.getDate() : newDate.getDate();
        return newDate.getFullYear() + '-' + month + '-' + day;
        // return result;
    }
}

export default new DateFormatData()
