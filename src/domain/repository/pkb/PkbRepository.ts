import { InterfaceGetListPkb } from "./interface/InterfaceGetListPkb";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { post } from "../../../core/api/api";
import { ConvertModelListPkb, ModelListPkb } from "../../models/Pkb/ModelListPkb";
import { InterfaceGetCustomerServices } from "./interface/InterfaceGetCustomerServices";
import { InterfaceGetKendaraanServices } from "./interface/InterfaceGetKendaraanServices";
import {
    ConvertModelGetKendaraanCustomer,
    ModelGetKendaraanCustomer
} from "../../models/Pkb/ModelGetKendaraanServices";
import { ConvertModelCustomerServices, ModelCustomerServices } from "../../models/Pkb/ModelGetCustomerSerivces";
import { InterfaceAddDataServices } from "./interface/InterfaceAddDataServices";
import { InterfaceProsesPKB } from "./interface/InterfaceProsesPKB";
import { InterfaceDetailPkb } from "./interface/InterfaceGetDetailPKB";
import { ConvertModelDetailPKB, ModelDetailPKB } from "../../models/Pkb/ModelDetailPKB";


class PkbRepository {
    public getListPkb = async ( context : InterfaceError, req : InterfaceGetListPkb ) : Promise<ModelListPkb | null> => {
        const resp = await post( context, {
            url : '/pkb/get',
            reqBody : req
        } );
        if ( resp !== null ) {
            return ConvertModelListPkb.toModelListPkb( resp );
        }
        return null;
    }

    public getDetailPKB = async ( context : InterfaceError, req : InterfaceDetailPkb ) : Promise<ModelDetailPKB | null> => {
        const resp = await post( context, {
            url : '/pkb/detail',
            reqBody : req,
        } )
        if ( resp !== null ) {
            return ConvertModelDetailPKB.toModelDetailPKB( resp );
        }
        return null;
    }

    public getCustomerDetail = async ( context : InterfaceError, req : InterfaceGetCustomerServices ) : Promise<ModelCustomerServices | null> => {
        const resp = await post( context, {
            url : '/customer/customer-services',
            reqBody : req
        } );
        if ( resp !== null ) {
            return ConvertModelCustomerServices.toModelCustomerServices( resp );
        }
        return null;
    }

    public addData = async ( context : InterfaceError, reqBody : InterfaceAddDataServices ) => {
        const resp = await post( context, {
            url : '/pkb/store',
            reqBody : reqBody,
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public getKendaraanDetail = async ( context : InterfaceError, req : InterfaceGetKendaraanServices ) : Promise<ModelGetKendaraanCustomer | null> => {
        const resp = await post( context, {
            url : '/kendaraan/get-kendaraan-services',
            reqBody : req
        } );
        if ( resp !== null ) {
            return ConvertModelGetKendaraanCustomer.toModelGetKendaraanCustomer( resp );
        }
        return null;
    };

    public prosesPKB = async ( context : InterfaceError, reqBody : InterfaceProsesPKB ) => {
        const resp = await post( context, {
            url : '/pkb/proses-pkb',
            reqBody : reqBody
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public exportExcel = async ( context : InterfaceError, reqBody : any ) => {
        const resp = await post( context, {
            url : '/import/xxxx',
            reqBody : reqBody
        } );
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new PkbRepository();
