import ITitleMd from "../../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../../component/ITextField/ITextField";
import IButton from "../../../../../component/IButton/IButton";
import AddServicesExcelController from "./AddServicesController";
import { FormatKeyJson } from "../../../../../utils/format/formatKeyJson";


const XLSX = require( "xlsx" );

const DialogAddExcel = () => {
    const controller = AddServicesExcelController();
    return (
        <div className = { `grid gap-10` }>
            <ITitleMd title = { "Tambah Data Excel" }/>
            <div className = { `` }>
                <ITextFieldDefault
                    type = { "file" }
                    error = { false }
                    value = { undefined }
                    onChange = { ( e ) => {
                        e.preventDefault();
                        let files = (e.target as HTMLInputElement).files;
                        if ( files ) {
                            const reader = new FileReader();
                            reader.onload = ( e ) => {
                                const data = e.target?.result;
                                const workbook = XLSX.read( data, { type : "array" } );
                                const sheetName = workbook.SheetNames[ 0 ];
                                const worksheet = workbook.Sheets[ sheetName ];
                                const json = XLSX.utils.sheet_to_json( worksheet );
                                console.log( json );
                                console.log( JSON.stringify( FormatKeyJson( json[ 0 ] ) ) );
                                // console.log( JSON.stringify( json ) );
                                // VIewModel.setExcel(json);
                            };
                            reader.readAsArrayBuffer( files[ 0 ] );
                        }
                    } }
                    placeholder = { "Input File Excel" }
                    name = { "excel" }
                    label = { "Input Excel" }
                    onEnter = { "done" }
                />
            </div>
            <div className = { `flex gap-2 place-content-end` }>
                <IButton
                    size = { "small" }
                    rounded = { "full" }
                    status = { "danger" }
                    onClick = { () => {
                        controller.dialog.openDialog( false );
                    } }
                >
                    Cancel
                </IButton>
                <IButton
                    size = { "small" }
                    rounded = { "full" }
                    status = { "success" }
                    onClick = { () => {
                        controller.excel.map( ( data : any ) => {
                            return console.log( data );
                        } );
                    } }
                >
                    Tambah
                </IButton>
            </div>
        </div>
    );
};
export default DialogAddExcel;
