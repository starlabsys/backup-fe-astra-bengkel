import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import TambahJasaViewModel from "./TambahJasaViewModel";
import Currency from "../../../../utils/format/currency";
import FormTambahJasaViewModel from "./FormTambahJasaViewModel";
import { InterfaceListSparePartDetailJasa } from "../InfoEditJasa/interface/InterfaceListSparePartDetailJasa";


const TambahJasaView = () => {
    const route = useRouter();
    const controller = TambahJasaViewModel();
    const formAdd = FormTambahJasaViewModel();
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Jasa' } subtitle = { 'master-data/jasa/tambah-jasa' }/>
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Jasa' }/>
            { tambahJasa() }
        </div>
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Komisi Penjualan' }/>
            { komisiPenjualan() }
        </div>

        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Sparepart' }/>
            { tambahSparepart() }
            { tableData() }
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                formAdd.addData();
            } }>
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
                               controller.setSparePart( data );

                           } }
                           header = { controller.header }
                           data = { formAdd.listSparePart }/>
    }

    function tambahSparepart() {
        return <div className = { `w-full grid ` }>
            <IDropDown type = { 'text' }
                       error = { false }
                       label = { 'Cari Kode Sparepart' }
                       data = { controller.listDropDownSparePart }
                       onEnter = { 'next' }
                       onValueChange = { ( value ) => {
                           controller.getSparePart( 10, 1, value )
                       } }
                       onValue = { ( value ) => {
                           controller.setSparePart( controller.listSparePartData.find( item => item.idRefMaterial === value.id ) ?? null );

                           console.log( controller.sparePart )
                       } }/>
            {
                controller.sparePart !== null ?
                    <>
                        <div className = { `grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 mt-5` }>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Kode Sparepart' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { controller.sparePart.kodeSparepart }
                                               onChange = { () => {

                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Nama Sparepart' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { controller.sparePart.namaSparepart }
                                               onChange = { () => {

                                               } }/>
                            <ITextFieldDefault type = { 'number' }
                                               label = { 'QTY' }
                                               onEnter = { 'next' }
                                               value = { formAdd.qty }
                                               onChange = { ( value ) => {
                                                   formAdd.setQty( Number( value.target.value ) );
                                               } }/>
                            <IRadioSingle status = { controller.sparePart.aktif }
                                          error = { false }
                                          label = { 'Status' }
                                          value1 = { controller.sparePart.aktif ? 'Aktif' : 'Tidak Aktif' }
                                          setStatus = { () => {
                                              controller.setSparePart( {
                                                  stok : controller.sparePart?.stok ?? 0,
                                                  isEdit : true,
                                                  namaSparepart : controller.sparePart?.namaSparepart ?? '',
                                                  quantity : controller.sparePart?.quantity ?? 0,
                                                  aktif : !controller.sparePart?.aktif,
                                                  hargaJual : controller.sparePart?.hargaJual ?? 0,
                                                  isFreeService : controller.sparePart?.isFreeService ?? false,
                                                  idRefMaterial : controller.sparePart?.idRefMaterial ?? 0,
                                                  isDisabel : controller.sparePart?.isDisabel ?? false,
                                                  labelAktif : controller.sparePart?.labelAktif ?? '',
                                                  kodeSparepart : controller.sparePart?.kodeSparepart ?? '',

                                              } )
                                          } }/>
                        </div>
                        { buttonSubmitEdit() }
                    </>
                    : null
            }
        </div>
    }

    function buttonSubmitEdit() {
        return <div className = { `w-full flex place-content-end mt-5` }>
            <div className = { `w-4/12` }>
                {
                    controller.sparePart?.isEdit ? <IButton onClick = { () => {
                            formAdd.changeDataListSparePart( controller.sparePart?.idRefMaterial ?? 0, formAdd.qty, controller.sparePart?.aktif ?? false );
                        } }>
                            Edit
                        </IButton> :
                        <IButton status = { `success` } onClick = { () => {
                            formAdd.addDataSparePart( controller.sparePart ?? {} as InterfaceListSparePartDetailJasa );
                        } }>
                            Tambah Sparepart
                        </IButton>
                }
            </div>
        </div>
    }

    function komisiPenjualan() {
        return <>
            <div className = { `w-full tablet:w-6/12` }>
                <IDropDown type = { "text" }
                           error = { false }
                           disabled = { true }
                           value = { controller.typeKomisi === 1 ? 'Persentase' : controller.typeKomisi === 2 ? 'Nominal' : '' }
                           label = { 'Pemberian Komisi *' }
                           data = { [
                               {
                                   id : 1,
                                   name : 'Persentase',
                                   value : 'persentase'
                               },
                               {
                                   id : 2,
                                   name : 'Nominal',
                                   value : 'nominal'
                               }
                           ] }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( data ) => {
                               controller.setTypeKomisi( data.id );
                           } }/>
            </div>
            {
                controller.typeKomisi === 2 ? <div className = { `w-full tablet:w-6/12` }>
                        <ITextFieldDefault type = { "text" }
                                           onChange = { ( value ) => {
                                               formAdd.setNilaiKomisi( Number( Currency.idrToString(
                                                   value.target.value ) ) );
                                           } }
                                           label = { 'Nominal' }
                                           onEnter = { "next" }
                                           value = { Currency.stringToIdr( formAdd.nilaiKomisi.toString() ) }/>
                    </div>
                    : controller.typeKomisi === 1 ? <div className = { `w-full tablet:w-6/12` }>
                        <ITextFieldDefault type = { "text" }
                                           onChange = { ( value ) => {
                                               formAdd.setNilaiKomisi( Number( value.target.value ) )
                                           } }
                                           label = { 'Persentase %' }
                                           onEnter = { "next" }
                                           value = { formAdd.nilaiKomisi }/>
                        <IDropDown type = { "text" }
                                   error = { false }
                                   disabled = { true }
                                   value = { undefined }
                                   label = { 'Satuan Komisi *' }
                                   data = { controller.listSatuanKomisi }
                                   onEnter = { "next" }
                                   onValueChange = { () => {
                                   } }
                                   onValue = { ( data ) => {
                                       formAdd.setSatuanKomisi( data.value );
                                   } }/>
                    </div> : null
            }
        </>
    }

    function tambahJasa() {
        return <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start` }>
            <div className = { `grid gap-2 w-full` }>
                <ITextFieldDefault type = { "text" }
                                   onChange = { ( value ) => {
                                       formAdd.setKode( value.target.value );
                                   } }
                                   label = { 'Kode' }
                                   onEnter = { "next" }
                                   value = { formAdd.kode }/>
                <IRadioSingle status = { formAdd.aktif } error = { false } setStatus = { () => {
                    formAdd.setAktif( !formAdd.aktif );
                } } label = { 'Status' } value1 = { formAdd.kode ? 'Aktif' : 'Tidak Aktif' }/>
            </div>
            <ITextFieldDefault type = { "text" }
                               onChange = { ( value ) => {
                                   formAdd.setNama( value.target.value );
                               } }
                               label = { 'Nama *' }
                               onEnter = { "next" }
                               value = { formAdd.nama }/>
            <IDropDown type = { "text" }
                       error = { false }
                       label = { 'Group *' }
                       disabled = { true }
                       data = { controller.listGroup }
                       onEnter = { "next" }
                       onValueChange = { () => {
                       } }
                       onValue = { ( value ) => {
                           formAdd.setGroup( value.value );
                       } }/>
            <ITextFieldDefault type = { 'text' }
                               onChange = { ( value ) => {
                                   formAdd.setSubGroup( value.target.value );
                               } }
                               label = { 'Sub Group' }
                               onEnter = { 'next' }
                               value = { formAdd.subGroup }/>
            <IDropDown type = { "text" }
                       error = { false }
                       label = { 'Kategori Pekerjaan' }
                       disabled = { true }
                       data = { controller.listKategoriPekerjaan }
                       onEnter = { "next" }
                       onValueChange = { () => {
                       } }
                       onValue = { ( value ) => {
                           formAdd.setKategoriPekerjaanID( Number( value.value ) );
                       } }/>
            <ITextFieldDefault type = { 'text' }
                               onChange = { ( value ) => {
                                   formAdd.setHargaJual( Number( Currency.idrToString( value.target.value ) ) );
                               } }
                               label = { 'Harga Jasa * (exclude PPN)' }
                               onEnter = { 'next' }
                               errorMessages = { 'Jika ASS, masukan sesuai harga claim ASS' }
                               helperColor = { "error" }
                               value = { Currency.stringToIdr( formAdd.hargaJual.toString() ) }/>
            <div className = { `grid w-full tablet:grid-cols-2 gap-5` }>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       formAdd.setWaktuKerja( Number( value.target.value ) );
                                   } }
                                   label = { 'Waktu Kerja *' }
                                   onEnter = { 'next' }
                                   value = { formAdd.waktuKerja }/>
                <IDropDown type = { "text" }
                           error = { false }
                           disabled = { true }
                           label = { 'Hari/Jam/waktu *' }
                           data = { controller.listSatuanWaktu }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               formAdd.setOumKerja( value.value );
                           } }/>
            </div>
            <ITextArea error = { false }
                       label = { 'Deskripsi' }
                       value = { formAdd.catatan }
                       type = { "text" }
                       onChange = { ( value ) => {
                           formAdd.setCatatan( value.target.value );
                       } }/>
        </div>
    }
}


export default TambahJasaView
