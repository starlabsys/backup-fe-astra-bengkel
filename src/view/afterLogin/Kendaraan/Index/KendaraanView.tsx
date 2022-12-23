import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import KendaraanController from "./KendaraanController";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import { ListofKendaraan } from "../../../../domain/models/Kendaraan/ModelGetListKendaraan";


const KendaraanView = () => {
    const controller = KendaraanController();
    const router = useRouter();
    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Kendaraan" } subtitle = { "master-data/kendaraan" }/>
            <div className = { `w-full rounded-lg bg-white grid relative` }>
                <div className = { `w-full p-5 grid gap-10` }>
                    <ITitleMd title = { "List Kendaraan" }/>
                    <div
                        className = { `grid w-full gap-5 tablet:flex laptop:flex place-items-center` }
                    >
                        <div className = { `w-full tablet:w-10/12` }>
                            <ITextFieldDefault
                                type = { "text" }
                                onChange = { ( event ) => {
                                    controller.getListKendaraan( 1, event.target.value )
                                } }
                                placeholder = { "Cari..." }
                                value = { undefined }
                                error = { false }
                                label = { "Cari" }
                                onEnter = { "enter" }
                            />
                        </div>
                        <div className = { `w-full tablet:grid place-content-end place-items-end h-full` }>
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
        return <ITableData page = { controller.page - 1 }
                           totalPage = { controller.totalPage }
                           loading = { controller.loading }
                           changePage = { index => {
                               controller.getListKendaraan( index, '' )
                               controller.setPage( index )
                           } }
                           updated = { ( data : ListofKendaraan ) => {
                               // router.route = "/master-data/kendaraan/edit-kendaraan";
                               router.push( {
                                   pathname : "/master-data/kendaraan/edit/" + data.id,
                               } )
                           } }
                           info = { () => {
                           } }
                           header = { controller.header }
                           data = { controller.listKendaraan }/>

    }
};
export default KendaraanView;
