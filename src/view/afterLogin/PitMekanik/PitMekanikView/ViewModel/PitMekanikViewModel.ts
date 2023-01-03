import PitMekanikRepository from "../../../../../domain/repository/pit-mekanik/PitMekanikRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { ListOfPITMekanik } from "../../../../../domain/models/PitMekanik/ModelGetListPitMekanik";


export const PitMekanikViewModel = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode PIT',
            name : 'kodePit',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]

    const [ listPitMekanik, setListPitMekanik ] = useState<ListOfPITMekanik[]>( [] );

    const getData = async ( kodePit : string ) => {
        loadingLottie.openLoading( true )
        const data = await PitMekanikRepository.getData( context, {
            mekanik : "",
            kodePIT : kodePit,
        } )
        if ( data !== null ) {
            setListPitMekanik( data?.data.listOfPITMekanik.map( ( item, index ) : ListOfPITMekanik => {
                return {
                    kodePit : item.kodePit,
                    pitID : item.pitID,
                    listMekanik : item.listMekanik
                }
            } ) );
        }
        loadingLottie.openLoading( false )
    }

    useEffect( () => {
        getData( '' );
        return () => {
        };
    }, [] );

    return {
        header,
        getData,
        listPitMekanik,
    }
}
