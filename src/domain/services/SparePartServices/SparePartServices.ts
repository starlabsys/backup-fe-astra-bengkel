import { InterfaceAddSparePart } from "../../repository/sparepart/interfaces/InterfaceAddSparePart";
import SparepartRepository from "../../repository/sparepart/SparepartRepository";
import { InterfacePatchSparePart } from "../../repository/sparepart/interfaces/InterfacePatchSparePart";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";


class SparePartServices {
    public add = async ( context : InterfaceError, props : InterfaceAddSparePart ) : Promise<any> => {
        return await SparepartRepository.add( context, props );
    }

    public get = async ( context : InterfaceError ) : Promise<any> => {
        return await SparepartRepository.get( context );
    }

    public updated = async ( context : InterfaceError, props : InterfacePatchSparePart ) : Promise<any> => {
        return await SparepartRepository.updated( context, props );
    }

    public deleted = async ( context : InterfaceError, id : string ) : Promise<any> => {
        return await SparepartRepository.deleted( context, id );
    }
}

export default new SparePartServices()
