import { LoginInterface } from "./interface/LoginInterface";
import { post } from "../../../core/api/api";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";


class AuthRepository {
    public login = async ( props : LoginInterface ) : Promise<ReturnResult> => {
        return await post( {
            url : '/auth/signin',
            reqBody : {
                'username' : props.username,
                'password' : props.password
            }
        } );
    }
}

export default new AuthRepository();
