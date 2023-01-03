import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { ListDropDown } from "../../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import { InterfaceAddDataMekanik } from "../../interface/InterfaceAddDataMekanik";
import { InterfaceBiodataMekanik } from "../../interface/InterfaceBiodataMekanik";
import { InterfaceStatusKaryawan } from "../../interface/InterfaceStatusKaryawan";
import { InterfaceKomisiDanGajih } from "../../interface/InterfaceKomisiDanGajih";
import { ListLevelTraining } from "../../../../../domain/models/MasterDropDown/ModelListTraining";
import MekanikRepository from "../../../../../domain/repository/mekanik/MekanikRepository";
import { useRouter } from "next/router";
import FormatDate from "../../../../../utils/format/formatDate";
import { ListJabatan, ListPayroll, ListTraining } from "../../../../../domain/models/Mekanik/ModelListMekanik";
import Currency from "../../../../../utils/format/currency";
import { InterfacePayRole } from "../../interface/InterfacePayRole";
import { InterfaceSaveDataMekanik } from "../../interface/InterfaceSaveDataMekanik";
import {
    InterfaceListJabatan,
    InterfaceListPayRoll,
    InterfaceListTrainingLevel
} from "../../../../../domain/repository/mekanik/interface/InterfaceAddMekanik";


export const StatusMekanikVM = ( idData : string ) => {
    const router = useRouter();
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ listProvince, setListProvince ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listAgama, setListAgama ] = useState<InterfacePropsDropDown[]>( [] );

    const getSyncMaster = async ( status : string ) : Promise<InterfacePropsDropDown[]> => {
        // loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getDropDown( context, [
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "AlasanIngatService"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "HubunganDenganPemilik"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "Province"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "Lookup"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "Agama"
            }
        ] )
        if ( resp !== null ) {
            if ( status === 'prov' ) {
                setListProvince( resp.data.province.map( ( item : any ) : InterfacePropsDropDown => {
                    return {
                        id : item.id,
                        name : item.text,
                        value : item.value
                    }
                } ) );
                return resp.data.province.map( ( item : any ) : InterfacePropsDropDown => {
                    return {
                        id : item.id,
                        name : item.text,
                        value : item.value
                    }
                } )
            }
            if ( status === 'agama' ) {
                setListAgama( resp.data.agama.map( ( item : any ) : InterfacePropsDropDown => {
                    return {
                        id : item.id,
                        name : item.text,
                        value : item.value
                    }
                } ) );
                return resp.data.agama.map( ( item : any ) : InterfacePropsDropDown => {
                    return {
                        id : item.id,
                        name : item.text,
                        value : item.value
                    }
                } )
            }
            return [];
        }
        return [];
        // loadingLottie.openLoading( false );
    }

    const [ listKab, setListKab ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKec, setListKec ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKel, setListKel ] = useState<InterfacePropsDropDown[]>( [] );

    const [ listJabatan, setListJabatan ] = useState<InterfacePropsDropDown[]>( [] );

    const getArea = async ( tipe : number, nilai : string | number ) : Promise<InterfacePropsDropDown[]> => {
        // loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : tipe,
                label : "sample string 2",
                nilai : nilai
            }
        ] )
        if ( resp !== null ) {
            if ( tipe === 5 ) {
                setListKab( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
                return resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } )
            }
            if ( tipe === 6 ) {
                setListKec( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
                return resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } )
            }
            if ( tipe === 7 ) {
                setListKel( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai,
                        add : item.additionalNilai,
                    }
                } ) );
                return resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } )
            }
            if ( tipe === 10 ) {
                setListJabatan( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
                return resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } )
            }
            return [];
        }
        return [];
        // loadingLottie.openLoading( false );
    }

    const [ dataMekanik, setDataMekanik ] = useState<InterfaceAddDataMekanik>();
    const [ biodata, setBiodata ] = useState<InterfaceBiodataMekanik>();
    const [ statusKaryawan, setStatusKaryawan ] = useState<InterfaceStatusKaryawan>();
    const [ komisiDanGajih, setKomisiDanGajih ] = useState<InterfaceKomisiDanGajih>();
    const [ payRole, setPayRole ] = useState<ListPayroll[]>( [] );

    const [ listTraining, setListTraining ] = useState<InterfacePropsDropDown[]>( [] );

    const getListTraining = async ( id : string ) : Promise<InterfacePropsDropDown[]> => {
        // loadingLottie.openLoading( true );
        const resp = await DropDownRepository.listTraining( context, [
            {
                id : id,
            }
        ] )
        if ( resp !== null ) {
            if ( resp.data.ack === 0 ) {
                context.openToast( true )
                context.onError( true )
                context.toastMessage( resp.data.message )
                return [];
            }

            setListTraining( resp.data.listLevelTraining.map( ( item : ListLevelTraining, index ) : InterfacePropsDropDown => {
                return {
                    id : item.idLevelTraining,
                    name : item.trainingLevel,
                    value : item.idJabatan.toString(),
                }
            } ) );
            return resp.data.listLevelTraining.map( ( item : ListLevelTraining, index ) : InterfacePropsDropDown => {
                return {
                    id : item.idLevelTraining,
                    name : item.trainingLevel,
                    value : item.idJabatan.toString(),
                }
            } )
        }
        return [];
        // loadingLottie.openLoading( false );
    }

    const getDetailMekanik = async ( dataId : string ) => {
        loadingLottie.openLoading( true );
        const resp = await MekanikRepository.getData( context, {
            action : 0,
            kodeKaryawan : dataId,
            namaKaryawan : "",
            alamat : "",
            kota : "",
            listJabatan : [],
            pageNumber : 1,
            pageSize : 10,
            totalRow : 100,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp ) {
            const dataResultMekanik = resp.data.listOfKaryawanModel[ 0 ];
            const prov = await getSyncMaster( 'prov' );
            const agama = await getSyncMaster( 'agama' );
            const dataKab = await getArea( 5, dataResultMekanik.area.provinceID )
            const dataKec = await getArea( 6, dataResultMekanik.area.kabupaten )
            const dataKel = await getArea( 7, dataResultMekanik.area.kecamatan )
            const dataJabatan = await getArea( 10, 1 )

            setDataMekanik( {
                id : dataResultMekanik.id,
                statusMekanik : dataResultMekanik.aktif,
                namaMekanik : dataResultMekanik.namaKaryawan,
                catatanMekanik : dataResultMekanik.catatan,
                emailMekanik : dataResultMekanik.email,
                noHpMekanik : dataResultMekanik.noHP,
                noTelpMekanik : dataResultMekanik.noTelepon,
                kelurahanMekanik : dataKel.find( ( item ) => item.value === dataResultMekanik.area.kelurahan ) ?? {} as InterfacePropsDropDown,
                kecamatanMekanik : dataKec.find( ( item ) => item.value === dataResultMekanik.area.kecamatan ) ?? {} as InterfacePropsDropDown,
                kabupatenMekanik : dataKab.find( ( item ) => item.value === dataResultMekanik.area.kabupaten ) ?? {} as InterfacePropsDropDown,
                provinsiMekanik : prov.find( ( item : InterfacePropsDropDown ) => item.id === dataResultMekanik.area.provinceID ) ?? {} as InterfacePropsDropDown,
                alamatMekanik : dataResultMekanik.alamat,
                kodeMekanik : dataResultMekanik.kodeKaryawan,
                kodePosMekanik : dataResultMekanik.area.zipCode,
            } )
            setBiodata( {
                kebangsaanMekanik : dataResultMekanik?.kebangsaan === 1 ? 'WNI' : dataResultMekanik?.kebangsaan ===
                2 ? 'WNA' : '',
                statusKawinMekanik : dataResultMekanik?.statusKawin === 0 ? 'Kawin' :
                    dataResultMekanik?.statusKawin === 1 ? 'Tidak Kawin' : '',
                genderMekanik :
                    dataResultMekanik?.jenisKelamin === 'L' ? 'Laki-Laki' : dataResultMekanik?.jenisKelamin === 'P' ?
                        'Perempuan' : '',
                berlakuHinggaMekanik : FormatDate.stringToDateInput( dataResultMekanik?.berlakuKTP.toString() ),
                tanggalLahirMekanik : FormatDate.stringToDateInput( dataResultMekanik?.tanggalLahir.toString() ),
                tempatLahirMekanik : dataResultMekanik?.tempatLahir,
                ktpMekanik : dataResultMekanik?.kTP,
                agamaMekanik : agama.find( ( item : InterfacePropsDropDown ) => item.id === dataResultMekanik?.agama ) ?? {} as InterfacePropsDropDown,
            } )
            setStatusKaryawan( {
                statusPit : dataResultMekanik.statusPIT === 1 ? 'PIT' : dataResultMekanik.statusPIT === 0 ? 'Non PIT' : '',
                statusKaryawan : dataResultMekanik.statusKaryawan === 0 ? 'Tetap' : dataResultMekanik.statusKaryawan === 1 ? 'Tidak Tetap' : '',
                hondaId : dataResultMekanik.nik,
                levelTraining : dataResultMekanik.listTraining.map( ( item : ListTraining ) : InterfacePropsDropDown => {
                    return {
                        id : item.trainingLevelMekanikID,
                        name : item.trainingLevel,
                        value : item.jabatanID.toString(),
                    }
                } ),
                tanggalKeluar : FormatDate.stringToDateInput( dataResultMekanik.tanggalBerhenti.toString() ),
                tanggalMasuk : FormatDate.stringToDateInput( dataResultMekanik.tanggalMasuk.toString() ),
                jabatan : dataResultMekanik.listJabatan.map( ( item : ListJabatan ) : InterfacePropsDropDown => {
                    return {
                        id : item.jabatanID,
                        name : item.jabatan,
                        value : item.jabatanID.toString(),
                    }
                } ),
            } )
            setKomisiDanGajih( {
                komisiPenjualan : dataResultMekanik.statusKomisi === 0 ? '0' : dataResultMekanik.statusKomisi === 1 ? '1' : dataResultMekanik.statusKomisi === 2 ? '2' : '0',
                nilaiKomisi : dataResultMekanik.nilaiKomisi,
                satuanKomisi : dataResultMekanik.satuanKomisi,
                tipeKomisi : dataResultMekanik.tipeKomisi === 1 ? 1 : dataResultMekanik.tipeKomisi === 2 ? 2 : 0,
                uangHarian : Currency.stringToIdr( dataResultMekanik.listPayroll.find( ( item : ListPayroll ) => item.gaji === 'Uang Harian' )?.nilaiGaji.toString() ?? '0' ) ?? Currency.stringToIdr( '0' ),
                transport : Currency.stringToIdr( dataResultMekanik.listPayroll.find( ( item : ListPayroll ) => item.gaji === 'Tunjangan Transport' )?.nilaiGaji.toString() ?? '0' ) ?? Currency.stringToIdr( '0' ),
                kesehatan : Currency.stringToIdr( dataResultMekanik.listPayroll.find( ( item : ListPayroll ) => item.gaji === 'Tunjangan Kesehatan' )?.nilaiGaji.toString() ?? '0' ) ?? Currency.stringToIdr( '0' ),
                tunjanganJabatan : Currency.stringToIdr( dataResultMekanik.listPayroll.find( ( item : ListPayroll ) => item.gaji === 'Tunjangan Jabatan' )?.nilaiGaji.toString() ?? '0' ) ?? Currency.stringToIdr( '0' ),
                gajiPokok : Currency.stringToIdr( dataResultMekanik.listPayroll.find( ( item : ListPayroll ) => item.gaji === 'Gaji Pokok' )?.nilaiGaji.toString() ?? '0' ) ?? Currency.stringToIdr( '0' ),
            } )
            // const dataPayRole = payRole
            // dataResultMekanik.listPayroll.forEach( ( item : ListPayroll ) => {
            //     dataPayRole.push( {
            //         payrollID : item.payrollID,
            //         gaji : item.gaji,
            //         nilaiGaji : item.nilaiGaji,
            //     } )
            // } )
            setPayRole( dataResultMekanik.listPayroll )
        }

        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        if ( idData === "" || idData === undefined ) {
            router.back();
        }
        getDetailMekanik( idData );
        // getSyncMaster();
        getArea( 10, 1 );
        return () => {
        };
    }, [] );

    const saveData = async () => {
        loadingLottie.openLoading( true );
        const sendData : InterfaceSaveDataMekanik = {
            aktif : dataMekanik?.statusMekanik ?? true,
            namaKaryawan : dataMekanik?.namaMekanik ?? "",
            alamat : dataMekanik?.alamatMekanik ?? "",
            provinsi : Number( dataMekanik?.provinsiMekanik?.id ),
            kabupaten : dataMekanik?.kabupatenMekanik?.name ?? "",
            kecamatan : dataMekanik?.kecamatanMekanik?.name ?? "",
            kelurahan : dataMekanik?.kelurahanMekanik?.name ?? "",
            kodePos : dataMekanik?.kodePosMekanik ?? "",
            noTelepon : dataMekanik?.noTelpMekanik ?? "",
            noHP : dataMekanik?.noHpMekanik ?? "",
            email : dataMekanik?.emailMekanik ?? "",
            catatan : dataMekanik?.catatanMekanik ?? "",
            kTP : biodata?.ktpMekanik ?? "",
            tempatLahir : biodata?.tempatLahirMekanik ?? "",
            tanggalLahir : FormatDate.dateSend( biodata?.tanggalLahirMekanik ?? "" ),
            jenisKelamin : biodata?.genderMekanik === 'Laki-Laki' ? 'L' : biodata?.genderMekanik === 'Perempuan' ? 'P' : '',
            agama : Number( biodata?.agamaMekanik?.id ),
            berlakuKTP : FormatDate.dateSend( biodata?.berlakuHinggaMekanik ?? "" ),
            statusKawin : biodata?.statusKawinMekanik === 'Kawin' ? 0 : biodata?.statusKawinMekanik === 'Tidak Kawin' ? 1 : 0,
            kebangsaan : biodata?.kebangsaanMekanik === 'WNI' ? 0 : biodata?.kebangsaanMekanik === 'WNA' ? 1 : 0,
            statusKaryawan : statusKaryawan?.statusKaryawan === 'Tetap' ? 0 : statusKaryawan?.statusKaryawan === 'Kontrak' ? 1 : 0,
            nik : statusKaryawan?.hondaId ?? "",
            tanggalMasuk : FormatDate.dateSend( statusKaryawan?.tanggalMasuk ?? "" ),
            tanggalBerhenti : FormatDate.dateSend( statusKaryawan?.tanggalKeluar ?? "" ),
            statusPIT : statusKaryawan?.statusPit === 'PIT' ? 1 : statusKaryawan?.statusPit === 'Non PIT' ? 0 : 0,
            listPayroll : payRole.map( ( item ) : InterfaceListPayRoll => {
                return {
                    payrollID : item.payrollID,
                    gaji : item.gaji,
                    nilaiGaji : item.gaji === 'Gaji Pokok' ? Number( Currency.idrToString( komisiDanGajih?.gajiPokok ?? '0' ) ?? 0 )
                        : item.gaji === 'Tunjangan Jabatan' ? Number( Currency.idrToString( komisiDanGajih?.tunjanganJabatan ?? '0' ) ?? 0 )
                            : item.gaji === 'Tunjangan Kesehatan' ? Number( Currency.idrToString( komisiDanGajih?.kesehatan ?? '0' ) ?? 0 )
                                : item.gaji === 'Tunjangan Transport' ? Number( Currency.idrToString( komisiDanGajih?.transport ?? '0' ) ?? 0 )
                                    : item.gaji === 'Uang Harian' ? Number( Currency.idrToString( komisiDanGajih?.uangHarian ?? '0' ) ?? 0 ) : 0,
                }
            } ),
            //     [
            //     {
            //         payrollID : 21,
            //         gaji : "Gaji Pokok",
            //         nilaiGaji : Number( komisiDanGajih?.gajiPokok ?? 0 ),
            //     },
            //     {
            //         payrollID : 22,
            //         gaji : "Tunjangan Jabatan",
            //         nilaiGaji : Number( komisiDanGajih?.tunjanganJabatan ?? 0 ),
            //     },
            //     {
            //         payrollID : 23,
            //         gaji : "Tunjangan Kesehatan",
            //         nilaiGaji : Number( komisiDanGajih?.kesehatan ?? 0 ),
            //     },
            //     {
            //         payrollID : 24,
            //         gaji : "Tunjangan Transport",
            //         nilaiGaji : Number( komisiDanGajih?.transport ?? 0 ),
            //     },
            //     {
            //         payrollID : 25,
            //         gaji : "Uang Harian",
            //         nilaiGaji : Number( komisiDanGajih?.uangHarian ?? 0 ),
            //     },
            // ],
            listTrainingLevel : statusKaryawan?.levelTraining?.map( ( item : InterfacePropsDropDown ) : InterfaceListTrainingLevel => {
                return {
                    idLevelTraining : item.id.toString(),
                    idJabatan : Number( item.value ),
                    trainingLevel : null
                }
            } ) ?? [],
            listJabatan : statusKaryawan?.jabatan?.map( ( item : InterfacePropsDropDown ) : InterfaceListJabatan => {
                return {
                    jabatan : item.name,
                    jabatanID : item.id,
                }
            } ) ?? [],
            city : dataMekanik?.kabupatenMekanik?.name ?? "",
            kodeKaryawan : dataMekanik?.kodeMekanik ?? "",
            action : 1,
            id : dataMekanik?.id ?? 0,
            areaID : 0,
            satuanKomisi : komisiDanGajih?.satuanKomisi ?? '0',
            statusKomisi : komisiDanGajih?.komisiPenjualan === '0' ? 0 : komisiDanGajih?.komisiPenjualan === '1' ? 1 : komisiDanGajih?.komisiPenjualan === '2' ? 2 : 0,
            tipeKomisi : komisiDanGajih?.tipeKomisi ?? 0,
            nilaiKomisi : komisiDanGajih?.nilaiKomisi ?? 0,
        }

        console.log( sendData );
        const resp = await MekanikRepository.postData( context, sendData );
        loadingLottie.openLoading( false );
        getDetailMekanik( idData );
    }


    return {
        listProvince, listKab, listKec, listKel, listAgama, listJabatan, setListJabatan, listTraining, setListTraining,
        getArea, getListTraining,
        dataMekanik, setDataMekanik,
        biodata, setBiodata,
        statusKaryawan, setStatusKaryawan,
        komisiDanGajih, setKomisiDanGajih,
        saveData,
    }
}
