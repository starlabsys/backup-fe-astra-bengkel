import { InterfaceError } from "../../../../core/utils/error/IAlertDialog";
import { post } from "../../../../core/api/api";
import { InterfaceCekKode } from "./interface/InterfaceCekKode";


class CekKodeRepository {
    public cekKode = async ( context : InterfaceError, props : InterfaceCekKode ) => {
        const resp = await post( context, {
            url : '/master/cek-kode',
            reqBody : props
        } )
        if ( resp !== null ) {
            return resp;
        }
    }
}

export default new CekKodeRepository();
