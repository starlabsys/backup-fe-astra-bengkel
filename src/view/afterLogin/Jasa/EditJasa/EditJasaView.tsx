import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown, { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import EditJasaViewModel from "./EditJasaViewModel";
import Currency from "../../../../utils/format/currency";
import updatedJasaViewModel from "./UpdatedJasaViewModel";
import { ListSparePart } from "../../../../domain/repository/jasa/interface/InterfacePutJasa";


const EditJasaView = () => {
    const route = useRouter();
    const { id } = route.query;
    const dataId = id as string;
    const controller = EditJasaViewModel( Number( dataId ), 1 );
    const updated = updatedJasaViewModel();


    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Jasa' } subtitle = { 'master-data/jasa/edit-jasa' }/>
        { editJasa() }
        { komisi() }
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Sparepart' }/>
            <div className = { `w-full flex place-content-start` }>
                <div className = { `w-full` }>
                    { dropDown() }
                    {
                        controller.sparePart !== null ?
                            <>
                                <div className = { `grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 mt-5` }>
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
                                                       value = { controller.sparePart.quantity }
                                                       onChange = { ( value ) => {
                                                           controller.setQtySparepart( Number( value.target.value ) );
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
                                <div className = { `w-full flex place-content-end mt-5` }>
                                    <div className = { `w-4/12` }>
                                        {
                                            controller.sparePart.isEdit ? <IButton onClick = { () => {
                                                controller.changeDataListSparePart( controller.sparePart?.idRefMaterial ?? 0, controller.qtySparepart, controller.sparePart?.aktif ?? false );
                                            } }>
                                                Edit
                                            </IButton> : <IButton status = { `success` } onClick = { () => {
                                                controller.setListSparePart( ( prevState ) => [
                                                    ...prevState,
                                                    {
                                                        idRefMaterial : controller.sparePart?.idRefMaterial ?? 0,
                                                        kodeSparepart : controller.sparePart?.kodeSparepart ?? '',
                                                        namaSparepart : controller.sparePart?.namaSparepart ?? '',
                                                        quantity : controller.qtySparepart,
                                                        stok : controller.sparePart?.stok ?? 0,
                                                        labelAktif : 'Aktif',
                                                        hargaJual : controller.sparePart?.hargaJual ?? 0,
                                                        isDisabel : true,
                                                        aktif : controller.sparePart?.aktif ?? false,
                                                        isFreeService : controller.detailJasa.isFreeService,
                                                        isEdit : true,
                                                    }
                                                ] )
                                            } }>
                                                Tambah Sparepart
                                            </IButton>
                                        }
                                    </div>
                                </div>
                            </>
                            : null
                    }
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
            <IButton status = { 'success' } onClick = { () => {
                updated.updatedJasa( controller.context, {
                    action : 1,
                    id : controller.detailJasa.id,
                    kodeJasa : controller.detailJasa.kodeJasa,
                    namaJasa : controller.nama,
                    grupJasa : controller.listGroup.find( ( item ) => Number( item.value ) === controller.group )?.value.toString() ?? '0',
                    subGrup : controller.subGroup ?? '',
                    satuanKomisi : controller.listSatuanKomisi.find( ( item ) => item.value === controller.satuanKomisi.toString() )?.value.toString() ?? '0',
                    nilaiKomisi : controller.nominalKomisi,
                    catatan : controller.deskripsi,
                    aktif : controller.status,
                    kategoriPekerjaanID : Number( controller.listKategoriPekerjaan.find( ( item ) => item.value === controller.kategoriPekerjaan.toString() )?.value ) ?? 0,
                    waktuKerja : controller.waktuKerja,
                    hargaJual : Number( Currency.idrToString( controller.hargaJasa ) ),
                    pajakJual : controller.pajak,
                    listSparePart : controller.listSparePart.map( ( item ) : ListSparePart => {
                        return {
                            aktif : item.aktif,
                            isFreeService : item.isFreeService,
                            idRefMaterial : item.idRefMaterial,
                            kodeSparepart : item.kodeSparepart,
                            namaSparepart : item.namaSparepart,
                            quantity : item.quantity,
                            stok : item.stok,
                            labelAktif : item.labelAktif,
                            hargaJual : item.hargaJual,
                            isDisabel : item.isDisabel,
                            guid : '00000',
                        }
                    } ),
                    oumKerja : controller.satuanWaktuKerja,
                    tipeKomisi : controller.typeKomisi,
                } ).then( ( res ) => {
                    controller.getDetail( Number( dataId ), 1 ).then( ( res ) => {
                        controller.loadingLottie.openLoading( false )
                    } );
                } );
            } }>
                Simpan
            </IButton>
        </div>
    </div>


    function dropDown() {
        return <IDropDown type = { "text" }
                          error = { false }
                          value = { controller.sparePart?.kodeSparepart ?? undefined }
                          label = { 'Cari Sparepart' }
                          data = { controller.listSparePartData.map( ( item, index ) : InterfacePropsDropDown => {
                              return {
                                  id : item.idRefMaterial,
                                  value : item.kodeSparepart,
                                  name : item.kodeSparepart
                              }
                          } ) }
                          onEnter = { "next" }
                          onValueChange = { ( value ) => {
                              controller.getSparePart( 10, 1, value )
                          } }
                          onValue = { ( data ) => {
                              controller.setSparePart( controller.listSparePartData.find( item => item.idRefMaterial === data.id ) ?? null )
                          } }/>

    }


    function komisi() {
        return <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Komisi Penjualan' }/>
            <div className = { `w-full tablet:w-6/12` }>
                <IDropDown type = { "text" }
                           error = { false }
                           disabled = { true }
                           value = { controller.typeKomisi === 1 ? 'Persentase' : 'Nominal' }
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
                                               controller.setNominalKomisi( Number( Currency.idrToString( value.target.value ) ) );
                                           } }
                                           label = { 'Nominal' }
                                           onEnter = { "next" }
                                           value = { Currency.stringToIdr( controller.nominalKomisi.toString() ) }/>
                    </div>
                    : <div className = { `w-full tablet:w-6/12` }>
                        <ITextFieldDefault type = { "text" }
                                           onChange = { ( value ) => {
                                               controller.setNominalKomisi( Number( value.target.value ) )
                                           } }
                                           label = { 'Persentase %' }
                                           onEnter = { "next" }
                                           value = { controller.nominalKomisi }/>
                        <IDropDown type = { "text" }
                                   error = { false }
                                   disabled = { true }
                                   value = { controller.listSatuanKomisi.find( ( item ) => item.value === controller.satuanKomisi.toString() )?.name }
                                   label = { 'Satuan Komisi *' }
                                   data = { controller.listSatuanKomisi }
                                   onEnter = { "next" }
                                   onValueChange = { () => {
                                   } }
                                   onValue = { ( data ) => {
                                       controller.setSatuanKomisi( Number( data.value ) );
                                   } }/>
                    </div>
            }
        </div>
    }

    function editJasa() {
        return <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Edit Jasa' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start` }>
                <div className = { `grid gap-2 w-full` }>
                    <ITextFieldDefault type = { "text" }
                                       onChange = { () => {
                                       } }
                                       disabled = { true }
                                       label = { 'Kode' }
                                       onEnter = { "next" }
                                       value = { controller.detailJasa.kodeJasa }/>
                    {
                        controller.detailJasa.aktif === undefined ? null :
                            <IRadioSingle status = { controller.status }
                                          error = { false }
                                          setStatus = { () => {
                                              controller.setStatus( !controller.status )
                                          } }
                                          label = { 'Status' }
                                          value1 = { controller.detailJasa.aktif ? "Aktif" : "Tidak Aktif" }/>
                    }
                </div>
                <ITextFieldDefault type = { "text" }
                                   onChange = { ( value ) => {
                                       controller.setNama( value.target.value )
                                   } }
                                   label = { 'Nama *' }
                                   onEnter = { "next" }
                                   value = { controller.nama }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Group *' }
                           data = { controller.listGroup }
                           value = { controller.listGroup.find( ( item ) => Number( item.value ) === controller.group )?.name }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               controller.setGroup( Number( value.value ) );
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setSubGroup( value.target.value )
                                   } }
                                   label = { 'Sub Group' }
                                   onEnter = { 'next' }
                                   value = { controller.subGroup }/>
                <IDropDown type = { "text" }
                           error = { false }
                           label = { 'Kategori Pekerjaan' }
                           data = { controller.listKategoriPekerjaan }
                           value = { controller.listKategoriPekerjaan.find( ( item ) => item.value === controller.kategoriPekerjaan.toString() )?.name }
                           onEnter = { "next" }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               controller.setKategoriPekerjaan( Number( value.value ) );
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { ( value ) => {
                                       controller.setHargaJasa( Currency.stringToIdr( Currency.idrToString(
                                           value.target.value ) ) );
                                   } }
                                   label = { 'Harga Jasa * (exclude PPN)' }
                                   onEnter = { 'next' }
                                   errorMessages = { 'Jika ASS, masukan sesuai harga claim ASS' }
                                   helperColor = { "error" }
                                   value = { controller.hargaJasa }/>
                <div className = { `grid w-full tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault type = { 'text' }
                                       onChange = { ( value ) => {
                                           controller.setWaktuKerja( Number( value.target.value ) )
                                       } }
                                       label = { 'Waktu Kerja *' }
                                       onEnter = { 'next' }
                                       value = { controller.waktuKerja }/>
                    <IDropDown type = { "text" }
                               error = { false }
                               label = { 'Hari/Jam/waktu *' }
                               data = { controller.listSatuanWaktu }
                               value = { controller.listSatuanWaktu.find( ( data ) => data.value === controller.satuanWaktuKerja.toString() )?.name }
                               onEnter = { "next" }
                               onValueChange = { () => {
                               } }
                               onValue = { ( value ) => {
                                   controller.setSatuanWaktuKerja( Number( value.value ) );
                               } }/>
                </div>
                <ITextArea error = { false }
                           label = { 'Deskripsi' }
                           value = { controller.deskripsi }
                           type = { "text" }
                           onChange = { ( value ) => {
                               controller.setDeskripsi( value.target.value )
                           } }/>
            </div>
        </div>
    }

    function tableData() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           updated = { ( data ) => {
                               console.log( data )
                               controller.setSparePart( data );
                           } }
            // delete = { ( data : InterfaceListSparePartDetailJasa ) => {
            //     controller.setListSparePart( controller.listSparePart.filter( ( item ) => item.idRefMaterial !==
            // data.idRefMaterial ) ); } }
                           header = { controller.header }
                           data = { controller.listSparePart }/>
    }
}

export default EditJasaView
