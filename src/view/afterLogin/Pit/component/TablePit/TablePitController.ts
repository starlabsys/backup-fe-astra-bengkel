import PitServices from "../../../../../domain/services/PitServices/PitServices";
import { useContext, useEffect, useState } from "react";
import { InterfacePit } from "../../interface/InterfacePit";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";


const TablePitController = () => {
    const [ pit, setPit ] = useState<InterfacePit[]>( [] as InterfacePit[] );
    const [ loading, setLoading ] = useState( false );

    const context = useContext( IAlertDialogContext );

    const getData = async () => {
        setLoading( true )
        const resp = await PitServices.getData( context )
        if ( resp.message === "success" ) {
            const data : [] = resp.data
            const result : InterfacePit[] = data.map( ( item : any ) => {
                return {
                    id : item.id,
                    kode_pit : item.kode_pit,
                    tipe_pit : item.tipe_pit,
                    is_active : item.is_active
                }
            } )
            setPit( result )
        }
        setLoading( false )
    }

    useEffect( () => {
        getData().then( () => {
        } )
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return {
        pit,
        loading
    }
}
export default TablePitController
