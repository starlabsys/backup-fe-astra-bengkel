import { del, get, patch, post } from "../../../core/api/api"
import { InterfaceAddPit } from "./interface/InterfaceAddPit";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetPit } from "./interface/InterfaceGetPit";
import { ConvertModelGetListPit, ModelGetListPit } from "../../models/Pit/ModelGetListPit";


class PitRepository {
    public get = async ( context : InterfaceError, props : InterfaceGetPit ) : Promise<ModelGetListPit | null> => {
        const resp = await post( context, {
            url : '/pit/get',
            reqBody : props
        } )
        if ( resp !== null ) {
            return ConvertModelGetListPit.toModelGetListPit( resp );
        }
        return null;
    }

    public add = async ( context : InterfaceError, props : InterfaceAddPit ) => {
        return await post( context, {
            url : '/pit/store',
            reqBody : props
        } )
    }

    public updated = async ( context : InterfaceError, id : number, props : InterfaceAddPit ) => {
        return await patch( context, {
            url : '/pit/' + id.toString(),
            reqBody : props
        } )
    }

    public delete = async ( context : InterfaceError, id : string ) => {
        return await del( context, {
            url : '/pit' + id,
            reqBody : {}
        } )
    }
}

export default new PitRepository()
