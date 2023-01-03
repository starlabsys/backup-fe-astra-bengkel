import { InterfaceGetListPkb } from "./interface/InterfaceGetListPkb";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { post } from "../../../core/api/api";
import { ConvertModelListPkb, ModelListPkb } from "../../models/Pkb/ModelListPkb";


class PkbRepository {
    public getListPkb = async ( context : InterfaceError, req : InterfaceGetListPkb ) : Promise<ModelListPkb | null> => {
        const resp = await post( context, {
            url : '/pkb/get',
            reqBody : req
        } );
        if ( resp !== null ) {
            return ConvertModelListPkb.toModelListPkb( resp );
        }
        return null;
    }
}

export default new PkbRepository();
