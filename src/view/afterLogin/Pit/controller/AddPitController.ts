import PitServices from "../../../../domain/services/PitServices/PitServices";
import { useContext } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";


interface InterfaceSavePit {
    kodePit : string,
    tipePit : string,
    isActive : boolean
}


export const AddPitController = () => {
    const context = useContext( IAlertDialogContext );
    const savePit = async ( props : InterfaceSavePit ) => {
        const resp = await PitServices.addData( context, {
            tipe_pit : props.tipePit,
            kode_pit : props.kodePit,
            is_active : props.isActive
        } );
    }

    return {
        savePit
    }

}
