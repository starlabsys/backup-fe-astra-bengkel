import { ComponentIndexSearch } from "../../../component/ComponentIndexSearch";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import { PitMekanikViewModel } from "./ViewModel/PitMekanikViewModel";
import { ListOfPITMekanik } from "../../../../domain/models/PitMekanik/ModelGetListPitMekanik";


const PitMekanikView = () => {
    const route = useRouter();
    const controller = PitMekanikViewModel();
    return <ComponentIndexSearch breadcrumbs = { 'Pit Mekanik' }
                                 title = { 'List Data PIT Mekanik' }
                                 search = { {
                                     label : 'Cari',
                                     placeholder : 'Cari Data PIT Mekanik',
                                     onChange : ( value ) => {
                                         controller.getData( value.target.value )
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
                           updated = { ( data : ListOfPITMekanik ) => {
                               route.push( `/master-data/pit-mekanik/${ data.kodePit }/edit` ).then();
                           } }
                           info = { ( data ) => {
                           } }
                           header = { controller.header }
                           data = { controller.listPitMekanik }/>
    }
}

export default PitMekanikView
