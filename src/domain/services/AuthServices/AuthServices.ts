import { LoginInterface } from "../../repository/auth/interface/LoginInterface";
import AuthRepository from "../../repository/auth/AuthRepository";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";
import crypto from "crypto";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { ModelLogin } from "../../models/Auth/ModelLogin";


class AuthServices {
    public login = async ( context : InterfaceError, props : LoginInterface ) : Promise<ModelLogin | null> => {
        return await AuthRepository.login( context, props )
    }

}

export default new AuthServices()
