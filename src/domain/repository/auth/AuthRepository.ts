import { LoginInterface } from "./interface/LoginInterface";
import { post } from "../../../core/api/api";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";
import { InterfaceError } from "../../../component/IAlert/IAlertDialog";


class AuthRepository {
    public login = async ( context : InterfaceError, props : LoginInterface ) => {
        return await post( context, {
            url : '/auth/signin',
            reqBody : {
                'username' : props.username,
                'password' : props.password
            }
        } );
    }
}

export default new AuthRepository();
