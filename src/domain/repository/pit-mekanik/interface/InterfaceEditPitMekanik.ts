export interface InterfaceEditPitMekanik {
    "action" : number,
    "pitID" : number,
    "kodePit" : string,
    "listMekanikPitModel" : InterfaceListMekanik[]
}

// "_events" : {
//     "change" : [
//         null,
//         null,
//         null
//     ]
// },
// "_handlers" : {},
interface InterfaceListMekanik {
    "aktif" : boolean,
    "labelAktif" : string,
    "mekanikID" : number,
    "mekanik" : string,
    "kodeMekanik" : string,
    "isDisable" : boolean,
    "uid" : string,
    "guid" : string
}
