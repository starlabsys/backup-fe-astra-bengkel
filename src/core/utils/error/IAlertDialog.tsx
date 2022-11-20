import ImageLottie from "../../../component/lottie/image-lottie";
import errorLottie from "../../../../public/lottie/error.json";
import successLottie from "../../../../public/lottie/success.json";
import IButton from "../../../component/IButton/IButton";
import { createContext, useState } from "react";
import { useRouter } from "next/router";


export interface InterfaceError {
    setOpen : ( data : boolean ) => void;
    onError : ( data : boolean ) => void;
    giveMessage : ( data : string ) => void;
    router? : ( data : string ) => void;
    onCLick : () => void
    // toRoute : ( data : string ) => void
}

export const IAlertDialogContext = createContext( {} as InterfaceError )

interface InterfaceAlertDialog {
    children : JSX.Element
}

const IAlertDialog = ( props : InterfaceAlertDialog ) => {
    const [ open, setOpen ] = useState( false );
    const [ isError, setIsError ] = useState( false );
    const [ message, setMessage ] = useState( '' );
    const [ onRoute, setOnRoute ] = useState( '' );
    const route = useRouter();

    const onOk = () => {
        if ( onRoute !== '' ) {
            return route.replace( onRoute ).then( () => {
            } )
        }
        setOpen( false )
    }


    return <IAlertDialogContext.Provider value = { {
        setOpen : setOpen,
        onError : setIsError,
        giveMessage : setMessage,
        onCLick : onOk,
        router : setOnRoute
        // toRoute : toRoute
    } }>
        { props.children }
        {
            open ? <div className = { `w-screen h-screen absolute top-0` }>
                <div className = { `w-full h-full flex place-content-center place-items-center` }>
                    <div className = { `w-4/12 h-2/5 z-10 bg-white rounded-lg grid gap-5 place-content-center place-items-center` }>
                        <div className = { `grid gap-2 place-items-center place-content-center` }>
                            <ImageLottie file = { isError ? errorLottie : successLottie }/>
                            { message }
                        </div>
                        <div className = { `mt-10` }>
                            <IButton size = { 'small' }
                                     rounded = { 'full' }
                                     status = { 'primary' }
                                     onClick = { onOk }>
                                OK
                            </IButton>
                        </div>
                    </div>
                    <div className = { `h-screen w-screen absolute top-0 bg-black opacity-50` } onClick = { onOk }>

                    </div>
                </div>
            </div> : null
        }
    </IAlertDialogContext.Provider>
}

export default IAlertDialog
