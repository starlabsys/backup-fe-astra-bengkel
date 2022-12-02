import { useContext, useEffect, useState } from "react";
import StateServices from "../../../../../domain/services/StateServices/StateServices";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";


const StateViewModel = () => {
    const [ activeSearch, setActiveSearch ] = useState( false );
    const [ province, setProvince ] = useState<InterfacePropsDropDown[]>( [] );
    const [ searchProvince, setSearchProvince ] = useState<InterfacePropsDropDown[]>( [] );
    const context = useContext( IAlertDialogContext );

    useEffect( () => {
        getProvince().then( ( res : any ) => {
        } );
        return () => {

        };
    }, [] );


    const changeProvince = ( value : string ) => {
        if ( value === "" ) {
            setActiveSearch( false );
        }
        else {
            setActiveSearch( true );
            // console.log( "value", value );
            setSearchProvince( province.filter( ( item : InterfacePropsDropDown ) => item.value.toLowerCase().includes(
                value.toLowerCase() ) ) );
        }
    };


    const getProvince = async () => {
        const resp = await StateServices.getProvince( context );
        if ( resp.statusCode === 200 ) {
            const data : [] = resp.data;
            setProvince( data.map( ( item : any ) => {
                return {
                    id : item.id,
                    name : item.name,
                    value : item.name
                }
            } ) );
        }
    }

    return {
        province,
        changeProvince,
        searchProvince,
        activeSearch
    }
}
export default StateViewModel
