// To parse this data:
//
//   import { Convert, ModelGetKendaraanCustomer } from "./file";
//
//   const modelGetKendaraanCustomer = Convert.toModelGetKendaraanCustomer(json);

export interface ModelGetKendaraanCustomer {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listofKendaraan : ListofKendaraanPKB[];
    message : string;
    ack : number;
}

export interface ListofKendaraanPKB {
    id : number;
    idPelanggan : number;
    aktif : boolean;
    labelAktif : string;
    noPolisi : string;
    noMesin : string;
    noRangka : string;
    customer : string;
    tipe : string;
    warna : string;
    tahunRakit : Date;
    namaPembawa : string;
    handphonePembawa : string;
    alamatPembawa : string;
    kotaPembawa : string;
    kecamatanPembawa : string;
    isEditable : boolean;
}

// Converts JSON strings to/from your types
export class ConvertModelGetKendaraanCustomer {
    public static toModelGetKendaraanCustomer( json : string ) : ModelGetKendaraanCustomer {
        return JSON.parse( json );
    }

    public static modelGetKendaraanCustomerToJson( value : ModelGetKendaraanCustomer ) : string {
        return JSON.stringify( value );
    }
}
