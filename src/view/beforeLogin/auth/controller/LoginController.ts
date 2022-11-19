import { useRouter } from "next/router";
import { useState } from "react";
import { AlertInterface } from "./interface/alert_interface";
import AuthServices from "../../../../domain/services/AuthServices/AuthServices";
import { ValidateLogin } from "./ValidateLogin";
import { IConstantEnum } from "../../../../utils/enum/IConstantEnum";
import { RoleEnum } from "../../../../utils/enum/RoleEnum";
import { setDataStorage } from "../../../../utils/localStorage/LocalStorage";
import { setICookies } from "../../../../utils/cookies/ICookies";


export const LoginViewModel = () => {
    const route = useRouter()
    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ loading, setLoading ] = useState( false );
    const [ hide, setHide ] = useState( true );
    const [ modal, setModal ] = useState( false );
    const [ validator, setValidator ] = useState<AlertInterface>( {
        status : false,
        message : "",
        isSuccess : false
    } );


    const login = async () => {
        setLoading( true );
        const validate = ValidateLogin( { username, password } );
        if ( !validate ) {
            setValidator( {
                status : true,
                message : "Username & Password is required",
                isSuccess : false
            } );
            setLoading( false );
            return;
        }

        const resp = await AuthServices.login( {
            username : username,
            password : password
        } )

        if ( resp.message === 'success' ) {
            console.log( resp.data )
            await setDataStorage( IConstantEnum.username, resp.data.person.username );
            await setDataStorage( IConstantEnum.id, resp.data.person.id );
            await setDataStorage( IConstantEnum.role, resp.data.person.role === 'Admin' ? RoleEnum.Admin : RoleEnum.SuperAdmin );
            await setICookies( IConstantEnum.token, resp.data.token, 1 );
            setLoading( false );
            route.replace( '/' ).then( () => {
            } )
        }
        else {
            setValidator( {
                status : true,
                message : resp.data.message,
                isSuccess : false
            } )
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
        validator,
        setValidator,
        login,
        hide,
        setHide,
        modal,
        setModal,
        // error
    }
}
