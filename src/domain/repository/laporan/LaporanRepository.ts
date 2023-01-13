import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfaceGetLaporan } from "./interface/InterfaceGetLaporan";
import { post } from "../../../core/api/api";


class LaporanRepository {
    public getLaporan = async ( context : InterfaceError, reqBody : InterfaceGetLaporan ) => {
        const resp = await post( context, {
            url : '/laporan/get',
            reqBody : reqBody
        } )
        if ( resp !== null ) {
            return resp;
        }
        return null;
    }
}

export default new LaporanRepository()
