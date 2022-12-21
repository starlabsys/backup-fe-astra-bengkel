import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { useRouter } from "next/router";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IButton from "../../../../component/IButton/IButton";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";


export const EditSparePartView = () => {
    const route = useRouter()
    const data : InterfaceSparePart = route.query as any
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Sparepart' } subtitle = { 'master-data/sparepart/' + data.code }/>
        { sparepart() }
        { komisiPenjualan() }
        <div className = { `grid laptop:grid-cols-2` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
        </div>
    </div>

    function sparepart() {
        return <div className = { `grid gap-10 p-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Sparepart' }/>
            <div className = { `grid grid-cols-2 gap-5 place-items-start` }>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       error = { false }
                                       disabled = { true }
                                       onChange = { ( event ) => {
                                       } }
                                       value = { data.code }
                                       label = { 'Kode *' } onEnter = { 'next' }/>
                    <div className = { `grid grid-cols-2 place-items-end` }>
                        <IRadioSingle status = { data.status }
                                      label = { 'Status' }
                                      error = { false }
                                      value1 = { data.status ? 'Aktif' : 'Tidak Aktif' }
                                      setStatus = { () => {
                                      } }/>
                        <IButton size = { 'small' } status = { 'primary' }>
                            Cek Kode
                        </IButton>
                    </div>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { data.name }
                                   disabled = { true }
                                   onChange = { ( e ) => {
                                   } }
                                   label = { 'Nama *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { data.name }
                                   disabled = { true }
                                   onChange = { ( e ) => {
                                   } }
                                   label = { 'Nama Lokal' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Group *' }
                           value = { data.group }
                           disabled = { true }
                           data = { [] }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   disabled = { true }
                                   value = { data.price }
                                   onChange = { ( e ) => {
                                   } }
                                   label = { 'Harga Lokal (Ahass) *' }
                                   onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   disabled = { true }
                                   value = { data.priceNasional }
                                   onChange = { ( e ) => {
                                   } }
                                   label = { 'Harga Nasional (HET) *' }
                                   onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Satuan *' }
                           data = { [
                               {
                                   id : 1,
                                   value : 'PCS',
                                   name : 'PCS'
                               }
                           ] }
                           disabled = { true }
                           value = { 'PCS' }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { data.price }
                                   onChange = { ( e ) => {
                                   } }
                                   label = { 'Harga Claim Oli (ASS1)' }
                                   disabled = { true }
                                   onEnter = { 'next' }/>
                <ITextArea error = { false }
                           value = { data.description }
                           label = { 'Catatan' }
                           placeHolder = { 'Masukan Catatan' }
                           onChange = { () => {
                           } }/>
            </div>
        </div>
    }

    function komisiPenjualan() {
        return <div className = { `grid gap-10 p-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Komisi Penjualan' }/>
            <div className = { `grid laptop:grid-cols-2 gap-5` }>
                <IDropDown label = { 'Pemberian Komisi' }
                           error = { false }
                           value = { 'YA' }
                           type = { 'text' }
                           onEnter = { 'next' }
                           onValue = { ( data ) => {
                               // console.log( data.name )
                           } }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Ya',
                                   name : 'Ya'
                               }
                           ] }
                           onValueChange = { ( data ) => {
                           } }/>
            </div>
        </div>
    }
}
