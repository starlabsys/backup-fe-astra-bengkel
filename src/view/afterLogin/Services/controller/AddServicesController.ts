import { useContext, useState } from "react";
import { DialogDataContext } from "../../../../context/IDialogData";


const AddServicesController = () => {
    const [ excel, setExcel ] = useState<[]>( [] );
    const dialog = useContext( DialogDataContext )
    return {
        setExcel,
        dialog,
    }
}
export default AddServicesController
