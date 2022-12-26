import PitServices from "../../../domain/services/PitServices/PitServices";
import { useContext, useEffect, useState } from "react";
import { InterfacePit } from "./interface/InterfacePit";
import { IAlertDialogContext } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../../domain/interface/InterfacePagination";
import { ILoadingContext } from "../../../component/ILoading/ILoading";
import PitRepository from "../../../domain/repository/pit/PitRepository";
import { ListOfPIT } from "../../../domain/models/Pit/ModelGetListPit";
import DropDownRepository from "../../../domain/repository/parameter/dropDown/DropDownRepository";
import { InterfacePropsDropDown } from "../../../component/ITextField/IDropDown";
import { InterfaceAddPit } from "../../../domain/repository/pit/interface/InterfaceAddPit";


const PitViewModel = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ setPage, setSetPage ] = useState( 1 );

    const [ openAdd, setOpenAdd ] = useState( {
        open : false,
        status : 'add',
    } );

    const [ pit, setPit ] = useState<ListOfPIT[]>( [] );

    const [ listKodePit, setListKodePit ] = useState<InterfacePropsDropDown[]>( [] );

    const [ status, setStatus ] = useState( true );
    const [ kodePit, setKodePit ] = useState( '' );
    const [ idPit, setIdPit ] = useState( '' );
    const [ tipePit, setTipePit ] = useState<InterfacePropsDropDown>();

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
            label : 'Type PIT',
            name : 'tipePit',
        },
        {
            label : 'Status',
            name : 'status',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ]


    const getData = async ( kodePit : string ) => {
        loadingLottie.openLoading( true );
        const resp = await PitRepository.get( context, {
            kodePIT : kodePit,
            tipePIT : "",
        } )
        if ( resp !== null ) {
            setPit( resp.data.listOfPIT );
        }
        loadingLottie.openLoading( false );
    }

    const getListKodePit = async () => {
        const resp = await DropDownRepository.getGroup( context, [ {
            tipe : 15,
            nilai : 1,
        } ] );
        if ( resp !== null ) {
            setListKodePit( resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    value : item.nilai,
                    name : item.label
                }
            } ) );
        }
    }

    const savePit = async () => {
        loadingLottie.openLoading( true );
        const sendData : InterfaceAddPit = {
            id : 0,
            action : 0,
            kodePIT : kodePit,
            tipePIT : tipePit?.name ?? '',
            aktif : status,
        }
        const resp = await PitRepository.add( context, sendData )
        setOpenAdd( {
            open : false,
            status : 'add',
        } );
        loadingLottie.openLoading( false );
    }

    const updatePit = async () => {
        loadingLottie.openLoading( true );
        const sendData : InterfaceAddPit = {
            id : Number( idPit ),
            action : 1,
            kodePIT : kodePit,
            tipePIT : tipePit?.name ?? '',
            aktif : status,
        }
        const resp = await PitRepository.add( context, sendData )
        setOpenAdd( {
            open : false,
            status : 'add',
        } );
        getData( '' );
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getData( "" ).then( () => {
            getListKodePit();
        } );
        setOpenAdd( {
            open : false,
            status : 'add',
        } )
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return {
        header,
        pit,
        getData,
        context, setPage, setSetPage,
        openAdd, setOpenAdd,
        listKodePit,
        status, setStatus,
        kodePit, setKodePit,
        tipePit, setTipePit,
        savePit,
        updatePit,
        idPit, setIdPit,
    }
}
export default PitViewModel
