import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitle from "../../../component/ITitle/ITitle";
import CustomerController from "./interfaces/controller/CustomerController";
import { Header1, Title2, Title3 } from "../../../component/styles/Style";
import ISizeBox from "../../../component/ISizeBox/ISizeBox";
import ICard from "../../../component/ICard/ICard";


const CustomerView = () => {
    const controller = CustomerController()
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Customer' } subtitle = { 'customer' }/>
        <div className = { `bg-white p-5 rounded-lg grid gap-5` }>
            <ITitle title = { 'Customer' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2 laptop:grid-cols-3` }>
                {
                    controller.listMenuCustomer.map( ( data, index ) => {
                        return <ICard key = { index } title = { data.title } path = { data.link } icon = { data.icon }/>
                    } )
                }
            </div>
            <ISizeBox height = { 'h-5' }/>
        </div>
    </div>
}
export default CustomerView
