import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IButton from "../../../component/IButton/IButton";
import TablePit from "./component/TablePit/TablePit";
import { useContext } from "react";
import { DialogDataContext } from "../../../context/IDialogData";
import { EnumSizeDialog } from "../../../utils/enum/EnumSizeDialog";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IDropDown from "../../../component/ITextField/IDropDown";
import { IRadioSingle } from "../../../component/ITextField/IRadio";
import { AddPitController } from "./controller/AddPitController";
import ISpinLoading from "../../../component/animation/ISpinLoading/ISpinLoading";
import { IToastContext } from "../../../context/IToast";
import { useRouter } from "next/router";


const PitView = () => {
    const dialog = useContext( DialogDataContext );
    const addPit = AddPitController()
    const toast = useContext( IToastContext )
    const navigator = useRouter()

    const onSaved = () => {
        let kodePit = '';
        let tipePit = '';
        let isActive = true;
        let loading = false;
        dialog.openDialog( true );
        dialog.setSizeDialog( EnumSizeDialog.small );
        dialog.setDialogData(
            <div className = { `grid gap-5` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Kode PIT' }
                                   onChange = { ( event ) => {
                                       kodePit = event.target.value
                                   } }
                                   onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Tipe PIT' }
                           data = { [
                               {
                                   id : 1,
                                   value : "REGULAR",
                                   name : "REGULAR"
                               },
                               {
                                   id : 1,
                                   value : "BIG BIKE",
                                   name : "BIG BIKE"
                               },
                               {
                                   id : 1,
                                   value : "FAST TRACK",
                                   name : "FAST TRACK"
                               },
                               {
                                   id : 1,
                                   value : "HIGH END",
                                   name : "HIGH END"
                               },
                           ] }
                           onEnter = { 'next' }
                           onValue = { ( value ) => {
                               tipePit = value.value
                           } } onValueChange = { () => {
                } }/>
                <IRadioSingle label = { 'Status' }
                              value1 = { 'Aktif' }
                              status = { isActive }
                              setStatus = { ( value ) => {
                                  isActive = value
                              } }/>
            </div>
        )
        dialog.setFooterDialog( <IButton size = { 'small' }
                                         rounded = { "full" }
                                         status = { "success" }
                                         onClick = { () => {
                                             addPit.savePit( {
                                                 kodePit : kodePit,
                                                 tipePit : tipePit,
                                                 isActive : isActive
                                             } ).then( ( value ) => {
                                                 dialog.openDialog( false );
                                                 toast.openToast( true )
                                                 toast.toastMessage( "Berhasil tambah data PIT" )
                                                 navigator.reload()
                                                 // console.log( 'value ' + value )
                                             } )
                                         } }>
            { loading ? <ISpinLoading/> : 'Simpan' }
        </IButton> )

    }

    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "PIT" } subtitle = { "pit" }/>
            <div className = { `w-full bg-white rounded-lg grid gap-5 relative` }>
                <div className = { `w-full grid gap-5 p-5` }>
                    <ITitleMd title = { "List Data PIT" }/>
                    <div className = { `w-full flex place-content-end` }>
                        <IButton size = { "small" }
                                 status = { "success" }
                                 rounded = { "full" }
                                 onClick = { onSaved }>
                            + Tambah Pit
                        </IButton>
                    </div>
                </div>
                <TablePit updated = { data => {
                    console.log( 'data ' + data.id )
                } }/>
            </div>
        </div>
    );


};
export default PitView;
