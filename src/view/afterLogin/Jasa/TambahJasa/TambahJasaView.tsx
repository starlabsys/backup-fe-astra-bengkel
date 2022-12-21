import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";


const TambahJasaView = () => {
    const route = useRouter();
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Jasa' } subtitle = { 'master-data/jasa/tambah-jasa' }/>
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Jasa' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start` }>
                <div className = { `grid gap-2 w-full` }>
                    <ITextFieldDefault type = { "text" }
                                       onChange = { () => {
                                       } }
                                       label = { 'Kode' }
                                       onEnter = { "next" }
                                       value = { undefined }/>
                    <IRadioSingle status = { false } error = { false } setStatus = { () => {
                    } } label = { 'Status' } value1 = { 'Aktif' }/>
                </div>
                <ITextFieldDefault type = { "text" }
                                   onChange = { () => {
                                   } }
                                   label = { 'Nama *' }
                                   onEnter = { "next" }
                                   value = { undefined }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Group *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Sub Group' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kategori Pekerjaan' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Harga Jasa * (exclude PPN)' }
                                   onEnter = { 'next' }
                                   errorMessages = { 'Jika ASS, masukan sesuai harga claim ASS' }
                                   helperColor = { "error" }
                                   value = { undefined }/>
                <div className = { `grid w-full tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault type = { 'text' }
                                       onChange = { () => {
                                       } }
                                       label = { 'Waktu Kerja *' }
                                       onEnter = { 'next' }
                                       value = { undefined }/>
                    <IDropDown type = { "text" }
                               error = { false }
                               label = { 'Hari/Jam/waktu *' }
                               data = { [] }
                               onEnter = { "next" }
                               onValueChange = { () => {
                               } }
                               onValue = { () => {
                               } }/>
                </div>
                <ITextArea error = { false }
                           label = { 'Deskripsi' }
                           value = { undefined }
                           type = { "text" }
                           onChange = { () => {
                           } }/>
            </div>
        </div>
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Komisi Penjualan' }/>
            <div className = { `w-full tablet:w-6/12` }>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Group *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
            </div>
        </div>

        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Sparepart' }/>
            <div className = { `w-full flex place-content-end` }>
                <div className = { `grid` }>
                    <IButton status = { 'success' }>
                        + Tambah Sparepart
                    </IButton>
                </div>
            </div>
            { tableData() }
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' }>
                Simpan
            </IButton>
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
                                   label : 'Kode Sparepart',
                                   name : 'kode_sparepart',
                               },
                               {
                                   label : 'Nama Sparepart',
                                   name : 'nama_sparepart',
                               },
                               {
                                   label : 'QTY',
                                   name : 'qty',
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

export default TambahJasaView
