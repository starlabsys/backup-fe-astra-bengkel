// To parse this data:
//
//   import { Convert, ModelLogin } from "./file";
//
//   const modelLogin = Convert.toModelLogin(json);

export interface ModelLogin {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    token : string;
    result : Result;
}

export interface Result {
    name : string;
    kodeBengkel : string;
    namaBengkel : string;
    role : string;
}

// Converts JSON strings to/from your types
export class ConvertModelLogin {
    public static toModelLogin( json : string ) : ModelLogin {
        return JSON.parse( json );
    }

    public static modelLoginToJson( value : ModelLogin ) : string {
        return JSON.stringify( value );
    }
}
