import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IButton from "../../../../component/IButton/IButton";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import { useRouter } from "next/router";
import { TambahSparePartVM } from "./TambahSparePartVM";
import { InterfaceKomisiPenjualan } from "../interfaces/InterfaceKomisiPenjualan";
import { InterfaceAddSparePart } from "../interfaces/InterfaceAddSparePart";
import CekKode from "../../../../utils/cekKode/CekKode";
import Currency from "../../../../utils/format/currency";
import NumberOnly from "../../../../utils/format/formatNumber";
import FormatNumber from "../../../../utils/format/formatNumber";


export const TambahSparepartView = () => {
    const route = useRouter();
    const controller = TambahSparePartVM();

    const cekKode = CekKode();


    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Sparepart' } subtitle = { 'master-data/sparepart/tambah-sparepart' }/>
        { sparepart() }
        { komisiPenjualan() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>Kembali</IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.sendData()
            } }>Simpan</IButton>
        </div>
    </div>

    function sparepart() {
        return <div className = { `grid gap-10 p-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Sparepart' }/>
            <div className = { `grid grid-cols-2 gap-5 place-items-start` }>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       error = { false }
                                       onChange = { ( event ) => {
                                           controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                               return {
                                                   ...prevState,
                                                   kode : event.target.value
                                               } as InterfaceAddSparePart
                                           } )
                                       } }
                                       value = { controller.sparePart?.kode }
                                       label = { 'Kode *' } onEnter = { 'next' }/>
                    <div className = { `grid grid-cols-2 place-items-end` }>
                        <IRadioSingle status = { controller.sparePart?.status ?? true }
                                      label = { 'Status' }
                                      error = { false }
                                      value1 = { controller.sparePart?.status ? 'Aktif' : controller.sparePart?.status === false ? 'Tidak Aktif' : 'Aktif' }
                                      setStatus = { () => {
                                          controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                              return {
                                                  ...prevState,
                                                  status : !controller.sparePart?.status
                                              } as InterfaceAddSparePart
                                          } )
                                      } }/>
                        <IButton size = { 'small' } status = { 'primary' } onClick = { () => {
                            cekKode.cekKode( {
                                action : 1,
                                nilai : controller.sparePart?.kode ?? '',
                                label : "kodesparepart",
                            } )
                        } }>
                            Cek Kode
                        </IButton>
                    </div>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { controller.sparePart?.nama }
                                   onChange = { ( e ) => {
                                       controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                           return {
                                               ...prevState,
                                               nama : e.target.value
                                           } as InterfaceAddSparePart
                                       } )
                                   } }
                                   label = { 'Nama *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { controller.sparePart?.namaLokal }
                                   onChange = { ( e ) => {
                                       controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                           return {
                                               ...prevState,
                                               namaLokal : e.target.value
                                           } as InterfaceAddSparePart
                                       } )
                                   } }
                                   label = { 'Nama Lokal' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Group *' }
                           data = { controller.listGroup }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                   return {
                                       ...prevState,
                                       group : item
                                   } as InterfaceAddSparePart
                               } )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { Currency.stringToIdr( Currency.idrToString( FormatNumber.numberOnly( controller.sparePart?.hargaLokal ?? '' ) ) ) }
                                   onChange = { ( e ) => {
                                       controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                           return {
                                               ...prevState,
                                               hargaLokal : Currency.stringToIdr( FormatNumber.numberOnly( e.target.value ) )
                                           } as InterfaceAddSparePart
                                       } )
                                   } }
                                   label = { 'Harga Lokal (Ahass) *' }
                                   onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { controller.sparePart?.hargaNasional }
                                   onChange = { ( e ) => {
                                       controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                           return {
                                               ...prevState,
                                               hargaNasional : e.target.value
                                           } as InterfaceAddSparePart
                                       } )
                                   } }
                                   label = { 'Harga Nasional (HET) *' }
                                   disabled = { true }
                                   onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Satuan *' }
                           data = { controller.listSatuan }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { ( item ) => {
                               controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                   return {
                                       ...prevState,
                                       satuan : item
                                   } as InterfaceAddSparePart
                               } )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   value = { undefined }
                                   onChange = { ( e ) => {
                                       controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                                           return {
                                               ...prevState,
                                               hargaClaimOli : e.target.value
                                           } as InterfaceAddSparePart
                                       } )
                                   } }
                                   label = { 'Harga Claim Oli (ASS1)' }
                                   disabled = { true }
                                   onEnter = { 'next' }/>
            </div>
            <ITextArea error = { false }
                       value = { undefined }
                       label = { 'Catatan' }
                       placeHolder = { 'Masukan Catatan' }
                       onChange = { ( value ) => {
                           controller.setSparePart( ( prevState ) : InterfaceAddSparePart => {
                               return {
                                   ...prevState,
                                   catatan : value.target.value
                               } as InterfaceAddSparePart
                           } )
                       } }/>
        </div>
    }

    function komisiPenjualan() {
        return <div className = { `grid gap-10 p-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Komisi Penjualan' }/>
            <div className = { `grid laptop:grid-cols-2 gap-5` }>
                <IDropDown label = { 'Pemberian Komisi' }
                           error = { false }
                           value = { undefined }
                           type = { 'text' }
                           onEnter = { 'next' }
                           onValue = { ( data ) => {
                               controller.setKomisiPenjualan( ( prevState ) : InterfaceKomisiPenjualan => {
                                   return {
                                       ...prevState,
                                       komisi : data
                                   } as InterfaceKomisiPenjualan;
                               } );
                           } }
                           data = { controller.listKomisi }
                           onValueChange = { ( data ) => {
                           } }/>
                {
                    controller.komisiPenjualan?.komisi?.id === 1 ? <div className = { `w-full grid gap-5` }>
                        <ITextFieldDefault type = { 'text' }
                                           error = { false }
                                           value = { undefined }
                                           onChange = { ( e ) => {
                                               controller.setKomisiPenjualan( ( prevState ) : InterfaceKomisiPenjualan => {
                                                   return {
                                                       ...prevState,
                                                       nominal : e.target.value
                                                   } as InterfaceKomisiPenjualan;
                                               } );
                                           } }
                                           label = { 'Persentase %' }
                                           onEnter = { 'next' }/>
                        <IDropDown label = { 'Satuan Komisi' }
                                   error = { false }
                                   value = { undefined }
                                   type = { 'text' }
                                   onEnter = { 'next' }
                                   onValue = { ( data ) => {
                                       controller.setKomisiPenjualan( ( prevState ) : InterfaceKomisiPenjualan => {
                                           return {
                                               ...prevState,
                                               satuan : data
                                           } as InterfaceKomisiPenjualan;
                                       } );
                                   } }
                                   data = { controller.listSatuanKomisi }
                                   onValueChange = { ( data ) => {
                                   } }/>
                    </div> : null
                }
                {
                    controller.komisiPenjualan?.komisi?.id === 2 ? <div className = { `w-full grid gap-5` }>
                        <ITextFieldDefault type = { 'text' }
                                           error = { false }
                                           value = { Currency.stringToIdr( Currency.idrToString( controller?.komisiPenjualan?.nominal ?? '0' ) ) }
                                           onChange = { ( e ) => {
                                               controller.setKomisiPenjualan( ( prevState ) : InterfaceKomisiPenjualan => {
                                                   return {
                                                       ...prevState,
                                                       nominal : Currency.stringToIdr( e.target.value )
                                                   } as InterfaceKomisiPenjualan;
                                               } );
                                           } }
                                           label = { 'Nominal' }
                                           onEnter = { 'next' }/>
                    </div> : null
                }
            </div>
        </div>
    }
}
