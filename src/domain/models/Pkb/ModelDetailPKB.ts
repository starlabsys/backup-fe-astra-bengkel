// To parse this data:
//
//   import { Convert, ModelDetailPKB } from "./file";
//
//   const modelDetailPKB = Convert.toModelDetailPKB(json);

import { InterfaceListSparePartPKB } from "../../../view/afterLogin/Services/interface/interfaceListSparepartPKB";


export interface ModelDetailPKB {
    errorCode : string;
    status : boolean;
    message : string;
    data : DataModelDetailPKB;
}

export interface DataModelDetailPKB {
    bookingSource : string;
    action : number;
    idPKB : number;
    statusPKB : number;
    pkbNo : string;
    soNo : string;
    tanggal : string;
    refEquipmentID : number;
    noPolisi : string;
    noAntrian : string;
    kmSekarang : number;
    kmBerikutnya : number;
    namaPembawa : string;
    alamatPembawa : string;
    kotaPembawa : string;
    kecamatanPembawa : string;
    handphonePembawa : string;
    nikPembawa : string;
    namaPemilik : string;
    handphonePemilik : string;
    teleponPemilik : string;
    tipeAntrian : string;
    tipePKB : number;
    noMesin : string;
    hubunganDgPemilikID : number;
    alasanIngatServiceID : number;
    dealerSendiri : boolean;
    keluhan : string;
    gejala : string;
    pergantianPart : boolean;
    partBekasDibawaKonsumen : boolean;
    refMechanicID : number;
    serviceAdvisorID : number;
    finalInspectorID : number;
    jamMasuk : string;
    jamProses : string;
    jamSelesai : string;
    nilaiDiskonFinal : number;
    persentaseDiskonFinal : number;
    uangMuka : number;
    uangBayar : number;
    idGudang : number;
    idPit : number;
    tipePembayaran : string;
    latitude : number;
    longitude : number;
    noSTNK : string;
    indikatorBensin : number;
    tipeComingCustomer : string;
    alamatPembawaSaatIni : string;
    isEngineNo : boolean;
    isFrameNo : boolean;
    jamKedatanganCustomer : string;
    jamEstimasiSelesai : string;
    tahunRakit : string;
    activityCapacity : number;
    isIntegratedCheckin : number;
    listOfPekerjaan : ListOfPekerjaanModelDetailPKB[];
    dataMotorkuX : DataMotorkuX;
    message : string;
    ack : number;
}

export interface DataMotorkuX {
    voucherCode : string;
    voucherName : string;
    voucherType : number;
    voucherValue : number;
    kpbType : string;
    discHappyHour : number;
    discVoucherRp : number;
}

export interface ListOfPekerjaanModelDetailPKB {
    pkbID : number;
    pkbPekerjaanID : number;
    kodeJasa : string;
    kodeJasaAHM : string;
    itemNo : number;
    refJobID : number;
    nilaiDiskon : number;
    persentaseDiskon : number;
    markUpJasa : number;
    pajak : number;
    hargaPekerjaan : number;
    namaPekerjaan : string;
    isOPL : boolean;
    isDrop : boolean;
    isEditable : boolean;
    isFreeService : boolean;
    isShowDelete : boolean;
    kpb : Kpb;
    listOfMaterial : InterfaceListSparePartPKB[];
    listOfMaterialHotline : any[];
    vendorID : number;
    noBuku : string;
    noClaimC2 : string;
    flatRate : number;
    isAdditionalPekerjaan : number;
    nilaiDiskonJasa : number;
    pajakJasa : number;
    persentaseDiskonJasa : number;
    totalJasa : number;
    labelisOPL : string;
    itemNoMaterial : number;
    guid : string;
}

export interface Kpb {
    kpbID : number;
    tanggalBeli : string;
    serviceKe : number;
    exMainDealer : number;
    isDispensasi : number;
}

// Converts JSON strings to/from your types
export class ConvertModelDetailPKB {
    public static toModelDetailPKB( json : string ) : ModelDetailPKB {
        return JSON.parse( json );
    }

    public static modelDetailPKBToJson( value : ModelDetailPKB ) : string {
        return JSON.stringify( value );
    }
}
