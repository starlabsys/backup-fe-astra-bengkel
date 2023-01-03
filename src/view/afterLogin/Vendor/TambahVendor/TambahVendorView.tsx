import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IButton from "../../../../component/IButton/IButton";
import { TambahVendorVM } from "./ViewModel/TambahVendorVM";
import { useRouter } from "next/router";
import Currency from "../../../../utils/format/currency";
import FormatNumber from "../../../../utils/format/formatNumber";


export const TambahVendorView = () => {
    const routes = useRouter();
    const controller = TambahVendorVM();
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Vendor' } subtitle = { 'master-data/vendor/tambah-vendor' }/>
        { vendor() }
        { contactPerson() }
        { syaratPembelianKredit() }
        <div className = { `grid grid-cols-2 gap-5` }>
            <IButton onClick = { () => {
                routes.back();
            } }>Kembali</IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.sendData();
            } }>Simpan</IButton>
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
                                       disabled = { true }
                                       label = { 'Kode' }
                                       placeholder = { 'Masukan Kode' }
                                       onEnter = { 'next' }
                                       value = { undefined }/>
                    <IRadioSingle status = { controller.vendor?.status ?? true }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { controller.vendor?.status ? 'Aktif' : controller.vendor?.status === false ? 'Tidak Aktif' : 'Aktif' }
                                  setStatus = { () => {
                                      controller.setVendor(
                                          {
                                              ...controller.vendor,
                                              status : !controller.vendor?.status
                                          }
                                      )
                                  } }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               namaVendor : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'Nama *' }
                                   placeholder = { 'Masukan Nama' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.namaVendor }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               alamat : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'Alamat *' }
                                   placeholder = { 'Masukan Alamat' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.alamat }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Provinsi *' }
                           disabled = { true }
                           data = { controller.listProvince }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setVendor(
                                   {
                                       ...controller.vendor,
                                       provinsi : item
                                   }
                               )
                               controller.getAreaDetail( 5, item.id );
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           disabled = { true }
                           label = { 'Kota/Kabupaten *' }
                           data = { controller.listKab }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setVendor(
                                   {
                                       ...controller.vendor,
                                       kabupaten : item
                                   }
                               )
                               controller.getAreaDetail( 6, item.value );
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           disabled = { true }
                           label = { 'Kecamatan *' }
                           data = { controller.listKec }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setVendor(
                                   {
                                       ...controller.vendor,
                                       kecamatan : item
                                   }
                               )
                               controller.getAreaDetail( 7, item.value );
                           } }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kelurahan *' }
                           disabled = { true }
                           data = { controller.listKel }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setVendor(
                                   {
                                       ...controller.vendor,
                                       kelurahan : item,
                                       kodePos : item.add,
                                   }
                               )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } }
                                   disabled = { true }
                                   label = { 'Kode Pos *' }
                                   placeholder = { 'Masukan Kode Pos' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.kodePos }/>
                <ITextFieldDefault type = { 'tel' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               noTelp : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'No Tlp' }
                                   placeholder = { 'Masukan No Tlp' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.noTelp }/>
                <ITextFieldDefault type = { 'tel' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               noHp : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'No HP' }
                                   placeholder = { 'Masukan No HP' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.noHp }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               email : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'Email' }
                                   placeholder = { 'Masukan Email' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.email }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setVendor(
                                           {
                                               ...controller.vendor,
                                               website : value.target.value
                                           }
                                       )
                                   } }
                                   label = { 'Website' }
                                   placeholder = { 'Masukan Website' }
                                   onEnter = { 'next' }
                                   value = { controller.vendor.website }/>

            </div>
            <ITextArea label = { 'Catatan' }
                       placeHolder = { 'Masukan Catatan' }
                       error = { false }
                       type = { "text" }
                       value = { controller.vendor.catatan }
                       onChange = { ( value ) => {
                           controller.setVendor(
                               {
                                   ...controller.vendor,
                                   catatan : value.target.value
                               }
                           )
                       } }/>
        </div>
    }

    function contactPerson() {
        return <div className = { `bg-white grid gap-5 p-5 rounded-lg` }>
            <ITitleMd title = { 'Kontak Person' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 w-full` }>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               nama : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'Nama' }
                                   placeholder = { 'Masukan Nama' }
                                   onEnter = { 'next' }
                                   value = { controller.kontakPerson.nama }/>
                <ITextFieldDefault type = { 'tel' }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               noTelp : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'No Tlp' }
                                   placeholder = { 'Masukan No Tlp' }
                                   onEnter = { 'next' }
                                   value = { controller.kontakPerson.noTelp }/>
                <ITextFieldDefault type = { 'tel' }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               noHp : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'No HP' }
                                   placeholder = { 'Masukan No HP' }
                                   onEnter = { 'next' }
                                   value = { controller.kontakPerson.noHp }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               email : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'Email' }
                                   placeholder = { 'Masukan Email' }
                                   onEnter = { 'next' }
                                   value = { controller.kontakPerson.email }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               jabatan : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'Jabatan' }
                                   placeholder = { 'Masukan Jabatan' }
                                   onEnter = { 'next' }
                                   value = { controller.kontakPerson.jabatan }/>
            </div>
        </div>
    }

    function syaratPembelianKredit() {
        return <div className = { `bg-white grid gap-5 p-5 rounded-lg` }>
            <ITitleMd title = { 'Syarat Default Pembelian Kredit' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start place-content-start` }>
                <ITextFieldDefault type = { 'number' }
                                   onChange = { ( value ) => {
                                       controller.setSyaratKredit( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               tempo : value.target.value
                                           }
                                       } )
                                   } }
                                   label = { 'Tempo' }
                                   placeholder = { 'Hari' }
                                   onEnter = { 'next' }
                                   value = { undefined }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setSyaratKredit( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               limit : Currency.stringToIdr( FormatNumber.numberOnly( value.target.value ) )
                                           }
                                       } )
                                   } }
                                   label = { 'Limit' }
                                   placeholder = { 'Masukan Limit' }
                                   onEnter = { 'next' }
                                   value = { Currency.stringToIdr( Currency.idrToString( FormatNumber.numberOnly( controller.syaratKredit.limit ) ) ) }/>
            </div>
        </div>
    }
}
