import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { InterfaceTextArea } from "./interface/InterfaceTextFormField";
import { Textarea } from "@nextui-org/react";


const ITextArea = ( props : InterfaceTextArea ) => {
    const { label, placeHolder, type, error, onChange } = props
    return <div className = { `w-full` }>
        <Textarea className = { `border ${ props.error ? 'border-red-900' : 'border-primary' }  ${ props.disabled ? 'bg-gray-300' : '' }` } //focus:outline-none bg-white w-full placeholder:text-sm
                  rows = { 10 }
                  color = { error ? 'error' : 'primary' }
                  width = { '100%' }
                  bordered = { true }
                  shadow = { true }
                  animated = { true }
                  name = { props.name }
                  value = { props.value }
                  label = { label }
                  onChange = { props.onChange }
                  helperText = { props.errorMessages }
                  placeholder = { placeHolder }></Textarea>
    </div>
}
export default ITextArea
