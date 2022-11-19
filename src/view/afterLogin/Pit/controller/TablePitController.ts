import PitServices from "../../../../domain/services/PitServices/PitServices";
import { useEffect, useState } from "react";
import { InterfacePit } from "../interface/InterfacePit";


const TablePitController = () => {
    const [ pit, setPit ] = useState<InterfacePit[]>( [] as InterfacePit[] );
    const [ loading, setLoading ] = useState( false );
    const getData = async () => {
        setLoading( true )
        const resp = await PitServices.getData()
        if ( resp.message === "success" ) {
            const data : [] = resp.data
            const result : InterfacePit[] = data.map( ( item : any ) => {
                return {
                    id : item.id,
                    userId : item.user_id,
                    name : item.dealer_number,
                    dealerId : item.dealer_name,
                    address : item.address
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
    }, [] )
    return {
        pit,
        loading
    }
}
export default TablePitController
