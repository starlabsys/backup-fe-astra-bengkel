import { useState } from 'react';


const AddServicesPKBController = () => {
    const [tanggal, setTanggal] = useState('')
    const [jamKedatangan, setJamKedatangan] = useState('')
    const [plat, setPlat] = useState('')
    const [antrian, setAntrian] = useState('')
    const [kedatangan, setKedatangan] = useState('')
    const [capacity, setCapacity] = useState('')
    const [pemilik, setPemilik] = useState('')
    const [hp, setHp] = useState('')
    const [mesin, setMesin] = useState('')
    const [motor, setMotor] = useState('')
    const [pembawa, setPembawa] = useState('')
    const [pembawaHP, setPembawaHP] = useState('')
    const [pembawaKtp, setPembawaKtp] = useState('')
    const [pembawaAlamat, setPembawaAlamat] = useState('')
    const [domisili, setDomisili] = useState('')
    const [kota, setKota] = useState('')
    const [kecamatan, setKecamatan] = useState('')
    const [hubungan, setHubungan] = useState('')
    const [alasan, setAlasan] = useState('')
    const [dariDealerSendiri, setDariDealerSendiri] = useState('')
    const [gantiPart, setGantiPart] = useState('')
    const [partBekas, setPartBekas] = useState('')
    const [indicatorBensin, setIndicatorBensin] = useState('0')
    const [kmNow, setKmNow] = useState('')
    const [kmNext, setKmNext] = useState('')
    const [gudang, setGudang] = useState('')
    const [stnk, setStnk] = useState('')
    const [customerDatang, setCustomerDatang] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [keluhan, setKeluhan] = useState('')
    const [gejala, setGejala] = useState('')
    const [uangMuka, setUangMuka] = useState('')

    return {
        tanggal, setTanggal,
        jamKedatangan, setJamKedatangan,
        plat, setPlat,
        antrian, setAntrian,
        kedatangan, setKedatangan,
        capacity, setCapacity,
        pemilik, setPemilik,
        hp, setHp,
        mesin, setMesin,
        motor, setMotor,
        pembawa, setPembawa,
        pembawaHP, setPembawaHP,
        pembawaKtp, setPembawaKtp,
        pembawaAlamat, setPembawaAlamat,
        domisili, setDomisili,
        kota, setKota,
        kecamatan, setKecamatan,
        hubungan, setHubungan,
        alasan, setAlasan,
        dariDealerSendiri, setDariDealerSendiri,
        gantiPart, setGantiPart,
        partBekas, setPartBekas,
        indicatorBensin, setIndicatorBensin,
        kmNow, setKmNow,
        kmNext, setKmNext,
        gudang, setGudang,
        stnk, setStnk,
        customerDatang, setCustomerDatang,
        lat, setLat,
        lng, setLng,
        keluhan, setKeluhan,
        gejala, setGejala,
        uangMuka, setUangMuka
    }
}

export default AddServicesPKBController
