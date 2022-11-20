import { createContext, useState } from "react";


export interface IDialogDataContext {
    openDialog : ( data : boolean ) => void;
    setDialogData : ( data : JSX.Element ) => void;
}

export const DialogDataContext = createContext( {} as IDialogDataContext );

interface InterfaceBody {
    children : JSX.Element;
}

export const IDialogData = ( prop : InterfaceBody ) => {
    const [ state, setState ] = useState<JSX.Element>( <div></div> );
    const [ open, setOpen ] = useState( false );

    return <DialogDataContext.Provider value = { { openDialog : setOpen, setDialogData : setState } }>
        { prop.children }
        {
            open ?
                <div className = { `absolute w-screen h-screen top-0 flex z-20 place-content-center place-items-center p-10` }>
                    <div className = { `w-full tablet:w-10/12 laptop:w-5/12 max-h-full bg-white p-5 rounded-lg overflow-auto grid gap-5` }>
                        { state }
                    </div>
                    <div className = { `absolute top-0 h-screen w-screen -z-10 bg-black opacity-50` }
                         onClick = { () => {
                             setOpen( false )
                         } }>
                    </div>
                </div>
                : null
        }
    </DialogDataContext.Provider>
}
