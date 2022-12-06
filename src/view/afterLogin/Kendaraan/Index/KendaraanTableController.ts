import KendaraanServices from "../../../../domain/services/KendaraanServices/KendaraanServices";
import { useContext, useEffect, useState } from "react";
import { InterfaceKendaraan } from "../interfaces/InterfaceKendaraan";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";


const KendaraanTableController = ( search : string ) => {

    const row = [ 10, 20, 30, 40, 50, 100 ]
    const [ dataRow, setDataRow ] = useState( row[ 0 ] );
    const [ page, setPage ] = useState( 0 );
    const [ openRow, setOpenRow ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ kendaraan, setKendaraan ] = useState<InterfaceKendaraan[]>( [] as InterfaceKendaraan[] );
    const context = useContext( IAlertDialogContext );
    const getDataKendaraan = async ( pageNumber : number, limit : number, search : string ) => {
        setLoading( true )
        const resp = await KendaraanServices.getDataKendaraan( context, {
            page : pageNumber,
            limit : limit,
            search : ''
        } )
        if ( resp.message === 'success' ) {
            const data : [] = resp.data.result
            setTotalPage( resp.data.totalPage )
            setKendaraan( data.map( ( item : any, index ) => {
                return {
                    id : item.id,
                    noPolisi : item.no_polisi,
                    noMesin : item.no_mesin,
                    customer : item.tipe_coming_customer,
                    status : true,
                    type : item.kode_tipe_unit,
                    warna : 'Merah',
                    noRangka : item.no_rangka,
                    tahunRakit : item.tahun_motor
                }
            } ) )
        }
        setLoading( false )
    }

    const getSearch = async ( search : string ) => {
        setLoading( true )
        const resp = await KendaraanServices.getDataKendaraan( context, {
            page : 0,
            limit : 10,
            search : search
        } )
        if ( resp.message === 'success' ) {
            const data : [] = resp.data.result
            setTotalPage( resp.data.totalPage )
            setKendaraan( data.map( ( item : any, index ) => {
                return {
                    id : item.id,
                    noPolisi : item.no_polisi,
                    noMesin : item.no_mesin,
                    customer : item.tipe_coming_customer,
                    status : true,
                    type : item.kode_tipe_unit,
                    warna : '',
                    noRangka : item.no_rangka,
                    tahunRakit : item.tahun_motor
                }
            } ) )
        }
        setLoading( false )
    }

    useEffect( () => {
        if ( search === '' ) {
            getDataKendaraan( page, dataRow, '' ).then( () => {
            } )
        }
        else {
            getSearch( search ).then( () => {
            } )
        }
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ search ] )

    return {
        kendaraan,
        loading,
        row, dataRow, setDataRow, openRow, setOpenRow,
        getDataKendaraan,
        totalPage,
        page,
        setPage,
        getSearch
    }
}
export default KendaraanTableController
