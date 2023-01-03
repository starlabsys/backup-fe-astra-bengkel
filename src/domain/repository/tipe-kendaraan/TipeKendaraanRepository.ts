import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { post } from "../../../core/api/api";
import { InterfaceGetTipeKendaraan } from "./interface/InterfaceGetKendaraan";
import { ConvertModelGetTipeKendaraan, ModelGetTipeKendaraan } from "../../models/TipeKendaraan/ModelTipeKendaraan";
import { InterfaceEditTipeKendaraan } from "./interface/InterfaceEditTipeKendaraan";


class TipeKendaraanRepository {
    public getData = async ( context : InterfaceError, reqBody : InterfaceGetTipeKendaraan ) : Promise<ModelGetTipeKendaraan | null> => {
        const resp = await post( context, {
                url : '/tipe-kendaraan/get',
                reqBody : reqBody
            }
        )
        if ( resp !== null ) {
            return ConvertModelGetTipeKendaraan.toModelGetTipeKendaraan( resp );
        }
        return null;
    }

    public editData = async ( context : InterfaceError, reqBody : InterfaceEditTipeKendaraan ) : Promise<any> => {
        const resp = await post( context, {
                url : '/tipe-kendaraan/edit',
                reqBody : reqBody
            }
        )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new TipeKendaraanRepository()
