import { InterfaceGetCustomer } from "./interface/InterfaceGetCustomer";
import { ConvertModelGetListCustomer, ModelGetListCustomer } from "../../models/Customer/ModelGetListCustomer";
import { post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceAddCustomer } from "./interface/InterfaceAddCustomer";
import { InterfaceDetailCustomer } from "./interface/InterfaceDetailCustomer";
import { ConvertModelDetailCustomer, ModelDetailCustomer } from "../../models/Customer/ModelDetailCustomer";


class CustomerRepository {
    public get = async ( context : InterfaceError, props : InterfaceGetCustomer ) : Promise<ModelGetListCustomer | null> => {
        const resp = await post( context, {
            url : '/customer/get',
            reqBody : props,
        } )
        if ( resp !== null ) {
            return ConvertModelGetListCustomer.toModelGetListCustomer( resp );
        }
        return null;
    }

    public add = async ( context : InterfaceError, props : InterfaceAddCustomer ) : Promise<any> => {
        const resp = await post( context, {
            url : '/customer/add',
            reqBody : props,
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public detail = async ( context : InterfaceError, props : InterfaceDetailCustomer ) : Promise<ModelDetailCustomer | null> => {
        const resp = await post( context, {
            url : '/customer/detail',
            reqBody : props,
        } )
        if ( resp !== null ) {
            return ConvertModelDetailCustomer.toModelDetailCustomer( resp );
        }
        return null;
    }
}

export default new CustomerRepository();
