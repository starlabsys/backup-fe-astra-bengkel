import { body3, body4 } from "../../../../component/styles/Style";


interface InterfaceCard {
    title : string;
    total : string;
    color : string[];
}

const CardInformationData = ( props : InterfaceCard ) => {
    return <div className = { `w-full flex gap-2 px-2 border border-2 ${ props.color[ 0 ] } py-2 place-content-around laptop:w-56 rounded-md` }>
        <div className = { `text-center ${ props.color[ 1 ] } ${ body3 }` }>{ props.title }</div>
        <div className = { `${ props.color[ 2 ] } text-center text-white ${ body4 } px-1.5` }>{ props.total }</div>
    </div>
}
export default CardInformationData
