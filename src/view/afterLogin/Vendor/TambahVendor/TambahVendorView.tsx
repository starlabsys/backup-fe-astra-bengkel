import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IButton from "../../../../component/IButton/IButton";


export const TambahVendorView = () => {
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Vendor' } subtitle = { 'master-data/vendor/tambah-vendor' }/>
        { vendor() }
        { contactPerson() }
        { syaratPembelianKredit() }
        <div className = { `grid grid-cols-2 gap-5` }>
            <IButton>Kembali</IButton>
            <IButton status = { 'success' }>Simpan</IButton>
        </div>
    </div>

    function vendor() {
        return <div className = { `bg-white grid gap-5 p-5 rounded-lg` }>
            <ITitleMd title = { 'Vendor' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 tablet:place-items-start tablet:place-content-start` }>
                <div className = { `grid gap-2 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       onChange = { () => {
                                       } }
                                       label = { 'Kode' }
                                       placeholder = { 'Masukan Kode' }
                                       onEnter = { 'next' }
                                       value = { undefined }/>
                    <IRadioSingle status = { false }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { 'Aktif' }
                                  setStatus = { () => {
                                  } }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Nama *' }
                                   placeholder = { 'Masukan Nama' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Alamat *' }
                                   placeholder = { 'Masukan Alamat' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Provinsi *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kota/Kabupaten *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kecamatan *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kelurahan *' }
                           data = { [] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   disabled = { true }
                                   label = { 'Kode Pos *' }
                                   placeholder = { 'Masukan Kode Pos' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'No Tlp' }
                                   placeholder = { 'Masukan No Tlp' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'No HP' }
                                   placeholder = { 'Masukan No HP' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Email' }
                                   placeholder = { 'Masukan Email' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Website' }
                                   placeholder = { 'Masukan Website' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextArea label = { 'Catatan' }
                           placeHolder = { 'Masukan Catatan' }
                           error = { false }
                           type = { "text" }
                           onChange = { () => {
                           } }/>
            </div>
        </div>
    }

    function contactPerson() {
        return <div className = { `bg-white grid gap-5 p-5 rounded-lg` }>
            <ITitleMd title = { 'Kontak Person' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 w-full` }>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Nama' }
                                   placeholder = { 'Masukan Nama' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'No Tlp' }
                                   placeholder = { 'Masukan No Tlp' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'No HP' }
                                   placeholder = { 'Masukan No HP' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Email' }
                                   placeholder = { 'Masukan Email' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Jabatan' }
                                   placeholder = { 'Masukan Jabatan' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
            </div>
        </div>
    }

    function syaratPembelianKredit() {
        return <div className = { `bg-white grid gap-5 p-5 rounded-lg` }>
            <ITitleMd title = { 'Syarat Default Pembelian Kredit' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start place-content-start` }>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Tempo' }
                                   placeholder = { 'Hari' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Limit' }
                                   placeholder = { 'Masukan Limit' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
            </div>
        </div>
    }
}
