import { get } from "../../../../core/api/api";
import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";


class StateRepository {

    public getProvince = async ( context : InterfaceError ) => {
        return await get( context, {
            url : "/data/provinces",
        } )
    }

    public getRegency = async ( context : InterfaceError ) => {
        return await get( context, {
            url : "/data/regencies",
        } )
    }

    public getDistrict = async ( context : InterfaceError ) => {
        return await get( context, {
            url : "/data/district",
        } )
    }
}


export default new StateRepository()
