import { Header2 } from "../styles/Style";


interface Interface {
    title : string;
}

const ITitle = ( props : Interface ) => {
    return <div className = { `${ Header2 } text-primary` }>
        { props.title }
    </div>

}
export default ITitle
