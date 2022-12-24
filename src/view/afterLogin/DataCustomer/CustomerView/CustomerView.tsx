import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitle from "../../../../component/ITitle/ITitle";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { CustomerViewModel } from "./ViewModel/CustomerViewModel";
import { useRouter } from "next/router";
import { InterfaceCustomer } from "../interface/InterfaceCustomer";


const CustomerView = () => {
    const route = useRouter()
    const customerViewModel = CustomerViewModel();
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Customer' } subtitle = { 'master-data/customer' }/>
        <div className = { `bg-white p-5 rounded-lg grid gap-5` }>
            <ITitle title = { 'Customer' }/>
            <div className = { `grid gap-5 tablet:flex tablet:place-items-end tablet:place-content-between mb-10` }>
                <div className = { `w-full tablet:w-9/12 laptop:w-6/12` }>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Cari Nama Customer' }
                                       onEnter = { 'enter' }
                                       value = { undefined }
                                       onChange = { ( a ) => {
                                           customerViewModel.getCustomer( 1, a.target.value );
                                       } }/>
                </div>
                <div className = { `flex gap-5 tablet:gap-10` }>
                    <IButton>
                        Download Excel
                    </IButton>
                    <IButton status = { 'success' } onClick = { () => {
                        route.push( '/master-data/customer/tambah-customer' ).then( () => {
                        } )
                    } }>
                        + Tambah
                    </IButton>
                </div>
            </div>
            <ITableData header = { customerViewModel.header }
                        data = { customerViewModel.listCustomer }
                        loading = { customerViewModel.loading }
                        totalPage = { customerViewModel.totalPage }
                        page = { customerViewModel.page - 1 }
                        changePage = { ( data ) => {
                            customerViewModel.setPage( data );
                            customerViewModel.getCustomer( data, '' );
                        } }
                        updated = { ( data : InterfaceCustomer ) => {
                            route.push( '/master-data/customer/' + data.id + '/edit' ).then( () => {
                            } )
                        } }
                        info = { () => {
                        } }
            />
        </div>
    </div>
};

export default CustomerView;
