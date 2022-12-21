import { LoginInterface } from "./interface/LoginInterface";
import { post } from "../../../core/api/api";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { ConvertModelLogin, ModelLogin } from "../../models/Auth/ModelLogin";


class AuthRepository {
    public login = async ( context : InterfaceError, props : LoginInterface ) : Promise<ModelLogin | null> => {
        const resp = await post( context, {
            url : '/auth/login',
            reqBody : {
                'username' : props.username,
                'password' : props.password
            }
        } );
        if ( resp !== null ) {
            return ConvertModelLogin.toModelLogin( resp );
        }
        return null;
    }
}

export default new AuthRepository();
