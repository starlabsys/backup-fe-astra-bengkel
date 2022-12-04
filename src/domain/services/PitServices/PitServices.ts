import PitRepository from "../../repository/pit/PitRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePit } from "../../repository/pit/interface/InterfacePit";
import { InterfacePagination } from "../../interface/InterfacePagination";


class PitServices {
    public getData = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await PitRepository.get( context, props )
    }

    // public searchData = async ( context : InterfaceError, search : string ) => {
    //     return await PitRepository.search( context, search )
    // }

    public addData = async ( context : InterfaceError, data : InterfacePit ) => {
        return await PitRepository.add( context, data )
    }
}

export default new PitServices()
