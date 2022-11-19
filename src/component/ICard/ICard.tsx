import { Title2 } from "../styles/Style";


interface Interface {
    title : string;
    icon : JSX.Element;
    onClick? : () => void;
}

const ICard = ( props : Interface ) => {
    return <div
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
}
export default ICard
