import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IButton from "../../../component/IButton/IButton";
import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ISizeBox from "../../../component/ISizeBox/ISizeBox";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import TableSparePart from "./component/TableSparePart";


const SparePartView = () => {

    return <div className = { `w-full` }>
        <IBreadcrumbs title = { `Sparepart` } subtitle = { `sparepart` }/>
        <ISizeBox height = { `h-5` }/>
        <div className = { `bg-white p-5 rounded-lg grid gap-5` }>
            <ITitleMd title = { 'Pencarian Sparepart' }/>
            <div className = { `grid gap-5 laptop:grid-cols-2 mt-5` }>
                <ITextFieldDefault placeholder = { 'Masukan Kode' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Kode' }/>
                <ITextFieldDefault placeholder = { 'Masukan Nama' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Nama' }/>
            </div>
            <div className = { `flex gap-2 place-content-end mb-5` }>
                <IButton size = { 'small' }
                         rounded = { 'full' }
                         status = { 'danger' }
                         width = { 'w-44' }>Batal</IButton>
                <IButton size = { 'small' }
                         rounded = { 'full' }
                         status = { 'primary' }
                         width = { 'w-44' }>Cancel</IButton>
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
                                                                                              Sparepart</IButton>
                    </div>
                </div>
            </div>
            <TableSparePart/>
        </div>

    </div>

}

export default SparePartView
