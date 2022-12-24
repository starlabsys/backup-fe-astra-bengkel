import TambahCustomerVMGet from "../TambahCustomer/ViewModel/TambahCustomerVMGet";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import IButton from "../../../../component/IButton/IButton";
import ITitle from "../../../../component/ITitle/ITitle";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { InterfaceAlamatPajak } from "../interface/InterfaceAlamatPajak";
import { InterfaceLimitKredit } from "../interface/InterfaceLimitKredit";
import { InterfaceKontakPerson } from "../interface/InterfaceKontakPerson";
import { InterfaceCantNull } from "../interface/InterfaceCantNull";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import { InterfaceAddCustomerData } from "../interface/InterfaceAddCustomer";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import { useRouter } from "next/router";
import { EditCustomerVM } from "./ViewModel/EditCustomerVM";


const EdiCustomerView = () => {
    const route = useRouter();
    const dataGet = TambahCustomerVMGet();
    const { id } = route.query;
    const dataId = id as string;
    const controller = EditCustomerVM( Number( dataId ?? 0 ) );
    console.log( "dataId", controller.tambahCustomer?.namaCustomer );

    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Edit Customer' } subtitle = { 'master-data/customer/edit' }/>
        {/*<form>*/ }
        { TambahCustomer() }
        { KontakPerson() }
        { DefaultPenjualanKredit() }
        { AlamatKirim() }
        { PajakCustomer() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                return route.back()
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { controller.saveData }>
                Simpan
            </IButton>
        </div>
        {/*</form>*/ }
    </div>

    function PajakCustomer() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <ITitle title = { 'Pajak Customer' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'NPWP' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatPajak( ( prevState ) : InterfaceAlamatPajak => {
                                           return {
                                               ...prevState,
                                               npwp : value.target.value
                                           } as InterfaceAlamatPajak
                                       } )
                                   } }
                                   value = { controller.alamatPajak?.npwp }
                                   onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatPajak( ( prevState ) : InterfaceAlamatPajak => {
                                           return {
                                               ...prevState,
                                               nppkp : value.target.value
                                           } as InterfaceAlamatPajak
                                       } )
                                   } }
                                   value = { controller.alamatPajak?.nppkp }
                                   label = { 'NPPKP' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatPajak( ( prevState ) : InterfaceAlamatPajak => {
                                           return {
                                               ...prevState,
                                               alamatPajak : value.target.value
                                           } as InterfaceAlamatPajak
                                       } )
                                   } }
                                   value = { controller.alamatPajak?.alamatPajak }
                                   label = { 'Alamat' } onEnter = { 'done' }/>
            </div>
        </div>
    }

    function AlamatKirim() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <div className = { `flex place-content-between` }>
                <ITitle title = { 'Alamat Kirim' }/>
                <div>
                    <IButton status = { 'info' } onClick = { () => {
                        controller.setAlamatKirim( ( prevState ) : InterfaceAlamatKirim => {
                            return {
                                ...prevState,
                                alamat : controller.tambahCustomer?.alamat,
                                noTelp : controller.tambahCustomer?.noTelepon,
                            } as InterfaceAlamatKirim
                        } )
                    } }>Copy Data Customer</IButton>
                </div>
            </div>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatKirim( ( prevState ) : InterfaceAlamatKirim => {
                                           return {
                                               ...prevState,
                                               alamat : value.target.value
                                           } as InterfaceAlamatKirim
                                       } )
                                   } }
                                   value = { controller.alamatKirim?.alamat }
                                   label = { 'Alamat' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatKirim( ( prevState ) : InterfaceAlamatKirim => {
                                           return {
                                               ...prevState,
                                               up : value.target.value
                                           } as InterfaceAlamatKirim
                                       } )
                                   } }
                                   value = { controller.alamatKirim?.up }
                                   label = { 'UP' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setAlamatKirim( ( prevState ) : InterfaceAlamatKirim => {
                                           return {
                                               ...prevState,
                                               noTelp : value.target.value
                                           } as InterfaceAlamatKirim
                                       } )
                                   } }
                                   value = { controller.alamatKirim?.noTelp }
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
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setLimitKredit( ( prevState ) : InterfaceLimitKredit => {
                                           return {
                                               ...prevState,
                                               tempo : value.target.value
                                           } as InterfaceLimitKredit
                                       } )
                                   } }
                                   value = { controller.limitKredit?.tempo }/>

                <ITextFieldDefault type = { 'text' }
                                   label = { 'Limit Kredit' }
                                   onEnter = { 'next' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setLimitKredit( ( prevState ) : InterfaceLimitKredit => {
                                           return {
                                               ...prevState,
                                               limitKredit : value.target.value
                                           } as InterfaceLimitKredit
                                       } )
                                   } }
                                   value = { controller.limitKredit?.limitKredit }/>
            </div>
        </div>
    }

    function KontakPerson() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <div className = { `flex place-content-between` }>
                <ITitle title = { 'Kontak Person' }/>
                <div>
                    <IButton status = { 'info' } onClick = { () => {
                        controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                            return {
                                ...prevState,
                                nama : controller.tambahCustomer?.namaCustomer,
                                noHp : controller.tambahCustomer?.noHp,
                                email : controller.tambahCustomer?.email,
                                noTelp : controller.tambahCustomer?.noTelepon
                            } as InterfaceKontakPerson
                        } )
                    } }>
                        Copy Data Customer
                    </IButton>
                </div>
            </div>
            <div className = { `grid gap-5 tablet:grid-cols-2` }>
                <ITextFieldDefault type = { 'text' }
                                   error = { controller.error.namaKontakPerson }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                                           return {
                                               ...prevState,
                                               nama : value.target.value
                                           } as InterfaceKontakPerson
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               namaKontakPerson : value.target.value !== ''
                                           } as InterfaceCantNull
                                       } )
                                   } }
                                   value = { controller.kontakPerson?.nama }
                                   label = { 'Nama' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                                           return {
                                               ...prevState,
                                               noTelp : value.target.value
                                           } as InterfaceKontakPerson
                                       } )
                                   } }
                                   value = { controller.kontakPerson?.noTelp }
                                   label = { 'No Telepon' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { controller.error.noHpKontakPerson }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                                           return {
                                               ...prevState,
                                               noHp : value.target.value
                                           } as InterfaceKontakPerson
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               noHpKontakPerson : value.target.value !== ''
                                           } as InterfaceCantNull
                                       } )
                                   } }
                                   value = { controller.kontakPerson?.noHp }
                                   label = { 'No Hp' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                                           return {
                                               ...prevState,
                                               email : value.target.value
                                           } as InterfaceKontakPerson
                                       } )
                                   } }
                                   value = { controller.kontakPerson?.email }
                                   label = { 'Email' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setKontakPerson( ( prevState ) : InterfaceKontakPerson => {
                                           return {
                                               ...prevState,
                                               jabatan : value.target.value
                                           } as InterfaceKontakPerson
                                       } )
                                   } }
                                   value = { controller.kontakPerson?.jabatan }
                                   label = { 'Jabatan' } onEnter = { 'next' }/>
            </div>
        </div>
    }

    function TambahCustomer() {
        return <div className = { `grid gap-5 p-5 bg-white rounded-lg` }>
            <ITitle title = { 'Customer' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2 place-items-start` }>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Kode' }
                                       onEnter = { 'next' }
                                       disabled = { true }
                                       error = { false }
                                       onChange = { () => {
                                       } }
                                       value = { undefined }/>
                    <IRadioSingle status = { controller.tambahCustomer?.status ?? true }
                                  setStatus = { ( data ) => {
                                      controller.setTambahCustomer( () : InterfaceAddCustomerData => {
                                          return {
                                              ...controller.tambahCustomer,
                                              status : data
                                          } as InterfaceAddCustomerData
                                      } )
                                  } }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { controller.tambahCustomer?.status || controller.tambahCustomer?.status === undefined ? 'Aktif' : 'Tidak Aktif' }/>
                </div>
                <IDropDown type = { 'text' }
                           label = { 'Title *' }
                           data = { [
                               { id : 1, value : 'Mr.', name : 'Tuan' },
                               { id : 2, value : 'Mrs.', name : 'Nyonya' },
                               { id : 3, value : 'Perusahaan', name : 'Perusahaan' },
                           ] }
                           value = { controller.tambahCustomer?.title?.name }
                           errorMessages = { controller.error.title ? 'Title tidak boleh kosong' : '' }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           error = { controller.error.title }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       title : value
                                   } as InterfaceAddCustomerData
                               } )
                               controller.setError( ( prevState ) : InterfaceCantNull => {
                                   return {
                                       ...prevState,
                                       title : value === undefined
                                   }
                               } )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama *' }
                                   onEnter = { 'next' }
                                   error = { controller.error.namaCustomer }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               namaCustomer : value.target.value.toUpperCase()
                                           } as InterfaceAddCustomerData
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               namaCustomer : value.target.value === ''
                                           }
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.namaCustomer }/>

                <ITextFieldDefault type = { 'text' }
                                   error = { controller.error.ktp }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               noKtp : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               ktp : value.target.value === ''
                                           }
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.noKtp }
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
                           error = { false }
                           onEnter = { 'next' }
                    // value = { controller.tambahCustomer?.pekerjaan.name }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       pekerjaan : value
                                   } as InterfaceAddCustomerData
                               } )
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
                    // value = { controller.tambahCustomer?.agama.name }
                           error = { false }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       agama : value
                                   } as InterfaceAddCustomerData
                               } )
                           } }/>
                <ITextFieldDefault type = { 'date' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               ttl : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.ttl }
                                   label = { 'Tanggal Lahir' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               passport : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.passport }
                                   label = { 'No Passport' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { controller.error.alamat }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               alamat : value.target.value.toUpperCase()
                                           } as InterfaceAddCustomerData
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               alamat : value.target.value === ''
                                           }
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.alamat }
                                   label = { 'Alamat *' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Provinsi *' }
                           disabled = { true }
                           data = { [
                               { id : 1, value : 'KALIMANTAN BARAT', name : 'KALIMANTAN BARAT' },
                           ] }
                           onEnter = { 'next' }
                           error = { controller.error.provinsi }
                           onValueChange = { () => {
                           } }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       provinsi : value
                                   } as InterfaceAddCustomerData
                               } )
                               controller.setError( ( prevState ) : InterfaceCantNull => {
                                   return {
                                       ...prevState,
                                       provinsi : value.name === ''
                                   }
                               } )
                               dataGet.getKab()
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kota/Kabupaten *' }
                           data = { dataGet.listKab }
                           disabled = { true }
                           onEnter = { 'next' }
                           error = { controller.error.kabupaten }
                           onValueChange = { () => {
                           } }
                           value = { controller.tambahCustomer?.kabupaten?.name }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       kabupaten : value,
                                       kecamatan : {
                                           id : 0,
                                           value : '',
                                           name : ''
                                       },
                                       kelurahan : {
                                           id : 0,
                                           value : '',
                                           name : ''
                                       },
                                       kodePos : ''
                                   } as InterfaceAddCustomerData
                               } )
                               controller.setError( ( prevState ) : InterfaceCantNull => {
                                   return {
                                       ...prevState,
                                       kabupaten : value.name === ''
                                   }
                               } )
                               dataGet.getKec( value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kecamatan *' }
                           data = { dataGet.listKec }
                           disabled = { true }
                           onEnter = { 'next' }
                           value = { controller.tambahCustomer?.kecamatan?.name ?? '' }
                           onValueChange = { () => {
                           } }
                           error = { controller.error.kecamatan }
                           onValue = { ( value ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       kecamatan : value,
                                       kelurahan : {
                                           id : 0,
                                           value : '',
                                           name : ''
                                       },
                                       kodePos : ''
                                   } as InterfaceAddCustomerData
                               } )
                               controller.setError( ( prevState ) : InterfaceCantNull => {
                                   return {
                                       ...prevState,
                                       kecamatan : value.name === ''
                                   }
                               } )
                               dataGet.getKel( value.value )
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Kelurahan *' }
                           disabled = { true }
                           data = { dataGet.listKel }
                           error = { controller.error.kelurahan }
                           onEnter = { 'next' }
                           value = { controller.tambahCustomer?.kelurahan?.name }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { ( data ) => {
                               controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                   return {
                                       ...prevState,
                                       kelurahan : data,
                                       kodePos : data.add
                                   } as InterfaceAddCustomerData
                               } )
                               controller.setError( ( prevState ) : InterfaceCantNull => {
                                   return {
                                       ...prevState,
                                       kelurahan : data.name === ''
                                   }
                               } )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   disabled = { true }
                                   onChange = { ( value ) => {
                                   } }
                                   value = { controller.tambahCustomer?.kodePos }
                                   label = { 'Kode Pos' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               noTelepon : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.noTelepon }
                                   label = { 'No Telepon' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { controller.error.noHp }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               noHp : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                       controller.setError( ( prevState ) : InterfaceCantNull => {
                                           return {
                                               ...prevState,
                                               noHp : value.target.value === ''
                                           }
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.noHp }
                                   label = { 'No HP *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               noFax : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.noFax }
                                   label = { 'No Faks' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'email' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               email : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.email }
                                   label = { 'Email' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'url' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               website : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.website }
                                   label = { 'Website' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               facebook : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.facebook }
                                   label = { 'Facebook' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               twitter : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.twitter }
                                   label = { 'Twitter' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       controller.setTambahCustomer( ( prevState ) : InterfaceAddCustomerData => {
                                           return {
                                               ...prevState,
                                               instagram : value.target.value
                                           } as InterfaceAddCustomerData
                                       } )
                                   } }
                                   value = { controller.tambahCustomer?.instagram }
                                   label = { 'Instagram' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Group Diskon' }
                           data = { [] }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {
                           } }
                           onValue = { ( value ) => {
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'PIC AHASS' }
                           data = { [] }
                           onEnter = { 'next' }
                           error = { false }

                           onValueChange = { ( value ) => {
                           } }
                           onValue = { ( value ) => {
                           } }/>
            </div>
            <ITextArea label = { 'Catatan' } error = { false }/>
        </div>
    }
}
export default EdiCustomerView;
