import { InterfaceAddSparePart } from "./interfaces/InterfaceAddSparePart";
import { del, get, patch, post } from "../../../core/api/api";
import { InterfacePatchSparePart } from "./interfaces/InterfacePatchSparePart";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";


class SparepartRepository {

    public add = async ( context : InterfaceError, props : InterfaceAddSparePart ) : Promise<any> => {
        return await post( context, {
            url : "/parts/store",
            reqBody : {
                "parts_code" : props.partsCode,
                "parts_name" : props.partsName,
                "parts_qty" : props.partsQty,
                "parts_price" : props.partsPrice
            }
        } )
    }

    public get = async ( context : InterfaceError ) : Promise<any> => {
        return await get( context, {
            url : "/parts"
        } )
    }

    public updated = async ( context : InterfaceError, props : InterfacePatchSparePart ) : Promise<any> => {
        return await patch( context, {
            url : '/parts/update',
            reqBody : {
                'parts_id' : props.partsId,
                'parts_code' : props.partsCode,
                'parts_name' : props.partsName,
                'parts_qty' : props.partsQty,
                'parts_price' : props.partsPrice,
            }
        } )
    }

    public deleted = async ( context : InterfaceError, id : string ) : Promise<any> => {
        return await del( context, {
            url : `/parts/delete/${ id }`,
            reqBody : {}
        } )
    }

}

export default new SparepartRepository()
