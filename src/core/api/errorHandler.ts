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
    }
}

export default new ErrorHandler()
