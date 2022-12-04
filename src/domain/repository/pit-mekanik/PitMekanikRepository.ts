import { get, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePitMekanik } from "./interface/interfacePitMekanik";


class PitMekanikRepository {

    public getData = async (context: InterfaceError,) => {
        return await get(context, {
            url: `/pit-mechanic`,
            reqBody: {}
        })
    }

    public addData = async (context: InterfaceError, props: InterfacePitMekanik) => {
        return await post(context, {
            url: `/pit-mechanic`,
            reqBody: {
                "pit_id": props.idPit,
                "mechanic_id": props.mekanikId,
                "is_active": props.isActive
            }
        })
    }



}
export default new PitMekanikRepository();