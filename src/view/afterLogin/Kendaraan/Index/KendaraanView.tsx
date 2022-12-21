import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import KendaraanController from "./KendaraanController";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import KendaraanTableController from "./KendaraanTableController";
import { useRouter } from "next/router";


const KendaraanView = () => {
    const controller = KendaraanController();
    const kendaraanTableController = KendaraanTableController( controller.search );
    const router = useRouter();
    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Kendaraan" } subtitle = { "master-data/kendaraan" }/>
            <div className = { `w-full rounded-lg bg-white grid relative` }>
                <div className = { `w-full p-5 grid gap-10` }>
                    <ITitleMd title = { "List Kendaraan" }/>
                    <div
                        className = { `laptop:flex place-items-center place-content-between mb-5` }
                    >
                        <div className = { `laptop:w-4/12 mb-5 laptop:mb-0` }>
                            <ITextFieldDefault
                                type = { "text" }
                                onChange = { ( event ) => {
                                    controller.setSearch( event.target.value );
                                } }
                                placeholder = { "Cari..." }
                                value = { undefined }
                                error = { false }
                                label = { "Cari" }
                                onEnter = { "enter" }
                            />
                        </div>
                        <div className = { `flex place-content-end ` }>
                            <IButton size = { "medium" } rounded = { "lg" } status = { "success" } onClick = { () => {
                                router.push( "/master-data/kendaraan/tambah-kendaraan" ).then( () => {
                                } );
                            } }>
                                + Tambah Kendaraan
                            </IButton>
                        </div>
                    </div>
                    {
                        tableData()
                    }
                </div>
            </div>
        </div>
    );

    function tableData() {
        return <ITableData page = { kendaraanTableController.page }
                           totalPage = { kendaraanTableController.totalPage }
                           loading = { kendaraanTableController.loading }
                           changePage = { index => {
                               if ( controller.search === "" ) {
                                   kendaraanTableController.setPage( index - 1 );
                                   const pageNumber = index - 1;
                                   kendaraanTableController.getDataKendaraan( pageNumber, 10, '' ).then( () => {
                                   } );
                                   //     page : index - 1,
                                   //     limit : 10
                                   // } )
                                   // .then( ( value ) => {
                                   // } );
                               }
                               else {
                                   kendaraanTableController.setPage( index - 1 );
                                   kendaraanTableController
                                       .getSearch( controller.search )
                                       .then( ( value ) => {
                                       } );
                               }
                           } }
                           updated = { ( data ) => {
                               router.push( {
                                   pathname : "/master-data/kendaraan/tambah-kendaraan",
                                   query : data
                               } ).then( () => {
                               } );
                           } }
                           header = { [
                               {
                                   label : "#",
                                   name : "#",
                               },
                               {
                                   label : 'No Polisi',
                                   name : 'noPolisi',
                               },
                               {
                                   label : 'No Mesin',
                                   name : 'noMesin',
                               },
                               {
                                   label : 'No Rangka',
                                   name : 'noRangka',
                               },
                               {
                                   label : 'Customer',
                                   name : 'customer',
                               },
                               {
                                   label : 'Type',
                                   name : 'type',
                               },
                               {
                                   label : 'Warna',
                                   name : 'warna',
                               },
                               {
                                   label : 'Tahun Rakit',
                                   name : 'tahunRakit',
                               },
                               {
                                   label : 'Status',
                                   name : 'status',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               },
                           ] }
                           data = { kendaraanTableController.kendaraan }/>

    }
};
export default KendaraanView;
