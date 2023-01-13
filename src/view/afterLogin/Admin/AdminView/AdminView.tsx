import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";


const AdminView = () => {
    const route = useRouter()
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
        return <ITableData page = { 1 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               // controller.setPage( index );
                               // controller.getJasa( index, 10, '', '' );
                           } }
                           info = { ( data ) => {
                               // route.push( '/master-data/jasa/' + data.id + '/Info' ).then( () => {
                               // } )
                           } }
                           updated = { ( data ) => {
                               // route.push( '/master-data/jasa/' + data.id + '/edit' ).then( () => {
                               // } )
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
                                   label : 'Nama Bengkel',
                                   name : 'namaBengkel',
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

export default AdminView
