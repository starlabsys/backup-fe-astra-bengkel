import { useContext, useState } from "react";
import { InterfaceDataAdmin } from "../../interface/InterfaceDataAdmin";
import AuthRepository from "../../../../../domain/repository/auth/AuthRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceAddUser } from "../../../../../domain/repository/auth/interface/InterfaceAddUser";
import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { InterfaceAddAdmin } from "../../../../../domain/repository/admin/interface/InterfaceAddAdmin";


const TambahAdminVM = () => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const [ dataAdmin, setDataAdmin ] = useState<InterfaceDataAdmin>();

    const saveData = async () => {
        loadingLottie.openLoading( true )
        const sendData : InterfaceAddAdmin = {
            username : dataAdmin?.username ?? '',
            loginData : dataAdmin?.loginData ?? '',
            fullName : dataAdmin?.namaLengkap ?? '',
            kodeBengkel : dataAdmin?.kodeBengkel ?? '',
            namaBengkel : dataAdmin?.namaBengkel ?? '',
            role : dataAdmin?.role?.value ?? '',
            password : dataAdmin?.password ?? '',
        }
        console.log( sendData );
        for ( const sendDataKey in sendData ) {
            // @ts-ignore
            if ( sendData[ sendDataKey ] === '' ) {
                context.toastMessage( 'Data tidak boleh ada yang kosong' )
                context.openToast( true )
                context.onError( true )
                return
            }
        }

        const resp = await AdminRepository.create( context, sendData )
        loadingLottie.openLoading( false )
    }

    return {
        dataAdmin,
        setDataAdmin,
        saveData
    }
}

export default TambahAdminVM
