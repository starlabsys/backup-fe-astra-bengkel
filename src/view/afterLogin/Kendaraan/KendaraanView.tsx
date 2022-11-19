import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IButton from "../../../component/IButton/IButton";
import TableKendaraan from "./component/TableKendaraan";


const KendaraanView = () => {
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Kendaraan' } subtitle = { 'kendaraan' }/>
        <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'Pencarian Kendaraan' }/>
            <div className = { `grid tablet:grid-cols-2 laptop:grid-cols-3 gap-5 mt-5` }>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } } placeholder = { 'Masukan No Polisi' }
                                   label = { 'No Polisi' } onEnter = { 'enter' }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } } placeholder = { 'Masukan Mesin' }
                                   label = { 'No Mesin' } onEnter = { 'enter' }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } } placeholder = { 'Masukan Nama Customer' }
                                   label = { 'Nama Customer' } onEnter = { 'enter' }/>
                <ITextFieldDefault type = { 'text' }
                                   onChange = { () => {
                                   } } placeholder = { 'Masukan No Rangka' }
                                   label = { 'No Rangka' } onEnter = { 'enter' }/>
            </div>
            <div className = { `flex gap-5 place-content-end` }>
                <IButton size = { 'small' } rounded = { "full" } status = { 'success' }>
                    Download To Excel
                </IButton>
                <IButton size = { 'small' } rounded = { "full" }>
                    Cari
                </IButton>
            </div>
        </div>
        <div className = { `w-full mt-5 rounded-lg bg-white grid relative` }>
            <div className = { `w-full p-5 grid gap-10` }>
                <ITitleMd title = { 'List Sparepart' }/>
                <div className = { `laptop:flex place-items-center place-content-between mb-5` }>
                    <div className = { `laptop:w-4/12 mb-5` }>
                        <ITextFieldDefault type = { "text" } onChange = { event => {
                        } } placeholder = { 'Cari...' } label = { 'Cari' } onEnter = { "enter" }/>
                    </div>
                    <div className = { `flex place-content-end ` }>
                        <IButton size = { "small" } rounded = { "lg" } status = { 'success' }>+ Tambah
                                                                                              Kendaraan</IButton>
                    </div>
                </div>
            </div>
            <TableKendaraan/>
        </div>
    </div>
}
export default KendaraanView
