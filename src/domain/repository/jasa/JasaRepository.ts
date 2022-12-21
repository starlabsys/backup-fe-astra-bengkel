import { get, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetJasa } from "./interface/InterfaceGetJasa";
import { ConvertModelJasa, ModelJasa } from "../../models/Jasa/ModelJasa";
import { InterfaceDetailJasa } from "./interface/InterfaceDetailJasa";
import { ConvertModelDetailJasa, DataModelDetailJasa, ModelDetailJasa } from "../../models/Jasa/ModelDetailJasa";
import { ModelPutJasa } from "./interface/InterfacePutJasa";
import { InterfaceAddJasa } from "./interface/InterfaceAddJasa";


class JasaRepository {
    public getJasa = async ( context : InterfaceError, props : InterfaceGetJasa ) : Promise<ModelJasa | null> => {
        const resp = await post( context, {
            url : '/jasa/get',
            reqBody : {
                "page" : props.page,
                "size" : props.size,
                "kodeJasa" : props.kodeJasa,
                "namaJasa" : props.namaJasa
            }
        } )
        if ( resp !== null ) {
            return ConvertModelJasa.toModelJasa( resp );
        }
        return null;
    }

    public cetakLaporan = async ( context : InterfaceError, props : {} ) : Promise<any> => {
        const resp = await get( context, {
            url : '/jasa/cetak',
            reqBody : {}
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }

    public detailJasa = async ( context : InterfaceError, props : InterfaceDetailJasa ) : Promise<ModelDetailJasa | null> => {
        const resp = await post( context, {
            url : '/jasa/detail',
            reqBody : {
                "id" : props.id,
                "action" : props.action
            }
        } )
        if ( resp !== null ) {
            return ConvertModelDetailJasa.toModelDetailJasa( resp );
        }
        return null;
    }

    public putJasa = async ( context : InterfaceError, props : ModelPutJasa ) : Promise<any> => {
        const resp = await post( context, {
                url : '/jasa/edit',
                reqBody : props
            }
        )
        return resp;
    }

    public addJasa = async ( context : InterfaceError, props : InterfaceAddJasa ) => {
        const resp = await post( context, {
            url : '/jasa/add',
            reqBody : props
        } )
        return resp;
    }

}

export default new JasaRepository()
