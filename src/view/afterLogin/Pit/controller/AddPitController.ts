import PitServices from "../../../../domain/services/PitServices/PitServices";
import { useContext, useMemo } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { DialogDataContext } from "../../../../context/IDialogData";


interface InterfaceSavePit {
    kodePit: string,
    tipePit: string,
    isActive: boolean
}


export const AddPitController = () => {

    const dialog = useContext(DialogDataContext);
    const context = useContext(IAlertDialogContext);
    const savePit = async (props: InterfaceSavePit) => {
        if (props.kodePit === "" && props.tipePit === "") {
            return "Kode Pit dan Tipe Pit tidak boleh kosong"
        }
        const resp = await PitServices.addData(context, {
            tipe_pit: props.tipePit,
            kode_pit: props.kodePit,
            is_active: props.isActive
        });
        return null;
    }

    return {
        savePit,
        dialog,

    }

}
