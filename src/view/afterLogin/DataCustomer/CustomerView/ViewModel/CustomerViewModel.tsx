import { useState } from "react";
import { InterfaceCustomer } from "../../interface/InterfaceCustomer";


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

    const [ loading, setLoading ] = useState( false );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ page, setPage ] = useState( 0 );

    const [ dataCustomer, setDataCustomer ] = useState<InterfaceCustomer[]>( [
        {
            id : 1,
            kode_customer : 'C001',
            nama_customer : 'PT. ABC',
            alamat : 'Jl. ABC',
            kota : 'Jakarta',
            no_hp : '08123456789',
            no_telp : '02123456789',
            status : 'Aktif',
        }
    ] );

    return {
        header,
        dataCustomer,
        loading,
        totalPage,
        page,
    }
}
