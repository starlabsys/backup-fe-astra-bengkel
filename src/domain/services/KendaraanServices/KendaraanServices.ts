import MotoCycleRepository from "../../repository/motocycle/MotoCycleRepository";
import { InterfaceError } from "../../../component/IAlert/IAlertDialog";


class KendaraanServices {
    public getDataKendaraan = async ( context : InterfaceError ) => {
        return await MotoCycleRepository.get( context )
    }
}

export default new KendaraanServices()
