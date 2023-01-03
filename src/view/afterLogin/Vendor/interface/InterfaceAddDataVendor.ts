import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceAddDataVendor {
    id? : number;
    kodeVendor : string,
    status : boolean,
    namaVendor : string,
    alamat : string,
    provinsi : InterfacePropsDropDown,
    kabupaten : InterfacePropsDropDown,
    kecamatan : InterfacePropsDropDown,
    kelurahan : InterfacePropsDropDown,
    kodePos : string,
    noTelp : string,
    noHp : string,
    email : string,
    website : string,
    catatan : string,
}

export interface InterfaceAddDataKontakPerson {
    nama : string,
    noTelp : string,
    noHp : string,
    email : string,
    jabatan : string,
}

export interface InterfaceSyaratKredit {
    tempo : string,
    limit : string,
}

