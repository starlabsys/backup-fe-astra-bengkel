import { Title2 } from "../styles/Style";


interface Interface {
    title : string;
}

const ITitleMd = ( props : Interface ) => {
    return <div className = { `${ Title2 } text-primary` }>
        { props.title }
    </div>

}
export default ITitleMd
