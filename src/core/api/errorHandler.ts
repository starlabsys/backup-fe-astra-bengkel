import { useContext } from "react";
import { IAlertDialogContext, InterfaceError } from "../utils/error/IAlertDialog";


interface ErrorProps {
    message : string;
}

class ErrorHandler {
    // context = useContext( IAlertDialogContext );

    public errorResponse = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public timeout = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public forbiddenAccess = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public notFound = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public methodNotAllowed = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public notAuthorized = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
        context.router( true );
    }
    public networkError = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
    public internalError = ( context : InterfaceError, props : ErrorProps ) => {
        context.giveMessage( props.message );
        context.onError( true );
        context.setOpen( true );
    }
}

export default new ErrorHandler()
