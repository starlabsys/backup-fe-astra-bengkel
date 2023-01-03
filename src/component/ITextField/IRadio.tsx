import {
    InterfaceRadio,
    InterfaceRadioSingle
} from "./interface/InterfaceTextFormField";
import { useState } from "react";


export const IRadio = ( props : InterfaceRadio ) => {
    return (
        <div className = { `w-full grid font-Archivo text-sm gap-2` }>
            <label htmlFor = "" className = { `text-primary` }>
                { props.label }
            </label>
            <div className = { `flex gap-20` }>
                <div className = { `flex gap-2 place-items-center` }>
                    <div
                        className = { `w-5 h-5 rounded-full border border-primary border-2 p-0.5` }
                        onClick = { props.onClickValue1 }
                    >
                        { props.value === props.value1 ? (
                            <div className = { `w-full h-full rounded-full bg-primary` }></div>
                        ) : null }
                    </div>
                    <label htmlFor = "value1">{ props.value1 }</label>
                </div>
                <div className = { `flex gap-2 place-items-center ` }>
                    <div
                        className = { `w-5 h-5 rounded-full border border-primary border-2 p-0.5` }
                        onClick = { props.onClickValue2 }
                    >
                        { props.value === props.value2 ? (
                            <div className = { `w-full h-full rounded-full bg-primary` }></div>
                        ) : null }
                    </div>
                    <label htmlFor = "value2">{ props.value2 }</label>
                </div>
            </div>
        </div>
    );
};

export const IRadioSingle = ( props : InterfaceRadioSingle ) => {
    // const [ value, setValue ] = useState( props.status );
    return (
        <div
            className = { `w-full grid font-Archivo text-sm gap-2` }
        >
            { props.label !== undefined ? (
                <label htmlFor = "" className = { `${ props.error ? 'text-danger' : 'text-primary' }` }>
                    { props.label }
                </label>
            ) : null }
            <div className = { `flex gap-20` }>
                <div className = { `flex gap-2 place-items-center` } onClick = { () => {
                    if ( !props.disabled ) {
                        return props.setStatus( !props.status );
                    }
                    // setValue( !value );
                } }>
                    <div
                        className = { `w-5 h-5 rounded-full border border-primary border-2 p-0.5` }
                    >
                        { props.status ? (
                            <div className = { `w-full h-full rounded-full bg-primary` }></div>
                        ) : null }
                    </div>
                    { props.label !== undefined ? (
                        <label htmlFor = "value1">{ props.value1 }</label>
                    ) : null }
                </div>
            </div>
        </div>
    );
};
