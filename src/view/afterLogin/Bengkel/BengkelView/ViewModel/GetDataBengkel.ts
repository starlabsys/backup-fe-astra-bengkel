import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import BengkelServices from "../../../../../domain/services/BengkelServices/BengkelServices";
import { InterfaceBengkel } from "../../../../../domain/repository/bengkel/interface/interfaceBengkel";
import { InterfacePagination } from "../../../../../domain/interface/InterfacePagination";


export const GetDataBengkel = () => {
    const context = useContext( IAlertDialogContext );

    const [ page, setPage ] = useState( 0 );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ loading, setLoading ] = useState( false );
    const [ data, setData ] = useState<InterfaceBengkel[]>( [] );

    const getDataBengkel = async ( props : InterfacePagination ) => {
        console.log( props.search );
        setLoading( true );
        const resp = await BengkelServices.getBengkel( context, {
            page : props.page,
            limit : 10,
            search : props.search,
        } )

        if ( resp.statusCode === 200 ) {
            const respData : [] = resp.data;
            setData( respData.map( ( item : any ) => {
                return {
                    id : item.id,
                    dealerId : item.dealer_number,
                    dealerName : item.dealer_name,
                    dealerAddress : item.address,
                    userId : item.user_id,
                    status : true,
                }
            } ) );
            setTotalPage( resp.data.totalPage );
        }

    }

    useEffect( () => {
        getDataBengkel( {
            page : page,
            limit : 10,
            search : ''
        } ).then( () => setLoading( false ) );
        return () => {
            getDataBengkel( {
                page : page,
                limit : 10,
                search : ''
            } ).then( () => setLoading( false ) );
        };
    }, [] );


    return {
        page, setPage,
        totalPage, setTotalPage,
        loading, setLoading,
        data, setData,
        getDataBengkel
    }
}
