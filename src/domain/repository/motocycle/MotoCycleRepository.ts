import { del, get, post } from "../../../core/api/api"
import { InterfaceMotoCycle } from "./interface/InterfaceMotoCycle";


class MotoCycleRepository {
    public get = async () => {
        return await get( {
            url : "/vehicle",
        } )
    }

    public add = async ( props : InterfaceMotoCycle ) => {
        return await post( {
            url : "/vehicle",
            reqBody : {
                "no_polisi" : props.noPolisi,
                "no_rangka" : props.noRangka,
                "no_mesin" : props.noMesin,
                "kode_tipe_unit" : props.kodeTipeUnit,
                "tahun_motor" : props.tahunMotor,
                "informasi_bensin" : props.informasiBensin,
                "km_terakhir" : props.kmTerakhir,
                "tipe_coming_customer" : props.tipeComingCustomer
            }
        } )
    }

    public patch = async ( id : string, props : InterfaceMotoCycle ) => {
        return await post( {
            url : "/vehicle" + id.toString(),
            reqBody : {
                "no_polisi" : props.noPolisi,
                "no_rangka" : props.noRangka,
                "no_mesin" : props.noMesin,
                "kode_tipe_unit" : props.kodeTipeUnit,
                "tahun_motor" : props.tahunMotor,
                "informasi_bensin" : props.informasiBensin,
                "km_terakhir" : props.kmTerakhir,
                "tipe_coming_customer" : props.tipeComingCustomer
            }
        } )
    }

    public delete = async ( id : string ) => {
        return await del( {
            url : "/vehicle/" + id,
            reqBody : {}
        } )
    }
}

export default new MotoCycleRepository()
