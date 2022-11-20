import { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from "react";
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
    required? : boolean;
    onChange : ChangeEventHandler<HTMLInputElement>
    error? : boolean;
    placeholder : string;
    name? : string
    label : string;
    onEnter : "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
}

export interface InterfaceSelectOption {
    label? : string;
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
    setStatus : () => void
}

export interface InterfaceTextArea {
    label? : string;
    name? : string;
    placeHolder? : string;
    type? : HTMLInputTypeAttribute
    onChange? : ChangeEventHandler<HTMLTextAreaElement>
    error? : true | undefined
}

