import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import AdminViewModel from "./ViewModel/AdminViewModel";
import { DatumModelAdminUser } from "../../../../domain/models/Admin/ModelAdminUser";


const AdminView = () => {
    const route = useRouter()

    const controller = AdminViewModel()

    return <ComponentIndexSearch breadcrumbs = { 'Admin' }
                                 title = { 'List Daftar Admin' }
                                 subtitle = { 'admin' }
                                 search = { {
                                     label : 'Cari Nama Admin',
                                     placeholder : 'Cari Nama Admin',
                                     onChange : ( value ) => {
                                         // controller.getJasa( 1, 10, value.target.value, '' );
                                     }
                                 } }
                                 button = { {
                                     title : 'Tambah Admin',
                                     onClick : () => {
                                         route.push( '/admin/tambah-admin' ).then( () => {
                                         } )
                                     }
                                 } }>
        { tableData() }
    </ComponentIndexSearch>

    function tableData() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               // controller.setPage( index );
                               // controller.getJasa( index, 10, '', '' );
                           } }
                           info = { ( data ) => {
                               route.push( '/admin/info/' + data.id ).then( () => {
                               } )
                           } }
                           updated = { ( data : DatumModelAdminUser ) => {
                               route.push( '/admin/edit/' + data.id ).then( () => {
                               } )
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Username',
                                   name : 'username',
                               },
                               {
                                   label : 'Nama',
                                   name : 'full_name',
                               },
                               {
                                   label : 'Kode',
                                   name : 'kode_bengkel',
                               },
                               {
                                   label : 'Nama Bengkel',
                                   name : 'nama_bengkel',
                               },
                               {
                                   label : 'Status',
                                   name : 'status',
                               },
                               {
                                   label : 'Address',
                                   name : 'address',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { controller.listAdmin }/>
    }
}

export default AdminView
