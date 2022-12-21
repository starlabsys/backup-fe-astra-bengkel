export interface ModelDetailJasa {
    errorCode : string;
    status : boolean;
    message : string;
    data : DataModelDetailJasa;
}

export interface DataModelDetailJasa {
    listSparePart : ListSparePart[];
    id : number;
    kodeJasa : string;
    namaJasa : string;
    grupJasa : number;
    subGrup : string;
    hargaJual : number;
    pajakJual : number;
    flatRate : number;
    oumKerja : number;
    tipeKomisi : number;
    satuanKomisi : number;
    nilaiKomisi : number;
    aktif : boolean;
    waktuKerja : number;
    kategoriPekerjaanID : number;
    labelkategoriPekerjaan : string;
    isFreeService : boolean;
    isDisable : boolean;
    isC2 : boolean;
    message : string;
    ack : number;
}

export interface ListSparePart {
    idRefMaterial : number;
    namaSparepart : string;
    kodeSparepart : string;
    hargaJual : number;
    quantity : number;
    aktif : boolean;
    isDisabel : boolean;
    labelAktif : string;
    stok : number;
    isFreeService : boolean;
}

// Converts JSON strings to/from your types
export class ConvertModelDetailJasa {
    public static toModelDetailJasa( json : string ) : ModelDetailJasa {
        return JSON.parse( json );
    }

    public static modelDetailJasaToJson( value : ModelDetailJasa ) : string {
        return JSON.stringify( value );
    }
}
