import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import PitMekanikRepository from "../../../../../domain/repository/pit-mekanik/PitMekanikRepository";
import { useRouter } from "next/router";
import { ListMekanik, ListOfPITMekanik } from "../../../../../domain/models/PitMekanik/ModelGetListPitMekanik";
import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { ListDropDown } from "../../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import {
    InterfaceListAddDataMekanik
} from "../../../../../domain/repository/pit-mekanik/interface/InterfaceAddPitMekanik";


export const EditPitMekanVM = ( id : string ) => {
    const route = useRouter()
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Nama Mekanik',
            name : 'mekanik',
        },
        {
            label : 'Status',
            name : 'labelAktif',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]

    const [ listMekanik, setListMekanik ] = useState<ListMekanik[]>( [] );
    const [ kodePit, setKodePit ] = useState<ListOfPITMekanik>();
    const [ dropDownMekanik, setDropDownMekanik ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownMekanik, setListDropDownMekanik ] = useState<ListDropDown[]>( [] );

    const getListMekanik = async () => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 13,
                nilai : "0"
            }
        ] )
        if ( resp !== null ) {
            setListDropDownMekanik( resp.data.listDropDown )
            setDropDownMekanik( resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai,
                }
            } ) )
        }
    }

    const geDetail = async ( id : string ) => {
        loadingLottie.openLoading( true )
        const data = await PitMekanikRepository.getData( context, {
            mekanik : "",
            kodePIT : id,
        } )
        if ( data !== null ) {
            if ( data.data.listOfPITMekanik.length === 0 ) {
                return route.back()
            }
            setKodePit( data.data.listOfPITMekanik[ 0 ] )
            setListMekanik( data.data.listOfPITMekanik[ 0 ].listMekanik )
        }
        loadingLottie.openLoading( false )
    }

    const saveData = async () => {
        loadingLottie.openLoading( true );
        const resp = await PitMekanikRepository.addData( context, {
            kodePit : kodePit?.kodePit ?? '',
            pitID : kodePit?.pitID ?? 0,
            action : 1,
            listMekanikPitModel : listMekanik.map( ( item ) : InterfaceListAddDataMekanik => {
                return {
                    _handlers : {},
                    _events : {
                        change : [
                            null,
                            null,
                            null
                        ],
                    },
                    mekanik : item.mekanik,
                    aktif : item.aktif,
                    guid : '',
                    kodeMekanik : item.kodeMekanik,
                    mekanikID : item.mekanikID,
                    uid : '',
                    isDisable : true,
                    labelAktif : item.labelAktif,
                }
            } ),
        } )
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        if ( id === '' || id === undefined ) {
            route.back()
        }
        geDetail( id );
        getListMekanik()
        return () => {

        };
    }, [] );
    return {
        listMekanik,
        header,
        kodePit,
        dropDownMekanik,
        setListMekanik,
        context,
        listDropDownMekanik,
        saveData,
    }
}
