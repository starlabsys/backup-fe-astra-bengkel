import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import LaporanRepository from "../../../../../domain/repository/laporan/LaporanRepository";
import { InterfaceGetLaporan } from "../../../../../domain/repository/laporan/interface/InterfaceGetLaporan";
import FormatDate from "../../../../../utils/format/formatDate";
import { saveAs } from 'file-saver';
import axios from "axios";


const ReportViewModel = () => {

    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext );

    const [ dataSend, setDataSend ] = useState<InterfaceGetLaporan>();


    const getListLaporan = async () => {
        loadingLottie.openLoading( true );
        const sendData : InterfaceGetLaporan = {
            dateFrom : FormatDate.dateSend( dataSend?.dateFrom ?? '' ),
            dateTo : FormatDate.dateSend( dataSend?.dateTo ?? '' ),
            fileType : 'xlsx'
        }
        // console.log( 'sendData', sendData )
        const resp = await LaporanRepository.getLaporan( context, sendData );
        if ( resp !== null ) {
            // console.log( resp )
            convertBase64( resp.data.data );
        }
        loadingLottie.openLoading( false );
    }

//     const getXLS= () =>{
//         const type = 'application/vnd.ms-excel';
//
//         const options = new RequestOptions({
//             responseType: ResponseContentType.Blob,
//             headers: new Headers({ 'Accept': type })
//         });
//
//         this.httpService.post(<url>, options)
//             .catch(errorResponse => Observable.throw(errorResponse.json()))
//             .map((response) => {
//                 if (response instanceof Response) {
//                     return response.blob();
//                 }
//                 return response;
//             }).subscribe(data => this.xmlBlob = data,  //assuming xmlBlob variable will be defined somewhere
//             error => console.log(error));
//     }
// }

    const handleExcelExport = async () => {
        const data = await axios.get(
            `/export-excel`,
            {
                responseType : "arraybuffer",
            }
        ).then( response => {
            // @ts-ignore
            const blob = new Blob( [ response ], {
                type : "application/octet-stream",
            } );
            const link = document.createElement( "a" );
            link.href = window.URL.createObjectURL( blob );
            link.download = 'fileName';
            link.click();
        } )
    }

    const convertBase64 = ( base64 : string ) => {
        // const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;${ base64 }`;
        const linkSource = `data:application/vnd.ms-excel;${ base64 }`;
        const downloadLink = document.createElement( "a" );
        // console.log( linkSource );
        downloadLink.href = linkSource;
        downloadLink.target = "_blank";
        downloadLink.click();


    }

    useEffect( () => {
        // const date = new Date();
        setDataSend( () => {
            return {
                dateFrom : FormatDate.nowDate(),
                dateTo : FormatDate.nowDate(),
                fileType : 'xls'
            }
        } )
        return () => {

        };
    }, [] );


    return {
        dataSend,
        setDataSend,
        getListLaporan,
    }
}
export default ReportViewModel
