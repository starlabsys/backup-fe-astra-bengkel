import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";


const PitMekanikView = () => {
    const route = useRouter();
    return <ComponentIndexSearch breadcrumbs = { 'Pit Mekanik' }
                                 title = { 'List Data PIT Mekanik' }
                                 search = { {
                                     label : 'Cari',
                                     placeholder : 'Cari Data PIT Mekanik',
                                     onChange : () => {
                                     }
                                 } }
                                 button = { {
                                     title : 'Tambah PIT Mekanik',
                                     onClick : () => {
                                         route.push( '/master-data/pit-mekanik/tambah-pit-mekanik' ).then();
                                     }
                                 } }
                                 subtitle = { 'master-data/pit-mekanik' }>
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
                                   label : 'Nama Mekanik',
                                   name : 'nama_mekanik',
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

export default PitMekanikView
