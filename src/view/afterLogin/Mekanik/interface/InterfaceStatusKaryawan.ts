import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceStatusKaryawan {
    statusKaryawan : string;
    hondaId : string;
    tanggalMasuk : string;
    tanggalKeluar : string;
    jabatan : InterfacePropsDropDown[];
    levelTraining : InterfacePropsDropDown[];
    statusPit : string;
}
