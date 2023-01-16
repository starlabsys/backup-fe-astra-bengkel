import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IDropDown from "../../../../component/ITextField/IDropDown";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { useRouter } from "next/router";
import TambahAdminVM from "./ViewModel/TambahAdminVM";
import { InterfaceDataAdmin } from "../interface/InterfaceDataAdmin";


const TambahAdminView = () => {
    const route = useRouter();
    const controller = TambahAdminVM();
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Admin' } subtitle = { 'admin/tambah-admin' }/>
        { form() }
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.saveData();
            } }>
                Simpan
            </IButton>
        </div>
    </div>

    function form() {
        return <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { 'Tambah Admin' }/>
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
                           data = { controller.role }
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
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Password' }
                                   onEnter = { 'next' }
                                   value = { controller.dataAdmin?.password }
                                   onChange = { ( value ) => {
                                       controller.setDataAdmin( ( prev ) => {
                                           return {
                                               ...prev,
                                               password : value.target.value
                                           } as InterfaceDataAdmin
                                       } )
                                   } }/>
            </div>
            <ITextArea error = { false }
                       value = { controller.dataAdmin?.loginData }
                       label = { 'Credential Login' }
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

export default TambahAdminView
