// To parse this data:
//
//   import { Convert, ModelAddServices } from "./file";
//
//   const modelAddServices = Convert.toModelAddServices(json);

import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import { ListSparePart } from "../../../../domain/models/Jasa/ModelDetailJasa";
import { InterfaceListSparePartPKB } from "./interfaceListSparepartPKB";


export interface ModelAddServices {
    action : number;
    idPKB : number;
    pkbNo : string;
    refEquipmentID : number;
    statusPKB : number;
    tipePKB : InterfacePropsDropDown;
    noAntrian : string;
    kmSekarang : number;
    kmBerikutnya : number;
    namaPembawa : string;
    alamatPembawa : string;
    alamatPembawaSaatIni : string;
    kotaPembawa : string;
    handphonePembawa : string;
    nikPembawa : string;
    hubunganDgPemilikID : InterfacePropsDropDown;
    alasanIngatServiceID : InterfacePropsDropDown;
    dealerSendiri : boolean;
    keluhan : string;
    gejala : string;
    pergantianPart : boolean;
    partBekasDibawaKonsumen : boolean;
    refMechanicID : InterfacePropsDropDown;
    serviceAdvisorID : InterfacePropsDropDown;
    finalInspectorID : InterfacePropsDropDown;
    jamMasuk : string;
    jamProses : string;
    jamSelesai : string;
    uangMuka : number;
    idGudang : InterfacePropsDropDown;
    idPit : number;
    listOfPekerjaan : ListOfPekerjaanModel[];
    listOfMaterialHotline : any[];
    tanggal : string;
    latitude : number;
    longitude : number;
    noSTNK : string;
    indikatorBensin : number;
    svPKBReturnID : number;
    kodeAntrian : string;
    tipeAntrian : InterfacePropsDropDown;
    activityCapacity : InterfacePropsDropDown;
    kecamatanPembawa : string;
    pkbRemove : PkbRemove;
    tipeComingCustomer : InterfacePropsDropDown;
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

export interface ListOfPekerjaanModel {
    guid : string;
    pkbPekerjaanID : number;
    itemNo : number;
    refJobID : number;
    nilaiDiskon : string;
    nilaiDiskonJasa : number;
    persentaseDiskon : number;
    persentaseDiskonJasa : number;
    totalJasa : string;
    pajakJasa : number;
    hargaPekerjaan : string;
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
    isAdditionalPekerjaan : string;
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
