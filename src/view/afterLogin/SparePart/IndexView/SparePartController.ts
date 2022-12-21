import { useContext, useEffect, useState } from "react";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";
import SparePartServices from "../../../../domain/services/SparePartServices/SparePartServices";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";


interface InterfaceGetDataSparepart {
    page : number;
    search? : string;
}

const SparePartController = () => {
    const context = useContext( IAlertDialogContext );
    const [ sparepart, setSparepart ] = useState<InterfaceSparePart[]>( [] as InterfaceSparePart[] );
    const [ loading, setLoading ] = useState( false );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ page, setPage ] = useState( 0 );

    const getSparepart = async ( props : InterfaceGetDataSparepart ) => {
        setLoading( true )
        const response = await SparePartServices.get( context, {
            page : props.page,
            limit : 10,
            search : props.search ?? ""
        } );
        if ( response.message === "success" ) {
            const resp : [] = response.data.result;
            const listData : InterfaceSparePart[] = resp.map( ( item : any, data ) => {
                return {
                    id : item.id,
                    code : item.parts_code,
                    name : item.parts_name,
                    group : item.parts_name,
                    qty : item.parts_qty.toString,
                    price : `Rp. ${ item.parts_price }`,
                    priceNasional : `Rp. ${ item.parts_price }`,
                    status : true,
                }
            } )
            setTotalPage( response.data.totalPage );
            setSparepart( ( prevState ) => [
                // ...prevState,
                ...listData
            ] );
        }
        setLoading( false )
    }

    useEffect( () => {
        getSparepart( { page : page } ).then( () => {
        } );
        return () => {
            getSparepart( { page : page } ).then( () => {
            } );
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const changePage = ( props : InterfaceGetDataSparepart ) => {
        getSparepart( {
            page : props.page,
            search : props.search
        } ).then( () => {
        } );
    }


    return {
        sparepart,
        loading,
        totalPage, page,
        changePage
    }

}
export default SparePartController
