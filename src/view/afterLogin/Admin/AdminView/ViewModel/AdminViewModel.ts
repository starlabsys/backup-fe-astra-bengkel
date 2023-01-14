import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { DatumModelAdminUser } from "../../../../../domain/models/Admin/ModelAdminUser";


const AdminViewModel = () => {
    const context = useContext( IAlertDialogContext )

    const [ listAdmin, setListAdmin ] = useState<DatumModelAdminUser[]>( [] );

    const getListAdmin = async () => {
        const resp = await AdminRepository.get( context );
        if ( resp !== null ) {
            // console.log( resp );
            setListAdmin( resp.data ?? [] );
        }
    }

    useEffect( () => {
        getListAdmin();
        return () => {

        };
    }, [] );


    return {
        listAdmin
    }
}
export default AdminViewModel
