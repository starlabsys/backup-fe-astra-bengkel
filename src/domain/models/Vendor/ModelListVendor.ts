// To parse this data:
//
//   import { Convert, ModelListVendor } from "./file";
//
//   const modelListVendor = Convert.toModelListVendor(json);

export interface ModelListVendor {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listOfVendor : ListOfVendor[];
    totalRow : number;
    message : string;
    ack : number;
}

export interface ListOfVendor {
    id : number;
    kodeVendor : string;
    namaVendor : string;
    alamat : string;
    area : Area;
    province : Province;
    city : City;
    noHp : string;
    noTelepon : string;
    noFaks : string;
    email : string;
    website : string;
    catatan : string;
    namaKontakPerson : string;
    noteleponKontakPerson : string;
    noHpKontakPerson : string;
    emailKontakPerson : string;
    jabatanKontakPerson : string;
    tOP : number;
    limitKredit : number;
    aktif : boolean;
}

export interface Area {
    id : number;
    provinceID : number;
    cityID : number;
    zipCode : string;
    kelurahan : string;
    kecamatan : string;
    kabupaten : string;
    ahmCode : string;
    bpsCode : string;
    rowStatus : number;
}

export interface City {
    id : number;
    text : string;
    rowStatus : number;
    flag : number;
}

export interface Province {
    id : number;
    value : string;
    provinceCode : string;
    text : string;
}

// Converts JSON strings to/from your types
export class ConvertModelListVendor {
    public static toModelListVendor( json : string ) : ModelListVendor {
        return JSON.parse( json );
    }

    public static modelListVendorToJson( value : ModelListVendor ) : string {
        return JSON.stringify( value );
    }
}
