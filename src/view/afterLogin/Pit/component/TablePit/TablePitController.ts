import PitServices from "../../../../../domain/services/PitServices/PitServices";
import { useContext, useEffect, useState } from "react";
import { InterfacePit } from "../../interface/InterfacePit";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../../../../domain/interface/InterfacePagination";


const TablePitController = () => {
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ setPage, setSetPage ] = useState( 0 );
    const [ totalRow, setTotalRow ] = useState( 0 );
    const [ pit, setPit ] = useState<InterfacePit[]>( [] );
    const [ loading, setLoading ] = useState( false );

    const context = useContext( IAlertDialogContext );

    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode PIT',
            name : 'kode_pit',
        },
        {
            label : 'Type PIT',
            name : 'tipe_pit',
        },
        {
            label : 'Status',
            name : 'is_active',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]


    const getData = async ( props : InterfacePagination ) => {
        setLoading( true )
        const resp = await PitServices.getData( context, {
            page : props.page,
            limit : props.limit,
        } )
        if ( resp.message === "success" ) {
            const data : [] = resp.data.result
            setTotalPage( resp.data.totalPage )
            setTotalRow( resp.data.totalRow )
            setPit( data.map( ( item : any ) => {
                return {
                    id : item.id,
                    kode_pit : item.kode_pit,
                    tipe_pit : item.tipe_pit,
                    is_active : item.is_active,

                }
            } ) )
        }
        setLoading( false )
    }

    useEffect( () => {
        getData( {
            page : 0,
            limit : 10,
        } ).then( () => {
        } )
        return () => {
            getData( {
                page : 0,
                limit : 10,
            } ).then( () => {
            } )

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return {
        header,
        pit,
        loading,
        getData,
        totalPage,
        totalRow,
        context, setPage, setSetPage
    }
}
export default TablePitController
