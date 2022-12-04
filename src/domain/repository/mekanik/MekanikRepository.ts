import { get, patch, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceMekanik } from "./interface/interfaceMekanik";


class MekanikRepository {
    public getData = async ( context : InterfaceError ) => {
        return await get( context, {
            url : '/mechanic',
            reqBody : {}
        } )
    }

    public postData = async ( context : InterfaceError, props : InterfaceMekanik ) => {
        return await post( context, {
            url : '/mechanic',
            reqBody : {
                "workshop_id" : props.workshopId,
                "mechanic_name" : props.mechanicName,
                "mechanic_number" : props.mechanicNumber,
                "mechanic_gender" : props.mechanicGender,
                "mechanic_phone" : props.mechanicPhone,
                "mechanic_address" : props.mechanicAddress

            }
        } )
    }

    public updatedData = async ( context : InterfaceError, props : InterfaceMekanik ) => {
        return await patch( context, {
            url : '/mechanic/' + props.id,
            reqBody : {
                "workshop_id" : props.workshopId,
                "mechanic_name" : props.mechanicName,
                "mechanic_number" : props.mechanicNumber,
                "mechanic_gender" : props.mechanicGender,
                "mechanic_phone" : props.mechanicPhone,
                "mechanic_address" : props.mechanicAddress

            }
        } )
    }
}

export default new MekanikRepository();
