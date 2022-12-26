import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceAddCustomerData {
    id? : number;
    kodeCustomer? : string;
    title : InterfacePropsDropDown;
    status : boolean;
    namaCustomer : string;
    noKtp : string;
    pekerjaan : InterfacePropsDropDown;
    agama : InterfacePropsDropDown;
    ttl : string;
    passport : string;
    alamat : string;
    provinsi : InterfacePropsDropDown;
    kabupaten : InterfacePropsDropDown;
    kecamatan : InterfacePropsDropDown;
    kelurahan : InterfacePropsDropDown;
    kodePos : string;
    noTelepon : string;
    noHp : string;
    noFax : string;
    email : string;
    website : string;
    facebook : string;
    twitter : string;
    instagram : string;
    groupDiskon : InterfacePropsDropDown;
    picAhass : InterfacePropsDropDown;
    catatan : string;
}
