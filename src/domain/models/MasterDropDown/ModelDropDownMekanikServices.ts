// To parse this data:
//
//   import { Convert, ModelParameterMekanikServices } from "./file";
//
//   const modelParameterMekanikServices = Convert.toModelParameterMekanikServices(json);

export interface ModelParameterMekanikServices {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listDropDown : ListDropDownMekanikServices[];
    message : string;
    ack : number;
}

export interface ListDropDownMekanikServices {
    tipe : number;
    label : string;
    nilai : string;
    additionalNilai : string;
    statusKehadiran : number;
    labelStatusKehadiran : string;
}

// Converts JSON strings to/from your types
export class ConvertModelParameterMekanikServices {
    public static toModelParameterMekanikServices( json : string ) : ModelParameterMekanikServices {
        return JSON.parse( json );
    }

    public static modelParameterMekanikServicesToJson( value : ModelParameterMekanikServices ) : string {
        return JSON.stringify( value );
    }
}
