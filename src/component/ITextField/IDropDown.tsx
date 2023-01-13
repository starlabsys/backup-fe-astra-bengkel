import { useEffect, useState } from "react";
import { InterfaceDropDown } from "./interface/InterfaceDropDown";
import { Input } from "@nextui-org/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ILoading } from "../ILoading/ILoading";
import ISpinLoading from "../animation/ISpinLoading/ISpinLoading";


export interface InterfacePropsDropDown {
    id : number;
    name : string;
    value : string;
    add? : any;
}

const IDropDown = ( props : InterfaceDropDown ) => {
    const [ open, setOpen ] = useState( false );
    const [ value, setValue ] = useState<string | undefined>( undefined );
    const [ listData, setListData ] = useState<InterfacePropsDropDown[]>( props.data );
    // useEffect( () => {
    //     setListData( props.data );
    //     return () => {
    //
    //     };
    // }, [ listData ] );


    return (
        <div className = { `relative rounded-md w-full grid gap-2` }>
            <div
                className = { `w-full` }
            >
                <Input
                    helperColor = { props.error ? 'error' : 'primary' }
                    helperText = { props.errorMessages }
                    bordered = { true }
                    // clearable = { !props.disabled }
                    animated = { true }
                    width = "100%"
                    label = { props.label }
                    required = { props.required }
                    onClick = { () => {
                        setListData( props.data );
                        setValue( undefined );
                        setOpen( !open )
                    } }
                    readOnly = { props.disabled }
                    color = { props.error ? 'error' : 'primary' }
                    placeholder = { props.placeholder }
                    className = { `border ${ props.error ? 'border-red-900' : 'border-primary' }  ${ props.disabled ? 'bg-gray-300' : '' }` }
                    value = { props.value ?? value }
                    type = { props.type }
                    contentClickable = { true }
                    onContentClick = { ( key, e ) => {
                        console.log( listData );
                        if ( !props.disabled ) {
                            if ( key === 'right' ) {
                                setOpen( !open );
                            }
                        }
                    } }
                    onChange = { ( value ) => {
                        if ( value.target.value !== '' ) {
                            setListData( props.data.filter( ( item ) => item.name.toLowerCase().includes( value.target.value.toLowerCase() ) ) );
                        }
                        else {
                            setListData( props.data );
                        }
                        // if ( value.target.value === "" ) {
                        //     setValue( undefined );
                        //     setOpen( false );
                        // }
                        // else {
                        //     setOpen( true );
                        //
                        // }
                        if ( props.onValueChange ) {
                            props.onValueChange( value.target.value );
                        }
                    } }
                    contentRight = { <div>
                        {
                            open ? <AiFillCaretUp/> : <AiFillCaretDown/>
                        }
                    </div> }
                />
            </div>
            {
                (open ? (
                    <div
                        className = { `absolute top-20 bg-white max-h-48 rounded-b-lg z-50 w-full overflow-auto grid shadow-md` }
                        style = { {
                            zIndex : 9999
                        } }
                    >
                        { props.children ?? listData.map( ( data, index ) => {
                            return (
                                <div
                                    key = { index }
                                    onClick = { () => {
                                        setOpen( false );
                                        setValue( data.name );
                                        return props.onValue ? props.onValue( data ) : null;
                                    } }
                                    className = { `w-full hover:bg-primary px-3 py-3 hover:text-white cursor-pointer` }
                                >

                                    {
                                        props.loading ? <ISpinLoading/> : data.name
                                    }
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
                ) : null)
            }
        </div>
    );
};
export default IDropDown;
