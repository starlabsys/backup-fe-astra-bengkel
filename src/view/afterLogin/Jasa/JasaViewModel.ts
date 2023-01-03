import { useContext, useEffect, useState } from "react";
import JasaRepository from "../../../domain/repository/jasa/JasaRepository";
import { IAlertDialogContext } from "../../../core/utils/error/IAlertDialog";
import { ListofJasa } from "../../../domain/models/Jasa/ModelJasa";
import { InterfaceListJasa } from "./interface/InterfaceListJasa";
import Currency from "../../../utils/format/currency";


const JasaViewModel = () => {

    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );
    const [ page, setPage ] = useState( 1 );
    const [ size, setSize ] = useState( 10 );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode',
            name : 'kode',
        },
        {
            label : 'Nama',
            name : 'nama',
        },
        {
            label : 'Group',
            name : 'group',
        },
        {
            label : 'Harga Jual',
            name : 'hargaJual',
        },
        {
            label : 'Pajak Jual',
            name : 'pajakJual',
        },
        {
            label : 'Waktu Kerja',
            name : 'waktuKerja',
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


    const [ listJasa, setListJasa ] = useState<InterfaceListJasa[]>( [] );

    const getJasa = async ( pageData : number, sizeData : number, kodeJasa : string, namaJasa : string ) => {
        setLoading( true );
        const resp = await JasaRepository.getJasa( context, {
            page : pageData,
            size : sizeData,
            kodeJasa : kodeJasa,
            namaJasa : namaJasa
        } )

        if ( resp?.errorCode === '00' ) {
            const listData : InterfaceListJasa[] = resp.data.listofJasa.map( ( item : ListofJasa, index : number ) : InterfaceListJasa => {
                return {
                    id : item.id,
                    kode : item.kodeJasa,
                    hargaJual : Currency.stringToIdr( item.hargaJual.toString() ),
                    pajakJual : Currency.stringToIdr( item.pajakJual.toString() ),
                    waktuKerja : item.waktuKerja,
                    nama : item.namaJasa,
                    group : item.labelGrupJasa,
                    status : item.labelAktif,
                }
            } );
            const totalRow = (resp.data.totalRow / 10).toFixed();
            setTotalPage( Number( totalRow ) + 1 );
            // const resultData : InterfaceListJasa[] = listData as InterfaceListJasa[];
            setListJasa( () => [
                ...listData
            ] );

        }
        setLoading( false );

    }

    useEffect( () => {
        getJasa( page, size, '', '' );
        return () => {
            getJasa( page, size, '', '' );
        }
    }, [] )

    const cetakLaporan = async () => {
        const resp = await JasaRepository.cetakLaporan( context, {} );
        console.log( resp );
    }

    return {
        listJasa,
        loading,
        page, setPage,
        size, setSize,
        totalPage, setTotalPage,
        header,
        getJasa, cetakLaporan
    }
}

export default JasaViewModel
