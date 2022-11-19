import { body2, body3 } from "../styles/Style";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";


interface Interface {
    title : string;
    subtitle : string;
}

const IBreadcrumbs = ( props : Interface ) => {
    const route = useRouter()
    const toHome = () => {
        route.push( '/' ).then( () => {
        } )
    }
    return (
        <div className = { `flex place-content-between place-items-center text-primary` }>
            <div className = { `${ body2 }` }>{ props.title }</div>
            <div className = { `${ body3 } flex place-content-center place-items-center gap-2 cursor-pointer` }>
                <AiOutlineHome onClick = { toHome }/>
                /{ props.subtitle }
            </div>
        </div>
    )
}
export default IBreadcrumbs
