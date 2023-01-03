// To parse this data:
//
//   import { Convert, ModelListPkb } from "./file";
//
//   const modelListPkb = Convert.toModelListPkb(json);

export interface ModelListPkb {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listOfPKB : ListOfPKB[];
    totalRow : number;
    message : string;
    ack : number;
}

export interface ListOfPKB {
    id : number;
    labelStatus : string;
    status : number;
    noPolisi : string;
    engineNo : string;
    noPKB : string;
    noAntrian : string;
    tanggal : Date;
    idMekanik : number;
    namaMekanik : string;
    namaPemilik : string;
    statusPekerjaan : string;
    aktif : boolean;
    isReadyBayar : boolean;
    isHotline : boolean;
    waktuTunggu : string;
    durasiPengerjaan : string;
    jenisPekerjaan : string;
    pitMekanik : string;
    voucherType : number;
    voucherValue : number;
}

// export enum JenisPekerjaan {
//     CS = "CS",
// }
//
// export enum LabelStatus {
//     Complete = "Complete",
// }
//
// export enum NamaMekanik {
//     NamAnimEaAccusamu = "Nam anim ea accusamu",
//     Pratama = "Pratama",
// }
//
// export enum PitMekanik {
//     Kode = "kode",
// }
//
// export enum StatusPekerjaan {
//     Finish = "Finish",
// }

// Converts JSON strings to/from your types
export class ConvertModelListPkb {
    public static toModelListPkb( json : string ) : ModelListPkb {
        return JSON.parse( json );
    }

    public static modelListPkbToJson( value : ModelListPkb ) : string {
        return JSON.stringify( value );
    }
}
