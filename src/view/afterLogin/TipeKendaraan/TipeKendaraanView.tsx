import { ComponentIndexSearch } from "../../component/ComponentIndexSearch";
import { ITableData } from "../../../component/ITable/ITableNextUI";


const TipeKendaraanView = () => {
    return <ComponentIndexSearch breadcrumbs = { 'Tipe Kendaraan' }
                                 title = { 'List Tipe Kendaraan' }
                                 subtitle = { 'master-data/tipe-kendaraan' }
                                 search = { {
                                     label : 'Cari Tipe Kendaraan',
                                     placeholder : 'Cari Tipe Kendaraan',
                                     onChange : () => {
                                     }
                                 } }
                                 button = { {
                                     hidden : true,
                                     title : 'Tambah Tipe Kendaraan',
                                     onClick : () => {
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
                                   label : 'Tipe',
                                   name : 'tipe',
                               },
                               {
                                   label : 'Nama Tipe',
                                   name : 'nama_tipe',
                               },
                               {
                                   label : 'CC Mesin',
                                   name : 'cc_mesin',
                               },
                               {
                                   label : 'Model',
                                   name : 'model',
                               },
                               {
                                   label : 'Kode',
                                   name : 'kode',
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

export default TipeKendaraanView
