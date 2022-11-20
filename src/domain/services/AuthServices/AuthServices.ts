import { LoginInterface } from "../../repository/auth/interface/LoginInterface";
import AuthRepository from "../../repository/auth/AuthRepository";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";
import crypto from "crypto";
import { InterfaceError } from "../../../component/IAlert/IAlertDialog";


class AuthServices {
    public login = async ( context : InterfaceError, props : LoginInterface ) => {
        return await AuthRepository.login( context, props )
    }

}

export default new AuthServices()
