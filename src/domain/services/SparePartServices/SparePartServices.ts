import { InterfaceAddSparePart } from "../../repository/sparepart/interfaces/InterfaceAddSparePart";
import SparepartRepository from "../../repository/sparepart/SparepartRepository";
import { InterfacePatchSparePart } from "../../repository/sparepart/interfaces/InterfacePatchSparePart";


class SparePartServices {
    public add = async ( props : InterfaceAddSparePart ) : Promise<any> => {
        return await SparepartRepository.add( props );
    }

    public get = async () : Promise<any> => {
        return await SparepartRepository.get();
    }

    public updated = async ( props : InterfacePatchSparePart ) : Promise<any> => {
        return await SparepartRepository.updated( props );
    }

    public deleted = async ( id : string ) : Promise<any> => {
        return await SparepartRepository.deleted( id );
    }
}

export default new SparePartServices()
