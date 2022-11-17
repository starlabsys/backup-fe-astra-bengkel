import { useState } from "react";
import { InterfaceIndicator } from "./interface/InterfaceTextFormField";


const IIndicator = ( props : InterfaceIndicator ) => {
    return <div className = { `w-full font-Archivo text-primary` }>
        <label htmlFor = "" className = { `text-sm` }>{ props.label }</label>
        <div>
            <div className = { `mb-1` }>
                <label htmlFor = "" className = { `text-sm` }>{ props.value }</label>
            </div>
            <div className = { `bg-danger grid place-items-center` }>
                <input type = "range"
                       className = { `w-full h-0.5 appearance-none cursor-pointer bg-white-secondary2` }
                       value = { props.value }
                       onChange = { props.onChange }/>
            </div>
            <div className = { `flex place-content-between text-sm mt-2` }>
                <div>1</div>
                <div>100</div>
            </div>
        </div>
    </div>
}

export default IIndicator
