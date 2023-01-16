import { useContext, useState } from "react";
import { InterfaceDataAdmin } from "../../interface/InterfaceDataAdmin";
import AuthRepository from "../../../../../domain/repository/auth/AuthRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceAddUser } from "../../../../../domain/repository/auth/interface/InterfaceAddUser";
import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { InterfaceAddAdmin } from "../../../../../domain/repository/admin/interface/InterfaceAddAdmin";
import { useRouter } from "next/router";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";


const TambahAdminVM = () => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )
    const route = useRouter()

    const role : InterfacePropsDropDown[] = [
        {
            id : 1,
            value : 'user',
            name : 'User'
        },
        {
            id : 2,
            value : 'admin',
            name : 'Admin'
        }
    ]

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
                loadingLottie.openLoading( false )
                return
            }
        }

        const resp = await AdminRepository.create( context, sendData )
        if ( resp === null ) {
            // route.reload()
            setDataAdmin( {
                role : role[ 0 ],
                username : '',
                loginData : '',
                password : '',
                namaLengkap : '',
                kodeBengkel : '',
                namaBengkel : '',
            } )
        }
        loadingLottie.openLoading( false )
    }

    return {
        dataAdmin,
        setDataAdmin,
        saveData, role,
    }
}

export default TambahAdminVM
