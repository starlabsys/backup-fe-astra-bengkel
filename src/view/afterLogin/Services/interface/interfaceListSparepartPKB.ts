// To parse this data:
//
//   import { Convert, InterfaceListSparePartPKB } from "./file";
//
//   const interfaceListSparePartPKB = Convert.toInterfaceListSparePartPKB(json);

export interface InterfaceListSparePartPKB {
    guid : string;
    pekerjaanID : number;
    pkbMaterialID : number;
    itemNoMaterial : number;
    refNo : number;
    refNoLabel : string;
    refMaterialId : number;
    nilaiDiskon : number;
    nilaiDiskonMaterial : number;
    persentaseDiskon : number;
    persentaseDiskonMaterial : number;
    totalMaterial : number;
    pajakMaterial : number;
    pajak : number;
    stok : number;
    hargaJualMaterial : number;
    hargaJual : number;
    namaMaterial : string;
    quantity : number;
    isEditable : boolean;
    kodeSparepart : string;
    markUpMaterial : number;
    isHotline : boolean;
    isAdditionalMaterial : number;
}
