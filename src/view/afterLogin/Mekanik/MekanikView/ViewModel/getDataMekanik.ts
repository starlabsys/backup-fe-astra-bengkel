import { useContext, useEffect, useState } from "react";
import { InterfaceListMekanik } from "../../interface/interfaceListMekanik";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import MekanikRepository from "../../../../../domain/repository/mekanik/MekanikRepository";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";


export const GetDataMekanik = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode',
            name : 'kodeKaryawan',
        },
        {
            label : 'Nama',
            name : 'namaKaryawan',
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
            label : 'No. Telp',
            name : 'noTelepon',
        },
        {
            label : 'No. Telp',
            name : 'noHP',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]

    const [ page, setPage ] = useState( 1 );
    const [ totalPage, setTotalPage ] = useState( 0 );

    const [ mekanik, setMekanik ] = useState<InterfaceListMekanik[]>( [] );

    const getData = async ( nama : string ) => {
        loadingLottie.openLoading( true );
        const resp = await MekanikRepository.getData( context, {
            action : 0,
            kodeKaryawan : "",
            namaKaryawan : nama,
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
            const totalRow = (resp.data.totalRow / 10).toFixed();
            setTotalPage( Number( totalRow ) + 1 );
            setMekanik( resp.data.listOfKaryawanModel.map( ( item, index ) : InterfaceListMekanik => {
                return {
                    id : item.id,
                    kodeKaryawan : item.kodeKaryawan,
                    namaKaryawan : item.namaKaryawan,
                    alamat : item.alamat,
                    city : item.city.text,
                    noTelepon : item.noTelepon,
                    noHP : item.noHP,
                }
            } ) )
        }
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getData( '' )
        return () => {

        };
    }, [] );


    return {
        context,
        getData,
        mekanik, header,
        totalPage, page, setPage
    }

}
