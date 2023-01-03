import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceAddCustomerData } from "../../interface/InterfaceAddCustomer";
import { InterfaceKontakPerson } from "../../interface/InterfaceKontakPerson";
import { InterfaceAlamatPajak } from "../../interface/InterfaceAlamatPajak";
import { InterfaceLimitKredit } from "../../interface/InterfaceLimitKredit";
import { InterfaceCantNull } from "../../interface/InterfaceCantNull";
import { InterfaceAddCustomer } from "../../../../../domain/repository/customer/interface/InterfaceAddCustomer";
import CustomerRepository from "../../../../../domain/repository/customer/CustomerRepository";
import { useRouter } from "next/router";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import Currency from "../../../../../utils/format/currency";
import { npwpFormat } from "../../../../../utils/format/formatNpwp";


export const EditCustomerVM = ( id : number ) => {
    const route = useRouter();
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const listTitle : InterfacePropsDropDown[] = [
        { id : 1, value : 'Mr.', name : 'Tuan' },
        { id : 2, value : 'Mrs.', name : 'Nyonya' },
        { id : 3, value : 'Perusahaan', name : 'Perusahaan' },
    ]

    const listPekerjaan : InterfacePropsDropDown[] = [
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
        },
        {
            id : 5,
            value : 'Mahasiswa Pelajar',
            name : 'Mahasiswa Pelajar'
        },
        {
            id : 6,
            value : 'Guru Dosen',
            name : 'Guru Dosen'
        },
        {
            id : 7,
            value : 'Ibu Rumah Tangga',
            name : 'Ibu Rumah Tangga'
        },
        {
            id : 8,
            value : 'Dokter',
            name : 'Dokter'
        },
        {
            id : 9,
            value : 'Pengacara',
            name : 'Pengacara'
        },
        {
            id : 10,
            value : 'Wartawan',
            name : 'Wartawan'
        },
        {
            id : 11,
            value : 'TNI',
            name : 'TNi'
        },
        {
            id : 12,
            value : 'Polri',
            name : 'Polri'
        },
        {
            id : 13,
            value : 'Petani',
            name : 'Petani'
        },
        {
            id : 14,
            value : 'Nelayan',
            name : 'Nelayan'
        },
        {
            id : 15,
            value : 'Lain-Lain',
            name : 'Lain-Lain'
        }
    ]

    const listAgama : InterfacePropsDropDown[] = [
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
    ]

    const listProvinsi : InterfacePropsDropDown[] = [
        { id : 1, value : 'KALIMANTAN BARAT', name : 'KALIMANTAN BARAT' },
    ]

    const [ tambahCustomer, setTambahCustomer ] = useState<InterfaceAddCustomerData>();
    const [ kontakPerson, setKontakPerson ] = useState<InterfaceKontakPerson>();
    const [ alamatKirim, setAlamatKirim ] = useState<InterfaceAlamatKirim>();
    const [ alamatPajak, setAlamatPajak ] = useState<InterfaceAlamatPajak>();
    const [ limitKredit, setLimitKredit ] = useState<InterfaceLimitKredit>();

    const [ listKab, setListKab ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKec, setListKec ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKel, setListKel ] = useState<InterfacePropsDropDown[]>( [] );

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
            id : tambahCustomer?.id ?? 0,
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
            limitKredit : Currency.idrToString( limitKredit?.limitKredit ?? '' ),
            // tempo
            alamatKirim : alamatKirim?.alamat ?? '',
            up : alamatKirim?.up ?? '',
            noTeleponAlamatKirim : alamatKirim?.noTelp ?? '',
            npwp : alamatPajak?.npwp ?? '',
            nppkp : alamatPajak?.nppkp ?? '',
            alamatPajak : alamatPajak?.alamatPajak ?? '',
            //
            kodeCustomer : tambahCustomer?.kodeCustomer ?? '',
            isUpdateQR : false,
            action : 1,
            salesmanID : 0,
            top : Number( Currency.idrToString( limitKredit?.tempo ?? '' ) ),
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
        const res = await CustomerRepository.update( context, dataSend );
        loadingLottie.openLoading( false );
        // return route.back();
    }

    const getDetailCustomer = async ( dataID : number ) => {
        loadingLottie.openLoading( true );
        const resp = await CustomerRepository.detail( context, {
            id : dataID,
            action : 1,
        } )
        if ( resp !== null ) {
            const data = resp.data;
            const kab = await getKab()
            const kec = await getKec( data.kabupaten )
            const kel = await getKel( data.kecamatan )
            setTambahCustomer( {
                id : data.id,
                kodeCustomer : data.kodeCustomer,
                alamat : data.alamat,
                website : data.website,
                ttl : data.tanggalUlangTahun,
                passport : data.noPassport,
                namaCustomer : data.namaCustomer,
                picAhass : {
                    id : 0,
                    name : '',
                    value : '',
                },
                noHp : data.noHp,
                pekerjaan : listPekerjaan.find( ( item ) => item.id === data.jabatanCustomerID ) ?? {
                    id : 0,
                    name : '',
                    value : '',
                },
                groupDiskon : {
                    id : 0,
                    name : '',
                    value : '',
                },
                noFax : data.noFaks,
                noTelepon : data.noTelepon,
                provinsi : listProvinsi[ 0 ],
                kabupaten : kab.find( ( item ) => item.value === data.kabupaten ) ?? {
                    id : 0,
                    name : '',
                    value : '',
                },
                kecamatan : kec.find( ( item ) => item.value === data.kecamatan ) ?? {
                    id : 0,
                    name : '',
                    value : '',
                },
                kelurahan : kel.find( ( item ) => item.value === data.kelurahan ) ?? {
                    id : 0,
                    name : '',
                    value : '',
                },
                catatan : data.catatan,
                email : data.email,
                facebook : data.facebook,
                instagram : data.instagram,
                kodePos : data.zipCode,
                twitter : data.twitter,
                status : data.aktif,
                title : listTitle.find( ( item ) => item.value === data.title ) ?? {
                    id : 0,
                    value : '',
                    name : '',
                },
                agama : listAgama.find( ( item ) => item.id === data.agama ) ?? {
                    id : 0,
                    name : '',
                    value : '',
                },
                noKtp : data.noktp,
            } )
            setKontakPerson( {
                nama : data.namaKontakPerson,
                noTelp : data.noteleponKontakPerson,
                jabatan : data.jabatanKontakPerson,
                noHp : data.noHpKontakPerson,
                email : data.emailKontakPerson,
            } )
            setAlamatPajak( {
                alamatPajak : data.alamatPajak,
                npwp : npwpFormat( data.npwp ),
                nppkp : data.nppkp,
            } )
            setAlamatKirim( {
                noTelp : data.noTeleponAlamatKirim,
                alamat : data.alamatKirim,
                up : data.up,
            } )
            setLimitKredit( {
                tempo : data.top,
                limitKredit : Currency.stringToIdr( data.limitKredit.toString() ),
            } )
        }
        loadingLottie.openLoading( false );
    }

    const getKab = async () : Promise<InterfacePropsDropDown[]> => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 5,
                label : "sample string 2",
                nilai : "20"
            }
        ] );
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListKab( dataResult );
            return dataResult;
        }
        return []
    }

    const getKec = async ( kab : string ) : Promise<InterfacePropsDropDown[]> => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 6,
                label : "sample string 2",
                nilai : kab,
            }
        ] )
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListKec( dataResult );
            console.log( 'kec', dataResult );
            return dataResult;
        }
        return []
    }

    const getKel = async ( kec : string ) : Promise<InterfacePropsDropDown[]> => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 7,
                label : "sample string 2",
                nilai : kec,
            }
        ] )
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai,
                    add : item.additionalNilai
                }
            } )
            setListKel( dataResult );
            console.log( 'kel', dataResult );
            return dataResult;
        }
        return []
    }

    useEffect( () => {
        if ( id === 0 ) {
            route.back();
        }
        getDetailCustomer( id );
    }, [] )


    return {
        tambahCustomer, setTambahCustomer,
        kontakPerson, setKontakPerson,
        alamatKirim, setAlamatKirim,
        alamatPajak, setAlamatPajak,
        limitKredit, setLimitKredit,
        saveData,
        error, setError,
        listTitle, listPekerjaan, listAgama, listProvinsi,
        listKab, listKec, listKel,
        getKab, getKec, getKel,
    }
}
