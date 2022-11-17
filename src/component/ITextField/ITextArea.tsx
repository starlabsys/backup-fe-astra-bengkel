import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { InterfaceTextArea } from "./interface/InterfaceTextFormField";


const ITextArea = ( props : InterfaceTextArea ) => {
    const { label, placeHolder, type, error, onChange } = props
    return <div className = { `relative rounded-md w-full` }>
        <div
            className = { `w-full border ${ !error ? "border-primary" : "border-danger" } rounded-md gap-2 pt-2 pb-2 px-3 flex` }>
            <textarea className = { `focus:outline-none bg-white w-full placeholder:text-sm` }
                      rows = { 10 }
                      name = { props.name }
                      onChange = { props.onChange }
                      placeholder = { placeHolder }></textarea>
        </div>
        <div className = { `absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2` }>
            <label className = { `bg-white px-1 ${ !error ? "text-primary" : "text-danger" } text-sm` }>{ label }</label>
        </div>
    </div>
}
export default ITextArea
