// To parse this data:
//
//   import { Convert, ModelGroupDropDown } from "./file";
//
//   const modelGroupDropDown = Convert.toModelGroupDropDown(json);

export interface ModelGroupDropDown {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listDropDown : ListDropDown[];
    message : string;
    ack : number;
}

export interface ListDropDown {
    tipe : number;
    label : string;
    nilai : string;
    additionalNilai : string;
}

// Converts JSON strings to/from your types
export class ConvertModelGroupDropDown {
    public static toModelGroupDropDown( json : string ) : ModelGroupDropDown {
        return JSON.parse( json );
    }

    public static modelGroupDropDownToJson( value : ModelGroupDropDown ) : string {
        return JSON.stringify( value );
    }
}
