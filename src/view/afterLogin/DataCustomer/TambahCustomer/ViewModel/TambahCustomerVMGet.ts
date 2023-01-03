import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { useContext, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";


const TambahCustomerVMGet = () => {
    const context = useContext( IAlertDialogContext );

    const [ listKab, setListKab ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKec, setListKec ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKel, setListKel ] = useState<InterfacePropsDropDown[]>( [] );

    const getKab = async () => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 5,
                nilai : '20',
                label : 'sample string 2'
            }
        ] )
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListKab( dataResult );
        }
    }

    const getKec = async ( kab : string ) => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 6,
                label : "sample string 2",
                nilai : kab,
            }
        ] )
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListKec( dataResult );
        }
    }

    const getKel = async ( kec : string ) => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 7,
                label : "sample string 2",
                nilai : kec,
            }
        ] )
        if ( resp !== null ) {
            const dataResult = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index,
                    name : item.label,
                    value : item.nilai,
                    add : item.additionalNilai
                }
            } )
            setListKel( dataResult );
        }
    }

    return {
        listKab,
        listKec,
        listKel,
        getKab,
        getKec,
        getKel
    }
}

export default TambahCustomerVMGet
