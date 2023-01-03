import { InterfaceGetListVendor } from "./interface/InterfaceGetListVendor";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { post } from "../../../core/api/api";
import { ConvertModelListVendor, ModelListVendor } from "../../models/Vendor/ModelListVendor";
import { InterfaceAddVendor } from "./interface/InterfaceAddVendor";


class VendorRepository {
    public getVendor = async ( context : InterfaceError, props : InterfaceGetListVendor ) : Promise<ModelListVendor | null> => {
        const resp = await post( context, {
            url : '/vendor/get',
            reqBody : props,
        } )
        if ( resp !== null ) {
            return ConvertModelListVendor.toModelListVendor( resp );
        }
        return null;
    }

    public addVendor = async ( context : InterfaceError, props : InterfaceAddVendor ) : Promise<any> => {
        const resp = await post( context, {
            url : '/vendor/add',
            reqBody : props,
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new VendorRepository()
