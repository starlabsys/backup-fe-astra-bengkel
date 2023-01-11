// To parse this data:
//
//   import { Convert, ModelAddServices } from "./file";
//
//   const modelAddServices = Convert.toModelAddServices(json);

import { InterfaceListSparePartPKB } from "../../../../view/afterLogin/Services/interface/interfaceListSparepartPKB";


export interface InterfaceAddDataServices {
    action : number;
    idPKB : number;
    pkbNo : string;
    refEquipmentID : number;
    statusPKB : number;
    tipePKB : number;
    noAntrian : string;
    kmSekarang : number;
    kmBerikutnya : number;
    namaPembawa : string;
    alamatPembawa : string;
    alamatPembawaSaatIni : string;
    kotaPembawa : string;
    handphonePembawa : string;
    hubunganDgPemilikID : number;
    alasanIngatServiceID : number;
    dealerSendiri : boolean;
    keluhan : string;
    gejala : string;
    pergantianPart : boolean;
    partBekasDibawaKonsumen : boolean;
    refMechanicID : string;
    serviceAdvisorID : string;
    finalInspectorID : string;
    jamMasuk : string;
    jamProses : string;
    jamSelesai : string;
    uangMuka : number;
    idGudang : number;
    idPit : number;
    listOfPekerjaan : ListOfPekerjaan[];
    listOfMaterialHotline : any[];
    tanggal : string;
    latitude : number;
    longitude : number;
    noSTNK : string;
    indikatorBensin : number;
    svPKBReturnID : number;
    kodeAntrian : string;
    tipeAntrian : string;
    activityCapacity : number;
    kecamatanPembawa : string;
    pkbRemove : PkbRemove;
    tipeComingCustomer : string;
    isEngineNo : boolean;
    isFrameNo : boolean;
    isPKBHotline : boolean;
    jamEstimasiSelesai : string;
    jamKedatanganCustomer : string;
    noClaimC2 : string;
    noBuku : string;
    DataMotorkuX : DataMotorkuX;
}

export interface DataMotorkuX {
    VoucherType : number;
    VoucherValue : number;
}

export interface ListOfPekerjaan {
    guid : string;
    pkbPekerjaanID : number;
    itemNo : number;
    refJobID : number;
    nilaiDiskon : number;
    nilaiDiskonJasa : number;
    persentaseDiskon : number;
    persentaseDiskonJasa : number;
    totalJasa : number;
    pajakJasa : number;
    hargaPekerjaan : number;
    namaPekerjaan : string;
    isOPL : boolean;
    labelisOPL : string;
    listOfMaterial : InterfaceListSparePartPKB[];
    listOfMaterialHotline : any[];
    kodeJasa : string;
    kodeJasaAHM : string;
    idJasa : number;
    isShowDelete : boolean;
    isEditable : boolean;
    isFreeService : boolean;
    markUpJasa : string;
    vendorID : number;
    flatRate : number;
    noClaimC2 : string;
    noBuku : string;
    isAdditionalPekerjaan : number;
}

export interface PkbRemove {
    listRemovePekerjaan : any[];
    listRemoveMaterial : any[];
}

// Converts JSON strings to/from your types
// export class Convert {
//     public static toModelAddServices(json: string): ModelAddServices {
//         return JSON.parse(json);
//     }
//
//     public static modelAddServicesToJson(value: ModelAddServices): string {
//         return JSON.stringify(value);
//     }
// }
