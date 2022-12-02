import { del, get, post } from "../../../core/api/api"
import { InterfaceMotoCycle } from "./interface/InterfaceMotoCycle";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";


class MotoCycleRepository {
    public get = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await get( context, {
            url : `/vehicle?page=${ props.page }&limit=${ props.limit }&search=${ props.search }`
        } )
    }

    public add = async ( context : InterfaceError, props : InterfaceMotoCycle ) => {
        return await post( context, {
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

    public patch = async ( context : InterfaceError, id : string, props : InterfaceMotoCycle ) => {
        return await post( context, {
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

    public delete = async ( context : InterfaceError, id : string ) => {
        return await del( context, {
            url : "/vehicle/" + id,
            reqBody : {}
        } )
    }
}

export default new MotoCycleRepository()
