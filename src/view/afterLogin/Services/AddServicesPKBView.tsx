import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IDropDown, {
    InterfacePropsDropDown
} from "../../../component/ITextField/IDropDown";
import { IRadio } from "../../../component/ITextField/IRadio";
import IIndicator from "../../../component/ITextField/IIndicator";
import AddServicesPKBController from "./controller/AddServicesPKBController";
import ITextArea from "../../../component/ITextField/ITextArea";
import IButton from "../../../component/IButton/IButton";
import JasaPKB from "./component/JasaPKB";


const AddServicesPKBView = () => {
    const testData : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : "test1",
            value : "test1"
        },
        {
            id : 2,
            name : "test2",
            value : "test2"
        },
        {
            id : 3,
            name : "test3",
            value : "test3"
        },
        {
            id : 4,
            name : "test4",
            value : "test4"
        },
        {
            id : 5,
            name : "test5",
            value : "test5"
        },
        {
            id : 6,
            name : "test6",
            value : "test6"
        },
        {
            id : 7,
            name : "test7",
            value : "test7"
        },
        {
            id : 8,
            name : "test8",
            value : "test8"
        }
    ];
    const controller = AddServicesPKBController();
    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Pendaftaran Servis" } subtitle = { " Tambah PKB" }/>
            <div className = { `grid gap-5 grid-cols-2` }>
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
            <div className = { "flex-1 bg-white rounded-lg p-5 grid gap-5" }>
                <ITitleMd title = { "Pencarian PKB" }/>
                <div className = { `grid grid-cols-2 gap-5` }>
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
                        label = { "Jam Kedatangan Cutomer" }
                        onEnter = { "next" }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "No Polisi / No Mesin" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setPlat( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Antrian" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setAntrian( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Kedatangan" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setKedatangan( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Activity Capacity" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setCapacity( value );
                        } }
                    />
                </div>
                <div className = { `grid grid-cols-2 gap-5` }>
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
                <div className = { `grid grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawa( value.target.value );
                        } }
                        label = { "Nama Pembawa " }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaHP( value.target.value );
                        } }
                        label = { "Handphone Pembawa" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaKtp( value.target.value );
                        } }
                        label = { "No KTP Pembawa" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaAlamat( value.target.value );
                        } }
                        label = { "Alamat KTP Pembawa" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPembawaAlamat( value.target.value );
                        } }
                        label = { "Alamat Domisili" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setKota( value.target.value );
                        } }
                        label = { "Kota Pembawa" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setKecamatan( value.target.value );
                        } }
                        label = { "Kecamatan Pembawa" }
                        onEnter = { "next" }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Hubungan Dengan Pemilik" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setPemilik( value );
                        } }
                    />
                </div>
                <div className = { `grid grid-cols-2 gap-5` }>
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Alasan Ke AHASS" }
                        data = { testData }
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
                            controller.setDariDealerSendiri( 'Ya' );
                        } }
                        onClickValue2 = { () => {
                            controller.setDariDealerSendiri( 'Tidak' );
                        } }
                    />
                    <IRadio
                        label = "Konfirmasi Pergantian Part"
                        value = { controller.gantiPart }
                        value1 = { "Langsung" }
                        value2 = { "Konfirmasi" }
                        onClickValue1 = { () => {
                            controller.setGantiPart( 'Langsung' );
                        } }
                        onClickValue2 = { () => {
                            controller.setGantiPart( 'Konfirmasi' );
                        } }
                    />
                    <IRadio
                        label = "Part Bekas Dibawa Pulang"
                        value = { controller.partBekas }
                        value1 = { "Ya" }
                        value2 = { "Tidak" }
                        onClickValue1 = { () => {
                            controller.setPartBekas( 'Ya' );
                        } }
                        onClickValue2 = { () => {
                            controller.setPartBekas( 'Tidak' );
                        } }
                    />
                </div>
                <div className = { `grid grid-cols-2 gap-5` }>
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
                            label = { "Kilometer Sekarang" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            onChange = { ( value ) => {
                                controller.setKmNext( value.target.value );
                            } }
                            label = { "Kilometer Berikutnya" }
                            onEnter = { "next" }
                        />
                    </div>
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Gudang" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setGudang( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "No STNK" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setStnk( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Customer yang Datang" }
                        data = { testData }
                        onValueChange = { ( value ) => {
                            controller.setCustomerDatang( value );
                        } }
                    />
                    <div className = { `grid grid-cols-2 gap-5 place-items-end` }>
                        <ITextFieldDefault
                            type = { "text" }
                            onChange = { ( value ) => {
                                controller.setLat( value.target.value );
                            } }
                            label = { "Latitude" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            onChange = { ( value ) => {
                                controller.setLng( value.target.value );
                            } }
                            label = { "Longitude" }
                            onEnter = { "next" }
                        />
                    </div>
                </div>
                <div className = { `grid grid-cols-1 gap-5` }>
                    <ITextArea label = { `Keluhan` }
                               onChange = { ( value ) => {
                                   controller.setKeluhan( value.target.value );
                               } }/>
                    <ITextArea label = { `Gejala (Analisa Service Advisor)` }
                               onChange = { ( value ) => {
                                   controller.setGejala( value.target.value );
                               } }/>
                </div>
                <div className = { `flex-1 grid tablet:flex tablet:place-content-end` }>
                    <IButton size = { 'small' } rounded = { 'full' }>
                        History
                    </IButton>
                </div>
            </div>
            <JasaPKB/>
        </div>
    );
};
export default AddServicesPKBView;
