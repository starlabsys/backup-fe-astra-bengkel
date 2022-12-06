import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IButton from "../../../../component/IButton/IButton";
import IDropDown from "../../../../component/ITextField/IDropDown";


export const TambahSparepartView = () => {
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Sparepart' } subtitle = { 'master-data/sparepart/tambah-sparepart' }/>
        <div className = { `grid gap-10 p-5 bg-white rounded-lg` }>
            <ITitleMd title = { 'Sparepart' }/>
            <div className = { `grid grid-cols-2 gap-5 place-items-start` }>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' } label = { 'Kode *' } onEnter = { 'next' }/>
                    <div className = { `grid grid-cols-2 place-items-end` }>
                        <IRadioSingle status = { false }
                                      label = { 'Status' }
                                      value1 = { 'Aktif' }
                                      setStatus = { () => {
                                      } }/>
                        <IButton size = { 'small' } status = { 'primary' }>
                            Cek Kode
                        </IButton>
                    </div>
                </div>
                <ITextFieldDefault type = { 'text' } label = { 'Nama *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' } label = { 'Nama Lokal' } onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Group *' }
                           data = { [] }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
                <ITextFieldDefault type = { 'text' } label = { 'Harga Lokal (Ahass) *' } onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Harga Nasional (HET) *' }
                                   disabled = { true }
                                   onEnter = { 'next' }/>
                <IDropDown type = { 'text' }
                           label = { 'Satuan *' }
                           data = { [
                               {
                                   id : 1,
                                   value : 'PCS',
                                   name : 'PCS'
                               }
                           ] }
                           onEnter = { 'next' }
                           onValueChange = { () => {
                           } }
                           onValue = { () => {
                           } }/>
            </div>
        </div>
    </div>
}
