import PitMekanikRepository from "../../../../../domain/repository/pit-mekanik/PitMekanikRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import PitRepository from "../../../../../domain/repository/pit/PitRepository";
import { ListOfPIT } from "../../../../../domain/models/Pit/ModelGetListPit";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { ListMekanik } from "../../../../../domain/models/PitMekanik/ModelGetListPitMekanik";
import {
    InterfaceListAddDataMekanik
} from "../../../../../domain/repository/pit-mekanik/interface/InterfaceAddPitMekanik";


export const TambahPitMekanikVM = () => {
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

    const [ pit, setPit ] = useState<InterfacePropsDropDown[]>( [] );
    const [ kodePit, setKodePit ] = useState<InterfacePropsDropDown>();
    const [ listMekanik, setListMekanik ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listAddMekanik, setListAddMekanik ] = useState<ListMekanik[]>( [] );

    const [ mekanik, setMekanik ] = useState<InterfacePropsDropDown>();

    const [ openAddMekanik, setOpenAddMekanik ] = useState( {
        open : false,
        data : 'add'
    } );

    const [ status, setStatus ] = useState( true );

    const getData = async ( kodePit : string ) => {
        loadingLottie.openLoading( true );
        const resp = await PitRepository.get( context, {
            kodePIT : kodePit,
            tipePIT : "",
        } )
        if ( resp !== null ) {
            setPit( resp.data.listOfPIT.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.kodePit,
                    value : item.kodePit,
                }
            } ) );
        }
        loadingLottie.openLoading( false );
    }

    const getDataMekanik = async () => {
        loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getGroup( context, [ {
            tipe : 13,
            nilai : "0"
        } ] )
        if ( resp !== null ) {
            setListMekanik( resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai,
                }
            } ) );
        }
        loadingLottie.openLoading( false );
    }

    const saveData = async () => {
        if ( kodePit === undefined ) {
            context.toastMessage( 'Kode PIT harus diisi' );
            context.openToast( true );
            context.onError( true );
            return;
        }
        loadingLottie.openLoading( true );
        const resp = await PitMekanikRepository.addData( context, {
            kodePit : kodePit?.value ?? '',
            pitID : kodePit?.id ?? 0,
            action : 0,
            listMekanikPitModel : listAddMekanik.map( ( item ) : InterfaceListAddDataMekanik => {
                return {
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
        getData( '' ).then( () => {
            getDataMekanik();
        } );
        setOpenAddMekanik( {
            open : false,
            data : 'add'
        } )
        return () => {
        };
    }, [] );


    return {
        context, loadingLottie,
        pit, setPit, getData, header,
        openAddMekanik, setOpenAddMekanik,
        status, setStatus,
        listMekanik, setListMekanik,
        listAddMekanik, setListAddMekanik,
        mekanik, setMekanik,
        kodePit, setKodePit,
        saveData
    }
}
