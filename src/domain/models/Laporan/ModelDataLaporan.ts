// To parse this data:
//
//   import { Convert, ModelDataExcel } from "./file";
//
//   const modelDataExcel = Convert.toModelDataExcel(json);

export interface ModelDataExcel {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    data : string;
}

// Converts JSON strings to/from your types
export class ConvertModelDataExcel {
    public static toModelDataExcel( json : string ) : ModelDataExcel {
        return JSON.parse( json );
    }

    public static modelDataExcelToJson( value : ModelDataExcel ) : string {
        return JSON.stringify( value );
    }
}
