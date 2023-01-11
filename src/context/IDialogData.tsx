import { createContext, useState } from "react";
import { EnumSizeDialog } from "../utils/enum/EnumSizeDialog";
import { Header1 } from "../component/styles/Style";
import IButton from "../component/IButton/IButton";


export interface IDialogDataContext {
    setDisable : ( data : boolean ) => void;
    openDialog : ( data : boolean ) => void;
    setDialogData : ( data : JSX.Element ) => void;
    setSizeDialog : ( data : EnumSizeDialog ) => void;
    setHeaderDialog : ( data : string ) => void;
    setFooterDialog : ( data : JSX.Element ) => void;
}

export const DialogDataContext = createContext( {} as IDialogDataContext );

interface InterfaceBody {
    children : JSX.Element;
}

export const IDialogData = ( prop : InterfaceBody ) => {
    const [ body, setBody ] = useState<JSX.Element>( <div></div> );
    const [ header, setHeader ] = useState<JSX.Element | string>( '' );
    const [ footer, setFooter ] = useState<JSX.Element>( <div></div> );
    const [ disableBack, setDisableBack ] = useState( false );
    const [ open, setOpen ] = useState( false );
    const [ size, setSize ] = useState( EnumSizeDialog.small );


    return <DialogDataContext.Provider value = { {
        openDialog : setOpen,
        setDialogData : setBody,
        setDisable : setDisableBack,
        setSizeDialog : setSize,
        setHeaderDialog : setHeader,
        setFooterDialog : setFooter,
    } }>
        { prop.children }
        {
            open ?
                <div className = { `absolute w-screen h-screen top-0 flex z-20 place-content-center place-items-center p-10` }>
                    <div className = { `w-full tablet:w-10/12 laptop:${ size === EnumSizeDialog.large ? 'w-6/12' : 'w-5/12' } max-h-full bg-white p-5 rounded-lg overflow-auto grid gap-5` }>
                        {/*<form action = { `#` }>*/ }
                        <div className = { `grid gap-10` }>
                            <div className = { `${ Header1 } grid gap-2` }>
                                { header }
                                <hr/>
                            </div>
                            <div>
                                { body }
                            </div>
                            <hr/>
                            <div className = { `grid tablet:flex place-content-end` }>
                                {
                                    <IButton size = { 'medium' }
                                             rounded = { "full" }
                                             status = { "primary" }
                                             onClick = { () => {
                                                 setOpen( false )
                                             } }>
                                        Close
                                    </IButton>
                                }
                                { footer }
                            </div>
                        </div>
                        {/*</form>*/ }
                    </div>
                    <div className = { `absolute top-0 h-screen w-screen -z-10 bg-black opacity-50` }
                         onClick = { disableBack ? () => {
                         } : () => {
                             setOpen( false )
                         } }>
                    </div>
                </div>
                : null
        }

    </DialogDataContext.Provider>
}
