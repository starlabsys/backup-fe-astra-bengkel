import { useContext } from "react";
import { IAlertDialogContext, InterfaceError } from "../../component/IAlert/IAlertDialog";


interface ErrorProps {
    message : string;
}

class ErrorHandler {
    // context = useContext( IAlertDialogContext );

    public errorResponse = ( context : InterfaceError, props : ErrorProps ) => {
    }
    public timeout = ( context : InterfaceError, props : ErrorProps ) => {
    }
    public notAuthorized = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public networkError = ( context : InterfaceError, props : ErrorProps ) => {
        console.log( 'Network Error' )
    }
    public internalError = ( context : InterfaceError, props : ErrorProps ) => {
        console.log( 'Internal Error' )
    }
}

export default new ErrorHandler()
