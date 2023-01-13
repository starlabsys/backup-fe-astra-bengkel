import { useContext, useEffect } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import LaporanRepository from "../../../../../domain/repository/laporan/LaporanRepository";


const ReportViewModel = () => {

    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext );

    const getListLaporan = async () => {
        const resp = await LaporanRepository.getLaporan( context, {
            bulan : 1,
            tahun : 2021
        } );
        if ( resp !== null ) {
            console.log( resp )
        }
    }

    useEffect( () => {
        getListLaporan();
        return () => {

        };
    }, [] );


    return {}
}
export default ReportViewModel
