import { del, get, patch, post } from "../../../core/api/api"
import { InterfacePit } from "./interface/InterfacePit";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";


class PitRepository {
    public get = async ( context : InterfaceError ) => {
        return await get( context, {
            url : '/pit'
        } )
    }

    public add = async ( context : InterfaceError, props : InterfacePit ) => {
        return await post( context, {
            url : '/pit',
            reqBody : {
                "kode_pit" : props.kode_pit,
                "tipe_pit" : props.tipe_pit,
                "is_active" : props.is_active,
            }
        } )
    }

    public updated = async ( context : InterfaceError, id : string, props : InterfacePit ) => {
        return await patch( context, {
            url : '/pit' + id.toString(),
            reqBody : {
                "kode_pit" : props.kode_pit,
                "tipe_pit" : props.tipe_pit,
                "is_active" : props.is_active,
            }
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
