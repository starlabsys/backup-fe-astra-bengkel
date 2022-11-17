import { LoginInterface } from "../../repository/auth/interface/LoginInterface";
import AuthRepository from "../../repository/auth/AuthRepository";
import { ReturnResult } from "../../../core/api/interface/InterfaceResponseResult";


class AuthServices {
    public login = async ( props : LoginInterface ) : Promise<ReturnResult> => {
        return await AuthRepository.login( props )
    }
}

export default new AuthServices()
