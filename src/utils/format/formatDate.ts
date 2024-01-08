class DateFormatData {
    public dateToYear = ( date : Date | string ) : string => {
        const data = new Date( date );
        return data.getFullYear().toString();
    }

    public dateSend = ( date : string ) : string => {
        // const data = new Date( date );
        return date + 'T00:00:00+07:07';
    }

    public dateSend2 = () : string => {
        // const data = new Date( date );
        const date = new Date();
        const month = date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
        //
        const data = new Date( date );
        const hour = data.getHours().toString().length === 1 ? "0" + data.getHours() : data.getHours();
        const minute = data.getMinutes().toString().length === 1 ? "0" + data.getMinutes() : data.getMinutes();
        const second = data.getSeconds().toString().length === 1 ? "0" + data.getSeconds() : data.getSeconds();

        // return date.getFullYear() + '-' + month + '-' + day;
        return date.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '+07:07';
    }

    public nowDate = () : string => {
        const date = new Date();
        const month = date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    }

    public dateExcel = ( excelDate : number ) : string => {
        // const date = new Date( Math.round( (excelDate - 25569) * 86400 * 1000 ) );
        // const month:string = date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1).toString();
        // const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
        // const monthString = month.startsWith('0') ? month.substring(1) : month;
        // return `${ date.getUTCFullYear() }/${ monthString }/${ day } ${ date.getUTCHours() }:${ date.getUTCMinutes() }:00`;

        const date = new Date(Math.round((excelDate - 25569) * 86400 * 1000));

        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');

        return `${year}/${month}/${day} ${hours}:${minutes}:00`;
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

    public getTimeNow = ( date : number ) : string => {
        const data = new Date( date );
        const hour = data.getHours().toString().length === 1 ? "0" + data.getHours() : data.getHours();
        const minute = data.getMinutes().toString().length === 1 ? "0" + data.getMinutes() : data.getMinutes();
        const second = data.getSeconds().toString().length === 1 ? "0" + data.getSeconds() : data.getSeconds();
        return hour + ':' + minute + ':' + second;
    }
}

export default new DateFormatData()
