import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown, {
    InterfacePropsDropDown
} from "../../../../component/ITextField/IDropDown";
import { IRadio } from "../../../../component/ITextField/IRadio";
import IIndicator from "../../../../component/ITextField/IIndicator";
import AddServicesPKBController from "./AddServicesPKBController";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import JasaPKB from "../component/Jasa";
import SparepartComponentView from "../component/Sparepart";
import {
    body1,
    bodyLabel3,
    Header1,
    Title1
} from "../../../../component/styles/Style";
import StateViewModel from "./ViewModel/StateViewModel";


const AddServicesPKBView = () => {
    const testData : InterfacePropsDropDown[] = [
        {
            id : 0,
            name : "KB 1234 UQ",
            value : "KB 1234 UQ"
        }
    ];
    const controller = AddServicesPKBController();
    const state = StateViewModel();
    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Pendaftaran Servis" } subtitle = { " Tambah PKB" }/>
            { FormSearch() }
            { FormData() }
            <JasaPKB/>
            <SparepartComponentView/>
            { UangMuka() }
            { Total() }
            { PIC() }
            { ETA() }
            { JAM() }
            <div className = "grid tablet:flex tablet:flex-1 gap-5 tablet:place-content-end">
                <IButton size = { "small" } rounded = { "full" } status = "danger">
                    Batal
                </IButton>
                <IButton size = { "small" } rounded = { "full" }>
                    Simpan
                </IButton>
            </div>
        </div>
    );

    function JAM() {
        return (
            <div className = "bg-white grid tablet:grid-cols-3 gap-5 p-10 rounded-lg place-content-center place-items-center">
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Masuk" }/>
                    <div className = { `${ Header1 } text-primary` }>18:08</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Proses" }/>
                    <div className = { `${ Header1 } text-primary` }>1</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Selesai" }/>
                    <div className = { `${ Header1 } text-primary` }>1</div>
                </div>
            </div>
        );
    }

    function ETA() {
        return (
            <div className = "bg-white grid gap-5 p-5 rounded-lg">
                <ITitleMd title = { "ETA" }/>
                <div className = "grid tablet:grid-cols-2">
                    <ITextFieldDefault
                        type = { "datetime-local" }
                        onChange = { ( value ) => {
                            controller.setTanggal( value.target.value );
                        } }
                        label = { "Estimasi Jam Selesai" }
                        onEnter = { "next" }
                    />
                </div>
            </div>
        );
    }

    function PIC() {
        return (
            <div className = "bg-white p-5 rounded-lg grid gap-5">
                <ITitleMd title = { "PIC" }/>
                <div className = "grid gap-5 laptop:grid-cols-3">
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Mekanik" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setAntrian( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Service Advisor *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setAntrian( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Final Inspector *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setAntrian( value );
                        } }
                    />
                </div>
            </div>
        );
    }

    function Total() {
        return (
            <div className = "grid gap-5">
                <div className = "grid tablet:grid-cols-2 gap-5">
                    <div className = "p-5 bg-white rounded-lg grid gap-5">
                        <ITitleMd title = { "Total" }/>
                        <div className = "grid grid-cols-2 gap-16 text-primary">
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Sub Total Bayar</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Dis. Final</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Total Gratis</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>PPn</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Nilai PPn</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Total Bayar</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                        </div>
                    </div>
                    <div className = "grid grid-cols-2">
                        <div className = "bg-primary rounded-l-lg p-5 flex place-content-center place-items-center">
                            <div className = { ` text-white text-center grid gap-2` }>
                                <div className = { `${ body1 }` }>Est Biaya</div>
                                <div className = { `${ Title1 }` }>Rp. 0</div>
                            </div>
                        </div>
                        <div className = "bg-secondary rounded-r-lg p-5 flex place-content-center place-items-center">
                            <div className = { ` text-white text-center grid gap-2` }>
                                <div className = { `${ body1 }` }>Uang Muka</div>
                                <div className = { `${ Title1 }` }>Rp. 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function UangMuka() {
        return (
            <div className = "p-5 bg-white rounded-lg grid gap-5">
                <ITitleMd title = { "Uang Muka" }/>
                <div className = "grid tablet:grid-cols-2">
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setUangMuka( value.target.value );
                        } }
                        label = { "Uang Muka" }
                        onEnter = { "next" }
                    />
                </div>
            </div>
        );
    }

    function FormSearch() {
        return (
            <div className = { `grid gap-5 tablet:grid-cols-2 px-5` }>
                <ITextFieldDefault
                    type = { "text" }
                    onChange = { () => {
                    } }
                    placeholder = { "No PKB" }
                    label = { "PKB" }
                    labelColor = { "text-white" }
                    backgroundLabel = { "bg-primary" }
                    onEnter = { "next" }
                />
                <ITextFieldDefault
                    type = { "text" }
                    onChange = { () => {
                    } }
                    placeholder = { "No Antrian" }
                    label = { "Antrian" }
                    labelColor = { "text-white" }
                    backgroundLabel = { "bg-primary" }
                    onEnter = { "next" }
                />
                <ITextFieldDefault
                    type = { "text" }
                    onChange = { () => {
                    } }
                    placeholder = { "PKB Return" }
                    label = { "PKB Return" }
                    labelColor = { "text-white" }
                    backgroundLabel = { "bg-primary" }
                    onEnter = { "next" }
                />
            </div>
        );
    }

    function FormData() {
        return (
            <div className = { "flex-1 bg-white rounded-lg p-5 grid gap-5" }>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "date" }
                        onChange = { ( value ) => {
                            controller.setTanggal( value.target.value );
                        } }
                        label = { "Tanggal" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "time" }
                        onChange = { ( value ) => {
                            controller.setJamKedatangan( value.target.value );
                        } }
                        label = { "Jam Kedatangan Cutomer *" }
                        onEnter = { "next" }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "No Polisi / No Mesin *" }
                        data = { state.activeSearch ? state.searchProvince : state.province }
                        activeAddOn = { true }
                        onClickAddOn = { () => {
                        } }
                        onValue = { ( value ) => {
                            controller.setPlat( value.value );
                        } }
                        onValueChange = { ( value ) => {
                            state.changeProvince( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Antrian *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setAntrian( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Kedatangan *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setKedatangan( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Activity Capacity *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setCapacity( value );
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPemilik( value.target.value );
                        } }
                        label = { "Pemilik" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setHp( value.target.value );
                        } }
                        label = { "No HP" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setMesin( value.target.value );
                        } }
                        label = { "No Mesin" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setMotor( value.target.value );
                        } }
                        label = { "Tahun Motor" }
                        onEnter = { "next" }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawa( value.target.value );
                        } }
                        label = { "Nama Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaHP( value.target.value );
                        } }
                        label = { "Handphone Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaKtp( value.target.value );
                        } }
                        label = { "No KTP Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaAlamat( value.target.value );
                        } }
                        label = { "Alamat KTP Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaAlamat( value.target.value );
                        } }
                        label = { "Alamat Domisili *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setKota( value.target.value );
                        } }
                        label = { "Kota Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setKecamatan( value.target.value );
                        } }
                        label = { "Kecamatan Pembawa *" }
                        onEnter = { "next" }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Hubungan Dengan Pemilik *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setPemilik( value );
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Alasan Ke AHASS *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setAlasan( value );
                        } }
                    />
                    <IRadio
                        label = "Dari Dealer Sendiri"
                        value = { controller.dariDealerSendiri }
                        value1 = { "Ya" }
                        value2 = { "Tidak" }
                        onClickValue1 = { () => {
                            controller.setDariDealerSendiri( "Ya" );
                        } }
                        onClickValue2 = { () => {
                            controller.setDariDealerSendiri( "Tidak" );
                        } }
                    />
                    <IRadio
                        label = "Konfirmasi Pergantian Part"
                        value = { controller.gantiPart }
                        value1 = { "Langsung" }
                        value2 = { "Konfirmasi" }
                        onClickValue1 = { () => {
                            controller.setGantiPart( "Langsung" );
                        } }
                        onClickValue2 = { () => {
                            controller.setGantiPart( "Konfirmasi" );
                        } }
                    />
                    <IRadio
                        label = "Part Bekas Dibawa Pulang"
                        value = { controller.partBekas }
                        value1 = { "Ya" }
                        value2 = { "Tidak" }
                        onClickValue1 = { () => {
                            controller.setPartBekas( "Ya" );
                        } }
                        onClickValue2 = { () => {
                            controller.setPartBekas( "Tidak" );
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <IIndicator
                        label = "Indikator Bensin"
                        value = { controller.indicatorBensin }
                        onChange = { ( value ) => {
                            controller.setIndicatorBensin( value.target.value );
                        } }
                    />
                    <div className = { `grid grid-cols-2 gap-5 place-items-end` }>
                        <ITextFieldDefault
                            type = { "text" }
                            onChange = { ( value ) => {
                                controller.setKmNow( value.target.value );
                            } }
                            label = { "Kilometer Sekarang *" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            onChange = { ( value ) => {
                                controller.setKmNext( value.target.value );
                            } }
                            label = { "Kilometer Berikutnya *" }
                            onEnter = { "next" }
                        />
                    </div>
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Gudang" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setGudang( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "No STNK" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setStnk( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Customer yang Datang *" }
                        data = { testData }
                        onValue = { ( value ) => {
                            console.log( value );
                        } }
                        onValueChange = { ( value ) => {
                            controller.setCustomerDatang( value );
                        } }
                    />
                    <div className = { `grid grid-cols-2 gap-5 place-items-end` }>
                        <ITextFieldDefault
                            type = { "text" }
                            disabled = { true }
                            value = { controller.lat }
                            onChange = { ( value ) => {
                                // VIewModel.getLat();
                            } }
                            label = { "Latitude" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            disabled = { true }
                            value = { controller.lng }
                            onChange = { ( value ) => {
                                // VIewModel.getLat();
                            } }
                            label = { "Longitude" }
                            onEnter = { "next" }
                        />
                    </div>
                </div>
                <div className = { `grid grid-cols-1 gap-5` }>
                    <ITextArea
                        label = { `Keluhan *` }
                        onChange = { ( value ) => {
                            controller.setKeluhan( value.target.value );
                        } }
                    />
                    <ITextArea
                        label = { `Gejala (Analisa Service Advisor) *` }
                        onChange = { ( value ) => {
                            controller.setGejala( value.target.value );
                        } }
                    />
                </div>
                <div className = { `flex-1 grid tablet:flex tablet:place-content-end` }>
                    <IButton size = { "small" } rounded = { "full" }>
                        History
                    </IButton>
                </div>
            </div>
        );
    }
};
export default AddServicesPKBView;
