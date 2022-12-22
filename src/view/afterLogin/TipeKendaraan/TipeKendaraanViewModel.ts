import TipeKendaraanRepository from "../../../domain/repository/tipe-kendaraan/TipeKendaraanRepository";
import { IAlertDialogContext } from "../../../core/utils/error/IAlertDialog";
import { useContext, useEffect, useState } from "react";
import { ListOfTipeKendaraan } from "../../../domain/models/TipeKendaraan/ModelTipeKendaraan";


const TipeKendaraanViewModel = () => {
    const test : ListOfTipeKendaraan[] = [
        {
            id : 1,
            idTipeKendaraanAHM : 1,
            kodeTipeKendaraanAHM : 'string',
            rowStatus : 1,
            tipe : 'string',
            namaTipe : 'string',
            cc : 1,
            model : 'string',
            status : 'string',
            aktif : true,
        }
    ]
    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Tipe',
            name : 'tipe',
        },
        {
            label : 'Nama Tipe',
            name : 'namaTipe',
        },
        {
            label : 'CC Mesin',
            name : 'cc',
        },
        {
            label : 'Model',
            name : 'model',
        },
        {
            label : 'Kode',
            name : 'kodeTipeKendaraanAHM',
        },
        {
            label : 'Status',
            name : 'status',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]

    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );

    const [ page, setPage ] = useState( 1 );
    const [ totalPage, setTotalPage ] = useState( 0 );

    const [ listTipeKendaraan, setListTipeKendaraan ] = useState<ListOfTipeKendaraan[]>( [] );

    const getTipeKendaraan = async ( pageNumber : number, tipe : string ) => {
        setLoading( true );
        const response = await TipeKendaraanRepository.getData( context, {
            action : 1,
            tipe : tipe,
            namaTipe : "",
            cCMesin : "",
            model : "",
            pageNumber : pageNumber,
            pageSize : 10,
            totalRow : 0,
            sortColumn : "ID",
            sortDirection : 0
        } );
        if ( response !== null ) {
            const dataResp : ListOfTipeKendaraan[] = response.data.listOfTipeKendaraan.map( ( item : ListOfTipeKendaraan ) : ListOfTipeKendaraan => {
                return {
                    id : item.id ?? 0,
                    rowStatus : item.rowStatus ?? 0,
                    model : item.model ?? '',
                    cc : item.cc ?? 0,
                    tipe : item.tipe ?? '',
                    idTipeKendaraanAHM : item.idTipeKendaraanAHM ?? 0,
                    status : item.status ?? '',
                    kodeTipeKendaraanAHM : item.kodeTipeKendaraanAHM ?? '',
                    aktif : item.aktif ?? false,
                    namaTipe : item.namaTipe ?? '',
                }
            } )
            setListTipeKendaraan( dataResp );
            setTotalPage( Number( (response.data.totalRow / 10).toFixed() ) + 1 );
        }
        setLoading( false );
    }

    useEffect( () => {
        getTipeKendaraan( page, '' )
        return () => {
            getTipeKendaraan( page, '' )
        };
    }, [] );

    return {
        header,
        listTipeKendaraan, setListTipeKendaraan, loading,
        page, totalPage, setPage, test, getTipeKendaraan
    }

}

export default TipeKendaraanViewModel
