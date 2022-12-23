import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetKendaraan } from "./interface/InterfaceGetKendaraan";
import { post } from "../../../core/api/api";
import { ConvertModelGetListKendaraan, ModelGetListKendaraan } from "../../models/Kendaraan/ModelGetListKendaraan";
import { InterfaceGetPelanggan } from "./interface/InterfaceGetPelanggan";
import { ConvertModelGetListPelanggan, ModelGetListPelanggan } from "../../models/Kendaraan/ModelGetListPelanggan";
import { InterfaceAddKendaraan } from "./interface/InterfaceAddKendaraan";
import { InterfaceDetailKendaraan } from "./interface/InterfaceDetailKendaraan";
import { ConvertModelGetDetailKendaraan, ModelGetDetailKendaraan } from "../../models/Kendaraan/ModelDetailKendaraan";
import { InterfaceEditKendaraan } from "./interface/InterfaceEditKendaraan";


class KendaraanRepository {
    public getKendaraan = async ( context : InterfaceError, props : InterfaceGetKendaraan ) : Promise<ModelGetListKendaraan | null> => {
        const resp = await post( context, {
            url : '/kendaraan/get',
            reqBody : props
        } )
        if ( resp !== null ) {
            return ConvertModelGetListKendaraan.toModelGetListKendaraan( resp );
        }
        return null;
    }

    public getPelanggan = async ( context : InterfaceError, props : InterfaceGetPelanggan ) : Promise<ModelGetListPelanggan | null> => {
        const resp = await post( context, {
            url : '/kendaraan/get-pelanggan',
            reqBody : props
        } )
        if ( resp !== null ) {
            return ConvertModelGetListPelanggan.toModelGetListPelanggan( resp );
        }
        return null;
    }

    public addKendaraan = async ( context : InterfaceError, props : InterfaceAddKendaraan ) : Promise<any> => {
        const resp = await post( context, {
            url : '/kendaraan/add',
            reqBody : props
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public detailKendaraan = async ( context : InterfaceError, props : InterfaceDetailKendaraan ) : Promise<ModelGetDetailKendaraan | null> => {
        const resp = await post( context, {
            url : '/kendaraan/detail',
            reqBody : props
        } )
        if ( resp !== null ) {
            return ConvertModelGetDetailKendaraan.toModelGetDetailKendaraan( resp );
        }
        return null;
    }

    public updateKendaraan = async ( context : InterfaceError, props : InterfaceEditKendaraan ) : Promise<any> => {
        const resp = await post( context, {
            url : '/kendaraan/edit',
            reqBody : props
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new KendaraanRepository()
