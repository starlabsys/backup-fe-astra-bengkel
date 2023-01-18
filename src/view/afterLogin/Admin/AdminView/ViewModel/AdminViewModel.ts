import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { DatumModelAdminUser } from "../../../../../domain/models/Admin/ModelAdminUser";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";


const AdminViewModel = () => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const [ listAdmin, setListAdmin ] = useState<DatumModelAdminUser[]>( [] );
    const [ searchListAdmin, setSearchListAdmin ] = useState<DatumModelAdminUser[]>( [] );

    const [ searchData, setSearchData ] = useState( '' );

    const getListAdmin = async () => {
        loadingLottie.openLoading( true )
        const resp = await AdminRepository.get( context );
        if ( resp !== null ) {
            // console.log( resp );
            setListAdmin( resp.data ?? [] );
        }
        loadingLottie.openLoading( false )
    }

    const getSearchListAdmin = ( searchData : string ) => {
        loadingLottie.openLoading( true )
        if ( searchData === '' ) {
            setSearchListAdmin( [] );
        }
        else {
            setSearchListAdmin( listAdmin.filter( ( item ) => {
                return item.full_name.toLowerCase().includes( searchData.toLowerCase() )
            } ) );
        }
        loadingLottie.openLoading( false )
    }

    const deleteAdmin = async ( id : number ) => {
        loadingLottie.openLoading( true )
        const resp = await AdminRepository.delete( context, id );
        if ( resp !== null ) {
            getListAdmin();
        }
        loadingLottie.openLoading( false )
    }

    useEffect( () => {
        getListAdmin();
        return () => {

        };
    }, [] );


    return {
        listAdmin,
        deleteAdmin,
        getSearchListAdmin,
        searchListAdmin, searchData, setSearchData
    }
}
export default AdminViewModel
