import { useContext, useEffect, useState } from "react";
import { ListOfTipeKendaraan } from "../../../../domain/models/TipeKendaraan/ModelTipeKendaraan";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import TipeKendaraanRepository from "../../../../domain/repository/tipe-kendaraan/TipeKendaraanRepository";
import { ListDropDown } from "../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import {
    DataSourceIDTipeKendaraan
} from "../../../../domain/repository/tipe-kendaraan/interface/InterfaceEditTipeKendaraan";


const _ = require( 'lodash' );


const EditTipeKendaraanViewModel = ( data : ListOfTipeKendaraan ) => {

    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );

    const [ tipe, setTipe ] = useState( '' );
    const [ namaTipe, setNamaTipe ] = useState( '' );
    const [ status, setStatus ] = useState( false );
    const [ ccMesin, setCcMesin ] = useState( 0 );
    const [ model, setModel ] = useState( '' );
    const [ kodeAHM, setKodeAHM ] = useState( '' );
    const [ idTipeKendaraan, setIdTipeKendaraan ] = useState( 0 );
    const [ id, setId ] = useState( 0 );
    // const [ dataSourceIDTipeKendaraan, setDataSourceIDTipeKendaraan ] = useState( [] );
    // const [ gridProps, setGridProps ] = useState( {} );
    // const [ action, setAction ] = useState( 0 );

    const [ listModel, setListModel ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKodeAHM, setListKodeAHM ] = useState<InterfacePropsDropDown[]>( [] );

    const [ listKodeResult, setListKodeResult ] = useState<ListDropDown[]>( [] );

    const getModel = async () => {
        const resp = await DropDownRepository.getGroup( context, [ {
            tipe : 11,
            label : '',
            nilai : ''
        } ] )
        if ( resp ) {
            const resultData : InterfacePropsDropDown[] = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListModel( resultData );
        }
    }

    const getKodeAHM = async () => {
        const resp = await DropDownRepository.getGroup( context, [ {
            tipe : 21,
            label : '',
            nilai : ''
        } ] )
        if ( resp ) {
            const resultData : InterfacePropsDropDown[] = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : item.tipe,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListKodeAHM( resultData );
            setListKodeResult( resp.data.listDropDown );
        }
    }

    const editData = async () => {
        const resp = await TipeKendaraanRepository.editData( context, {
            tipe : tipe,
            namaTipe : namaTipe,
            model : model,
            idTipeKendaraanAHM : idTipeKendaraan,
            id : id,
            aktif : status,
            kodeTipeKendaraanAHM : kodeAHM,
            cCMesin : ccMesin,
            action : 1,
            dataSourceIDTipeKendaraan : listKodeResult.map( ( item, index ) : DataSourceIDTipeKendaraan => {
                return {
                    value : item.nilai,
                    text : item.label,
                    additionalNilai : ''
                }
            } ),
            gridProps : {
                skip : 0,
                pageSize : 10,
                totalRecords : 1083
            }
        } )
    }

    useEffect( () => {
        setTipe( data.tipe );
        setNamaTipe( data.namaTipe );
        setStatus( data.aktif );
        setCcMesin( data.cc );
        setModel( data.model );
        setKodeAHM( data.kodeTipeKendaraanAHM ?? '' );
        setId( data.id );
        setIdTipeKendaraan( data.idTipeKendaraanAHM );
        getModel();
        getKodeAHM();
        return () => {
            getModel();
            getKodeAHM();
        };
    }, [] );


    return {
        tipe, setTipe,
        namaTipe, setNamaTipe,
        status, setStatus,
        ccMesin, setCcMesin,
        model, setModel,
        kodeAHM, setKodeAHM,
        listModel, setListModel,
        listKodeAHM, setListKodeAHM,
        idTipeKendaraan, setIdTipeKendaraan,
        editData
    }
}

export default EditTipeKendaraanViewModel
