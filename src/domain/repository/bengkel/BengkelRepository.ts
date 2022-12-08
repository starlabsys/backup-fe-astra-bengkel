import { get, patch, post } from "../../../core/api/api";
import { InterfaceError } from "../../../core/utils/error/IAlertDialog";
import { InterfacePagination } from "../../interface/InterfacePagination";
import { InterfaceBengkel } from "./interface/interfaceBengkel";


class BengkelRepository {
    public getBengkel = async ( context : InterfaceError, props : InterfacePagination ) => {
        return await get( context, {
            url : `/workshop?page=${ props.page }&limit=${ props.limit }&search=${ props.search ?? '' }`,
            reqBody : {}
        } );
    }

    public addBengkel = async ( context : InterfaceError, props : InterfaceBengkel ) => {
        return await post( context, {
            url : `/workshop`,
            reqBody : {
                user_id : props.userId,
                dealer_number : props.dealerId,
                dealer_name : props.dealerName,
                address : props.dealerAddress,
            }
        } );
    }

    public editBengkel = async ( context : InterfaceError, props : InterfaceBengkel ) => {
        return await patch( context, {
            url : `/workshop/${ props.id }`,
            reqBody : {
                user_id : props.userId,
                dealer_number : props.dealerId,
                dealer_name : props.dealerName,
                address : props.dealerAddress,
            }
        } );
    }
}

export default new BengkelRepository()
