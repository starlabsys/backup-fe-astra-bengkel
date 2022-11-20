import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import ISelectOption from "../../../component/ITextField/ISelectOption";
import IButton from "../../../component/IButton/IButton";
import CardInformationData from "./component/CardInformationData";
import ServicesController from "./controller/ServicesController";
import TablePKB from "./component/TablePKB";
import { IConstantEnum } from "../../../utils/enum/IConstantEnum";
import { RoleEnum } from "../../../utils/enum/RoleEnum";
import { useContext } from "react";
import { DialogDataContext } from "../../../context/IDialogData";
import DialogAddExcel from "./component/DialogAddExcel";


const ServicesView = () => {
    const controller = ServicesController();
    const dialog = useContext( DialogDataContext )
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Services' } subtitle = { 'services' }/>
        <div className = { `flex-1 p-5 bg-white rounded-lg grid gap-10` }>
            <ITitleMd title = { 'Pencarian PKB' }/>
            <div className = { `flex-1 grid gap-5 laptop:grid-cols-3` }>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'No PKB' }
                                   onEnter = { "next" }
                                   name = { 'pkb' }
                                   placeholder = { 'Masukan Nomor PKB' }
                                   onChange = { () => {
                                   } }/>
                <ITextFieldDefault type = { 'date' }
                                   label = { 'Tanggal Mulai' }
                                   onEnter = { "next" }
                                   name = { 'tglMulai' }
                                   placeholder = { 'Masukan Nomor PKB' }
                                   onChange = { () => {
                                   } }/>
                <ITextFieldDefault type = { 'date' }
                                   label = { 'Tanggal Sampai' }
                                   onEnter = { "next" }
                                   name = { 'tglSampai' }
                                   placeholder = { 'Masukan Nomor PKB' }
                                   onChange = { () => {
                                   } }/>
                <ITextFieldDefault type = { 'No Polisi' }
                                   label = { 'PKB' }
                                   onEnter = { "next" }
                                   name = { 'plat' }
                                   placeholder = { 'Masukan Nomor PKB' }
                                   onChange = { () => {
                                   } }/>
                <ISelectOption type = { 'text' }
                               label = { 'Status Pembayaran' }
                               name = { 'statusPembayaran' }
                               placeHolder = { '-- Select Status --' }
                               listOption = { [
                                   { value : '', viewValue : '-- Select Status --' },
                                   { value : '1', viewValue : 'Lunas' },
                                   { value : '2', viewValue : 'Belum Lunas' },
                               ] }
                               onSelect = { () => {
                               } }/>
            </div>
            <div className = { `flex-1 flex place-content-end gap-2` }>
                <IButton size = { 'small' } rounded = { 'full' } status = { 'danger' }>
                    Reset
                </IButton>
                <IButton size = { 'small' } rounded = { 'full' }>
                    Cari
                </IButton>
            </div>
        </div>
        <div className = { `flex-1 bg-white rounded-lg grid gap-10 py-5 relative` }>
            <div className = { `w-full flex px-5` }>
                <ITitleMd title = { 'List Data PKB' }/>
            </div>
            {
                controller.role === RoleEnum.SuperAdmin ? <>
                    <div className = { `grid w-full gap-2 px-5 tablet:flex tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 tablet:place-content-center` }>
                        {
                            controller.listCardInformationData.map( ( item, index ) => {
                                return <CardInformationData key = { index }
                                                            title = { item.title }
                                                            total = { item.total.toString() }
                                                            color = { item.color }/>

                            } )
                        }
                    </div>
                </> : null
            }
            <div className = { `w-full grid gap-5 laptop:grid-cols-2 laptop:place-items-center laptop:place-content-between` }>
                <div className = { `px-5 laptop:w-fit` }>
                    {
                        controller.role === RoleEnum.SuperAdmin ? null :
                            <div className = { `grid gap-2 border border-primary py-4 px-5 relative rounded-md tablet:grid-cols-2 laptop:flex` }>
                                <IButton size = { 'small' } rounded = { 'full' } status = { 'warning' }>
                                    Proses
                                </IButton>
                                <IButton size = { 'small' } rounded = { 'full' } status = { 'danger' }>
                                    Pause
                                </IButton>
                                <IButton size = { 'small' } rounded = { 'full' } status = { 'success' }>
                                    Selesai
                                </IButton>
                                <div className = { `absolute -top-3 left-4 bg-white` }>
                                    Status
                                </div>
                            </div>
                    }
                </div>
                <div className = { `w-full grid gap-2 px-5 laptop:flex tablet:grid-cols-2 laptop:grid-cols-3 laptop:place-content-end laptop:py-5` }>
                    {
                        controller.role === RoleEnum.SuperAdmin ?
                            <>
                                <IButton size = { 'medium' }
                                         rounded = { 'full' }
                                         status = { 'success' }
                                         onClick = { () => {
                                             dialog.openDialog( true )
                                             dialog.setDialogData( <DialogAddExcel/> )
                                         }
                                         }>
                                    Tambah Dari Excel
                                </IButton>
                            </> :
                            <>
                                <IButton size = { 'medium' } rounded = { 'full' } status = { 'danger' }>
                                    Batal Selesai Services
                                </IButton>
                                <IButton size = { 'medium' } rounded = { 'full' } status = { 'danger' }>
                                    Batal PKB
                                </IButton>
                            </>
                    }
                    <IButton size = { 'medium' } rounded = { 'full' } status = { 'success' } onClick = { () => {

                    } }>
                        Tambah PKB
                    </IButton>
                </div>
            </div>
            <TablePKB/>
        </div>
    </div>;
}
export default ServicesView
