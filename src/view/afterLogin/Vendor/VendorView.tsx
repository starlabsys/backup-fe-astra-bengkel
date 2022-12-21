import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import { ComponentIndexSearch } from "../../component/ComponentIndexSearch";
import { ITableData } from "../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";


export const VendorView = () => {
    const route = useRouter();
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
                                     label : 'Cari',
                                     placeholder : 'Cari Data Vendor',
                                     onChange : () => {
                                     }
                                 } }>
        { tableData() }
    </ComponentIndexSearch>

    function tableData() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           updated = { ( data ) => {
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Kode',
                                   name : 'kode',
                               },
                               {
                                   label : 'Nama',
                                   name : 'nama',
                               },
                               {
                                   label : 'Alamat',
                                   name : 'alamat',
                               },
                               {
                                   label : 'Kota',
                                   name : 'kota',
                               },
                               {
                                   label : 'No Tlp',
                                   name : 'no_tlp',
                               },
                               {
                                   label : 'No HP',
                                   name : 'kota',
                               },
                               {
                                   label : 'Status',
                                   name : 'status',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { [] }/>
    }
}
