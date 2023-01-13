import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceGetDataPkb {
    noPKB : string,
    tanggal : string,
    tanggalSampai : string,
    noPolisi : string,
    statusPencarianPKB : InterfacePropsDropDown,
    pageNumber : number,
    pageSize : number,
}
