import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { InterfacePropsDropDown } from "../IDropDown";


export interface InterfaceDropDown {
    type : HTMLInputTypeAttribute;
    disabled? : boolean;
    required? : boolean;
    onChange? : ChangeEventHandler<HTMLInputElement>
    error? : boolean;
    placeholder? : string;
    name? : string
    label : string;
    labelColor? : string;
    backgroundLabel? : string;
    data : InterfacePropsDropDown[]
    onEnter : "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
    onValueChange : ( value : string ) => void;
    onValue : ( value : InterfacePropsDropDown ) => void;
    activeAddOn? : boolean;
    onClickAddOn? : () => void;
    value? : string | undefined;
}
