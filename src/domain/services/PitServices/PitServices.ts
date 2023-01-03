import PitRepository from "../../repository/pit/PitRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceAddPit } from "../../repository/pit/interface/InterfaceAddPit";
import { InterfacePagination } from "../../interface/InterfacePagination";


class PitServices {
    public getData = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await PitRepository.get( context, props )
    }

    public addData = async ( context : InterfaceError, data : InterfaceAddPit ) => {
        return await PitRepository.add( context, data )
    }

    public updateData = async ( context : InterfaceError, id : number, data : InterfaceAddPit ) => {
        return await PitRepository.updated( context, id, data )
    }
}

export default new PitServices()
