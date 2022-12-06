import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitle from "../../../component/ITitle/ITitle";
import ISizeBox from "../../../component/ISizeBox/ISizeBox";
import ICard from "../../../component/ICard/ICard";
import MasterDataViewModel from "./VIewModel/MasterDataViewModel";


const MasterDataView = () => {
    const controller = MasterDataViewModel()
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Master Data' } subtitle = { 'master-data' }/>
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
        <div className = { `flex-1 grid gap-5` }>
            <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
                <ITitle title = { "Produk" }/>
                <div className = { `grid gap-5 tablet:grid-cols-2 laptop:grid-cols-3` }>
                    { controller.listMenuProduk.map( ( data, index ) => {
                        return (
                            <ICard
                                key = { index }
                                title = { data.title }
                                icon = { data.icon }
                                path = { data.link }
                            />
                        );
                    } ) }
                </div>
            </div>
        </div>
    </div>
}
export default MasterDataView
