import { useRouter } from "next/router";
import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../component/ITextField/IRadio";
import IDropDown from "../../../component/ITextField/IDropDown";
import IButton from "../../../component/IButton/IButton";
import { ListOfTipeKendaraan } from "../../../domain/models/TipeKendaraan/ModelTipeKendaraan";


export const InfoTipeKendaraanView = () => {
    const route = useRouter();
    const { data } = route.query
    const dataTipeKendaraan = JSON.parse( data as string ) as ListOfTipeKendaraan;
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
                                       value = { dataTipeKendaraan.tipe }
                                       onChange = { ( value ) => {
                                       } }/>
                    <IRadioSingle status = { dataTipeKendaraan.aktif }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { dataTipeKendaraan.aktif ? 'Aktif' : 'Tidak Aktif' }
                                  setStatus = { () => {
                                      // controller.setStatus( !controller.status );
                                  } }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama Tipe *' }
                                   onEnter = { 'next' }
                                   disabled = { true }
                                   value = { dataTipeKendaraan.namaTipe }
                                   onChange = { ( value ) => {
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'CC Mesin *' }
                                   onEnter = { 'next' }
                                   value = { dataTipeKendaraan.cc }
                                   onChange = { ( value ) => {
                                   } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           label = { 'Model *' }
                           disabled = { true }
                           data = { [] }
                           value = { dataTipeKendaraan.model }
                           onEnter = { "next" }
                           onValue = { ( value ) => {
                           } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           disabled = { true }
                           label = { 'Kode Tipe Kendaraan AHM *' }
                           data = { [] }
                           value = { dataTipeKendaraan.kodeTipeKendaraanAHM }
                           onEnter = { "next" }
                           onValue = { ( value ) => {
                           } }/>
            </div>
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                return route.back()
            } }>
                Kembali
            </IButton>
            {/*<IButton status = { 'success' } onClick = { () => {*/ }
            {/*} }>*/ }
            {/*    Simpan*/ }
            {/*</IButton>*/ }
        </div>
    </div>
}
