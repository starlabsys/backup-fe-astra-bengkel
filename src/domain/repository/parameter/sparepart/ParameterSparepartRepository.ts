import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";
import { InterfaceParameterListSparepart } from "./interface/InterfaceParameterListSparepart";
import { InterfaceDetailSparepart } from "./interface/InterfaceDetailSparepart";
import { post } from "../../../../core/api/api";
import {
    ConvertModelParameterListSparepart,
    ModelParameterListSparepart
} from "../../../models/MasterDropDown/ModelParameterListSparepart";
import {
    ConvertModelParameterDetailSparepart,
    ModelParameterDetailSparepart
} from "../../../models/MasterDropDown/ModelParameterDetailSparepart";


class ParameterSparepartRepository {
    public getListSparepart = async ( context : InterfaceError, data : InterfaceParameterListSparepart ) : Promise<ModelParameterListSparepart | null> => {
        const resp = await post( context, {
            url : '/master/list-sparepart',
            reqBody : data
        } )
        if ( resp !== null ) {
            return ConvertModelParameterListSparepart.toModelParameterListSparepart( resp );
        }
        return null;
    }
    public getDetailSparepart = async ( context : InterfaceError, data : InterfaceDetailSparepart ) : Promise<ModelParameterDetailSparepart | null> => {
        const resp = await post( context, {
            url : '/master/detail-sparepart',
            reqBody : data
        } )
        if ( resp !== null ) {
            return ConvertModelParameterDetailSparepart.toModelParameterDetailSparepart( resp );
        }
        return null;
    }
}

export default new ParameterSparepartRepository()
