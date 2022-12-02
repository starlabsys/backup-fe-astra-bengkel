import PitRepository from "../../repository/pit/PitRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePit } from "../../repository/pit/interface/InterfacePit";


class PitServices {
    public getData = async ( context : InterfaceError ) => {
        return await PitRepository.get( context )
    }

    public addData = async ( context : InterfaceError, data : InterfacePit ) => {
        return await PitRepository.add( context, data )
    }
}

export default new PitServices()
