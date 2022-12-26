// To parse this data:
//
//   import { Convert, ModelGetListPit } from "./file";
//
//   const modelGetListPit = Convert.toModelGetListPit(json);

export interface ModelGetListPit {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listOfPIT : ListOfPIT[];
    message : string;
    ack : number;
}

export interface ListOfPIT {
    id : number;
    rowStatus : number;
    kodePit : string;
    tipePit : string;
    status : string;
}

// Converts JSON strings to/from your types
export class ConvertModelGetListPit {
    public static toModelGetListPit( json : string ) : ModelGetListPit {
        return JSON.parse( json );
    }

    public static modelGetListPitToJson( value : ModelGetListPit ) : string {
        return JSON.stringify( value );
    }
}
