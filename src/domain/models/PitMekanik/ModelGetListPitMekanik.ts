// To parse this data:
//
//   import { Convert, ModelListPitMekanik } from "./file";
//
//   const modelListPitMekanik = Convert.toModelListPitMekanik(json);

export interface ModelListPitMekanik {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listOfPITMekanik : ListOfPITMekanik[];
    message : string;
    ack : number;
}

export interface ListOfPITMekanik {
    listMekanik : ListMekanik[];
    pitID : number;
    kodePit : string;
}

export interface ListMekanik {
    aktif : boolean;
    labelAktif : string;
    mekanikID : number;
    mekanik : string;
    kodeMekanik : string;
    isDisable : boolean;
}

// Converts JSON strings to/from your types
export class ConvertModelListPitMekanik {
    public static toModelListPitMekanik( json : string ) : ModelListPitMekanik {
        return JSON.parse( json );
    }

    public static modelListPitMekanikToJson( value : ModelListPitMekanik ) : string {
        return JSON.stringify( value );
    }
}
