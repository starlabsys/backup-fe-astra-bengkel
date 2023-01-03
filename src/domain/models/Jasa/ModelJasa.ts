// To parse this data:
//
//   import { Convert, ModelJasa } from "./file";
//
//   const modelJasa = Convert.toModelJasa(json);

export interface ModelJasa {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listofJasa : ListofJasa[];
    totalRow : number;
    message : string;
    ack : number;
}

export interface ListofJasa {
    id : number;
    aktif : number;
    labelAktif : string; //LabelAktif;
    kategoriPekerjaanID : number;
    labelkategoriPekerjaan : string;
    kodeJasa : string;
    namaJasa : string;
    label : string;
    grupJasa : number;
    isFreeService : boolean;
    hargaJual : number;
    pajakJual : number;
    waktuKerja : number;
    oumKerja : number;
    labelGrupJasa : string;
    nilaiDiskon : number;
    persentaseDiskon : number;
}

export enum LabelAktif {
    Aktif = "Aktif",
}

export class ConvertModelJasa {
    public static toModelJasa( json : string ) : ModelJasa {
        return JSON.parse( json );
    }

    public static modelJasaToJson( value : ModelJasa ) : string {
        return JSON.stringify( value );
    }
}
