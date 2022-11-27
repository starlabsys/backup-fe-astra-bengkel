import { useContext, useState } from "react";
import { DialogDataContext } from "../../../../../context/IDialogData";


const AddServicesExcelController = () => {
    const [excel, setExcel] = useState<[]>([]);
    const dialog = useContext(DialogDataContext)
    return {
        excel,
        setExcel,
        dialog,
    }
}
export default AddServicesExcelController
