import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetJasa } from "../../repository/jasa/interface/InterfaceGetJasa";
import JasaRepository from "../../repository/jasa/JasaRepository";


class JasaServices {
    public getJasa = async ( context : InterfaceError, props : InterfaceGetJasa ) => {
        const resp = await JasaRepository.getJasa( context, props )
        return resp;
    }
}

export default new JasaServices()
