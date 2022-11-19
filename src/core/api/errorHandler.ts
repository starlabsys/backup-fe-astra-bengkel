interface ErrorProps {
    message : string;
    statusCode : number;
}

class ErrorHandler {
    errorResponse = ( props : ErrorProps ) => {
    }
    timeout = () => {
    }
    notAuthorized = () => {
    }
    networkError = () => {
        console.log( 'Network Error' )
    }
    internalError = () => {
        console.log( 'Internal Error' )
    }
}

export default new ErrorHandler()
