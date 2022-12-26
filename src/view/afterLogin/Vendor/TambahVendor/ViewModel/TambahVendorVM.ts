import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { ListDropDown } from "../../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import {
    InterfaceAddDataKontakPerson,
    InterfaceAddDataVendor,
    InterfaceSyaratKredit
} from "../../interface/InterfaceAddDataVendor";


export const TambahVendorVM = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ listProvince, setListProvince ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKab, setListKab ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKec, setListKec ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKel, setListKel ] = useState<InterfacePropsDropDown[]>( [] );

    const [ vendor, setVendor ] = useState<InterfaceAddDataVendor>( {} as InterfaceAddDataVendor );
    const [ kontakPerson, setKontakPerson ] = useState<InterfaceAddDataKontakPerson>();
    const [ syaratKredit, setSyaratKredit ] = useState<InterfaceSyaratKredit>();

    const getDataArea = async () => {
        loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getDropDown( context, [
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "AlasanIngatService"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "HubunganDenganPemilik"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "Province"
            },
            {
                lastSyncTime : "1900-01-01 00:00:00",
                objectName : "Lookup"
            }
        ] )
        if ( resp !== null ) {
            setListProvince( resp.data.province.map( ( item : any ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.text,
                    value : item.value,
                }
            } ) );
        }
        loadingLottie.openLoading( false );
    }

    const getAreaDetail = async ( type : number, nilai : number | string ) => {
        loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : type,
                label : 'sample string 2',
                nilai : nilai
            }
        ] )
        if ( resp !== null ) {
            if ( type === 5 ) {
                setListKab( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai,
                    }
                } ) );
            }
            if ( type === 6 ) {
                setListKec( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai,
                    }
                } ) );
            }
            if ( type === 7 ) {
                setListKel( resp.data.listDropDown.map( ( item : ListDropDown, index ) : InterfacePropsDropDown => {
                    return {
                        id : index,
                        name : item.label,
                        value : item.nilai,
                        add : item.additionalNilai
                    }
                } ) );
            }
        }
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getDataArea();
        return () => {
        };
    }, [] );


    return {
        getAreaDetail,
        listProvince, listKab, listKec, listKel,
        vendor, setVendor, kontakPerson, setKontakPerson, syaratKredit, setSyaratKredit,
    }
}
