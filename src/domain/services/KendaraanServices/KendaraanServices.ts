import MotoCycleRepository from "../../repository/motocycle/MotoCycleRepository";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";


class KendaraanServices {
    public getDataKendaraan = async ( context : InterfaceError, props : InterfacePagination ) => {
        console.log( 'props.search services' )
        console.log( props.search )
        return await MotoCycleRepository.get( context, props )
    }
}

export default new KendaraanServices()
