import { useContext, useState } from "react";
import { DialogDataContext } from "../../../../../context/IDialogData";
import PkbRepository from "../../../../../domain/repository/pkb/PkbRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { renameProp } from "@nextui-org/react/types/utils/object";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceDialogAddExcel } from "./DialogAddExcel";


const AddServicesExcelController = ( loading : InterfaceDialogAddExcel ) => {
    const [ excel, setExcel ] = useState<[]>( [] );
    const dialog = useContext( DialogDataContext )
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext );

    const sendExcel = async () => {
        // loadingLottie.openLoading( true );
        loading.loadingLottie.openLoading( true );
        const dataSend = excel.map( ( data : any ) => {
            let keysData = Object.keys( data );
            let newData = {};
            keysData.forEach( ( key : any, index ) => {
                // @ts-ignore
                const dataKey = key.toLowerCase().replaceAll( ' ', '_' ).replaceAll( '/', '' ).replaceAll( '(', '' ).replaceAll( ')', '' );
                // @ts-ignore
                newData[ dataKey ] = data[ key ];
            } )
            return newData;
        } )

        const resp = await PkbRepository.exportExcel( context, dataSend )
        loading.loadingLottie.openLoading( false )
    }
    return {
        excel,
        setExcel,
        dialog,
        sendExcel
    }
}
export default AddServicesExcelController
