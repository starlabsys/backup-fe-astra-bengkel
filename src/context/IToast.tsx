import { createContext, useEffect, useState } from "react";
import { body3, Title2 } from "../component/styles/Style";
import { AiFillCloseCircle } from "react-icons/ai";


interface IToastContextProps {
    openToast : ( data : boolean ) => void;
    toastMessage : ( data : string ) => void;
}


export const IToastContext = createContext( {} as IToastContextProps );

interface InterfaceIToastProvider {
    children : JSX.Element;
}

export const IToast = ( props : InterfaceIToastProvider ) => {
    const [ openToast, setOpenToast ] = useState( false );
    const [ messageToast, setMessageToast ] = useState( '' );
    useEffect( () => {
        if ( openToast ) {
            setTimeout( () => {
                setOpenToast( false )
            }, 5000 )
        }
    }, [ openToast ] )
    return <IToastContext.Provider value = { {
        openToast : setOpenToast,
        toastMessage : setMessageToast
    } }>
        { props.children }
        {
            openToast ? <div className = { `absolute top-0 top-24` }>
                <div className = { `w-screen flex place-content-center tablet:place-content-end` }>
                    <div className = { `w-11/12 tablet:w-6/12 laptop:w-4/12 shadow-2xl bg-success rounded-lg px-5 py-3 ${ Title2 } text-white tablet:mr-5` }>
                        Success <br/> <span className = { `${ body3 }` }>{ messageToast }</span>
                    </div>
                    <div className = { `absolute right-5 top-0` }>
                        <AiFillCloseCircle color = { 'white' } onClick = { () => {
                            setOpenToast( false )
                        } }/>
                    </div>
                </div>
            </div> : null
        }
    </IToastContext.Provider>
}
