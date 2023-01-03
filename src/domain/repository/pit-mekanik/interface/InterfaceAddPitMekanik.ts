export interface InterfaceAddPitMekanik {
    action : number,
    pitID : number,
    kodePit : string,
    listMekanikPitModel : InterfaceListAddDataMekanik[]
}

export interface InterfaceListAddDataMekanik {
    _events? : {
        change : any[]
    },
    _handlers? : {},
    aktif : boolean,
    labelAktif : string,
    mekanikID : number,
    mekanik : string,
    kodeMekanik : string,
    isDisable : boolean,
    uid : string,
    guid : string
}
