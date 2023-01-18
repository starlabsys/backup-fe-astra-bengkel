import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import AdminViewModel from "./ViewModel/AdminViewModel";
import { DatumModelAdminUser } from "../../../../domain/models/Admin/ModelAdminUser";
import { useContext } from "react";
import { DialogDataContext } from "../../../../context/IDialogData";
import IButton from "../../../../component/IButton/IButton";


const AdminView = () => {
    const route = useRouter()

    const controller = AdminViewModel()
    const dialog = useContext( DialogDataContext )

    return <ComponentIndexSearch breadcrumbs = { 'Admin' }
                                 title = { 'List Daftar Admin' }
                                 subtitle = { 'admin' }
                                 search = { {
                                     label : 'Cari Nama Admin',
                                     placeholder : 'Cari Nama Admin',
                                     onChange : ( value ) => {
                                         controller.setSearchData( value.target.value )
                                         controller.getSearchListAdmin( value.target.value )
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
                           delete = { ( data : DatumModelAdminUser ) => {
                               dialog.openDialog( true )
                               dialog.setDialogData( <div>
                                   <div className = { `text-center` }>
                                       <h1 className = { `text-2xl font-bold` }>Hapus { data.role }</h1>
                                       <p className = { `text-md` }>
                                           Apakah anda yakin ingin menghapus
                                           bengkel <div className = { `font-bold` }> { data.nama_bengkel } </div> dengan
                                           username <div className = { `font-bold` }> { data.username } </div> ?
                                       </p>
                                   </div>
                               </div> )
                               dialog.setFooterDialog(
                                   <div className = { `flex w-full gap-5` }>
                                       <IButton onClick = { () => {
                                           dialog.openDialog( false )
                                       } }>
                                           Kembali
                                       </IButton>
                                       <IButton status = { 'danger' } onClick = { () => {
                                           controller.deleteAdmin( data.id )
                                       } }>
                                           YA
                                       </IButton>
                                   </div>
                               )
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Role',
                                   name : 'role',
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
                           data = { controller.searchData !== '' ?
                               controller.searchListAdmin :
                               controller.listAdmin
                           }/>
    }
}

export default AdminView
