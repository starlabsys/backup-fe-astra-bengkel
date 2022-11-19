import { useEffect, useState } from "react";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";
import SparePartServices from "../../../../domain/services/SparePartServices/SparePartServices";


const SparePartController = () => {

    const [ sparepart, setSparepart ] = useState<InterfaceSparePart[]>( [] as InterfaceSparePart[] );

    const getSparepart = async () => {
        const response = await SparePartServices.get();
        if ( response.message === "success" ) {
            const resp : [] = response.data
            const listData : InterfaceSparePart[] = resp.map( ( item : any, data ) => {
                // if ( data < 10 ) {
                return {
                    code : item.parts_code,
                    name : item.parts_name,
                    group : item.parts_name,
                    qty : item.parts_qty.toString,
                    price : `Rp. ${ item.parts_price }`,
                    priceNasional : `Rp. ${ item.parts_price }`
                }
                // }
            } )
            setSparepart( listData )
        }
    }

    useEffect( () => {
        getSparepart().then( () => {
        } );
        return () => {

        };
    }, [] );


    return {
        sparepart
    }

}
export default SparePartController
