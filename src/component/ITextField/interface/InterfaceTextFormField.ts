import { FormElement } from "@nextui-org/react";
import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from "react";
import { InterfaceListSelectOption } from "./InterfaceListSelectOption";


export interface InterfaceIndicator {
    label : string;
    value : string;
    onChange : ChangeEventHandler<HTMLInputElement>;
}

export interface InterfaceRadio {
    label? : string;
    value : string
    value1? : string;
    value2? : string;
    error : boolean;
    onClickValue1? : MouseEventHandler<HTMLDivElement>
    onClickValue2? : MouseEventHandler<HTMLDivElement>
}


export interface InterfaceTextFieldRounded {
    placeholder : string;
    autoComplete? : string;
    hidden? : boolean;
    type : HTMLInputTypeAttribute
    onChange : ChangeEventHandler<HTMLInputElement>
    required? : boolean;
    name? : string
    onEnter : "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
}


export interface InterfaceTextFieldDefault {
    type : HTMLInputTypeAttribute;
    disabled? : boolean;
    autoCapitalize? : string;
    required? : boolean;
    error? : boolean;
    placeholder? : string;
    name? : string
    label : string;
    labelColor? : string;
    backgroundLabel? : string;
    onEnter : "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
    errorMessages? : string;
    value : string | number | readonly string[] | undefined;
    onblur? : ( e : ChangeEvent<FormElement> ) => void
    helperColor? : "error" | "primary" | "default" | "secondary" | "success" | "warning" | undefined;
    onChange : ( e : ChangeEvent<FormElement> ) => void
}

export interface InterfaceSelectOption {
    label? : string;
    error? : boolean;
    placeHolder? : string;
    type? : "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined
    onSelect? : ChangeEventHandler<HTMLSelectElement>
    listOption : InterfaceListSelectOption[]
    name? : string
}


export interface InterfaceRadioSingle {
    label? : string;
    value1? : string;
    status : boolean;
    error : boolean;
    disabled? : boolean;
    setStatus : ( data : boolean ) => void
}

export interface InterfaceTextArea {
    label? : string;
    name? : string;
    value? : string | number | readonly string[] | undefined;
    placeHolder? : string;
    type? : HTMLInputTypeAttribute
    onChange? : ((( e : ChangeEvent<HTMLTextAreaElement> ) => void) & (( e : ChangeEvent<FormElement> ) => void)) | undefined
    error : boolean
    errorMessages? : string;
    disabled? : boolean;
}

