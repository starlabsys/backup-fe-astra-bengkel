// To parse this data:
//
//   import { Convert, ModelGetListPelanggan } from "./file";
//
//   const modelGetListPelanggan = Convert.toModelGetListPelanggan(json);

export interface ModelGetListPelanggan {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listPelanggan : ListPelanggan[];
    message : string;
    ack : number;
}

export interface ListPelanggan {
    id : number;
    kodeCustomer : string;
    namaCustomer : string;
    alamat : string;
    kota : string;
    kecamatan : string;
    kelurahan : string;
    noTelepon : string;
    noHp : string;
    noFaks : string;
    top : string;
    aktif : boolean;
    labelAktif : string;
    idProvinsi : number;
}

// Converts JSON strings to/from your types
export class ConvertModelGetListPelanggan {
    public static toModelGetListPelanggan( json : string ) : ModelGetListPelanggan {
        return JSON.parse( json );
    }

    public static modelGetListPelangganToJson( value : ModelGetListPelanggan ) : string {
        return JSON.stringify( value );
    }
}
