// To parse this data:
//
//   import { Convert, ModelListSparePart } from "./file";
//
//   const modelListSparePart = Convert.toModelListSparePart(json);

export interface ModelListSparePart {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listofSparePart : ListofSparePart[];
    totalRow : number;
    message : string;
    ack : number;
}

export interface ListofSparePart {
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
export class ConvertModelListSparePart {
    public static toModelListSparePart( json : string ) : ModelListSparePart {
        return JSON.parse( json );
    }

    public static modelListSparePartToJson( value : ModelListSparePart ) : string {
        return JSON.stringify( value );
    }
}
