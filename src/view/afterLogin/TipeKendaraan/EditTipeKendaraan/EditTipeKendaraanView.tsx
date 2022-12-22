import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { useRouter } from "next/router";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import IButton from "../../../../component/IButton/IButton";
import { ListOfTipeKendaraan } from "../../../../domain/models/TipeKendaraan/ModelTipeKendaraan";
import EditTipeKendaraanViewModel from "./EditTipeKendaraanViewModel";


export const EditTipeKendaraanView = () => {
    const route = useRouter();
    const { data } = route.query
    let dataTipeKendaraan : ListOfTipeKendaraan = {} as ListOfTipeKendaraan
    if ( data !== undefined ) {
        dataTipeKendaraan = JSON.parse( data as string ) as ListOfTipeKendaraan;
    }
    const controller = EditTipeKendaraanViewModel( dataTipeKendaraan );
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tipe Kendaraan' } subtitle = { `master-data/tipe-kendaraan/edit` }/>
        <div className = { `grid gap-5 bg-white p-5 rounded-lg` }>
            <ITitleMd title = { 'Edit Tipe Kendaraan' }/>
            <div className = { `grid gap-5 tablet:grid-cols-2 tablet:place-items-start` }>
                <div className = { `grid gap-2 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       disabled = { true }
                                       label = { 'Tipe *' }
                                       onEnter = { 'next' }
                                       value = { controller.tipe }
                                       onChange = { ( value ) => {
                                           controller.setTipe( value.target.value );
                                       } }/>
                    <IRadioSingle status = { controller.status }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { controller.status ? 'Aktif' : 'Tidak Aktif' }
                                  setStatus = { () => {
                                      // controller.setStatus( !controller.status );
                                  } }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama Tipe *' }
                                   onEnter = { 'next' }
                                   disabled = { true }
                                   value = { controller.namaTipe }
                                   onChange = { ( value ) => {
                                       controller.setNamaTipe( value.target.value );
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'CC Mesin *' }
                                   onEnter = { 'next' }
                                   value = { controller.ccMesin }
                                   onChange = { ( value ) => {
                                       controller.setCcMesin( Number( value.target.value ) );
                                   } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           label = { 'Model *' }
                           disabled = { true }
                           data = { controller.listModel }
                           value = { controller.listModel.find( ( item ) => item.value === controller.model )?.name }
                           onEnter = { "next" }
                           onValue = { ( value ) => {
                               controller.setModel( value.value );
                           } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           disabled = { true }
                           label = { 'Kode Tipe Kendaraan AHM *' }
                           data = { controller.listKodeAHM }
                           value = { controller.listKodeAHM.find( ( item ) => item.name === controller.kodeAHM )?.name }
                           onEnter = { "next" }
                           onValue = { ( value ) => {
                               // console.log( 'value', value );
                               controller.setKodeAHM( value.name );
                               controller.setIdTipeKendaraan( Number( value.value ) );
                           } }/>
            </div>
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                return route.back()
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.editData()
            } }>
                Simpan
            </IButton>
        </div>
    </div>
}
