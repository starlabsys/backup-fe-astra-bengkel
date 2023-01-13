import { InterfaceGetGudang } from "./interface/InterfaceGetGudang";
import { post } from "../../../../core/api/api";
import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";
import { ConvertModelListGudang, ModelListGudang } from "../../../models/MasterDropDown/ModelListGudang";


class GudangRepository {
    public getGudang = async ( context : InterfaceError, data : InterfaceGetGudang ) : Promise<ModelListGudang | null> => {
        const resp = await post( context, {
            url : '/master/list-gudang',
            reqBody : data
        } )
        if ( resp !== null ) {
            return ConvertModelListGudang.toModelListGudang( resp );
        }
        return null;
    }
}

export default new GudangRepository();
