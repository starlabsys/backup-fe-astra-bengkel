import { del, get, patch, post } from "../../../core/api/api"
import { InterfacePit } from "./interface/InterfacePit";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";


class PitRepository {
    public get = async ( context : InterfaceError ) => {
        return await get( context, {
            url : '/workshop'
        } )
    }

    public add = async ( context : InterfaceError, props : InterfacePit ) => {
        return await post( context, {
            url : '/workshop',
            reqBody : {
                "user_id" : props.userId,
                "dealer_number" : props.dealerNumber,
                "dealer_name" : props.dealerName,
                "address" : props.address,
            }
        } )
    }

    public updated = async ( context : InterfaceError, id : string, props : InterfacePit ) => {
        return await patch( context, {
            url : '/workshop' + id.toString(),
            reqBody : {
                "user_id" : props.userId,
                "dealer_number" : props.dealerNumber,
                "dealer_name" : props.dealerName,
                "address" : props.address,
            }
        } )
    }

    public delete = async ( context : InterfaceError, id : string ) => {
        return await del( context, {
            url : '/workshop' + id,
            reqBody : {}
        } )
    }
}

export default new PitRepository()
