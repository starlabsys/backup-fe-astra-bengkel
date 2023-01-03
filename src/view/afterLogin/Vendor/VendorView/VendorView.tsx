import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import { VendorViewModel } from "./ViewModel/VendorViewModel";
import { InterfaceListVendor } from "../interface/InterfaceListVendor";


export const VendorView = () => {
    const route = useRouter();
    const controller = VendorViewModel();
    return <ComponentIndexSearch breadcrumbs = { 'Vendor' }
                                 title = { 'List Data Vendor' }
                                 subtitle = { 'master-data/vendor' }
                                 button = { {
                                     title : 'Tambah Vendor',
                                     onClick : () => {
                                         route.push( '/master-data/vendor/tambah-vendor' ).then();
                                     }
                                 } }
                                 search = { {
                                     label : 'Cari Nama Vendor',
                                     placeholder : 'Cari Nama Vendor',
                                     onChange : ( value ) => {
                                         controller.getListVendor( value.target.value );
                                     }
                                 } }>
        { tableData() }
    </ComponentIndexSearch>

    function tableData() {
        return <ITableData page = { controller.page - 1 }
                           totalPage = { controller.totalPage }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           info = { ( data : InterfaceListVendor ) => {
                               route.push( {
                                   pathname : `/master-data/vendor/${ data.kodeVendor }/info`,
                               } )
                           } }
                           updated = { ( data : InterfaceListVendor ) => {
                               route.push( {
                                   pathname : `/master-data/vendor/${ data.kodeVendor }/edit`,
                               } )
                           } }
                           header = { controller.header }
                           data = { controller.listVendor }/>
    }
}
