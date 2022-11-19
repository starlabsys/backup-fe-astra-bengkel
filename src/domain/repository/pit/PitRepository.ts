import { del, get, patch, post } from "../../../core/api/api"
import { InterfacePit } from "./interface/InterfacePit";


class PitRepository {
    public get = async () => {
        return await get( {
            url : '/workshop'
        } )
    }

    public add = async ( props : InterfacePit ) => {
        return await post( {
            url : '/workshop',
            reqBody : {
                "user_id" : props.userId,
                "dealer_number" : props.dealerNumber,
                "dealer_name" : props.dealerName,
                "address" : props.address,
            }
        } )
    }

    public updated = async ( id : string, props : InterfacePit ) => {
        return await patch( {
            url : '/workshop' + id.toString(),
            reqBody : {
                "user_id" : props.userId,
                "dealer_number" : props.dealerNumber,
                "dealer_name" : props.dealerName,
                "address" : props.address,
            }
        } )
    }

    public delete = async ( id : string ) => {
        return await del( {
            url : '/workshop' + id,
            reqBody : {}
        } )
    }
}

export default new PitRepository()
