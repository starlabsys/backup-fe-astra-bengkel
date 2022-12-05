import { useEffect, useState } from "react";
import { InterfaceDropDown } from "./interface/InterfaceDropDown";
import { Input } from "@nextui-org/react";


export interface InterfacePropsDropDown {
    id : number;
    name : string;
    value : string;
}

const IDropDown = ( props : InterfaceDropDown ) => {
    const [ open, setOpen ] = useState( false );
    const [ value, setValue ] = useState<string | undefined>( props.value ?? undefined );

    return (
        <div className = { `relative rounded-md w-full grid gap-2` }>
            <div
                className = { `w-full` }
            >
                <Input
                    bordered = { true }
                    clearable = { true }
                    animated = { true }
                    width = "100%"
                    label = { props.label }
                    required = { props.required }
                    onClick = { () => {
                        setValue( undefined );
                        setOpen( true )
                    } }
                    placeholder = { props.placeholder }
                    className = "border border-primary"
                    value = { value }
                    type = { props.type }
                    onChange = { ( value ) => {
                        if ( value.target.value === "" ) {
                            setValue( undefined );
                            setOpen( false );
                        }
                        else {
                            setOpen( true );
                        }
                        props.onValueChange( value.target.value );
                    } }
                />
            </div>

            { open ? (
                <div
                    className = { `absolute top-20 bg-white max-h-48 rounded-b-lg z-20 w-full overflow-auto grid shadow-md` }
                >
                    { props.data.map( ( data, index ) => {
                        return (
                            <div
                                key = { index }
                                onClick = { () => {
                                    setOpen( false );
                                    setValue( data.value );
                                    return props.onValue( data );
                                } }
                                className = { `w-full hover:bg-primary px-3 py-3 hover:text-white cursor-pointer` }
                            >
                                { data.name }
                            </div>
                        );
                    } ) }
                    { props.activeAddOn ? (
                        <>
                            {
                                props.data.length !== 0 ? null :
                                    <div
                                        className = "p-2 bg-primary text-white text-center mt-2 cursor-pointer"
                                        onClick = { props.onClickAddOn }
                                    >
                                        Tambah
                                    </div>
                            }
                        </>
                    ) : null }
                </div>
            ) : null }
        </div>
    );
};
export default IDropDown;
