import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceAddSparePart {
    id? : number;
    kode : string;
    status : boolean;
    nama : string;
    namaLokal : string;
    group : InterfacePropsDropDown;
    grupKodeAHM : InterfacePropsDropDown;
    hargaLokal : string;
    hargaNasional : string;
    satuan : InterfacePropsDropDown;
    hargaClaimOli : string;
    catatan : string;
}
