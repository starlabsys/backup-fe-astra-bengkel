import { useRouter } from "next/router";
import TambahAdminVM from "../TambahAdminView/ViewModel/TambahAdminVM";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import IButton from "../../../../component/IButton/IButton";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { InterfaceDataAdmin } from "../interface/InterfaceDataAdmin";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import StatusVM from "./ViewModel/StatusVM";


const StatusViewAdmin = () => {
    const route = useRouter();
    const { id, status } = route.query;
    const statusData = status as string;
    const controller = StatusVM( id?.toString() ?? "" );
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { statusData === 'edit' ? 'Edit Admin' : 'Info Admin' }
                      subtitle = { 'admin/' + statusData }/>
        { form() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            {
                statusData === 'edit' ? <IButton status = { 'success' } onClick = { () => {
                    controller.saveData();
                } }>
                    Simpan
                </IButton> : null
            }
        </div>
    </div>

    function form() {
        return <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Admin' }/>
            <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Kode Bengkel' }
                                   onEnter = { 'next' }
                                   value = { controller.dataAdmin?.kodeBengkel }
                                   onChange = { ( value ) => {
                                       controller.setDataAdmin( ( prev ) => {
                                           return {
                                               ...prev,
                                               kodeBengkel : value.target.value
                                           } as InterfaceDataAdmin
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama Bengkel' }
                                   onEnter = { 'next' }
                                   value = { controller.dataAdmin?.namaBengkel }
                                   onChange = { ( value ) => {
                                       controller.setDataAdmin( ( prev ) => {
                                           return {
                                               ...prev,
                                               namaBengkel : value.target.value
                                           } as InterfaceDataAdmin
                                       } )
                                   } }/>
                <IDropDown type = { 'text' }
                           error = { false }
                           label = { 'Role' }
                           data = { controller.listRole }
                           value = { controller.dataAdmin?.role?.name }
                           onValue = { ( value ) => {
                               controller.setDataAdmin( ( prev ) => {
                                   return {
                                       ...prev,
                                       role : value
                                   } as InterfaceDataAdmin
                               } )
                           } }
                           onEnter = { "next" }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama Lengkap' }
                                   onEnter = { 'next' }
                                   value = { controller.dataAdmin?.namaLengkap }
                                   onChange = { ( value ) => {
                                       controller.setDataAdmin( ( prev ) => {
                                           return {
                                               ...prev,
                                               namaLengkap : value.target.value
                                           } as InterfaceDataAdmin
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Username' }
                                   onEnter = { 'next' }
                                   value = { controller.dataAdmin?.username }
                                   onChange = { ( value ) => {
                                       controller.setDataAdmin( ( prev ) => {
                                           return {
                                               ...prev,
                                               username : value.target.value
                                           } as InterfaceDataAdmin
                                       } )
                                   } }/>


                {/*<ITextFieldDefault type = { 'text' }*/ }
                {/*                   label = { 'Password' }*/ }
                {/*                   onEnter = { 'next' }*/ }
                {/*                   value = { undefined }*/ }
                {/*                   onChange = { ( value ) => {*/ }
                {/*                       controller.setDataAdmin( ( prev ) => {*/ }
                {/*                           return {*/ }
                {/*                               ...prev,*/ }
                {/*                               password : value.target.value*/ }
                {/*                           } as InterfaceDataAdmin*/ }
                {/*                       } )*/ }
                {/*                   } }/>*/ }
            </div>
            {
                statusData === 'edit' ? <div className = { `grid gap-5 mt-5 mb-5` }>
                    <IButton size = { 'small' } onClick = { () => {
                        controller.setUbahPassword( !controller.ubahPassword );
                    } }>
                        Ubah Password
                    </IButton>
                    {
                        controller.ubahPassword ? <div className = { `grid grid-cols-1 gap-5` }>
                            <ITextFieldDefault type = { 'Masukan Password Baru' }
                                               label = { 'Password' }
                                               onEnter = { 'send' }
                                               value = { undefined }
                                               onChange = { ( event ) => {
                                                   controller.setPassword( event.target.value );
                                               } }/>
                            <div className = { 'grid grid-cols-1 tablet:grid-cols-2' }>
                                <IButton status = { 'success' } onClick = { () => {
                                    controller.changePassword();
                                } }>
                                    Simpan Password
                                </IButton>
                            </div>
                        </div> : null
                    }
                </div> : null
            }
            <ITextArea error = { false }
                       label = { 'Credential Login' }
                       value = { controller.dataAdmin?.loginData }
                       onChange = { ( value ) => {
                           controller.setDataAdmin( ( prev ) => {
                               return {
                                   ...prev,
                                   loginData : value.target.value
                               } as InterfaceDataAdmin
                           } )
                       } }/>
        </div>
    }
}

export default StatusViewAdmin
