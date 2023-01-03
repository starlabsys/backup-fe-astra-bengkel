import { ValidateLogin } from '../../../controller/ValidateLogin';
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthServices from "../../../../../domain/services/AuthServices/AuthServices";
import { IConstantEnum } from "../../../../../utils/enum/IConstantEnum";
import { RoleEnum } from "../../../../../utils/enum/RoleEnum";
import { setDataStorage } from "../../../../../utils/localStorage/LocalStorage";
import { setICookies } from "../../../../../utils/cookies/ICookies";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";


export const LoginViewModel = () => {
    const route = useRouter()
    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ loading, setLoading ] = useState( false );
    const [ hide, setHide ] = useState( true );
    const [ modal, setModal ] = useState( false );
    const context = useContext( IAlertDialogContext );


    const login = async () => {

        setLoading( true );
        const validate = ValidateLogin( { username, password } );
        if ( !validate ) {
            setLoading( false );
            context.giveMessage( "Username & password is required" )
            context.setOpen( true )
            context.onError( true )
            return;
        }

        const resp = await AuthServices.login( context, {
            username : username,
            password : password
        } )

        if ( resp?.errorCode === '00' ) {
            await setDataStorage( IConstantEnum.username, resp.data.result.name );
            // await setDataStorage( IConstantEnum.id, resp.data.result.id );
            await setDataStorage( IConstantEnum.role, resp.data.result.role === 'admin' ? RoleEnum.Admin : RoleEnum.User );
            await setICookies( IConstantEnum.token, resp.data.token, 1 );
            setLoading( false );
            route.replace( '/' ).then( () => {
            } )
        }
        else {
            setLoading( false );
        }
    }


    return {
        route,
        username,
        setUsername,
        password,
        setPassword,
        loading,
        setLoading,
        login,
        hide,
        setHide,
        modal,
        setModal,
    }
}
