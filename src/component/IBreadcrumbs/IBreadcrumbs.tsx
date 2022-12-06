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
    const stringData = props.subtitle.split( '/' )
    return (
        <div className = { `flex place-content-between place-items-center text-primary` }>
            <div className = { `${ body2 }` }>{ props.title }</div>
            <div className = { `${ body3 } flex place-content-center place-items-center gap-2 cursor-pointer` }>
                <AiOutlineHome onClick = { toHome }/>
                {
                    stringData.map( ( data, index ) => {
                        return <div key = { index } onClick = { () => {
                            if ( index === 0 ) {
                                route.push( `/${ data }` ).then( () => {
                                } )
                            }
                            if ( index === 1 ) {
                                route.push( `/${ stringData[ 0 ] }/${ stringData[ 1 ] }` ).then( () => {
                                } )
                            }
                        } }>{ `/${ data }` }</div>
                    } )
                }
            </div>
        </div>
    )
}
export default IBreadcrumbs
