import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { DatumModelAdminUser } from "../../../../../domain/models/Admin/ModelAdminUser";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";


const AdminViewModel = () => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const [ listAdmin, setListAdmin ] = useState<DatumModelAdminUser[]>( [] );

    const getListAdmin = async () => {
        loadingLottie.openLoading( true )
        const resp = await AdminRepository.get( context );
        if ( resp !== null ) {
            // console.log( resp );
            setListAdmin( resp.data ?? [] );
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
        deleteAdmin
    }
}
export default AdminViewModel
