// To parse this data:
//
//   import { Convert, ModelDetailSparePart } from "./file";
//
//   const modelDetailSparePart = Convert.toModelDetailSparePart(json);

export interface ModelDetailSparePart {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    idSparepart : number;
    namaSparepart : string;
    kodeSparepart : string;
    grupSparepart : number;
    namaLokal : string;
    uom : string;
    kategoriETD : string;
    hargaJual : number;
    pajakJual : number;
    rak : string;
    barcode : string;
    plu : string;
    hargaClaimOli : number;
    catatan : string;
    tipeKomisi : number;
    satuanKomisi : number;
    nilaiKomisi : number;
    stok : number;
    aktif : boolean;
    isOriginalPart : boolean;
    hargaLokal : number;
    hargaNasional : number;
    grupKodeAHM : number;
    isHotLine : boolean;
    etaTercepat : Date;
    etaTerlama : Date;
    message : string;
    ack : number;
}

// Converts JSON strings to/from your types
export class ConvertModelDetailSparePart {
    public static toModelDetailSparePart( json : string ) : ModelDetailSparePart {
        return JSON.parse( json );
    }

    public static modelDetailSparePartToJson( value : ModelDetailSparePart ) : string {
        return JSON.stringify( value );
    }
}
