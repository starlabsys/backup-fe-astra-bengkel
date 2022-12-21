import { ComponentIndexSearch } from "../../component/ComponentIndexSearch";
import { ITableData } from "../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import JasaViewModel from "./JasaViewModel";


const JasaView = () => {
    const route = useRouter();
    const controller = JasaViewModel();
    return <ComponentIndexSearch breadcrumbs = { 'Jasa' }
                                 title = { 'List Data Jasa' }
                                 subtitle = { 'master-data/jasa' }
                                 search = { {
                                     label : 'Cari Kode Jasa',
                                     placeholder : 'Cari Data Kode Jasa',
                                     onChange : ( value ) => {
                                         controller.getJasa( 1, 10, value.target.value, '' );
                                     }
                                 } }
                                 button1 = { {
                                     color : 'primary',
                                     title : 'Cetak Report',
                                     onClick : () => {
                                         controller.cetakLaporan();
                                     }
                                 } }
                                 button = { {
                                     title : 'Tambah Jasa',
                                     onClick : () => {
                                         route.push( '/master-data/jasa/tambah-jasa' ).then( () => {
                                         } )
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
                               controller.getJasa( index, 10, '', '' );
                           } }
                           info = { ( data ) => {
                               route.push( '/master-data/jasa/' + data.id + '/info' ).then( () => {
                               } )
                           } }
                           updated = { ( data ) => {
                               route.push( '/master-data/jasa/' + data.id + '/edit' ).then( () => {
                               } )
                           } }
                           header = { controller.header }
                           data = { controller.listJasa }/>
    }
}
export default JasaView
