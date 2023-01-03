import { useContext, useEffect, useState } from "react";
import { IConstantEnum } from "../../../../utils/enum/IConstantEnum";
import { useRouter } from "next/router";
import { DialogDataContext } from "../../../../context/IDialogData";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import PkbRepository from "../../../../domain/repository/pkb/PkbRepository";
import { ListOfPKB } from "../../../../domain/models/Pkb/ModelListPkb";
import { InterfaceGetDataPkb } from "../interface/InterfaceGetDataPkb";
import FormatDate from "../../../../utils/format/formatDate";


const ServicesController = () => {

    const route = useRouter()
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )


    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Action',
            name : 'action',
        },
        {
            label : 'Status PKB',
            name : 'labelStatus',
        },
        {
            label : 'Status Pekerjaan',
            name : 'statusPekerjaan',
        },
        {
            label : 'Nama Mekanik',
            name : 'namaMekanik',
        },
        {
            label : 'Nama Pemilik',
            name : 'namaPemilik',
        },
        {
            label : 'No Antrian',
            name : 'noAntrian',
        },
        {
            label : 'No PKB',
            name : 'noPKB',
        },
        {
            label : 'No Polisi',
            name : 'noPolisi',
        },
        {
            label : 'Engine No',
            name : 'engineNo',
        },
        {
            label : 'Tanggal',
            name : 'tanggal',
        },
        {
            label : 'Waktu Tunggu',
            name : 'waktuTunggu',
        },
        {
            label : 'Durasi Pengerjaan',
            name : 'durasiPengerjaan',
        },
        {
            label : 'Jenis Pekerjaan',
            name : 'jenisPekerjaan',
        },
        {
            label : 'PIT',
            name : 'pitMekanik',
        },
    ]

    const listCardInformationData = [
        {
            title : "Semua Data",
            total : 150,
            color : [ "border-Info", 'text-Info', 'bg-Info' ]
        },
        {
            title : "Proses",
            total : 150,
            color : [ "border-warning", 'text-warning', 'bg-warning' ]
        },
        {
            title : "Selesai",
            total : 150,
            color : [ "border-success", 'text-success', 'bg-success' ]
        },
    ]


    const dialog = useContext( DialogDataContext );
    const [ role, setRole ] = useState( '' );
    const getRole = async () => {
        const roleResult = await localStorage.getItem( IConstantEnum.role )
        setRole( roleResult ?? '' );
    }

    const [ cariPkb, setCariPkb ] = useState<InterfaceGetDataPkb>( {
        noPKB : '',
        tanggal : '',
        tanggalSampai : '',
        noPolisi : '',
        statusPencarianPKB : '1',
        pageNumber : 1,
        pageSize : 10,
    } );

    const [ listPkb, setListPkb ] = useState<ListOfPKB[]>( [] );
    const [ page, setPage ] = useState( 1 );
    const [ totalPage, setTotalPage ] = useState( 0 );

    const getListPKB = async ( props : InterfaceGetDataPkb ) => {
        loadingLottie.openLoading( true )
        const resp = await PkbRepository.getListPkb( context, {
            action : 0,
            noPKB : props.noPKB,
            tanggal : props.tanggal,//"2022-12-02T00:00:00+07:00"
            tanggalSampai : props.tanggalSampai,
            noPolisi : props.noPolisi,
            statusPencarianPKB : props.statusPencarianPKB,
            pageNumber : props.pageNumber,
            pageSize : props.pageSize,
            totalRow : 100,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp !== null ) {
            setTotalPage( Number( (resp.data.totalRow / 10).toFixed() ) + 1 )
            setListPkb( resp?.data.listOfPKB ?? [] )
        }
        loadingLottie.openLoading( false )
    }


    useEffect( () => {

        // console.log( date.toISOString() )
        const dateNow = FormatDate.nowDate();
        // console.log( dateNow )
        getListPKB( {
            pageSize : 10,
            pageNumber : 1,
            statusPencarianPKB : '1',
            noPolisi : '',
            tanggal : dateNow + 'T00:00:00+07:00',
            tanggalSampai : dateNow + 'T00:00:00+07:00',
            noPKB : '',
        } )
        getRole().then( () => {
        } )
        return () => {
        }
    }, [] )
    return {
        listCardInformationData,
        role,
        route,
        dialog,
        header,
        listPkb,
        getListPKB,
        totalPage, page, setPage,
        cariPkb, setCariPkb
    }
}
export default ServicesController
