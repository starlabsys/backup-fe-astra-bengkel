import axios, { AxiosError, AxiosRequestConfig } from "axios";
import ErrorHandler from "./errorHandler";
import { baseUrl, header, timeOut } from "./baseApi";
import { ReturnResult } from "./interface/InterfaceResponseResult";


if ( process.env.ENV === 'dev' ) {
    axios.interceptors.request.use( request => {
        console.debug( 'METHOD : ', request.method );
        console.debug( 'URL : ', request.url );
        console.debug( 'Request Headers : ', request.headers );
        console.debug( 'Request Data : ', request.data );
        console.debug( '\n' );
        console.debug( 'REQUEST...' + '\n' );
        return request;
    } );

    axios.interceptors.response.use(
        response => {
            console.debug( 'RESPONSE : ' );
            console.debug( 'Response Status : ', response.status );
            console.debug( 'Response Headers : ', response.headers );
            console.debug( 'Response Body : ', response.data );
            return response;
        },
        error => {
            console.debug( 'RESPONSE : ' );
            console.debug( 'Response Status : ', error.response.status );
            console.debug( 'Response Headers : ', error.response.headers );
            console.debug( 'Response Body : ', error.response.data );
            console.log( error );
            if ( error.response?.status === 400 ) {
                ErrorHandler.errorResponse( { message : error.response.data, statusCode : error.response.status } );
            }
            if ( error.response?.status === 401 ) {
                ErrorHandler.errorResponse( { message : error.response.data, statusCode : error.response.status } );
            }
            if ( error.response?.status === 403 ) {
                ErrorHandler.timeout();
            }
            if ( error.message === 'Network Error' ) {
                ErrorHandler.networkError();
            }
            if ( error.message === 'Timeout' ) {
                ErrorHandler.timeout();
            }
            return Promise.reject( error );
        },
    );
}

interface ApiProps {
    url : string,
    reqBody? : {}
}


const fetchData = async ( config : AxiosRequestConfig ) : Promise<ReturnResult> => {
    try {
        const resp = await axios( config );
        if ( resp.status === 200 ) {
            return {
                message : 'success',
                statusCode : resp.status,
                data : resp.data.data
            };
        }
        if ( resp.status === 201 ) {
            return {
                message : 'success',
                statusCode : resp.status,
                data : resp.data.data
            };
        }
        return {
            message : 'error',
            statusCode : resp.status,
            data : resp.data
        };
    } catch ( e ) {
        const error : AxiosError = e as AxiosError;
        console.debug( '::ERROR:: ', '\n' + e );
        return {
            message : 'error',
            statusCode : error.response?.status ?? 500,
            data : {
                message : error.response?.data ?? 'Internal Server Error'
            }
        };
    } finally {
        console.debug( '::FINISH::' + '\n' );
    }
}

export const post = async ( props : ApiProps ) : Promise<any> => {
    return await fetchData( {
        method : 'POST',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',

    } );

}
export const get = async ( props : ApiProps ) : Promise<any> => {
    return await fetchData( {
        method : 'GET',
        url : baseUrl() + props.url,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const put = async ( props : ApiProps ) : Promise<any> => {
    return await fetchData( {
        method : 'PUT',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const patch = async ( props : ApiProps ) : Promise<any> => {
    return await fetchData( {
        method : 'PATCH',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const del = async ( props : ApiProps ) : Promise<any> => {
    return await fetchData( {
        method : 'DELETE',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );
}
