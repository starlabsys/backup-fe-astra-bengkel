import { LoginInterface } from "../../repository/auth/interface/LoginInterface";
import AuthRepository from "../../repository/auth/AuthRepository";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";
import crypto from "crypto";


class AuthServices {
    public login = async ( props : LoginInterface ) : Promise<ReturnResult> => {
        return await AuthRepository.login( props )
    }

    public test = async () => {
        const day = new Date()
        const dateString = `${ day.getDate() } ${ day.toLocaleString( 'id', { month : 'short' } ) } ${ day.getFullYear() } ${ day.getHours() }:${ day.getMinutes() }:${ day.getSeconds() } (GMT+7/WIB)`
        const dayUnix = Math.floor( new Date( dateString ).getTime() / 1000 )
        // console.log(timeStamp+" / " +dayUnix);

        const apiKey = "dgi-key-live:52ADFCEE-18BE-470E-9772-4E76EB0CDF00";
        const secretKey = "dgi-secret-live:15C06B55-B31C-4A1C-BC23-085C23504F28"
        const cry1 = crypto.createHash( 'sha256' ).update( apiKey + secretKey + dayUnix ).digest( 'hex' );
        try {
            const data = await fetch( 'https://astraapps.astra.co.id/dmsahassapi/dgi-api/v2/spk/read', {
                method : 'POST',
                mode : 'cors',
                body : JSON.stringify( {
                    "fromTime" : "2022-08-01 00:00:00",
                    "toTime" : "2022-08-04 23:59:59",
                    "dealerId" : "07533",
                    "deliveryDocumentId" : "",
                    "idSPK" : "",
                    "idCustomer" : ""
                } ),
                headers : {
                    'content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'X-Request-Time' : dayUnix.toString(),
                    'DGI-API-Key' : apiKey,
                    'DGI-API-Token' : cry1
                },
            } )
            console.log( data.json() )
        } catch ( e ) {

            console.log( e );
        }

    }
}

export default new AuthServices()
