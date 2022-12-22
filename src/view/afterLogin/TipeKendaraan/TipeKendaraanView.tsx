import { ComponentIndexSearch } from "../../component/ComponentIndexSearch";
import { ITableData } from "../../../component/ITable/ITableNextUI";
import TipeKendaraanViewModel from "./TipeKendaraanViewModel";
import { ListOfTipeKendaraan } from "../../../domain/models/TipeKendaraan/ModelTipeKendaraan";
import { useRouter } from "next/router";


const TipeKendaraanView = () => {
    const route = useRouter()
    const controller = TipeKendaraanViewModel();
    return <ComponentIndexSearch breadcrumbs = { 'Tipe Kendaraan' }
                                 title = { 'List Tipe Kendaraan' }
                                 subtitle = { 'master-data/tipe-kendaraan' }
                                 search = { {
                                     label : 'Cari Tipe Kendaraan',
                                     placeholder : 'Cari Tipe Kendaraan',
                                     onChange : ( value ) => {
                                         controller.getTipeKendaraan( 1, value.target.value );
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
        return <ITableData page = { controller.page - 1 }
                           totalPage = { controller.totalPage }
                           loading = { controller.loading }
                           changePage = { index => {
                               controller.setPage( index );
                               controller.getTipeKendaraan( index, '' );
                           } }
                           info = { ( data : ListOfTipeKendaraan ) => {
                               route.push( '/master-data/tipe-kendaraan/info', {
                                   query : {
                                       data : JSON.stringify( data )
                                   }
                               } );
                           } }
                           updated = { ( data : ListOfTipeKendaraan ) => {
                               route.push( {
                                   pathname : '/master-data/tipe-kendaraan/edit',
                                   query : {
                                       data : JSON.stringify( data )
                                   }
                               } );
                           } }
                           header = { controller.header }
                           data = { controller.listTipeKendaraan }/>
    }
}

export default TipeKendaraanView
