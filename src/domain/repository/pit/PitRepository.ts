import { del, get, patch, post } from "../../../core/api/api"
import { InterfacePit } from "./interface/InterfacePit";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";


class PitRepository {
    public get = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await get( context, {
            url : `/pit?page=${ props.page }&limit=${ props.limit }&search=${ props.search ?? '' }`
        } )
    }
    // public search = async ( context : InterfaceError, search : string ) => {
    //     return await get( context, {
    //         url : `/pit?search=${ search }`
    //     } )
    // }

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

    public updated = async ( context : InterfaceError, id : number, props : InterfacePit ) => {
        return await patch( context, {
            url : '/pit/' + id.toString(),
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
