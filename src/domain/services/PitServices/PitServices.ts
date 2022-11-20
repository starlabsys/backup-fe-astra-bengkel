import PitRepository from "../../repository/pit/PitRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";


class PitServices {
    public getData = async ( context : InterfaceError ) => {
        return await PitRepository.get( context )
    }
}

export default new PitServices()
