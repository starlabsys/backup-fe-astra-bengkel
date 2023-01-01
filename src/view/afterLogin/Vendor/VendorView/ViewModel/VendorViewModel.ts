import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import VendorRepository from "../../../../../domain/repository/vendor/VendorRepository";
import { InterfaceListVendor } from "../../interface/InterfaceListVendor";
import { ListOfVendor } from "../../../../../domain/models/Vendor/ModelListVendor";


export const VendorViewModel = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode',
            name : 'kodeVendor',
        },
        {
            label : 'Nama',
            name : 'namaVendor',
        },
        {
            label : 'Alamat',
            name : 'alamat',
        },
        {
            label : 'Kota',
            name : 'city',
        },
        {
            label : 'No Tlp',
            name : 'noTelepon',
        },
        {
            label : 'No HP',
            name : 'noHp',
        },
        {
            label : 'Status',
            name : 'aktif',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]

    const [ page, setPage ] = useState( 1 );
    const [ totalPage, setTotalPage ] = useState( 0 );

    const [ listVendor, setListVendor ] = useState<InterfaceListVendor[]>( [] );

    const getListVendor = async ( nama : string ) => {
        loadingLottie.openLoading( true );
        const resp = await VendorRepository.getVendor( context, {
            action : 1,
            kodeVendor : '',
            namaVendor : nama,
            alamat : "",
            kota : "",
            pageNumber : 1,
            pageSize : 10,
            totalRow : 0,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp !== null ) {
            const totalRow = (resp.data.totalRow / 10).toFixed();
            setTotalPage( Number( totalRow ) + 1 );
            setListVendor( resp.data.listOfVendor.map( ( item : ListOfVendor, index : number ) : InterfaceListVendor => {
                return {
                    id : item.id,
                    kodeVendor : item.kodeVendor,
                    namaVendor : item.namaVendor,
                    alamat : item.alamat,
                    province : item.province.value,
                    city : item.city.text,
                    noHp : item.noHp,
                    noTelepon : item.noTelepon,
                    aktif : item.aktif ? 'Aktif' : 'Tidak Aktif'
                }
            } ) );
        }
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getListVendor( '' );
        return () => {

        };
    }, [] );


    return {
        header,
        getListVendor,
        listVendor,
        totalPage, page, setPage
    }
}
