import { InterfaceSelectOption } from "./interface/InterfaceTextFormField";


const ISelectOption = ( props : InterfaceSelectOption ) => {
    return <div className = { `relative rounded-md w-full` }>
        <div
            className = { `w-full border border-primary rounded-md gap-2 pt-3 pb-2 px-3 flex` }>
            <select className = { `w-full focus:outline-none` }
                    inputMode = { props.type }
                    name = { props.name }
                    onChange = { props.onSelect }>
                {
                    props.listOption.map( ( item, index ) => {
                        return <option key = { index }
                                       value = { item.value }>{ item.viewValue }
                        </option>
                    } )
                }
            </select>
        </div>
        <div className = { `absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2` }>
            <label className = { `bg-white px-1 text-primary text-sm` }>{ props.label }</label>
        </div>
    </div>
}
export default ISelectOption
