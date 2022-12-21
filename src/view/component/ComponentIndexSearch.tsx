import IBreadcrumbs from "../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../component/ITextField/ITextField";
import IButton from "../../component/IButton/IButton";
import { ChangeEvent } from "react";
import { FormElement } from "@nextui-org/react";


interface InterfaceComponentIndexSearch {
    breadcrumbs : string;
    title : string;
    subtitle : string;
    search : {
        label : string;
        placeholder : string;
        onChange : ( e : ChangeEvent<FormElement> ) => void
        value? : string | undefined;
    }
    button : {
        hidden? : boolean;
        title : string;
        onClick : () => void;
    }
    button1? : {
        color? : "primary" | "secondary" | "danger" | "success" | "warning" | "info" | undefined;
        title : string;
        onClick : () => void;
    }
    children : any;
}

export const ComponentIndexSearch = ( props : InterfaceComponentIndexSearch ) => {
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { props.breadcrumbs } subtitle = { props.subtitle }/>
        <div className = { `bg-white rounded-lg w-full p-5 grid gap-5` }>
            <ITitleMd title = { props.title }/>
            <div className = { `grid gap-5 mb-5` }>
                <div className = { `w-full grid gap-5 tablet:flex tablet:place-content-between tablet:place-items-end` }>
                    <div className = { `w-full tablet:w-6/12` }>
                        <ITextFieldDefault type = { 'text' }
                                           label = { props.search.label }
                                           onEnter = { 'enter' }
                                           onChange = { props.search.onChange }
                                           value = { props.search.value }
                                           error = { false }
                                           placeholder = { props.search.placeholder }/>
                    </div>
                    <div className = { `grid gap-5 ${ props.button1 !== undefined ? 'grid-cols-2' : '' } ` }>
                        {
                            props.button1 !== undefined ?
                                <IButton size = { 'medium' }
                                         status = { props.button1.color }
                                         onClick = { props.button1.onClick }>
                                    { `${ props.button1.title }` }
                                </IButton> : null
                        }
                        {
                            props.button.hidden ? null :
                                <IButton size = { 'medium' } status = { "success" } onClick = { props.button.onClick }>
                                    { '+ ' + `${ props.button.title }` }
                                </IButton>
                        }
                    </div>
                </div>
            </div>
            { props.children }
        </div>

    </div>
}
