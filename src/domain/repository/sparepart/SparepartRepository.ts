import { InterfaceAddSparePart } from "./interfaces/InterfaceAddSparePart";
import { del, get, patch, post } from "../../../core/api/api";
import { InterfacePatchSparePart } from "./interfaces/InterfacePatchSparePart";


class SparepartRepository {

    public add = async ( props : InterfaceAddSparePart ) : Promise<any> => {
        return await post( {
            url : "/parts/store",
            reqBody : {
                "parts_code" : props.partsCode,
                "parts_name" : props.partsName,
                "parts_qty" : props.partsQty,
                "parts_price" : props.partsPrice
            }
        } )
    }

    public get = async () : Promise<any> => {
        return await get( {
            url : "/parts"
        } )
    }

    public updated = async ( props : InterfacePatchSparePart ) : Promise<any> => {
        return await patch( {
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

    public deleted = async ( id : string ) : Promise<any> => {
        return await del( {
            url : `/parts/delete/${ id }`,
            reqBody : {}
        } )
    }

}

export default new SparepartRepository()
