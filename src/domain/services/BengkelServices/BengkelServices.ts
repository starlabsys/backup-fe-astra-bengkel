import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";
import BengkelRepository from "../../repository/bengkel/BengkelRepository";
import { InterfaceBengkel } from "../../repository/bengkel/interface/interfaceBengkel";


class BengkelServices {
    public getBengkel = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await BengkelRepository.getBengkel( context, props );
    }

    public addBengkel = async ( context : InterfaceError, props : InterfaceBengkel ) => {
        return await BengkelRepository.addBengkel( context, props );
    }

    public editBengkel = async ( context : InterfaceError, props : InterfaceBengkel ) => {
        return await BengkelRepository.editBengkel( context, props );
    }
}

export default new BengkelServices()
