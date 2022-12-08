import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitle from "../../../../component/ITitle/ITitle";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { useRouter } from "next/router";
import { TambahCustomerViewModel } from "./ViewModel/TambahCustomerViewModel";
import { npwpFormat } from "../../../../utils/format/formatNpwp";


export const TambahCustomerView = () => {
    const route = useRouter();
    const tambahCustomerViewModel = TambahCustomerViewModel();
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Customer' } subtitle = { 'master-data/customer/tambah-customer' }/>
        { TambahCustomer() }
        { tambahCustomerViewModel.formik.values.title === 'Perusahaan' ? KontakPerson() : null }
        { DefaultPenjualanKredit() }
        { AlamatKirim() }
        { tambahCustomerViewModel.formik.values.title === 'Perusahaan' ? PajakCustomer() : null }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                return route.back()
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                tambahCustomerViewModel.formik.handleSubmit()
            } }>
                Simpan
            </IButton>
        </div>
    </div>

    function PajakCustomer() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <ITitle title = { 'Pajak Customer' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'NPWP' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.npwp && Boolean( tambahCustomerViewModel.formik.errors.npwp )) }
                                   onChange = { ( e ) => {
                                       tambahCustomerViewModel.formik.handleChange( 'npwp' )( npwpFormat( e.target.value ) )
                                       tambahCustomerViewModel.formik.touched.npwp = true
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.errors.npwp }
                                   value = { tambahCustomerViewModel.formik.values.npwp }
                                   onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.nppkp && Boolean( tambahCustomerViewModel.formik.errors.nppkp )) }
                                   value = { tambahCustomerViewModel.formik.values.nppkp }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'nppkp' ) }
                                   label = { 'NPPKP' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.alamatPajak && Boolean( tambahCustomerViewModel.formik.errors.alamatPajak )) }
                                   value = { tambahCustomerViewModel.formik.values.alamatPajak }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'alamatPajak' ) }
                                   label = { 'Alamat' } onEnter = { 'done' }/>
            </div>
        </div>
    }

    function AlamatKirim() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <div className = { `flex place-content-between` }>
                <ITitle title = { 'Alamat Kirim' }/>
                <div>
                    <IButton status = { 'info' }>Copy Data Customer</IButton>
                </div>
            </div>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.alamatKirim && Boolean( tambahCustomerViewModel.formik.errors.alamatKirim )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'alamatKirim' ) }
                                   value = { tambahCustomerViewModel.formik.values.alamatKirim }
                                   label = { 'Alamat' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.up && Boolean( tambahCustomerViewModel.formik.errors.up )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'up' ) }
                                   value = { tambahCustomerViewModel.formik.values.up }
                                   label = { 'UP' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.alamatNoTlp && Boolean( tambahCustomerViewModel.formik.errors.alamatNoTlp )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'alamatNoTlp' ) }
                                   value = { tambahCustomerViewModel.formik.values.alamatNoTlp }
                                   label = { 'No Telepon' } onEnter = { 'next' }/>
            </div>
        </div>
    }

    function DefaultPenjualanKredit() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <ITitle title = { 'Default Penjualan Kredit' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Tempo (Hari)' }
                                   onEnter = { 'next' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.tempo && Boolean( tambahCustomerViewModel.formik.errors.tempo )) }
                                   value = { tambahCustomerViewModel.formik.values.tempo }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'tempo' ) }/>

                <ITextFieldDefault type = { 'text' } label = { 'Limit Kredit' } onEnter = { 'next' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.limitKredit && Boolean( tambahCustomerViewModel.formik.errors.limitKredit )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'limitKredit' ) }
                                   value = { tambahCustomerViewModel.formik.values.limitKredit }/>
            </div>
        </div>
    }

    function KontakPerson() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <div className = { `flex place-content-between` }>
                <ITitle title = { 'Kontak Person' }/>
                <div>
                    <IButton status = { 'info' } onClick = { tambahCustomerViewModel.kontakPerson }>Copy Data
                                                                                                    Customer</IButton>
                </div>
            </div>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.kontakPersonNama
                                   }
                                   errorMessages = { tambahCustomerViewModel.formik.errors.kontakPersonNama }
                                   onChange = { ( value ) => {
                                       tambahCustomerViewModel.formik.handleChange( 'kontakPersonNama' )( value.target.value.toUpperCase() )
                                       tambahCustomerViewModel.formik.touched.kontakPersonNama = true
                                   } }
                                   error = { Boolean( tambahCustomerViewModel.formik.errors.kontakPersonNama ) }
                                   label = { 'Nama' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.kontakPersonNoTlp }
                                   onChange = { ( e ) => {
                                       tambahCustomerViewModel.formik.handleChange( 'kontakPersonNoTlp' )( e.target.value )
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.errors.kontakPersonNoTlp }
                                   error = { Boolean( tambahCustomerViewModel.formik.errors.kontakPersonNoTlp ) }
                                   label = { 'No Telepon' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { Boolean( tambahCustomerViewModel.formik.errors.kontakPersonNoHp ) }
                                   value = { tambahCustomerViewModel.formik.values.kontakPersonNoHp }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'kontakPersonNoHp' ) }
                                   label = { 'No Hp' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.kontakPersonEmail }
                                   error = { Boolean( tambahCustomerViewModel.formik.errors.kontakPersonEmail ) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'kontakPersonEmail' ) }
                                   label = { 'Email' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.kontakPersonJabatan }
                                   error = { Boolean( tambahCustomerViewModel.formik.errors.kontakPersonJabatan ) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'kontakPersonJabatan' ) }
                                   label = { 'Jabatan' } onEnter = { 'next' }/>
            </div>
        </div>
    }

    function TambahCustomer() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <ITitle title = { 'Tambah Customer' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2 place-items-start` }>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Kode' }
                                       onEnter = { 'next' }
                                       disabled = { true }
                                       error = { !!(tambahCustomerViewModel.formik.touched.kode && Boolean( tambahCustomerViewModel.formik.errors.kode )) }
                                       value = { tambahCustomerViewModel.formik.values.kode }
                                       onChange = { tambahCustomerViewModel.formik.handleChange( 'kode' ) }/>
                    <IRadioSingle status = { tambahCustomerViewModel.formik.values.active }
                                  setStatus = { ( data ) => {
                                      tambahCustomerViewModel.formik.setFieldValue( 'active', data )
                                  } }
                                  error = { !!(tambahCustomerViewModel.formik.touched.active && Boolean( tambahCustomerViewModel.formik.errors.active )) }
                                  label = { 'Status' }
                                  value1 = { tambahCustomerViewModel.formik.values.active ? 'Aktif' : 'Tidak Aktif' }/>
                </div>
                <IDropDown type = { 'text' }
                           label = { 'Title *' }
                           data = { [
                               { id : 1, value : 'Tuan', name : 'Tuan' },
                               { id : 2, value : 'Nyonya', name : 'Nyonya' },
                               { id : 3, value : 'Perusahaan', name : 'Perusahaan' },
                           ] }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.title }
                           onValueChange = { () => {
                           } }
                           errorMessages = { tambahCustomerViewModel.formik.errors.title }
                           error = { !!(tambahCustomerViewModel.formik.touched.title && Boolean( tambahCustomerViewModel.formik.errors.title )) }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.setTitle( value.value )
                               tambahCustomerViewModel.formik.setFieldValue( 'title', value.value )
                           } }/>
                <ITextFieldDefault type = { 'text' } label = { 'Nama *' } onEnter = { 'next' }
                                   value = {
                                       tambahCustomerViewModel.formik.values.nama
                                   }
                                   onChange = { ( value ) => {
                                       tambahCustomerViewModel.formik.setFieldValue( 'nama', value.target.value.toUpperCase() )
                                       tambahCustomerViewModel.formik.touched.nama = true
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.nama ? tambahCustomerViewModel.formik.errors.nama : '' }

                                   error = { (tambahCustomerViewModel.formik.touched.nama && Boolean( tambahCustomerViewModel.formik.errors.nama )) ?? false }/>

                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( e ) => {
                                       tambahCustomerViewModel.formik.handleChange( 'ktp' )( e.target.value )
                                       tambahCustomerViewModel.formik.touched.ktp = true
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.ktp ? tambahCustomerViewModel.formik.errors.ktp : '' }
                                   value = { tambahCustomerViewModel.formik.values.ktp }
                                   error = { !!(tambahCustomerViewModel.formik.touched.ktp && Boolean( tambahCustomerViewModel.formik.errors.ktp )) }
                                   label = { 'No KTP' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Pekerjaan' }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Pegawai Negeri',
                                   name : 'Pegawai Negeri',
                               },
                               {
                                   id : 2,
                                   value : 'Pegawai Swasta',
                                   name : 'Pegawai Swasta',

                               },
                               {
                                   id : 3,
                                   value : 'Ojek',
                                   name : 'Ojek'
                               },
                               {
                                   id : 4,
                                   value : 'Wiraswasta Pedagang',
                                   name : 'Wiraswasta Pedagang'
                               }
                           ] }
                           error = { !!(tambahCustomerViewModel.formik.touched.pekerjaan && Boolean( tambahCustomerViewModel.formik.errors.pekerjaan )) }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.pekerjaan }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.setFieldValue( 'pekerjaan', value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Agama' }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Islam',
                                   name : 'Islam',
                               },
                               {
                                   id : 2,
                                   value : 'Kristen',
                                   name : 'Kristen',
                               },
                               {
                                   id : 7,
                                   value : 'Katolik',
                                   name : 'Katolik',
                               },
                               {
                                   id : 3,
                                   value : 'Hindu',
                                   name : 'Hindu'
                               },
                               {
                                   id : 4,
                                   value : 'Budha',
                                   name : 'Budha'
                               },
                               {
                                   id : 5,
                                   value : 'Konghucu',
                                   name : 'Konghucu'
                               },
                               {
                                   id : 6,
                                   value : 'Lainnya',
                                   name : 'Lainnya'
                               }
                           ] }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.agama }
                           onValueChange = { () => {
                           } }
                           error = { !!(tambahCustomerViewModel.formik.touched.agama && Boolean( tambahCustomerViewModel.formik.errors.agama )) }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.setFieldValue( 'agama', value.value )
                           } }/>
                <ITextFieldDefault type = { 'date' }
                                   value = { tambahCustomerViewModel.formik.values.tglLahir }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'tglLahir' ) }
                                   error = { !!(tambahCustomerViewModel.formik.touched.tglLahir && Boolean( tambahCustomerViewModel.formik.errors.tglLahir )) }
                                   label = { 'Tanggal Lahir' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.noPassport }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'noPassport' ) }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.noPassport ? tambahCustomerViewModel.formik.errors.noPassport : '' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.noPassport && Boolean( tambahCustomerViewModel.formik.errors.noPassport )) }
                                   label = { 'No Passport' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.alamat }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'alamat' ) }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.alamat ? tambahCustomerViewModel.formik.errors.alamat : '' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.alamat && Boolean( tambahCustomerViewModel.formik.errors.alamat )) }
                                   label = { 'Alamat *' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Provinsi *' }
                           data = { [
                               { id : 1, value : 'Jawa Barat', name : 'Jawa Barat' },
                               { id : 2, value : 'Jawa Tengah', name : 'Jawa Tengah' },
                           ] }
                           onEnter = { 'next' }
                           errorMessages = { tambahCustomerViewModel.formik.touched.provinsi ? tambahCustomerViewModel.formik.errors.provinsi : '' }
                           error = { !!(tambahCustomerViewModel.formik.touched.provinsi && Boolean( tambahCustomerViewModel.formik.errors.provinsi )) }
                           value = { tambahCustomerViewModel.formik.values.provinsi }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.touched.provinsi = true
                               tambahCustomerViewModel.formik.setFieldValue( 'provinsi', value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kota/Kabupaten *' }
                           data = { [
                               { id : 1, value : 'Bandung', name : 'Bandung' },
                               { id : 2, value : 'Bekasi', name : 'Bekasi' },
                           ] }
                           onEnter = { 'next' }
                           errorMessages = { tambahCustomerViewModel.formik.touched.kota ? tambahCustomerViewModel.formik.errors.kota : '' }
                           error = { !!(tambahCustomerViewModel.formik.touched.kota && Boolean( tambahCustomerViewModel.formik.errors.kota )) }
                           value = { tambahCustomerViewModel.formik.values.kota }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.touched.kota = true
                               tambahCustomerViewModel.formik.setFieldValue( 'kota', value.value )
                               // tambahCustomerViewModel.setKota( value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kecamatan *' }
                           data = { [
                               { id : 1, value : 'Cibeunying', name : 'Cibeunying' },
                               { id : 2, value : 'Cibiru', name : 'Cibiru' },
                           ] }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.kecamatan }
                           onValueChange = { () => {
                           } }
                           errorMessages = { tambahCustomerViewModel.formik.touched.kecamatan ? tambahCustomerViewModel.formik.errors.kecamatan : '' }
                           error = { !!(tambahCustomerViewModel.formik.touched.kecamatan && Boolean( tambahCustomerViewModel.formik.errors.kecamatan )) }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.touched.kecamatan = true
                               tambahCustomerViewModel.formik.setFieldValue( 'kecamatan', value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kelurahan *' }
                           data = { [
                               {
                                   id : 1,
                                   value : '1',
                                   name : '1',
                               },
                               {
                                   id : 2,
                                   value : '2',
                                   name : '2',
                               }
                           ] }
                           error = { !!(tambahCustomerViewModel.formik.touched.kelurahan && Boolean( tambahCustomerViewModel.formik.errors.kelurahan )) }
                           onEnter = { 'next' }
                           errorMessages = { tambahCustomerViewModel.formik.touched.kelurahan ? tambahCustomerViewModel.formik.errors.kelurahan : '' }
                           value = { tambahCustomerViewModel.formik.values.kelurahan }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { ( data ) => {
                               tambahCustomerViewModel.formik.touched.kelurahan = true
                               tambahCustomerViewModel.formik.setFieldValue( 'kelurahan', data.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kode Pos *' }
                           data = { [
                               {
                                   id : 1,
                                   value : '1',
                                   name : '1',
                               },
                           ] }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.kodePos }
                           error = { !!(tambahCustomerViewModel.formik.touched.kodePos && Boolean( tambahCustomerViewModel.formik.errors.kodePos )) }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.setFieldValue( 'kodePos', value.value )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.noTelp }
                                   error = { !!(tambahCustomerViewModel.formik.touched.noTelp && Boolean( tambahCustomerViewModel.formik.errors.noTelp )) }
                                   onChange = { ( value ) => {
                                       tambahCustomerViewModel.formik.setFieldValue( 'noTelp', value.target.value )
                                       tambahCustomerViewModel.formik.touched.noTelp = true
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.noTelp ? tambahCustomerViewModel.formik.errors.noTelp : '' }
                                   label = { 'No Telepon' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.noHp }
                                   onChange = { ( e ) => {
                                       tambahCustomerViewModel.formik.handleChange( 'noHp' )( e.target.value )
                                       tambahCustomerViewModel.formik.touched.noHp = true
                                   } }
                                   errorMessages = { tambahCustomerViewModel.formik.touched.noHp ? tambahCustomerViewModel.formik.errors.noHp : '' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.noHp && Boolean( tambahCustomerViewModel.formik.errors.noHp )) }
                                   label = { 'No HP *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.noFaks }
                                   onChange = { ( e ) => {
                                       tambahCustomerViewModel.formik.values.noFaks = e.target.value

                                   } }
                                   error = { !!(tambahCustomerViewModel.formik.touched.noFaks && Boolean( tambahCustomerViewModel.formik.errors.noFaks )) }
                                   label = { 'No Faks' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'email' }
                                   value = { tambahCustomerViewModel.formik.values.email }
                                   error = { !!(tambahCustomerViewModel.formik.touched.email && Boolean( tambahCustomerViewModel.formik.errors.email )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'email' ) }
                                   label = { 'Email' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'url' }
                                   value = { tambahCustomerViewModel.formik.values.website }
                                   error = { !!(tambahCustomerViewModel.formik.touched.website && Boolean( tambahCustomerViewModel.formik.errors.website )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'website' ) }
                                   label = { 'Website' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.touched.facebook && Boolean( tambahCustomerViewModel.formik.errors.facebook )) }
                                   value = { tambahCustomerViewModel.formik.values.facebook }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'facebook' ) }
                                   label = { 'Facebook' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   value = { tambahCustomerViewModel.formik.values.twitter }
                                   error = { !!(tambahCustomerViewModel.formik.touched.twitter && Boolean( tambahCustomerViewModel.formik.errors.twitter )) }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'twitter' ) }
                                   label = { 'Twitter' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { !!(tambahCustomerViewModel.formik.values.instagram && Boolean( tambahCustomerViewModel.formik.errors.instagram )) }
                                   value = { tambahCustomerViewModel.formik.values.instagram }
                                   onChange = { tambahCustomerViewModel.formik.handleChange( 'instagram' ) }
                                   label = { 'Instagram' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Group Diskon' }
                           data = { [
                               {
                                   id : 1,
                                   value : '1',
                                   name : '1',
                               }
                           ] }
                           error = { !!(tambahCustomerViewModel.formik.touched.groupDiskon && Boolean( tambahCustomerViewModel.formik.errors.groupDiskon )) }
                           onEnter = { 'next' }
                           value = { tambahCustomerViewModel.formik.values.groupDiskon }
                           onValueChange = { ( value ) => {
                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.setFieldValue( 'groupDiskon', value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'PIC AHASS' }
                           data = { [] }
                           onEnter = { 'next' }
                           error = { !!(tambahCustomerViewModel.formik.touched.picAhass && Boolean( tambahCustomerViewModel.formik.errors.picAhass )) }
                           value = { tambahCustomerViewModel.formik.values.picAhass }
                           onValueChange = { ( value ) => {
                           } }
                           onValue = { ( value ) => {
                               tambahCustomerViewModel.formik.setFieldValue( 'picAhass', value.value )
                           } }/>
            </div>
            <ITextArea label = { 'Catatan' }
                       value = { tambahCustomerViewModel.formik.values.catatan }
                       error = { !!(tambahCustomerViewModel.formik.touched.catatan && Boolean( tambahCustomerViewModel.formik.errors.catatan )) }
                       onChange = {
                           tambahCustomerViewModel.formik.handleChange( 'catatan' )
                       }/>
        </div>
    }
}
