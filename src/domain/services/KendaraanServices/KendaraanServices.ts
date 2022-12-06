import MotoCycleRepository from "../../repository/motocycle/MotoCycleRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";
import { InterfaceMotoCycle } from "../../repository/motocycle/interface/InterfaceMotoCycle";


class KendaraanServices {
    public getDataKendaraan = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await MotoCycleRepository.get( context, props )
    }

    public addKendaraan = async ( context : InterfaceError, props : InterfaceMotoCycle ) => {
        return await MotoCycleRepository.add( context, props )
    }
}

export default new KendaraanServices()
