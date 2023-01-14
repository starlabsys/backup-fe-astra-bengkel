import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetLaporan } from "./interface/InterfaceGetLaporan";
import { post } from "../../../core/api/api";
import { ConvertModelDataExcel, ModelDataExcel } from "../../models/Laporan/ModelDataLaporan";


class LaporanRepository {
    public getLaporan = async ( context : InterfaceError, reqBody : InterfaceGetLaporan ) : Promise<ModelDataExcel | null> => {
        const resp = await post( context, {
            url : '/laporan/pkb',
            reqBody : reqBody
        } )
        if ( resp !== null ) {
            return ConvertModelDataExcel.toModelDataExcel( resp );
        }
        return null;
    }
}

export default new LaporanRepository()
