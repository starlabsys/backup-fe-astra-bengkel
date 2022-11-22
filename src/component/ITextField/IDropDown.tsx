import { useState } from "react";
import { InterfaceDropDown } from "./interface/InterfaceDropDown";


export interface InterfacePropsDropDown {
    id : number;
    name : string;
    value : string;
}

const IDropDown = ( props : InterfaceDropDown ) => {
    const [ open, setOpen ] = useState( false );
    const [ value, setValue ] = useState<string | undefined>( undefined );

    return <div className = { `relative rounded-md w-full` }>

        <div
            className = { `w-full border ${ props.error ? 'border-danger' : "border-primary" } rounded-md gap-2 pt-2.5 pb-2 px-3 flex` }>
            <input type = { props.type }
                   name = { props.name }
                   enterKeyHint = { props.onEnter }
                   required = { props.required }
                   onFocus = { () => {
                       setOpen( true )
                   } }
                   value = { value }
                   className = { `focus:outline-none bg-white w-full placeholder:text-sm bg-transparent` }
                   placeholder = { props.placeholder }
                   onChange = { props.onChange }
                   disabled = { props.disabled }/>
        </div>
        <div className = { `absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2` }>
            <label className = { `${ props.error ? "text-danger" : props.labelColor ?? 'text-primary' } ${ props.backgroundLabel ?? 'bg-white' } 
            text-primary px-1  text-sm` }>
                { props.label }
            </label>
        </div>
        {
            open ?
                <div className = { `absolute top-12 bg-white max-h-48 rounded-b-lg z-20 w-full overflow-auto grid shadow-md` }>
                    {
                        props.data.map( ( data, index ) => {
                            return <div key = { index } onClick = { () => {
                                setOpen( false )
                                setValue( data.value )
                                return props.onValueChange( data.value )
                            } } className = { `w-full hover:bg-primary px-3 py-3 hover:text-white` }>
                                { data.name }
                            </div>
                        } )
                    }

                </div> : null
        }
    </div>
}
export default IDropDown
