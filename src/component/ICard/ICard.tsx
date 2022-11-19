import { Title2 } from "../styles/Style";
import Link from "next/link";


interface Interface {
    title : string;
    path : string
    icon : JSX.Element;
    onClick? : () => void;
}

const ICard = ( props : Interface ) => {
    return <Link href = { props.path }>
        <div
            className = { `flex-1
                                border border-primary 
                                p-3 rounded-lg shadow-md 
                                hover:bg-primary text-primary hover:text-white flex place-items-center place-content-between cursor-pointer` }
            onClick = { props.onClick }>
            <div className = { `p-2 w-fit rounded-full bg-white border-2 border-primary` }>
                { props.icon }
            </div>
            <div className = { `${ Title2 }` }>
                { props.title }
            </div>
        </div>
    </Link>
}
export default ICard
