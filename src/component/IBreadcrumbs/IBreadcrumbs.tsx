import { body2, body3 } from "../styles/Style";


interface Interface {
    title : string;
    subtitle : string;
}

const IBreadcrumbs = ( props : Interface ) => {
    return (
        <div className = { `flex place-content-between place-items-center text-primary` }>
            <div className = { `${ body2 }` }>{ props.title }</div>
            <div className = { `${ body3 }` }>{ props.subtitle }</div>
        </div>
    )
}
export default IBreadcrumbs
