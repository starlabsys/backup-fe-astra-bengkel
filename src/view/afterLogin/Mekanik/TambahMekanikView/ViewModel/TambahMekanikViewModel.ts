import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { useContext, useEffect, useState } from "react";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { ListDropDown } from "../../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import { InterfaceAddDataMekanik } from "../../interface/InterfaceAddDataMekanik";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceStatusKaryawan } from "../../interface/InterfaceStatusKaryawan";
import { InterfaceKomisiDanGajih } from "../../interface/InterfaceKomisiDanGajih";
import { InterfaceBiodataMekanik } from "../../interface/InterfaceBiodataMekanik";
import { ListLevelTraining } from "../../../../../domain/models/MasterDropDown/ModelListTraining";
import MekanikRepository from "../../../../../domain/repository/mekanik/MekanikRepository";
import Currency from "../../../../../utils/format/currency";
import {
    InterfaceListJabatan,
    InterfaceListTrainingLevel
} from "../../../../../domain/repository/mekanik/interface/InterfaceAddMekanik";
import { InterfaceSaveDataMekanik } from "../../interface/InterfaceSaveDataMekanik";


const TambahMekanikViewModel = () => {
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

    useEffect( () => {
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
            provinsi : Number( dataMekanik?.provinsiMekanik?.id ?? 0 ),
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
            jenisKelamin : biodata?.genderMekanik === 'Laki-Laki' ? 'L' : biodata?.genderMekanik === 'Perempuan' ? 'P' : '',
            agama : Number( biodata?.agamaMekanik?.id ?? '0' ),
            berlakuKTP : biodata?.berlakuHinggaMekanik ?? "",
            statusKawin : biodata?.statusKawinMekanik === 'Kawin' ? 0 : biodata?.statusKawinMekanik === 'Tidak Kawin' ? 1 : 0,
            kebangsaan : biodata?.kebangsaanMekanik === 'WNI' ? 1 : biodata?.kebangsaanMekanik === 'WNA' ? 2 : 0,
            statusKaryawan : statusKaryawan?.statusKaryawan === 'Tetap' ? 0 : statusKaryawan?.statusKaryawan === 'Tidak Tetap' ? 1 : 0,
            nik : statusKaryawan?.hondaId ?? "",
            tanggalMasuk : statusKaryawan?.tanggalMasuk ?? "",
            tanggalBerhenti : statusKaryawan?.tanggalKeluar ?? "",
            statusPIT : statusKaryawan?.statusPit === 'PIT' ? 1 : statusKaryawan?.statusPit === 'Non PIT' ? 0 : 0,
            listPayroll : [
                {
                    payrollID : 0,
                    gaji : "Gaji Pokok",
                    nilaiGaji : Number( Currency.idrToString( komisiDanGajih?.gajiPokok ?? '0' ) ),
                },
                {
                    payrollID : 0,
                    gaji : "Tunjangan Jabatan",
                    nilaiGaji : Number( Currency.idrToString( komisiDanGajih?.tunjanganJabatan ?? '0' ) ),
                },
                {
                    payrollID : 0,
                    gaji : "Tunjangan Kesehatan",
                    nilaiGaji : Number( Currency.idrToString( komisiDanGajih?.kesehatan ?? '0' ) ),
                },
                {
                    payrollID : 0,
                    gaji : "Tunjangan Transport",
                    nilaiGaji : Number( Currency.idrToString( komisiDanGajih?.transport ?? '0' ) ),
                },
                {
                    payrollID : 0,
                    gaji : "Uang Harian",
                    nilaiGaji : Number( Currency.idrToString( komisiDanGajih?.uangHarian ?? '0' ) ),
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

        const resp = await MekanikRepository.postData( context, sendData );
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

export default TambahMekanikViewModel
