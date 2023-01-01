import { IAlertDialogContext, InterfaceError } from "../../core/utils/error/IAlertDialog";
import { useContext } from "react";
import { ILoadingContext } from "../../component/ILoading/ILoading";
import CekKodeRepository from "../../domain/repository/parameter/cekKodeAhass/CekKodeRepository";
import { InterfaceCekKode } from "../../domain/repository/parameter/cekKodeAhass/interface/InterfaceCekKode";


const CekKode = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const cekKode = async ( props : InterfaceCekKode ) => {
        loadingLottie.openLoading( true );
        const resp = await CekKodeRepository.cekKode( context, props );
        if ( resp !== null ) {
            // context.openToast( true );
            // context.toastMessage( resp.message );
            // return resp;
        }
        loadingLottie.openLoading( false );
    }

    return {
        cekKode
    }
}

export default CekKode
