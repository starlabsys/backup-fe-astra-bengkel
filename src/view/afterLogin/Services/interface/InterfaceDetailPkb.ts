export interface InterfaceDetailPkb {

    bookingSource : string;
    action : number;
    idPKB : number;
    statusPKB : number;
    tanggal : Date;
    refEquipmentID : number;
    kmSekarang : number;
    kmBerikutnya : number;
    tipePKB : number;
    hubunganDgPemilikID : number;
    alasanIngatServiceID : number;
    dealerSendiri : boolean;
    pergantianPart : boolean;
    partBekasDibawaKonsumen : boolean;
    refMechanicID : number;
    serviceAdvisorID : number;
    finalInspectorID : number;
    jamMasuk : Date;
    jamProses : Date;
    jamSelesai : Date;
    nilaiDiskonFinal : number;
    persentaseDiskonFinal : number;
    uangMuka : number;
    uangBayar : number;
    idGudang : number;
    idPit : number;
    latitude : number;
    longitude : number;
    indikatorBensin : number;
    isEngineNo : boolean;
    isFrameNo : boolean;
    jamKedatanganCustomer : Date;
    jamEstimasiSelesai : Date;
    tahunRakit : Date;
    activityCapacity : number;
    isIntegratedCheckin : number;
    listOfPekerjaan : any[];
    dataMotorkuX : DataMotorkuX;
    message : string;
    ack : number;
}

export interface DataMotorkuX {
    voucherType : number;
    voucherValue : number;
    discHappyHour : number;
    discVoucherRp : number;
}
