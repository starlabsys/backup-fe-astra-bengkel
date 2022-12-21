import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import IButton from "../../../../component/IButton/IButton";


export const TambahPitMekanikView = () => {
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Pit Mekanik' } subtitle = { 'master-data/pit-mekanik/tambah-pit-mekanik' }/>
        <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'Pit Mekanik' }/>
            <IDropDown type = { 'text' }
                       error = { false }
                       label = { 'Kode PIT' }
                       data = { [] }
                       onEnter = { "enter" }
                       onValueChange = { () => {
                       } }
                       onValue = { () => {
                       } }/>
        </div>
        <div className = { `bg-white gap-5 rounded-lg grid p-5` }>
            <ITitleMd title = { 'List Data Mekanik' }/>
            <div className = { `flex w-full place-items-end place-content-end` }>
                <div className = { `flex` }>
                    <IButton status = { 'success' }>Tambah Mekanik</IButton>
                </div>
            </div>
            { tableData() }
        </div>
        <div className = { `flex gap-5` }>
            <IButton>Kembali</IButton>
            <IButton status = { 'success' }>Simpan</IButton>
        </div>
    </div>

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
