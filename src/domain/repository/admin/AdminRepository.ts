import { del, get, patch, post, put } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceAddAdmin } from "./interface/InterfaceAddAdmin";
import { ConvertModelAdminUser, ModelAdminUser } from "../../models/Admin/ModelAdminUser";
import { InterfaceEditAdmin } from "./interface/InterfaceEditAdmin";
import { ConvertModelDetailAdminUser, ModelDetailAdminUser } from "../../models/Admin/ModelDetailAdminUser";


class AdminRepository {
    public get = async ( context : InterfaceError ) : Promise<ModelAdminUser | null> => {
        const resp = await get( context, {
            url : '/admin/admin',
        } );
        if ( resp !== null ) {
            return ConvertModelAdminUser.toModelAdminUser( resp );
        }
        return null;
    }

    public create = async ( context : InterfaceError, reqBody : InterfaceAddAdmin ) => {
        const resp = await post( context, {
            url : '/admin/admin',
            reqBody : reqBody
        } );
        if ( resp !== null ) {
            return resp;
        }
        return null;

    }

    public edit = async ( context : InterfaceError, id : string, reqBody : InterfaceEditAdmin ) => {
        const resp = await patch( context, {
            url : `/admin/admin/${ id }`,
            reqBody : reqBody,
        } );
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public delete = async ( context : InterfaceError, id : string ) => {
        const resp = await del( context, {
            url : `/admin/admin/${ id }`,
            reqBody : {}
        } );
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public detail = async ( context : InterfaceError, id : string ) : Promise<ModelDetailAdminUser | null> => {
        const resp = await get( context, {
            url : `/admin/admin/${ id }`
        } );
        if ( resp !== null ) {
            return ConvertModelDetailAdminUser.toModelDetailAdminUser( resp );
        }
        return null;
    }

    public changePassword = async ( context : InterfaceError, id : string, password : string ) => {
        const resp = await patch( context, {
            url : `/admin/change-password/${ id }`,
            reqBody : {
                password : password
            }
        } );
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new AdminRepository()
