import {
    InterfaceTextFieldDefault,
    InterfaceTextFieldRounded
} from "./interface/InterfaceTextFormField";
import { Input } from "@nextui-org/react";


export const ITextFieldRounded = ( props : InterfaceTextFieldRounded ) => {
    return (
        <input
            className = { `focus:outline-none border border-secondary2 rounded-full py-2.5 px-5` }
            enterKeyHint = { props.onEnter }
            type = { props.type }
            required = { props.required }
            autoComplete = { props.autoComplete }
            hidden = { props.hidden }
            name = { props.name }
            placeholder = { props.placeholder }
            onChange = { props.onChange }
        />
    );
};

export const ITextFieldDefault = ( props : InterfaceTextFieldDefault ) => {

    return (
        <Input
            bordered = { true }
            clearable = { true }
            animated = { true }
            name = { props.name }
            width = "100%"
            label = { props.label }
            disabled = { props.disabled }
            required = { props.required }
            // labelPlaceholder = { props.label }
            placeholder = { props.placeholder }
            className = "border border-primary"
            // initialValue = { props.value }
            value = { props.value }
            // inputMode={props.inputMode}
            type = { props.type }
            onChange = { props.onChange }
        />
        // <div className = "h-fit">
        //
        // </div>
    );
};
