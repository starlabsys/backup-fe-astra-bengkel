import ImageLottie from "../../../component/lottie/image-lottie";
import errorLottie from "../../../../public/lottie/error.json";
import successLottie from "../../../../public/lottie/success.json";
import IButton from "../../../component/IButton/IButton";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LogoutVM from "../../../layout/ViewModel/LogoutVM";
import { body3, Title2 } from "../../../component/styles/Style";
import { AiFillCloseCircle } from "react-icons/ai";


export interface InterfaceError {
    setOpen : ( data : boolean ) => void;
    onError : ( data : boolean ) => void;
    giveMessage : ( data : string ) => void;
    router : ( data : boolean ) => void;
    back : ( data : boolean ) => void;
    onCLick : () => void;
    openToast : ( data : boolean ) => void;
    toastMessage : ( data : string ) => void;

    // toRoute : ( data : string ) => void
}

export const IAlertDialogContext = createContext( {} as InterfaceError );

interface InterfaceAlertDialog {
    children : JSX.Element;
}

const IAlertDialog = ( props : InterfaceAlertDialog ) => {
    const [ open, setOpen ] = useState( false );
    const [ isError, setIsError ] = useState( false );
    const [ message, setMessage ] = useState( "" );
    const [ onRoute, setOnRoute ] = useState( false );
    const [ back, setBack ] = useState( false );
    const logout = LogoutVM();
    const route = useRouter();

    const [ openToast, setOpenToast ] = useState( false );
    const [ messageToast, setMessageToast ] = useState( "" );

    useEffect( () => {
        if ( openToast ) {
            setTimeout( () => {
                setOpenToast( false );
            }, 5000 );
        }
    }, [ openToast ] );

    const onOk = () => {
        setOpen( false );
        if ( onRoute ) {
            return logout.logout().then( () => {
            } );
        }
        if ( back ) {
            return route.back();
        }
    };

    return (
        <IAlertDialogContext.Provider
            value = { {
                setOpen : setOpen,
                onError : setIsError,
                giveMessage : setMessage,
                onCLick : onOk,
                router : setOnRoute,
                openToast : setOpenToast,
                toastMessage : setMessageToast,
                back : setBack
                // toRoute : toRoute
            } }
        >
            { props.children }
            { open ? (
                <div className = { `w-screen h-screen absolute top-0` }>
                    <div
                        className = { `w-full h-full flex place-content-center place-items-center` }
                    >
                        <div
                            className = { `w-9/12 h-fit py-3 tablet:w-4/12 tablet:h-2/5 z-10 bg-white rounded-lg grid gap-5 place-content-center place-items-center` }
                        >
                            <div
                                className = { `grid gap-2 place-items-center place-content-center` }
                            >
                                <ImageLottie file = { isError ? errorLottie : successLottie }/>
                                <div className = { `px-2 text-center` }>{ message }</div>
                            </div>
                            <div className = { `mt-10` }>
                                <IButton
                                    size = { "medium" }
                                    rounded = { "full" }
                                    status = { "primary" }
                                    onClick = { onOk }
                                >
                                    OK
                                </IButton>
                            </div>
                        </div>
                        <div
                            className = { `h-screen w-screen absolute top-0 bg-black opacity-50` }
                            onClick = { onOk }
                        ></div>
                    </div>
                </div>
            ) : null }
            { openToast ? (
                <div className = { `absolute top-0 top-24` }>
                    <div
                        className = { `w-screen flex place-content-center tablet:place-content-end` }
                    >
                        <div
                            className = { `w-11/12 tablet:w-6/12 laptop:w-4/12 shadow-2xl ${ isError ? 'bg-danger' : 'bg-success' } rounded-lg px-5 py-3 ${ Title2 } text-white tablet:mr-5` }
                        >
                            { isError ? 'Error' : 'Success' } <br/>
                            <span className = { `${ body3 }` }>{ messageToast }</span>
                        </div>
                        <div className = { `absolute right-5 top-0` }>
                            <AiFillCloseCircle
                                color = { "white" }
                                onClick = { () => {
                                    setOpenToast( false );
                                } }
                            />
                        </div>
                    </div>
                </div>
            ) : null }
        </IAlertDialogContext.Provider>
    );
};

export default IAlertDialog;
