import JasaRepository from "../../../../domain/repository/jasa/JasaRepository";
import { ModelPutJasa } from "../../../../domain/repository/jasa/interface/InterfacePutJasa";
import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";


const updatedJasaViewModel = () => {
    const updatedJasa = async ( context : InterfaceError, props : ModelPutJasa ) => {
        const resp = await JasaRepository.putJasa( context, props );
    }

    return {
        updatedJasa
    }

}

export default updatedJasaViewModel;
