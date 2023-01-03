import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { GetDataMekanik } from "./ViewModel/getDataMekanik";
import { useRouter } from "next/router";
import { InterfaceListMekanik } from "../interface/interfaceListMekanik";


const MekanikView = () => {
    const controller = GetDataMekanik();
    const route = useRouter()

    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Mekanik' } subtitle = { 'master-data/karyawan' }/>
        <div className = { `bg-white rounded-lg w-full p-5 grid gap-5` }>
            <ITitleMd title = { 'List Data Mekanik' }/>
            <div className = { `grid gap-5` }>
                <div className = { `w-full grid gap-5 tablet:flex tablet:place-content-between tablet:place-items-end` }>
                    <div className = { `w-full tablet:w-6/12` }>
                        <ITextFieldDefault type = { 'text' }
                                           label = { 'Cari' }
                                           onEnter = { 'enter' }
                                           onChange = { ( value ) => {
                                               controller.getData( value.target.value )
                                           } }
                                           value = { undefined }
                                           error = { false }
                                           placeholder = { 'Cari Mekanik' }/>
                    </div>
                    <div>
                        <IButton size = { 'medium' } status = { "success" } onClick = { () => {
                            route.push( '/master-data/karyawan/tambah-karyawan' ).then( () => {
                            } )
                        } }>
                            + Tambah Karyawan
                        </IButton>
                    </div>
                </div>
            </div>
            {
                tableData()
            }
        </div>
    </div>


    function tableData() {
        return <ITableData page = { controller.page - 1 }
                           totalPage = { controller.totalPage }
                           loading = { false }
                           changePage = { index => {
                           } }
                           info = { ( data : InterfaceListMekanik ) => {
                               route.push( '/master-data/karyawan/info/' + data.kodeKaryawan )
                           } }
                           updated = { ( data : InterfaceListMekanik ) => {
                               route.push( '/master-data/karyawan/edit/' + data.kodeKaryawan )
                           } }
                           header = { controller.header }
                           data = { controller.mekanik }/>
    }
}

export default MekanikView
