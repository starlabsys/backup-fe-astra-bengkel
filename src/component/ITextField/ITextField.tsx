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
    // console.log( props.label + '--' + props.error )

    return (
        <div className = { `w-full grid` }>
            <Input
                bordered = { true }
                clearable = { !props.disabled }
                animated = { true }
                defaultValue = { props.defaultValue }
                autoCapitalize = { props.autoCapitalize }
                name = { props.name }
                width = "100%"
                label = { props.label }
                // disabled = { props.disabled }
                form = { props.form }
                readOnly = { props.disabled }
                color = { props.error ? 'error' : 'primary' }
                required = { props.required }
                placeholder = { props.placeholder }
                className = { `border ${ props.error ? 'border-red-900' : 'border-primary' }  ${ props.disabled ? 'bg-gray-300' : '' }` }
                value = { props.value }
                type = { props.type }
                inputMode = { props.inputMode }
                onChange = { props.onChange }
                shadow = { true }
                status = { props.error ? 'error' : 'primary' }
                borderWeight = { 'normal' }
                helperColor = { props.helperColor ?? (props.error ? 'error' : 'primary') }
                helperText = { props.errorMessages }
            />

        </div>
    );
};
