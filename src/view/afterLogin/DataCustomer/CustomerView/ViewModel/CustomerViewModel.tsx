import { useContext, useEffect, useState } from "react";
import { InterfaceCustomer } from "../../interface/InterfaceCustomer";
import CustomerRepository from "../../../../../domain/repository/customer/CustomerRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";


export const CustomerViewModel = () => {
    const header = [
        {
            name : '#',
            label : '#'
        },
        {
            name : 'kode_customer',
            label : 'Kode Customer'
        },
        {
            name : 'nama_customer',
            label : 'Nama Customer'
        },
        {
            name : 'alamat',
            label : 'Alamat'
        },
        {
            name : 'kota',
            label : 'Kota'
        },
        {
            name : 'no_telp',
            label : 'No Tlp'
        },
        {
            name : 'no_hp',
            label : 'No HP'
        },
        {
            name : 'status',
            label : 'Status'
        },
        {
            name : 'action',
            label : 'Action'
        },
    ];

    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ loading, setLoading ] = useState( false );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ page, setPage ] = useState( 1 );

    const [ listCustomer, setListCustomer ] = useState<InterfaceCustomer[]>( [] );

    const getCustomer = async ( pageNumber : number, nama : string ) => {
        loadingLottie.openLoading( true );
        const data = await CustomerRepository.get( context, {
            "action" : 0,
            "kodePelanggan" : "",
            "alamatPelanggan" : "",
            "namaPelanggan" : nama,
            "kotaPelanggan" : "",
            "kecamatanPelanggan" : "",
            "kelurahanPelanggan" : "",
            "pageNumber" : pageNumber,
            "pageSize" : 10,
            "totalRow" : 100,
            "sortColumn" : "ID",
            "sortDirection" : 0
        } );
        if ( data !== null ) {
            const totalRow = (data.data.totalRow / 10).toFixed();
            setTotalPage( Number( totalRow ) + 1 );
            const listDataCustomer : InterfaceCustomer[] = data?.data.listPelanggan.map( ( item, index ) : InterfaceCustomer => {
                return {
                    id : item.id,
                    nama_customer : item.namaCustomer,
                    kode_customer : item.kodeCustomer,
                    alamat : item.alamat,
                    kota : item.kota,
                    no_telp : item.noTelepon,
                    no_hp : item.noHp,
                    status : item.labelAktif,
                }
            } ) ?? [];
            setListCustomer( listDataCustomer );
        }
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getCustomer( page, '' );
        return () => {

        };
    }, [] );


    return {
        header,
        loading,
        totalPage,
        page, setPage,
        listCustomer, getCustomer
    }
}
