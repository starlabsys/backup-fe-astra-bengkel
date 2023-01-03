import { useContext, useState } from "react";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { InterfaceAddCustomerData } from "../../interface/InterfaceAddCustomer";
import { InterfaceAddCustomer } from "../../../../../domain/repository/customer/interface/InterfaceAddCustomer";
import { InterfaceKontakPerson } from "../../interface/InterfaceKontakPerson";
import { InterfaceAlamatPajak } from "../../interface/InterfaceAlamatPajak";
import { InterfaceLimitKredit } from "../../interface/InterfaceLimitKredit";
import CustomerRepository from "../../../../../domain/repository/customer/CustomerRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { InterfaceCantNull } from "../../interface/InterfaceCantNull";
import { IToastContext } from "../../../../../context/IToast";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceAlamatKirim } from "../../interface/InterfaceAlamatKirim";


export const TambahCustomerViewModel = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ tambahCustomer, setTambahCustomer ] = useState<InterfaceAddCustomerData>();
    const [ kontakPerson, setKontakPerson ] = useState<InterfaceKontakPerson>();
    const [ alamatKirim, setAlamatKirim ] = useState<InterfaceAlamatKirim>();
    const [ alamatPajak, setAlamatPajak ] = useState<InterfaceAlamatPajak>();
    const [ limitKredit, setLimitKredit ] = useState<InterfaceLimitKredit>();

    const [ error, setError ] = useState<InterfaceCantNull>( {
        noHp : false,
        title : false,
        alamat : false,
        namaCustomer : false,
        npwp : false,
        namaKontakPerson : false,
        noHpKontakPerson : false,
        noTlp : false,
        kabupaten : false,
        provinsi : false,
        kecamatan : false,
        kelurahan : false,
        zipCode : false,
    } );

    const saveData = async () => {
        loadingLottie.openLoading( true );
        const dataSend : InterfaceAddCustomer = {
            title : tambahCustomer?.title.value ?? '',
            namaCustomer : tambahCustomer?.namaCustomer ?? '',
            aktif : tambahCustomer?.status ?? true,
            noktp : tambahCustomer?.noKtp ?? '',
            jabatanCustomerID : tambahCustomer?.pekerjaan?.id ?? 0,
            agama : tambahCustomer?.agama?.id.toString() ?? '',
            tanggalUlangTahun : tambahCustomer?.ttl ?? '',
            noPassport : tambahCustomer?.passport ?? '',
            alamat : tambahCustomer?.alamat ?? '',
            provinsi : tambahCustomer?.provinsi?.value ?? '',
            kabupaten : tambahCustomer?.kabupaten?.value ?? '',
            kecamatan : tambahCustomer?.kecamatan?.value ?? '',
            kelurahan : tambahCustomer?.kelurahan?.value ?? '',
            zipCode : tambahCustomer?.kodePos ?? '',
            noTelepon : tambahCustomer?.noTelepon ?? '',
            noHp : tambahCustomer?.noHp ?? '',
            noFaks : tambahCustomer?.noFax ?? '',
            email : tambahCustomer?.email ?? '',
            website : tambahCustomer?.website ?? '',
            facebook : tambahCustomer?.facebook ?? '',
            twitter : tambahCustomer?.twitter ?? '',
            instagram : tambahCustomer?.instagram ?? '',
            kodeGrupDiskonPelanggan : tambahCustomer?.groupDiskon?.value ?? '',
            catatan : tambahCustomer?.catatan ?? '',
            // pic
            namaKontakPerson : kontakPerson?.nama ?? '',
            noteleponKontakPerson : kontakPerson?.noTelp ?? '',
            noHpKontakPerson : kontakPerson?.noHp ?? '',
            emailKontakPerson : kontakPerson?.email ?? '',
            jabatanKontakPerson : kontakPerson?.jabatan ?? '',
            limitKredit : limitKredit?.limitKredit ?? '',
            // tempo
            alamatKirim : alamatKirim?.alamat ?? '',
            up : alamatKirim?.up ?? '',
            noTeleponAlamatKirim : alamatKirim?.alamat ?? '',
            npwp : alamatPajak?.npwp ?? '',
            nppkp : alamatPajak?.nppkp ?? '',
            alamatPajak : alamatPajak?.alamatPajak ?? '',
            //
            id : 0,
            kodeCustomer : '',
            isUpdateQR : false,
            action : 0,
            salesmanID : 0,
            top : Number( limitKredit?.tempo ?? 0 ) ?? 0,
            gender : tambahCustomer?.title.id === 2 ? "P" : "L",


        }

        if ( tambahCustomer?.title.id === undefined ) {
            setError( () : InterfaceCantNull => {
                return {
                    ...error,
                    title : true,
                }
            } );
            context.openToast( true );
            context.onError( true );
            context.toastMessage( "Data tidak boleh kosong" );
            loadingLottie.openLoading( false );
            return;
        }

        if ( tambahCustomer?.title.id === 1 || tambahCustomer?.title.id === 2 ) {
            if ( tambahCustomer?.namaCustomer === undefined || tambahCustomer?.alamat === undefined || tambahCustomer?.noKtp === undefined || tambahCustomer?.noHp === undefined ) {
                setError( ( prevState ) : InterfaceCantNull => {
                    return {
                        ...prevState,
                        namaCustomer : tambahCustomer?.namaCustomer === undefined,
                        alamat : tambahCustomer?.alamat === undefined,
                        ktp : tambahCustomer.noKtp === undefined,
                        noHp : tambahCustomer.noHp === undefined,
                        npwp : false,
                        namaKontakPerson : false,
                        noHpKontakPerson : false,
                        noTlp : false,
                        zipCode : tambahCustomer?.kodePos === undefined,
                        kelurahan : tambahCustomer?.kelurahan?.value === undefined,
                        kecamatan : tambahCustomer?.kecamatan?.value === undefined,
                        kabupaten : tambahCustomer?.kabupaten?.value === undefined,
                        provinsi : tambahCustomer?.provinsi?.value === undefined,
                    }
                } )
                context.openToast( true );
                context.onError( true );
                context.toastMessage( "Data tidak boleh kosong" );
                loadingLottie.openLoading( false );
                return;
            }
        }
        else {
            if ( tambahCustomer?.namaCustomer === undefined || tambahCustomer?.alamat === undefined || alamatPajak?.npwp === undefined || kontakPerson?.nama === undefined || kontakPerson?.noHp === undefined || tambahCustomer?.noTelepon === undefined ) {
                setError( ( prevState ) : InterfaceCantNull => {
                    return {
                        ...prevState,
                        ktp : false,
                        namaCustomer : tambahCustomer?.namaCustomer === undefined,
                        alamat : tambahCustomer?.alamat === undefined,
                        npwp : alamatPajak?.npwp === undefined,
                        namaKontakPerson : kontakPerson?.nama === undefined,
                        noHpKontakPerson : kontakPerson?.noHp === undefined,
                        noTlp : tambahCustomer?.noTelepon === undefined,
                        kelurahan : tambahCustomer?.kelurahan?.value === undefined,
                        kecamatan : tambahCustomer?.kecamatan?.value === undefined,
                        kabupaten : tambahCustomer?.kabupaten?.value === undefined,
                        provinsi : tambahCustomer?.provinsi?.value === undefined,
                    } as InterfaceCantNull
                } )
                context.openToast( true );
                context.onError( true );
                context.toastMessage( "Data tidak boleh kosong" );
                loadingLottie.openLoading( false );
                return;
            }
        }
        console.log( dataSend );
        const res = await CustomerRepository.add( context, dataSend );
        setTambahCustomer( {
            alamat : '',
            namaCustomer : '',
            noKtp : '',
            title : {
                id : 0,
                value : '',
                name : '',
            },
            noHp : '',
            agama : {
                id : 0,
                name : '',
                value : '',
            },
            catatan : '',
            email : '',
            facebook : '',
            instagram : '',
            kodePos : '',
            kabupaten : {
                id : 0,
                name : '',
                value : '',
            },
            kecamatan : {
                id : 0,
                name : '',
                value : '',
            },
            kelurahan : {
                id : 0,
                name : '',
                value : '',
            },
            noFax : '',
            noTelepon : '',
            provinsi : {
                id : 0,
                name : '',
                value : '',
            },
            groupDiskon : {
                id : 0,
                name : '',
                value : '',
            },
            passport : '',
            pekerjaan : {
                id : 0,
                name : '',
                value : '',
            },
            ttl : '',
            twitter : '',
            website : '',
            status : true,
            picAhass : {
                id : 0,
                name : '',
                value : '',
            }

        } )
        setAlamatPajak( {
            npwp : '',
            nppkp : '',
            alamatPajak : '',
        } )
        setKontakPerson( {
            email : '',
            noHp : '',
            jabatan : '',
            noTelp : '',
            nama : '',
        } );
        setLimitKredit( {
            limitKredit : '',
            tempo : '',
        } )
        setLimitKredit( {
            limitKredit : '',
            tempo : '',
        } )
        loadingLottie.openLoading( false );
    }

    return {
        tambahCustomer, setTambahCustomer,
        kontakPerson, setKontakPerson,
        alamatKirim, setAlamatKirim,
        alamatPajak, setAlamatPajak,
        limitKredit, setLimitKredit,
        saveData,
        error, setError,
    }
}
