import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import BengkelServices from "../../../../../domain/services/BengkelServices/BengkelServices";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { InterfaceBengkel } from "../../../../../domain/repository/bengkel/interface/interfaceBengkel";
import { useRouter } from "next/router";


export const TambahBengkelViewModel = ( props : InterfaceBengkel ) => {

    const route = useRouter()

    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );
    const [ id, setId ] = useState( 0 );
    const [ userId, setUserId ] = useState( '' );
    const [ dealerId, setDealerId ] = useState( '' );
    const [ nameDealer, setNameDealer ] = useState( '' );
    const [ addressDealer, setAddressDealer ] = useState( '' );
    const [ status, setStatus ] = useState( true );

    const listDataUser : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Manager 1',
            value : '1'
        },
        {
            id : 2,
            name : 'Medianto Pratama Pentadakosta',
            value : '6'
        },
        {
            id : 6,
            name : 'Febryan Caesar Pratama',
            value : '3'
        },
    ]

    const setData = () => {
        const uid = listDataUser.find( ( item ) => item.id === Number( props?.userId ) )
        setUserId( uid?.name ?? '' );
        setId( props.id ?? 0 );
        setNameDealer( props?.dealerName ?? '' );
        setDealerId( props?.dealerId?.toString() ?? '' );
        setAddressDealer( props.dealerAddress ?? '' );
        setStatus( props.status ?? true );
    }

    useEffect( () => {
        setData()
        return () => {
            setData()
        }

    }, [] );


    const addBengkel = async () => {
        setLoading( true );
        const response = await BengkelServices.addBengkel( context, {
            userId : Number( userId ),
            dealerId : Number( dealerId ),
            dealerName : 'test',
            dealerAddress : 'test'
        } )
        console.log( response );
        if ( response.statusCode === 201 ) {
            setStatus( true );
            setUserId( '' );
            setDealerId( '' );
            setNameDealer( '' );
            setAddressDealer( '' );
        }
        setLoading( false );
    }

    const updateBengkel = async () => {
        setLoading( true );
        const response = await BengkelServices.editBengkel( context, {
            id : id,
            userId : Number( userId ),
            dealerId : Number( dealerId ),
            dealerName : 'test',
            dealerAddress : 'test'
        } )
        if ( response.statusCode === 201 ) {
            setStatus( true );
            setUserId( '' );
            setDealerId( '' );
            setNameDealer( '' );
            setAddressDealer( '' );
            setLoading( false );
            return route.back()
        }
        setLoading( false );
    }

    return {
        userId, setUserId,
        id, setId,
        dealerId, setDealerId,
        nameDealer, setNameDealer,
        addressDealer, setAddressDealer,
        status, setStatus,
        loading, setLoading,
        addBengkel, updateBengkel,
        listDataUser
    }

}
