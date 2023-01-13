// To parse this data:
//
//   import { Convert, ModelParameterListSparepart } from "./file";
//
//   const modelParameterListSparepart = Convert.toModelParameterListSparepart(json);

export interface ModelParameterListSparepart {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listofSparePart : ListofSparePartParameter[];
    message : string;
    ack : number;
}

export interface ListofSparePartParameter {
    id : number;
    namaSparepart : string;
    namaLokalSparepart : string;
    kodeSparepart : string;
    grupSparepart : string;
    label : string;
    hargaLokal : number;
    hargaNasional : number;
    hargaJual : number;
    hargaJualHET : number;
    uom : string;
    rak : string;
    aktif : boolean;
    nilaiDiskon : number;
    persentaseDiskon : number;
    stok : number;
    grupKodeAHM : string;
    kategoriETD : string;
    etaTercepat : Date;
    etaTerlama : Date;
}

// Converts JSON strings to/from your types
export class ConvertModelParameterListSparepart {
    public static toModelParameterListSparepart( json : string ) : ModelParameterListSparepart {
        return JSON.parse( json );
    }

    public static modelParameterListSparepartToJson( value : ModelParameterListSparepart ) : string {
        return JSON.stringify( value );
    }
}
