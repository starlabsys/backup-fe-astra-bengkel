import { useContext, useEffect, useState } from "react";
import KendaraanRepository from "../../../../domain/repository/kendaraan/KendaraanRepository";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ListofKendaraan } from "../../../../domain/models/Kendaraan/ModelGetListKendaraan";
import FormatDate from "../../../../utils/format/formatDate";


const KendaraanController = () => {

    const header = [
        {
            label : "#",
            name : "#",
        },
        {
            label : 'No Polisi',
            name : 'noPolisi',
        },
        {
            label : 'No Mesin',
            name : 'noMesin',
        },
        {
            label : 'No Rangka',
            name : 'noRangka',
        },
        {
            label : 'Customer',
            name : 'customer',
        },
        {
            label : 'Type',
            name : 'tipe',
        },
        {
            label : 'Warna',
            name : 'warna',
        },
        {
            label : 'Tahun Rakit',
            name : 'tahunRakit',
        },
        {
            label : 'Status',
            name : 'labelAktif',
        },
        {
            label : 'Action',
            name : 'action',
        },
    ]
    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );

    const [ page, setPage ] = useState( 1 );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ noPolisi, setNoPolisi ] = useState( '' );

    const [ listKendaraan, setListKendaraan ] = useState<ListofKendaraan[]>( [] );

    const getListKendaraan = async ( pageNumber : number, plat : string ) => {
        setLoading( true );
        const resp = await KendaraanRepository.getKendaraan( context, {
            action : 0,
            noPolisi : plat,
            noMesin : "",
            pageNumber : pageNumber,
            pageSize : 10,
            totalRow : 0,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp !== null ) {
            setListKendaraan( resp.data.listofKendaraan.map( ( item, index ) : ListofKendaraan => {
                return {
                    ...item,
                    tahunRakit : FormatDate.dateToYear( item.tahunRakit )
                }
            } ) );
            setTotalPage( resp.data.totalRow );
        }
        setLoading( false );
    }

    useEffect( () => {
        getListKendaraan( page, noPolisi );
        return () => {
            getListKendaraan( page, noPolisi );
        };
    }, [] );

    return {
        loading,
        page, setPage,
        noPolisi, setNoPolisi,
        getListKendaraan, header,
        listKendaraan, totalPage
    }

}
export default KendaraanController

