import { get, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceAddPitMekanik } from "./interface/InterfaceAddPitMekanik";
import { InterfaceGetPitMekanik } from "./interface/InterfaceGetPitMekanik";
import { ConvertModelListPitMekanik, ModelListPitMekanik } from "../../models/PitMekanik/ModelGetListPitMekanik";
import { InterfaceEditPitMekanik } from "./interface/InterfaceEditPitMekanik";


class PitMekanikRepository {

    public getData = async ( context : InterfaceError, props : InterfaceGetPitMekanik ) : Promise<ModelListPitMekanik | null> => {
        const resp = await post( context, {
            url : `/pit-mekanik/get`,
            reqBody : props
        } )

        if ( resp !== null ) {
            return ConvertModelListPitMekanik.toModelListPitMekanik( resp );
        }
        return null;
    }

    public addData = async ( context : InterfaceError, props : InterfaceAddPitMekanik ) => {
        return await post( context, {
            url : `/pit-mekanik/store`,
            reqBody : props
        } )
    }

    public updateData = async ( context : InterfaceError, props : InterfaceEditPitMekanik ) => {
        return await post( context, {
            url : `/pit-mekanik/update`,
            reqBody : props
        } )
    }


}

export default new PitMekanikRepository();
