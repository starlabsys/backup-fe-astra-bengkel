import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceDataAdmin } from "../../interface/InterfaceDataAdmin";
import { InterfaceAddAdmin } from "../../../../../domain/repository/admin/interface/InterfaceAddAdmin";
import AdminRepository from "../../../../../domain/repository/admin/AdminRepository";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { useRouter } from "next/router";


const StatusVM = ( id : string ) => {
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext )

    const listRole : InterfacePropsDropDown[] = [
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

    const [ ubahPassword, setUbahPassword ] = useState( false );
    const [ password, setPassword ] = useState( '' );

    const [ dataAdmin, setDataAdmin ] = useState<InterfaceDataAdmin>();

    // const [ detailData, setDetailData ] = useState<InterfaceDataAdmin>();

    const getDetail = async ( id : string ) => {
        const resp = await AdminRepository.detail( context, id )
        if ( resp !== null ) {
            setDataAdmin( {
                role : listRole.find( ( item ) => item.value === resp?.data?.role ) ?? {} as InterfacePropsDropDown,
                kodeBengkel : resp?.data?.kode_bengkel ?? '',
                loginData : resp?.data?.login_data ?? '',
                password : '',
                username : resp?.data?.username ?? '',
                namaBengkel : resp?.data?.nama_bengkel ?? '',
                namaLengkap : resp?.data?.full_name ?? '',
            } )
        }
    }

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
        // console.log( sendData );
        // for ( const sendDataKey in sendData ) {
        //     // @ts-ignore
        //     if ( sendData[ sendDataKey ] === '' ) {
        //         context.toastMessage( 'Data tidak boleh ada yang kosong' )
        //         context.openToast( true )
        //         context.onError( true )
        //         return
        //     }
        // }

        const resp = await AdminRepository.edit( context, id, sendData )
        loadingLottie.openLoading( false )
    }

    const changePassword = async () => {
        loadingLottie.openLoading( true )
        const resp = await AdminRepository.changePassword( context, id, password ?? '' )
        loadingLottie.openLoading( false )
    }

    const route = useRouter()

    useEffect( () => {
        // console.log( id );
        if ( id === '' || id === undefined ) {
            route.back();
        }
        else {
            getDetail( id )
        }
        return () => {

        };
    }, [] );


    return {
        dataAdmin,
        setDataAdmin,
        saveData, listRole, ubahPassword, setUbahPassword, password, setPassword, changePassword
    }
}

export default StatusVM
