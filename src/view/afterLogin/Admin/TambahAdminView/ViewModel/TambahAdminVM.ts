import { useContext, useState } from "react";
import { InterfaceDataAdmin } from "../../interface/InterfaceDataAdmin";
import AuthRepository from "../../../../../domain/repository/auth/AuthRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceAddUser } from "../../../../../domain/repository/auth/interface/InterfaceAddUser";


const TambahAdminVM = () => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const [ dataAdmin, setDataAdmin ] = useState<InterfaceDataAdmin>();

    const saveData = async () => {
        loadingLottie.openLoading( true )
        const sendData : InterfaceAddUser = {
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

        const resp = await AuthRepository.addUser( context, sendData )
        loadingLottie.openLoading( false )
    }

    return {
        dataAdmin,
        setDataAdmin,
        saveData
    }
}

export default TambahAdminVM
