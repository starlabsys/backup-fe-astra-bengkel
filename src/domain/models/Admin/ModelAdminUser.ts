// To parse this data:
//
//   import { Convert, ModelAdminUser } from "./file";
//
//   const modelAdminUser = Convert.toModelAdminUser(json);

export interface ModelAdminUser {
    errorCode : string;
    status : boolean;
    message : string;
    data : DatumModelAdminUser[];
}

export interface DatumModelAdminUser {
    id : number;
    full_name : string;
    username : string;
    kode_bengkel : string;
    nama_bengkel : string;
    login_data : string;
    role : string;
    status : string,
    address : string;
}

// Converts JSON strings to/from your types
export class ConvertModelAdminUser {
    public static toModelAdminUser( json : string ) : ModelAdminUser {
        return JSON.parse( json );
    }

    public static modelAdminUserToJson( value : ModelAdminUser ) : string {
        return JSON.stringify( value );
    }
}
