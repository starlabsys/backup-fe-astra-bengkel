import { get, patch, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceMekanik } from "./interface/interfaceMekanik";
import { InterfaceGetListMekanik } from "./interface/InterfaceGetListMekanik";
import { ConvertModelListMekanik, ModelListMekanik } from "../../models/Mekanik/ModelListMekanik";
import { InterfaceAddMekanik } from "./interface/InterfaceAddMekanik";


class MekanikRepository {
    public getData = async ( context : InterfaceError, props : InterfaceGetListMekanik ) : Promise<ModelListMekanik | null> => {
        const resp = await post( context, {
            url : '/mekanik/get',
            reqBody : props
        } )
        if ( resp !== null ) {
            return ConvertModelListMekanik.toModelListMekanik( resp );
        }
        return null;
    }

    public postData = async ( context : InterfaceError, props : InterfaceAddMekanik ) => {
        const resp = await post( context, {
            url : '/mekanik/store',
            reqBody : props
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

}

export default new MekanikRepository();
