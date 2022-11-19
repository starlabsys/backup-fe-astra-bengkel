import { useEffect, useState } from "react";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";
import SparePartServices from "../../../../domain/services/SparePartServices/SparePartServices";


const SparePartController = () => {

    const [ sparepart, setSparepart ] = useState<InterfaceSparePart[]>( [] as InterfaceSparePart[] );
    const [ loading, setLoading ] = useState( false );

    const getSparepart = async () => {
        setLoading( true )
        const response = await SparePartServices.get();
        if ( response.message === "success" ) {
            const resp : [] = response.data
            const listData : InterfaceSparePart[] = resp.map( ( item : any, data ) => {
                return {
                    code : item.parts_code,
                    name : item.parts_name,
                    group : item.parts_name,
                    qty : item.parts_qty.toString,
                    price : `Rp. ${ item.parts_price }`,
                    priceNasional : `Rp. ${ item.parts_price }`
                }
            } )
            setSparepart( listData )
        }
        setLoading( false )
    }

    useEffect( () => {
        getSparepart().then( () => {
        } );
        return () => {

        };
    }, [] );


    return {
        sparepart,
        loading
    }

}
export default SparePartController