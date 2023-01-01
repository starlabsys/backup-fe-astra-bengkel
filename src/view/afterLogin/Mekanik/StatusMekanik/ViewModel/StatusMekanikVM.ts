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
import { InterfaceListMekanik } from "../../interface/interfaceListMekanik";
import { useRouter } from "next/router";


export const StatusMekanikVM = ( idData : string ) => {
    const router = useRouter();
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ listProvince, setListProvince ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listAgama, setListAgama ] = useState<InterfacePropsDropDown[]>( [] );

    const getSyncMaster = async () => {
        loadingLottie.openLoading( true );
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
            setListProvince( resp.data.province.map( ( item : any ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.text,
                    value : item.value
                }
            } ) );
            setListAgama( resp.data.agama.map( ( item : any ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.text,
                    value : item.value
                }
            } ) );
        }
        loadingLottie.openLoading( false );
    }

    const [ listKab, setListKab ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKec, setListKec ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKel, setListKel ] = useState<InterfacePropsDropDown[]>( [] );

    const [ listJabatan, setListJabatan ] = useState<InterfacePropsDropDown[]>( [] );

    const getArea = async ( tipe : number, nilai : string | number ) => {
        loadingLottie.openLoading( true );
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
            }
            if ( tipe === 6 ) {
                setListKec( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
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
            }
            if ( tipe === 10 ) {
                setListJabatan( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
            }
        }
        loadingLottie.openLoading( false );
    }

    const [ dataMekanik, setDataMekanik ] = useState<InterfaceAddDataMekanik>();
    const [ biodata, setBiodata ] = useState<InterfaceBiodataMekanik>();
    const [ statusKaryawan, setStatusKaryawan ] = useState<InterfaceStatusKaryawan>();
    const [ komisiDanGajih, setKomisiDanGajih ] = useState<InterfaceKomisiDanGajih>();

    const [ listTraining, setListTraining ] = useState<InterfacePropsDropDown[]>( [] );

    const getListTraining = async ( id : string ) => {
        loadingLottie.openLoading( true );
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
            }

            setListTraining( resp.data.listLevelTraining.map( ( item : ListLevelTraining, index ) : InterfacePropsDropDown => {
                return {
                    id : item.idLevelTraining,
                    name : item.trainingLevel,
                    value : item.idJabatan.toString(),
                }
            } ) );
        }
        loadingLottie.openLoading( false );
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
            console.log( 'resp', resp );
        }
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        if ( idData === "" || idData === undefined ) {
            router.back();
        }
        getDetailMekanik( idData );
        getSyncMaster();
        getArea( 10, 1 );
        return () => {
        };
    }, [] );

    const saveData = async () => {
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
            tanggalLahir : biodata?.tanggalLahirMekanik ?? "",
            jenisKelamin : biodata?.genderMekanik === 'Laki-laki' ? 'L' : biodata?.genderMekanik === 'Perempuan' ? 'P' : '',
            agama : Number( biodata?.agamaMekanik?.id ),
            berlakuKTP : biodata?.berlakuHinggaMekanik ?? "",
            statusKawin : biodata?.statusKawinMekanik === 'Kawin' ? 0 : biodata?.statusKawinMekanik === 'Tidak Kawin' ? 1 : 0,
            kebangsaan : biodata?.kebangsaanMekanik === 'WNI' ? 0 : biodata?.kebangsaanMekanik === 'WNA' ? 1 : 0,
            statusKaryawan : statusKaryawan?.statusKaryawan === 'Tetap' ? 0 : statusKaryawan?.statusKaryawan === 'Kontrak' ? 1 : 0,
            nik : statusKaryawan?.hondaId ?? "",
            tanggalMasuk : statusKaryawan?.tanggalMasuk ?? "",
            tanggalBerhenti : statusKaryawan?.tanggalKeluar ?? "",
            statusPIT : statusKaryawan?.statusPit === 'PIT' ? 0 : statusKaryawan?.statusPit === 'Non PIT' ? 1 : 0,
            listPayroll : [
                {
                    payrollID : 21,
                    gaji : "Gaji Pokok",
                    nilaiGaji : Number( komisiDanGajih?.gajiPokok ?? 0 ),
                },
                {
                    payrollID : 22,
                    gaji : "Tunjangan Jabatan",
                    nilaiGaji : Number( komisiDanGajih?.tunjanganJabatan ?? 0 ),
                },
                {
                    payrollID : 23,
                    gaji : "Tunjangan Kesehatan",
                    nilaiGaji : Number( komisiDanGajih?.kesehatan ?? 0 ),
                },
                {
                    payrollID : 24,
                    gaji : "Tunjangan Transport",
                    nilaiGaji : Number( komisiDanGajih?.transport ?? 0 ),
                },
                {
                    payrollID : 25,
                    gaji : "Uang Harian",
                    nilaiGaji : Number( komisiDanGajih?.uangHarian ?? 0 ),
                },
            ],
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
            action : 0,
            id : 0,
            areaID : 0,
            satuanKomisi : komisiDanGajih?.satuanKomisi ?? '0',
            statusKomisi : komisiDanGajih?.komisiPenjualan === '0' ? 0 : komisiDanGajih?.komisiPenjualan === '1' ? 1 : komisiDanGajih?.komisiPenjualan === '2' ? 2 : 0,
            tipeKomisi : komisiDanGajih?.tipeKomisi ?? 0,
            nilaiKomisi : komisiDanGajih?.nilaiKomisi ?? 0,
        }

        console.log( sendData );
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
