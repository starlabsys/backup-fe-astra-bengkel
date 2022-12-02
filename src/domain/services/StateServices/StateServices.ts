import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import StateRepository from "../../repository/parameter/state/StateRepository";


class StateServices {
    public getProvince = async ( context : InterfaceError ) : Promise<any> => {
        return await StateRepository.getProvince( context );
    }

    public getRegency = async ( context : InterfaceError ) : Promise<any> => {
        return await StateRepository.getRegency( context );
    }

    public getDistrict = async ( context : InterfaceError ) : Promise<any> => {
        return await StateRepository.getDistrict( context );
    }
}

export default new StateServices()
