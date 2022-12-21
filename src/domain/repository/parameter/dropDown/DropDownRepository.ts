import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";
import { post } from "../../../../core/api/api";
import { InterfaceListDropDown, InterfaceSyncMaster } from "./interface/InterfaceListDropDown";
import { ConvertModelDropDownJasa, ModelDropDownJasa } from "../../../models/MasterDropDown/ModelMasterDropDown";
import { ConvertModelGroupDropDown, ModelGroupDropDown } from "../../../models/MasterDropDown/ModelGroupMasterDropDown";


class DropDownRepository {
    public getDropDown = async ( context : InterfaceError, props : InterfaceListDropDown[] ) : Promise<ModelDropDownJasa | null> => {
        const resp = await post( context, {
            url : '/master/drop-down',
            reqBody : {
                "listDropDown" : [
                    ...props
                ]
            }
        } )

        if ( resp !== null ) {
            return ConvertModelDropDownJasa.toModelDropDownJasa( resp );
        }
        return null;
    }

    public getGroup = async ( context : InterfaceError, props : InterfaceSyncMaster[] ) : Promise<ModelGroupDropDown | null> => {
        const resp = await post( context, {
            url : '/master/group-drop-down',
            reqBody : {
                "listGroupDropDown" : [
                    ...props
                ]
            }
        } )

        if ( resp !== null ) {
            return ConvertModelGroupDropDown.toModelGroupDropDown( resp );
        }
        return null;
    }
}

export default new DropDownRepository()
