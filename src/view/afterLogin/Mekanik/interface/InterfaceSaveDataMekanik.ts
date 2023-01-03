export interface InterfaceSaveDataMekanik {
    action : number,
    id : number,
    kodeKaryawan : string,
    namaKaryawan : string,
    jenisKelamin : string,
    alamat : string,
    provinsi : number,
    kabupaten : string,
    kecamatan : string,
    kelurahan : string,
    city : string,
    kodePos : string,
    noTelepon : string,
    noHP : string,
    kTP : string,
    tanggalBerhenti : string,
    tanggalMasuk : string,
    areaID : number,
    email : string,
    catatan : string,
    tempatLahir : string,
    tanggalLahir : string,
    agama : number,
    berlakuKTP : string,
    kebangsaan : number,
    statusKawin : number,
    statusKomisi : number,
    statusKaryawan : number,
    tipeKomisi : number,
    satuanKomisi : string,
    nilaiKomisi : number,
    statusPIT : number,
    listJabatan : InterfaceListJabatan[],
    listTrainingLevel : InterfaceListTrainingLevel[],
    aktif : boolean,
    listPayroll : InterfaceListPayroll[],
    nik : string
}


interface InterfaceListJabatan {
    jabatan : string,
    jabatanID : number
}

interface InterfaceListTrainingLevel {
    idLevelTraining : string,
    trainingLevel : any,
    idJabatan : number
}

interface InterfaceListPayroll {
    payrollID : number,
    gaji : string,
    nilaiGaji : number
}
