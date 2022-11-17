import { InterfaceTextFieldDefault, InterfaceTextFieldRounded } from "./interface/InterfaceTextFormField";


export const ITextFieldRounded = ( props : InterfaceTextFieldRounded ) => {
    return <input className = { `focus:outline-none border border-secondary2 rounded-full py-2.5 px-5` }
                  enterKeyHint = { props.onEnter }
                  type = { props.type }
                  required = { props.required }
                  autoComplete = { props.autoComplete }
                  hidden = { props.hidden }
                  placeholder = { props.placeholder } onChange = { props.onChange }/>
}

export const ITextFieldDefault = ( props : InterfaceTextFieldDefault ) => {
    return <div className = { `relative rounded-md w-full` }>
        <div
            className = { `w-full border ${ props.error ? 'border-danger' : "border-primary" } rounded-md gap-2 pt-2.5 pb-2 px-3 flex` }>
            <input type = { props.type }
                   enterKeyHint = { props.onEnter }
                   required = { props.required }
                   className = { `focus:outline-none bg-white w-full placeholder:text-sm` }
                   placeholder = { props.placeholder } onChange = { props.onChange } disabled = { props.disabled }/>
        </div>
        <div className = { `absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2` }>
            <label className = { `bg-white px-1 ${ props.error ? "text-danger" : 'text-primary' } text-sm` }>{ props.label }</label>
        </div>
    </div>
}
