import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import ErrorHandler from "./errorHandler";
import { baseUrl, header, timeOut } from "./baseApi";
import { ReturnResult } from "./interface/InterfaceResponseResult";
import { InterfaceError } from "../utils/error/IAlertDialog";


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
            console.debug( 'PATH : ', response.request.responseURL );
            console.debug( 'Response Headers : ', response.headers );
            console.debug( 'Response Body : ', response.data );
            return response;
        },
        error => {
            console.debug( 'RESPONSE : ' );
            console.debug( 'Response Status : ', error.response?.status );
            console.debug( 'Response Headers : ', error.response?.headers );
            console.debug( 'Response Body : ', error.response?.data );
            return Promise.reject( error );
        },
    );
}
else {
    axios.interceptors.request.use( request => {
        return request;
    } );

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return Promise.reject( error );
        },
    );
}

interface ApiProps {
    url : string,
    reqBody? : {}
}


const fetchData = async ( context : InterfaceError, config : AxiosRequestConfig ) : Promise<any> => {
    try {
        const resp = await axios( config );
        if ( resp.status === 200 ) {
            return JSON.stringify( resp.data );
        }
        if ( resp.status === 201 ) {
            ErrorHandler.successPost( context, resp.data.message );
            return null;
            // return {
            //     message : 'success',
            //     statusCode : 201,
            //     data : resp.data.message
            // };
        }
        return null;
        // return {
        //     message : 'error',
        //     statusCode : resp.status,
        //     data : resp.data
        // };
    } catch ( e ) {
        const error = e as AxiosError;
        console.debug( '::ERROR:: ', '\n' + error );
        const data : any = error.response?.data;
        if ( error.response?.status === 400 ) {
            ErrorHandler.errorResponse( context, { message : data.message } );
        }
        if ( error.response?.status === 401 ) {
            ErrorHandler.notAuthorized( context, { message : data.message } );
        }
        if ( error.response?.status === 403 ) {
            ErrorHandler.notAuthorized( context, { message : data.message.name } );
        }
        if ( error.response?.status === 404 ) {
            ErrorHandler.notFound( context, { message : data.message } );
        }
        if ( error.response?.status === 405 ) {
            ErrorHandler.methodNotAllowed( context, { message : data.message.message } );
        }
        if ( error.response?.status === 449 ) {
            ErrorHandler.errorPost( context, { message : data.message } );
        }
        if ( error.response?.status === 504 ) {
            ErrorHandler.internalError( context, { message : data.message.message } );
        }
        if ( error.message === 'ERR_BAD_REQUEST' ) {
            ErrorHandler.networkError( context, { message : "ERR_BAD_REQUEST" } );
        }
        if ( error.code === "ERR_NETWORK" ) {
            ErrorHandler.networkError( context, { message : error.message } );
        }
        if ( error.message === 'Timeout' ) {
            ErrorHandler.timeout( context, { message : "Request Time out" } );
        }
        return null;
        // return {
        //     message : 'error',
        //     statusCode : 500, //error.response?.status ?? 500,
        //     data : {
        //         message : '' //error.response?.data ?? 'Internal Server Error'
        //     }
        // };
    } finally {
        console.debug( '::FINISH::' + '\n' );
    }
}

export const post = async ( context : InterfaceError, props : ApiProps ) : Promise<any> => {
    return await fetchData( context, {
        method : 'POST',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const get = async ( context : InterfaceError, props : ApiProps ) : Promise<any> => {
    return await fetchData( context, {
        method : 'GET',
        url : baseUrl() + props.url,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const put = async ( context : InterfaceError, props : ApiProps ) : Promise<any> => {
    return await fetchData( context, {
        method : 'PUT',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const patch = async ( context : InterfaceError, props : ApiProps ) : Promise<any> => {
    return await fetchData( context, {
        method : 'PATCH',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );

}
export const del = async ( context : InterfaceError, props : ApiProps ) : Promise<any> => {
    return await fetchData( context, {
        method : 'DELETE',
        url : baseUrl() + props.url,
        data : props.reqBody,
        headers : await header(),
        timeout : timeOut,
        timeoutErrorMessage : 'Timeout',
    } );
}
