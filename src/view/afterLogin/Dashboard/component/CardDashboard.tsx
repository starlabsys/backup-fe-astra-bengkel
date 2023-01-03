import { MdPersonOutline } from "react-icons/md";
import { Header1, Title1 } from "../../../../component/styles/Style";


const CardDashboard = () => {
    return <div className = { `w-full h-44 bg-white shadow-2xl rounded-lg p-5 flex place-content-between place-items-center` }>
        <div>
            <div className = { `${ Header1 }` }>1</div>
            <div className = { `${ Title1 }` }>Total</div>
        </div>
        <div>
            <MdPersonOutline size = { 100 } color = { '#1E2F65' }/>
        </div>
    </div>
}
export default CardDashboard
