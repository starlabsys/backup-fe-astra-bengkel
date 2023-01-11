import { InterfaceParameterMekanik } from "./interface/interfaceParameterMekanik";
import { post } from "../../../../core/api/api";
import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";
import {
    ConvertModelParameterMekanikServices,
    ModelParameterMekanikServices
} from "../../../models/MasterDropDown/ModelDropDownMekanikServices";


class ParameterMekanikRepository {
    public getListMekanik = async ( context : InterfaceError, data : InterfaceParameterMekanik ) : Promise<ModelParameterMekanikServices | null> => {
        const resp = await post( context, {
            url : '/master/list-mekanik',
            reqBody : data
        } )
        if ( resp !== null ) {
            return ConvertModelParameterMekanikServices.toModelParameterMekanikServices( resp );
        }
        return null;
    }
}

export default new ParameterMekanikRepository()
