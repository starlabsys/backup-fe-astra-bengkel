import { useRouter } from "next/router";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IButton from "../../../../component/IButton/IButton";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadio, IRadioSingle } from "../../../../component/ITextField/IRadio";
import { InterfaceAddDataMekanik } from "../interface/InterfaceAddDataMekanik";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import { InterfaceBiodataMekanik } from "../interface/InterfaceBiodataMekanik";
import { InterfaceStatusKaryawan } from "../interface/InterfaceStatusKaryawan";
import IDropDownMultiple from "../../../../component/ITextField/IDropDownMultiple";
import { label4 } from "../../../../component/styles/Style";
import { InterfaceKomisiDanGajih } from "../interface/InterfaceKomisiDanGajih";
import { StatusMekanikVM } from "./ViewModel/StatusMekanikVM";
import Currency from "../../../../utils/format/currency";


export const StatusMekanikView = () => {
    const route = useRouter();
    const { id, status } = route.query;
    const idData = id as string;
    const statusData = status as string;
    const controller = StatusMekanikVM( idData );

    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { statusData === 'edit' ? 'Edit Karyawan' : 'Info Karyawan' }
                      subtitle = { 'master-data/karyawan/' + statusData }/>
        <div className = { `p-5 grid gap-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Karyawan' }/>
            { tambahKaryawan() }
        </div>
        <div className = { `p-5 grid gap-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Biodata' }/>
            { biodata() }
        </div>
        <div className = { `p-5 grid gap-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Status Karyawan' }/>
            { statusKaryawan() }
        </div>
        <div className = { `p-5 grid gap-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Komisi Dan Gaji' }/>
            { komisiDanGaji() }
        </div>
        <div className = { `grid tablet:flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            {
                statusData === 'edit' ? <IButton status = { 'success' } onClick = { () => {
                    controller.saveData()
                } }>
                    Simpan
                </IButton> : null
            }
        </div>
    </div>

    function tambahKaryawan() {
        const statusMekanik = controller.dataMekanik?.statusMekanik ?? true
        return <div className = { `grid gap-5` }>
            <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5 tablet:place-items-start` }>
                <div className = { `grid gap-2 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Kode' }
                                       onEnter = { 'next' }
                                       disabled = { true }
                                       value = { controller.dataMekanik?.kodeMekanik ?? '' }
                                       onChange = { ( value ) => {
                                           controller.setDataMekanik( ( prevState ) => {
                                               return {
                                                   ...prevState,
                                                   kodeMekanik : value.target.value
                                               } as InterfaceAddDataMekanik
                                           } )
                                       } }/>
                    <IRadioSingle status = { statusMekanik }
                                  error = { false }
                                  setStatus = { () => {
                                      controller.setDataMekanik( ( prevState ) => {
                                          return {
                                              ...prevState,
                                              statusMekanik : !statusMekanik
                                          } as InterfaceAddDataMekanik
                                      } )
                                  } }
                                  label = { 'Status' }
                                  value1 = { statusMekanik ? 'Aktif' : 'Tidak Aktif' }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama*' }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.namaMekanik }
                                   onChange = { ( value ) => {
                                       controller.setDataMekanik( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               namaMekanik : value.target.value
                                           } as InterfaceAddDataMekanik
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Alamat*' }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.alamatMekanik }
                                   onChange = { ( value ) => {
                                       controller.setDataMekanik( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               alamatMekanik : value.target.value
                                           } as InterfaceAddDataMekanik
                                       } )
                                   } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           label = { 'Provinsi*' }
                           disabled = { true }
                           data = { controller.listProvince }
                           value = { controller.dataMekanik?.provinsiMekanik?.name }
                           onEnter = { 'next' }
                           onValue = { ( item ) => {
                               controller.setDataMekanik( ( prevState ) => {
                                   return {
                                       ...prevState,
                                       provinsiMekanik : item
                                   } as InterfaceAddDataMekanik
                               } )
                               controller.getArea( 5, item.id )
                           } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           disabled = { true }
                           label = { 'Kabupaten*' }
                           value = { controller.dataMekanik?.kabupatenMekanik?.name }
                           data = { controller.listKab }
                           onEnter = { 'next' }
                           onValue = { ( item ) => {
                               controller.setDataMekanik( ( prevState ) => {
                                   return {
                                       ...prevState,
                                       kabupatenMekanik : item
                                   } as InterfaceAddDataMekanik
                               } )
                               controller.getArea( 6, item.value )
                           } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           disabled = { true }
                           label = { 'Kecamatan*' }
                           value = { controller.dataMekanik?.kecamatanMekanik?.name }
                           data = { controller.listKec }
                           onEnter = { 'next' }
                           onValue = { ( item ) => {
                               controller.setDataMekanik( ( prevState ) => {
                                   return {
                                       ...prevState,
                                       kecamatanMekanik : item
                                   } as InterfaceAddDataMekanik
                               } )
                               controller.getArea( 7, item.value )
                           } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           label = { 'Kelurahan*' }
                           disabled = { true }
                           value = { controller.dataMekanik?.kelurahanMekanik?.name }
                           data = { controller.listKel }
                           onEnter = { 'next' }
                           onValue = { ( item ) => {
                               controller.setDataMekanik( ( prevState ) => {
                                   return {
                                       ...prevState,
                                       kelurahanMekanik : item,
                                       kodePosMekanik : item.add,
                                   } as InterfaceAddDataMekanik
                               } )
                           } }/>

                <ITextFieldDefault type = { 'text' }
                                   label = { 'Kode Pos*' }
                                   disabled = { true }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.kodePosMekanik }
                                   onChange = { () => {
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Telepon' }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.noTelpMekanik }
                                   onChange = { ( value ) => {
                                       controller.setDataMekanik( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               noTelpMekanik : value.target.value,
                                           } as InterfaceAddDataMekanik
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No HP*' }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.noHpMekanik }
                                   onChange = { ( value ) => {
                                       controller.setDataMekanik( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               noHpMekanik : value.target.value,
                                           } as InterfaceAddDataMekanik
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Email' }
                                   onEnter = { 'next' }
                                   value = { controller.dataMekanik?.emailMekanik }
                                   onChange = { ( value ) => {
                                       controller.setDataMekanik( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               emailMekanik : value.target.value,
                                           } as InterfaceAddDataMekanik
                                       } )
                                   } }/>

            </div>
            <ITextArea error = { false }
                       label = { 'Catatan' }
                       onChange = { ( value ) => {
                           controller.setDataMekanik( ( prevState ) => {
                               return {
                                   ...prevState,
                                   catatanMekanik : value.target.value,
                               } as InterfaceAddDataMekanik
                           } )
                       } }
                       value = { controller.dataMekanik?.catatanMekanik }/>
        </div>
    }

    function biodata() {
        return <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5` }>
            <ITextFieldDefault type = { 'text' }
                               label = { 'No KTP*' }
                               onEnter = { 'next' }
                               value = { controller.biodata?.ktpMekanik }
                               onChange = { ( value ) => {
                                   controller.setBiodata( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           ktpMekanik : value.target.value
                                       } as InterfaceBiodataMekanik
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Tempat Lahir*' }
                               onEnter = { 'next' }
                               value = { controller.biodata?.tempatLahirMekanik }
                               onChange = { ( value ) => {
                                   controller.setBiodata( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tempatLahirMekanik : value.target.value
                                       } as InterfaceBiodataMekanik
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'date' }
                               label = { 'Tanggal Lahir*' }
                               onEnter = { 'next' }
                               value = { controller.biodata?.tanggalLahirMekanik }
                               onChange = { ( value ) => {
                                   controller.setBiodata( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tanggalLahirMekanik : value.target.value
                                       } as InterfaceBiodataMekanik
                                   } )
                               } }/>
            <IRadio value = { controller.biodata?.genderMekanik ?? '' }
                    error = { false }
                    label = { 'Gender*' }
                    value2 = { 'Perempuan' }
                    onClickValue1 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                genderMekanik : 'Laki-Laki'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    onClickValue2 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                genderMekanik : 'Perempuan'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    value1 = { 'Laki-Laki' }/>
            <IDropDown type = { 'text' }
                       error = { false }
                       label = { 'Agama*' }
                       value = { controller.biodata?.agamaMekanik?.name }
                       data = { controller.listAgama }
                       onEnter = { 'next' }
                       onValue = { ( item ) => {
                           controller.setBiodata( ( prevState ) => {
                               return {
                                   ...prevState,
                                   agamaMekanik : item
                               } as InterfaceBiodataMekanik
                           } )
                       } }/>
            <ITextFieldDefault type = { 'date' }
                               label = { 'Berlaku Sd*' }
                               onEnter = { 'next' }
                               value = { controller.biodata?.berlakuHinggaMekanik }
                               onChange = { ( value ) => {
                                   controller.setBiodata( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           berlakuHinggaMekanik : value.target.value
                                       } as InterfaceBiodataMekanik
                                   } )
                               } }/>
            <IRadio value = { controller.biodata?.statusKawinMekanik ?? '' }
                    error = { false }
                    label = { 'Status Kawin*' }
                    value2 = { 'Tidak Kawin' }
                    onClickValue1 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                statusKawinMekanik : 'Kawin'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    onClickValue2 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                statusKawinMekanik : 'Tidak Kawin'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    value1 = { 'Kawin' }/>
            <IRadio value = { controller.biodata?.kebangsaanMekanik ?? '' }
                    error = { false }
                    label = { 'Status Kebangsaan*' }
                    value2 = { 'WNA' }
                    onClickValue1 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                kebangsaanMekanik : 'WNI'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    onClickValue2 = { () => {
                        controller.setBiodata( ( prevState ) => {
                            return {
                                ...prevState,
                                kebangsaanMekanik : 'WNA'
                            } as InterfaceBiodataMekanik
                        } )
                    } }
                    value1 = { 'WNI' }/>
        </div>
    }

    function statusKaryawan() {
        return <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5` }>
            <IRadio value = { controller.statusKaryawan?.statusKaryawan ?? '' }
                    error = { false }
                    label = { 'Status Karyawan*' }
                    value2 = { 'Tidak Tetap' }
                    onClickValue1 = { () => {
                        controller.setStatusKaryawan( ( prevState ) => {
                            return {
                                ...prevState,
                                statusKaryawan : 'Tetap'
                            } as InterfaceStatusKaryawan
                        } )
                    } }
                    onClickValue2 = { () => {
                        controller.setStatusKaryawan( ( prevState ) => {
                            return {
                                ...prevState,
                                statusKaryawan : 'Tidak Tetap'
                            } as InterfaceStatusKaryawan
                        } )
                    } }
                    value1 = { 'Tetap' }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Honda ID*' }
                               onEnter = { 'next' }
                               value = { controller.statusKaryawan?.hondaId }
                               onChange = { ( value ) => {
                                   controller.setStatusKaryawan( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           hondaId : value.target.value
                                       } as InterfaceStatusKaryawan
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'date' }
                               label = { 'Tanggal Masuk*' }
                               onEnter = { 'next' }
                               value = { controller.statusKaryawan?.tanggalMasuk }
                               onChange = { ( value ) => {
                                   controller.setStatusKaryawan( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tanggalMasuk : value.target.value
                                       } as InterfaceStatusKaryawan
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'date' }
                               label = { 'Tanggal Berhenti*' }
                               onEnter = { 'next' }
                               value = { controller.statusKaryawan?.tanggalKeluar }
                               onChange = { ( value ) => {
                                   controller.setStatusKaryawan( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tanggalKeluar : value.target.value
                                       } as InterfaceStatusKaryawan
                                   } )
                               } }/>
            <IDropDownMultiple type = { 'text' }
                               error = { false }
                               label = { 'Jabatan*' }
                               data = { controller.listJabatan }
                               value = { controller.statusKaryawan?.jabatan.map( ( item ) => item.name ) }
                               onEnter = { 'next' }
                               onValueMultiple = { ( item ) => {
                                   controller.setStatusKaryawan( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           jabatan : item
                                       } as InterfaceStatusKaryawan
                                   } )
                                   controller.getListTraining( item[ 0 ].id.toString() )
                               } }/>
            <IDropDownMultiple type = { 'text' }
                               error = { false }
                               value = { controller.statusKaryawan?.levelTraining.map( ( item ) => item.name ) }
                               label = { 'Level Training Mekanik*' }
                               data = { controller.listTraining }
                               onEnter = { 'next' }
                               onValueMultiple = { ( item ) => {
                                   controller.setStatusKaryawan( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           levelTraining : item
                                       } as InterfaceStatusKaryawan
                                   } )
                               } }/>
            <IRadio value = { controller.statusKaryawan?.statusPit ?? '' }
                    error = { false }
                    label = { 'Status PIT*' }
                    value2 = { 'Non PIT' }
                    onClickValue1 = { () => {
                        controller.setStatusKaryawan( ( prevState ) => {
                            return {
                                ...prevState,
                                statusPit : 'PIT'
                            } as InterfaceStatusKaryawan
                        } )
                    } }
                    onClickValue2 = { () => {
                        controller.setStatusKaryawan( ( prevState ) => {
                            return {
                                ...prevState,
                                statusPit : 'Non PIT'
                            } as InterfaceStatusKaryawan
                        } )
                    } }
                    value1 = { 'PIT' }/>
        </div>
    }

    function komisiDanGaji() {
        return <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5 tablet:place-items-start` }>
            <div className = { `grid w-full` }>
                <div className = { `${ label4 }` }>Komisi Penjualan</div>
                <div className = { `grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2` }>

                    <IRadioSingle status = { controller.komisiDanGajih?.komisiPenjualan === '0' }
                                  error = { false }
                                  label = { '' }
                                  value1 = { 'Tidak Aktif' }
                                  setStatus = { () => {
                                      controller.setKomisiDanGajih( ( prevState ) => {
                                          return {
                                              ...prevState,
                                              komisiPenjualan : '0'
                                          } as InterfaceKomisiDanGajih
                                      } )
                                  } }/>
                    <IRadioSingle status = { controller.komisiDanGajih?.komisiPenjualan === '1' }
                                  error = { false }
                                  label = { '' }
                                  value1 = { 'Default Master Data' }
                                  setStatus = { () => {
                                      controller.setKomisiDanGajih( ( prevState ) => {
                                          return {
                                              ...prevState,
                                              komisiPenjualan : '1'
                                          } as InterfaceKomisiDanGajih
                                      } )
                                  } }/>
                    <IRadioSingle status = { controller.komisiDanGajih?.komisiPenjualan === '2' }
                                  error = { false }
                                  label = { '' }
                                  value1 = { 'Semua Barang dan Jasa' }
                                  setStatus = { () => {
                                      controller.setKomisiDanGajih( ( prevState ) => {
                                          return {
                                              ...prevState,
                                              komisiPenjualan : '2'
                                          } as InterfaceKomisiDanGajih
                                      } )
                                  } }/>
                </div>
            </div>
            {
                controller.komisiDanGajih?.komisiPenjualan === '2' ?
                    <IDropDown type = { 'text' }
                               error = { false }
                               value = { controller.komisiDanGajih?.tipeKomisi === 1 ? 'Persentase' : controller.komisiDanGajih?.tipeKomisi === 2 ? 'Nominal' : '' }
                               label = { 'Pemberian Komisi' }
                               data = { [
                                   {
                                       id : 1,
                                       name : 'Persentase',
                                       value : 'Persentase',
                                   },
                                   {
                                       id : 2,
                                       name : 'Nominal',
                                       value : 'Nominal',
                                   }
                               ] }
                               onValue = { ( item ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tipeKomisi : item.id
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }
                               onEnter = { "next" }/> : null
            }
            {
                controller.komisiDanGajih?.tipeKomisi === 1 && controller.komisiDanGajih?.komisiPenjualan === '2' ? <>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Persentase' }
                                       onEnter = { 'next' }
                                       value = { controller.komisiDanGajih.nilaiKomisi }
                                       onChange = { ( value ) => {
                                           controller.setKomisiDanGajih( ( prevState ) => {
                                               return {
                                                   ...prevState,
                                                   nilaiKomisi : Number( value.target.value )
                                               } as InterfaceKomisiDanGajih
                                           } )
                                       } }/>
                    <IDropDown type = { 'text' }
                               error = { false }
                               value = { controller.komisiDanGajih?.satuanKomisi === '0' ? 'Harga' : controller.komisiDanGajih?.satuanKomisi === '1' ? 'Jumlah' : '' }
                               label = { 'Satuan Komisi' }
                               data = { [
                                   {
                                       id : 0,
                                       name : 'Harga',
                                       value : 'Harga',
                                   },
                                   {
                                       id : 1,
                                       name : 'Jumlah',
                                       value : 'Jumlah',
                                   }
                               ] }
                               onValue = { ( item ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           satuanKomisi : item.id.toString()
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }
                               onEnter = { "next" }/>
                </> : null
            }
            {
                controller.komisiDanGajih?.tipeKomisi === 2 && controller.komisiDanGajih?.komisiPenjualan === '2' ?
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Nominal' }
                                       onEnter = { 'next' }
                                       value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih.nilaiKomisi.toString() ) ) }
                                       onChange = { ( value ) => {
                                           controller.setKomisiDanGajih( ( prevState ) => {
                                               return {
                                                   ...prevState,
                                                   nilaiKomisi : Number( value.target.value )
                                               } as InterfaceKomisiDanGajih
                                           } )
                                       } }/> : null
            }
            <ITextFieldDefault type = { 'text' }
                               label = { 'Gajih Pokok*' }
                               onEnter = { 'next' }
                               value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih?.gajiPokok ?? '0' ) ) }
                               onChange = { ( value ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           gajiPokok : Currency.stringToIdr( value.target.value )
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Tunjangan Jabatan*' }
                               onEnter = { 'next' }
                               value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih?.tunjanganJabatan ?? '0' ) ) }
                               onChange = { ( value ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           tunjanganJabatan : Currency.stringToIdr( value.target.value )
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Kesehatan*' }
                               onEnter = { 'next' }
                               value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih?.kesehatan ?? '0' ) ) }
                               onChange = { ( value ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           kesehatan : Currency.stringToIdr( value.target.value )
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Transport*' }
                               onEnter = { 'next' }
                               value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih?.transport ?? '0' ) ) }
                               onChange = { ( value ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           transport : Currency.stringToIdr( value.target.value )
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }/>
            <ITextFieldDefault type = { 'text' }
                               label = { 'Uang Harian*' }
                               onEnter = { 'next' }
                               value = { Currency.stringToIdr( Currency.idrToString( controller.komisiDanGajih?.uangHarian ?? '0' ) ) }
                               onChange = { ( value ) => {
                                   controller.setKomisiDanGajih( ( prevState ) => {
                                       return {
                                           ...prevState,
                                           uangHarian : Currency.stringToIdr( value.target.value )
                                       } as InterfaceKomisiDanGajih
                                   } )
                               } }/>
        </div>
    }
}
