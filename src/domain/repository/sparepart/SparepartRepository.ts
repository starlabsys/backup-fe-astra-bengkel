import { InterfaceAddSparePart } from "./interfaces/InterfaceAddSparePart";
import { del, patch, post } from "../../../core/api/api";
import { InterfacePatchSparePart } from "./interfaces/InterfacePatchSparePart";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetSparepart } from "./interfaces/InterfaceGetSparepart";
import { ConvertModelListSparePart, ModelListSparePart } from "../../models/SparePart/ModelListSparePart";


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

    public get = async ( context : InterfaceError, props : InterfaceGetSparepart ) : Promise<ModelListSparePart | null> => {
        const resp = await post( context, {
            url : '/sparepart/get',
            reqBody : props
        } )

        if ( resp !== null ) {
            return ConvertModelListSparePart.toModelListSparePart( resp );
        }
        return null;
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
