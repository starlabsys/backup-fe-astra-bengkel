export interface ModelDetailAdminUser {
    errorCode : string;
    status : boolean;
    message : string;
    data : DatumModelDetailAdminUser;
}

export interface DatumModelDetailAdminUser {
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
export class ConvertModelDetailAdminUser {
    public static toModelDetailAdminUser( json : string ) : ModelDetailAdminUser {
        return JSON.parse( json );
    }

    public static modelAdminUserToJson( value : ModelDetailAdminUser ) : string {
        return JSON.stringify( value );
    }
}
