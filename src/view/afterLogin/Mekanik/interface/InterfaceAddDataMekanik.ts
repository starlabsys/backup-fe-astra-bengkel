import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";


export interface InterfaceAddDataMekanik {
    id? : number;
    kodeMekanik : string;
    statusMekanik : boolean;
    namaMekanik : string;
    alamatMekanik : string;
    provinsiMekanik : InterfacePropsDropDown;
    kabupatenMekanik : InterfacePropsDropDown;
    kecamatanMekanik : InterfacePropsDropDown;
    kelurahanMekanik : InterfacePropsDropDown;
    kodePosMekanik : string;
    noTelpMekanik : string;
    noHpMekanik : string;
    emailMekanik : string;
    catatanMekanik : string;
}
