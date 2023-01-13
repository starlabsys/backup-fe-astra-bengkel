import { useContext, useEffect, useState } from "react";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import ParameterMekanikRepository from "../../../../../domain/repository/parameter/mekanik/ParameterMekanikRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import PkbRepository from "../../../../../domain/repository/pkb/PkbRepository";
import { InterfaceProsesPKB } from "../../../../../domain/repository/pkb/interface/InterfaceProsesPKB";
import { EnumProsesPKB } from "../../../../../utils/enum/EnumProsesPKB";
import FormatDate from "../../../../../utils/format/formatDate";
import { EnumPausePKB } from "../../../../../utils/enum/EnumPausePKB";
import { ListOfPKB } from "../../../../../domain/models/Pkb/ModelListPkb";
import { InterfaceAddDataServices } from "../../../../../domain/repository/pkb/interface/InterfaceAddDataServices";


const ProsesDataVm = () => {

    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const alasanPause : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Istirahat (Pause)',
            value : EnumPausePKB.pause.toString(),
        },
        {
            id : 2,
            name : 'Toilet (Pause)',
            value : EnumPausePKB.pause.toString(),
        },
        {
            id : 3,
            name : 'Pekerjaan Komplain (Pending)',
            value : EnumPausePKB.pending.toString(),
        },
        {
            id : 4,
            name : 'Pekerjaan JR (Pending)',
            value : EnumPausePKB.pending.toString(),
        },
        {
            id : 5,
            name : 'Izin Pulang (Pending)',
            value : EnumPausePKB.pending.toString(),
        },
        {
            id : 6,
            name : 'Order Pekerjaan Luar (Pending)',
            value : EnumPausePKB.pending.toString(),
        },

    ]

    const [ listMekanik, setListMekanik ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listAdvisor, setListAdvisor ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listPic, setListPic ] = useState<InterfacePropsDropDown[]>( [] );

    const getListMekanik = async ( tipe : number ) => {
        const resp = await ParameterMekanikRepository.getListMekanik( context, {
            tipe : tipe,
            namaMekanik : '',
        } )
        if ( resp !== null ) {
            if ( tipe === 13 ) {
                setListMekanik( resp.data.listDropDown.map( ( item ) => {
                    return {
                        id : Number( item.nilai ),
                        name : `${ item.label } - ${ item.labelStatusKehadiran }`,
                        value : item.nilai,
                        add : item,
                    } as InterfacePropsDropDown
                } ) )
            }
            if ( tipe === 23 ) {
                setListAdvisor( resp.data.listDropDown.map( ( item ) => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai,
                        add : item,
                    } as InterfacePropsDropDown
                } ) )
            }
            if ( tipe === 24 ) {
                setListPic( resp.data.listDropDown.map( ( item ) => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai,
                        add : item,
                    } as InterfacePropsDropDown
                } ) )
            }
        }
    }

    const [ dataProsesPKB, setDataProsesPKB ] = useState<InterfaceProsesPKB>();
    const [ dataAllPKB, setDataAllPKB ] = useState<ListOfPKB>();

    const prosesPkb = async ( dataProses : EnumProsesPKB, id : number, saran? : string ) => {
        loadingLottie.openLoading( true )
        const dataSend : InterfaceProsesPKB = {
            id : dataProsesPKB?.id ?? 0,
            action : dataProses,
            durasiPengerjaanPKB : dataProsesPKB?.durasiPengerjaanPKB ?? '',
            etaOverdue : dataProsesPKB?.etaOverdue ?? 0,
            alasanPauseId : dataProsesPKB?.alasanPauseId ?? 0,
            isOverdue : dataProsesPKB?.isOverdue ?? 0,
            saran : dataProsesPKB?.saran ?? '',
            waktu : FormatDate.dateSend2(),
            refMechanicId : id ?? dataProsesPKB?.refMechanicId ?? 0,
        } //as InterfaceProsesPKB

        // console.log( dataSend )
        const resp = await PkbRepository.prosesPKB( context, dataSend )
        loadingLottie.openLoading( false )
    }

    const batalServices = async () => {
        loadingLottie.openLoading( true )
        const dataSend : InterfaceAddDataServices = {
            action : 3,
            idPKB : dataAllPKB?.id ?? 0,
            pkbNo : dataAllPKB?.noPKB ?? '',
            refEquipmentID : 0,
            statusPKB : dataAllPKB?.status ?? 0,
            tipePKB : 0,
            noAntrian : dataAllPKB?.noAntrian ?? '',
            kmSekarang : 0,
            kmBerikutnya : 0,
            namaPembawa : "",
            alamatPembawaSaatIni : "",
            handphonePembawa : "",
            hubunganDgPemilikID : 1,
            alasanIngatServiceID : 1,
            dealerSendiri : false,
            keluhan : "",
            pergantianPart : false,
            partBekasDibawaKonsumen : false,
            refMechanicID : "",
            serviceAdvisorID : "",
            finalInspectorID : "",
            jamMasuk : FormatDate.dateSend2(),
            jamProses : "",
            jamSelesai : "",
            uangMuka : 0,
            idGudang : 0,
            idPit : 0,
            listOfPekerjaan : [],
            listOfMaterialHotline : [],
            tanggal : FormatDate.dateSend2(),
            latitude : 0,
            longitude : 0,
            noSTNK : "",
            indikatorBensin : 0,
            svPKBReturnID : 0,
            kodeAntrian : "",
            tipeAntrian : "",
            activityCapacity : 3,
            kecamatanPembawa : "",
            pkbRemove : {
                listRemovePekerjaan : [],
                listRemoveMaterial : []
            },
            tipeComingCustomer : "",
            isEngineNo : false,
            isFrameNo : false,
            isPKBHotline : false,
            jamEstimasiSelesai : FormatDate.dateSend2(),
            jamKedatanganCustomer : FormatDate.dateSend2(),
            noClaimC2 : "",
            noBuku : "",
            DataMotorkuX : {
                VoucherType : 0,
                VoucherValue : 0
            },
            alamatPembawa : '',
            gejala : '',
            kotaPembawa : ''
        }
        const resp = await PkbRepository.addData( context, dataSend )
        loadingLottie.openLoading( false )
    }

    const batalPKB = async () => {
        loadingLottie.openLoading( true )
        const dataSend : InterfaceAddDataServices = {
            action : 4,
            idPKB : dataAllPKB?.id ?? 0,
            pkbNo : dataAllPKB?.noPKB ?? '',
            refEquipmentID : 0,
            statusPKB : dataAllPKB?.status ?? 0,
            tipePKB : 0,
            noAntrian : dataAllPKB?.noAntrian ?? '',
            kmSekarang : 0,
            kmBerikutnya : 0,
            namaPembawa : "",
            alamatPembawaSaatIni : "",
            handphonePembawa : "",
            hubunganDgPemilikID : 1,
            alasanIngatServiceID : 1,
            dealerSendiri : false,
            keluhan : "",
            pergantianPart : false,
            partBekasDibawaKonsumen : false,
            refMechanicID : "",
            serviceAdvisorID : "",
            finalInspectorID : "",
            jamMasuk : FormatDate.dateSend2(),
            jamProses : "",
            jamSelesai : "",
            uangMuka : 0,
            idGudang : 0,
            idPit : 0,
            listOfPekerjaan : [],
            listOfMaterialHotline : [],
            tanggal : FormatDate.dateSend2(),
            latitude : 0,
            longitude : 0,
            noSTNK : "",
            indikatorBensin : 0,
            svPKBReturnID : 0,
            kodeAntrian : "",
            tipeAntrian : "",
            activityCapacity : 3,
            kecamatanPembawa : "",
            pkbRemove : {
                listRemovePekerjaan : [],
                listRemoveMaterial : []
            },
            tipeComingCustomer : "",
            isEngineNo : false,
            isFrameNo : false,
            isPKBHotline : false,
            jamEstimasiSelesai : FormatDate.dateSend2(),
            jamKedatanganCustomer : FormatDate.dateSend2(),
            noClaimC2 : "",
            noBuku : "",
            DataMotorkuX : {
                VoucherType : 0,
                VoucherValue : 0
            },
            alamatPembawa : '',
            gejala : '',
            kotaPembawa : ''
        }
        const resp = await PkbRepository.addData( context, dataSend )
        loadingLottie.openLoading( false )
    }

    useEffect( () => {
        getListMekanik( 13 );
        // getListMekanik( 23 );
        // getListMekanik( 24 );
        // prosesPkb( EnumProsesPKB.start )
        return () => {

        };
    }, [] );


    return {
        setDataProsesPKB,
        listMekanik,
        listAdvisor,
        listPic, prosesPkb,
        alasanPause,
        batalServices,
        setDataAllPKB, dataAllPKB,
        batalPKB
    }
}

export default ProsesDataVm
