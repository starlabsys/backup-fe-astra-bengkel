import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import IButton from "../../../../component/IButton/IButton";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import { useRouter } from "next/router";
import EditKendaraanViewModel from "./EditKendaraanViewModel";


const EditKendaraanView = () => {
    const route = useRouter();
    const { id } = route.query;
    const idDetail = id as string;
    const controller = EditKendaraanViewModel( idDetail );


    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Edit Kendaraan' } subtitle = { 'master-data/kendaraan/edit' }/>
        { stnk() }
        { typeKendaraan() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { controller.updateKendaraan }>
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
                           value = { controller.listDropDownPelanggan.find( ( item ) => item.id ===
                               controller.detail.idPelanganSTNK )?.name }
                           error = { false }
                           data = { controller.listDropDownPelanggan }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {
                               controller.getPelanggan( value );
                           } }
                           onValue = { value => {
                               controller.setPemilik( value );
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Polisi *' }
                                   onEnter = { 'next' }
                                   value = { controller.noPolisi }
                                   error = { false }
                                   onChange = { ( event ) => {
                                       controller.setNoPolisi( event.target.value.toUpperCase() );
                                   } }
                                   required = { true }/>
                <IDropDown type = { 'text' }
                           label = { 'Customer *' }
                           required = { true }
                           value = { controller.listDropDownPelanggan.find( ( item ) => item.id ===
                               controller.detail.idPelangan )?.name }
                           error = { false }
                           data = { controller.listDropDownPelanggan }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {
                               controller.getPelanggan( value );
                           } }
                           onValue = { value => {
                               controller.setPelanggan( value );
                           } }/>
                <IRadioSingle status = { controller.status } setStatus = { () => {
                    controller.setStatus( !controller.status );
                } } label = { 'Status' } value1 = { controller.status ? 'Aktif' : 'Tidak Aktif' } error = { false }/>
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
                           error = { false }
                           value = { controller.listDropDownKendaraan.find( ( item ) => item.id === controller.detail.tipe )?.name }
                           data = { controller.listDropDownKendaraan }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {
                           } }
                           onValue = { value => {
                               controller.setKendaraan( value )
                               controller.getWarna( Number( value.value ) );
                               controller.setWarna( {
                                   id : 0,
                                   name : '',
                                   value : ''
                               } );
                           } }/>
                <IDropDown type = { 'text' }
                           label = { 'Warna *' }
                           required = { true }
                           value = { controller.listDropDownWarna.find( ( item ) => item.id === controller.detail.warna )?.name }
                           data = { controller.listDropDownWarna }
                           error = { false }
                           onEnter = { 'next' }
                           onValueChange = { ( value ) => {

                           } }
                           onValue = { value => {
                               controller.setWarna( value )
                           } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Tahun Rakit *' }
                                   onEnter = { 'next' }
                                   value = { controller.tahunRakit }
                                   error = { false }
                                   onChange = { ( event ) => {
                                       controller.setTahunRakit( event.target.value );
                                   } }
                                   required = { true }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Rangka *' }
                                   onEnter = { 'next' }
                                   value = { controller.noRangka }
                                   error = { false }
                                   onChange = { ( event ) => {
                                       controller.setNoRangka( event.target.value );
                                   } }
                                   required = { true }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No Mesin *' }
                                   onEnter = { 'next' }
                                   error = { false }
                                   value = { controller.noMesin }
                                   onChange = { ( event ) => {
                                       controller.setNoMesin( event.target.value );
                                   } }
                                   required = { true }/>
            </div>
        </div>
    }
}

export default EditKendaraanView
