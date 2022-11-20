import { MdClose } from "react-icons/md";
import { createContext, useState } from "react";


export interface InterfaceAlertSuccess {
    setOpen : ( data : boolean ) => void;
    setMessage : ( data : string ) => void;
}

export const AlertSuccessContext = createContext( {} as InterfaceAlertSuccess )

interface InterfaceBody {
    children : JSX.Element
}

export const AlertSuccess = ( props : InterfaceBody ) => {
    const [ state, setState ] = useState( false );
    const [ message, setMessage ] = useState( '' );
    return <AlertSuccessContext.Provider value = { { setOpen : setState, setMessage : setMessage } }>
        { props.children }
        {
            state ? <div className = { `absolute top-24 right-5 bg-success w-96 rounded-lg text-white text-center` }>
                <div className = { `px-4 py-5` }>
                    { message }
                </div>
                <div className = { `absolute top-0 right-0 p-2` }>
                    <MdClose color = { 'white' } className = { `cursor-pointer` }/>
                </div>
            </div> : null
        }
    </AlertSuccessContext.Provider>
}


