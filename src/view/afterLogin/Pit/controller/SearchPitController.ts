import { useContext, useState } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import PitServices from "../../../../domain/services/PitServices/PitServices";
import { InterfacePit } from "../interface/InterfacePit";
import { InterfacePagination } from "../../../../domain/interface/InterfacePagination";


export const SearchPitController = () => {
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ setPage, setSetPage ] = useState( 0 );
    const [ totalRow, setTotalRow ] = useState( 0 );
    const [ pit, setPit ] = useState<InterfacePit[]>( [] );
    const [ loading, setLoading ] = useState( false );
    const [ search, setSearch ] = useState( '' );
    const context = useContext( IAlertDialogContext );
    const searchData = async ( props : InterfacePagination ) => {
        setLoading( true )
        const resp = await PitServices.getData( context, {
            page : props.page,
            limit : props.limit,
            search : props.search
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
    return {
        search,
        setSearch,
        searchData,
        pit,
        loading,
        totalPage,
        totalRow,
        context, setPage, setSetPage,
        setTotalPage, setTotalRow, setPit, setLoading
    }

}
