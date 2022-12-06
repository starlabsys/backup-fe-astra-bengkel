import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IButton from "../../../../component/IButton/IButton";
import { useRouter } from "next/router";
import { TambahKendaraanViewModel } from "./ModelView/TambahKendaraan";
import { InterfaceKendaraan } from "../interfaces/InterfaceKendaraan";


const TambahKendaraanView = () => {
    const route = useRouter();
    const terminalPayload : InterfaceKendaraan = route.query as any;
    const controller = TambahKendaraanViewModel( {
        id : terminalPayload.id,
        namaPemilik : terminalPayload.customer,
        noRangka : terminalPayload.noRangka,
        noMesin : terminalPayload.noMesin,
        noPolisi : terminalPayload.noPolisi,
        typeKendaraan : terminalPayload.type,
        warna : terminalPayload.warna,
        tahunRakit : `${ terminalPayload.tahunRakit }`,
        status : terminalPayload.status,
        customer : terminalPayload.customer,
    } );
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Kendaraan' } subtitle = { 'master-data/kendaraan/tambah-kendaraan' }/>
        { stnk() }
        { typeKendaraan() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.addKendaraan().then( ( res ) => {
                } );
            } }>
                Simpan
            </IButton>
        </div>
    </div>


    function stnk() {
        return <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'STNK' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5` }>
                <IDropDown type = { 'text' }
                           label = { 'Nama Pemilik *' }
                           required = { true }
                           value = { controller.namaPemilik }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Pemilik x',
                                   name : 'Pemilik 1'
                               }
                           ] }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { value => {
                               controller.setNamaPemilik( value.value );
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Polisi *' }
                                   onEnter = { 'next' }
                                   value = { controller.noPolisi }
                                   onChange = { ( event ) => {
                                       controller.setNoPolisi( event.target.value );
                                   } }
                                   required = { true }/>
                <IDropDown type = { 'text' }
                           label = { 'Customer *' }
                           required = { true }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Pemilik x',
                                   name : 'Pemilik 1'
                               }
                           ] }
                           value = { controller.customer }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { value => {
                               controller.setCustomer( value.value );
                           } }/>
                <IRadioSingle status = { controller.status } setStatus = { () => {
                    controller.setStatus( !controller.status );
                } } label = { 'Status' } value1 = { 'Aktif' }/>
            </div>
        </div>
    }

    function typeKendaraan() {
        return <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'Type Kendaraan' }/>
            <div className = { `grid tablet:grid-cols-2 gap-5` }>
                <IDropDown type = { 'text' }
                           label = { 'Nama Tipe Kendaraan *' }
                           required = { true }
                           value = { controller.typeKendaraan }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Pemilik x',
                                   name : 'Pemilik 1'
                               }
                           ] }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { value => {
                               controller.setTypeKendaraan( value.value );
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Warna *' }
                           required = { true }
                           value = { controller.warna }
                           data = { [
                               {
                                   id : 1,
                                   value : 'Pemilik x',
                                   name : 'Pemilik 1'
                               }
                           ] }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { value => {
                               controller.setWarna( value.value );
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Tahun Rakit *' }
                                   onEnter = { 'next' }
                                   value = { controller.tahunRakit }
                                   onChange = { ( event ) => {
                                       controller.setTahunRakit( event.target.value );
                                   } }
                                   required = { true }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Rangka *' }
                                   onEnter = { 'next' }
                                   value = { controller.noRangka }
                                   onChange = { ( event ) => {
                                       controller.setNoRangka( event.target.value );
                                   } }
                                   required = { true }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Mesin *' }
                                   onEnter = { 'next' }
                                   value = { controller.noMesin }
                                   onChange = { ( event ) => {
                                       controller.setNoMesin( event.target.value );

                                   } }
                                   required = { true }/>
            </div>
        </div>
    }
}
export default TambahKendaraanView
