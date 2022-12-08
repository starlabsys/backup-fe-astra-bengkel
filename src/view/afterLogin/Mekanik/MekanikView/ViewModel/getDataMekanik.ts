import { useContext, useEffect, useState } from "react";
import { InterfaceMekanik } from "../../interface/interfaceMekanik";
import MekanikServices from "../../../../../domain/services/MekanikServices/MekanikServices";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";


export const GetDataMekanik = () => {

    const context = useContext( IAlertDialogContext );

    const [ mekanik, setMekanik ] = useState<InterfaceMekanik[]>( [] );

    const getData = async () => {
        const data = await MekanikServices.getData( context )
        console.log( data );
    }

    useEffect( () => {
        return () => {
            getData().then( () => {
            } )
        };
    }, [] );


    return {
        context,
        getData,
        mekanik,
    }

}
