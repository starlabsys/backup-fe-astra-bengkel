import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ISizeBox from "../../../component/ISizeBox/ISizeBox";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import { body2 } from "../../../component/styles/Style";
import IButton from "../../../component/IButton/IButton";


const ReportView = () => {

    return <div className = { `flex-1 relative` }>
        <IBreadcrumbs title = { `Report` } subtitle = { `report` }/>
        <ISizeBox height = { `h-5` }/>
        <div className = { `bg-white p-5 rounded-lg grid gap-5` }>
            <div className = { `${ body2 } text-primary mb-5` }>
                Pencarian Sparepart
            </div>
            <div className = { `grid gap-5 laptop:grid-cols-2` }>
                <ITextFieldDefault placeholder = { 'Masukan Kode' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Kode' }/>
                <ITextFieldDefault placeholder = { 'Masukan Nama' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Nama' }/>
                <ITextFieldDefault placeholder = { 'Masukan Alamat' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Alamat' }/>
                <ITextFieldDefault placeholder = { 'Masukan Kota' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Kota' }/>
                <ITextFieldDefault placeholder = { 'Masukan Jabatan' } type = { "text" } onChange = { () => {
                } } onEnter = { 'next' } label = { 'Jabatan' }/>
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

        <div className = { `flex-1 relative bg-white rounded-lg mt-5 p-5` }>
            <div className = { `${ body2 } text-primary mb-10` }>
                List Sparepart
            </div>
            <div className = { `laptop:flex place-items-center place-content-between mb-5` }>
                <div className = { `laptop:w-4/12 mb-5` }>
                    <ITextFieldDefault type = { "text" } onChange = { event => {
                    } } placeholder = { 'Cari...' } label = { 'Cari' } onEnter = { "enter" }/>
                </div>
                <div className = { `flex place-content-end ` }>
                    <IButton size = { "small" } rounded = { "lg" } status = { 'success' }>+ Tambah Sparepart</IButton>
                </div>
            </div>
            <div className = { `absolute overflow-auto bg-white right-0 left-0 grid gap-5 py-5` }>
                <table className = "table-fixed w-fit">
                    <thead>
                    <tr>
                        <th className = { `w-20 pb-5` }>No</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Song</th>
                        <th className = { `w-96 pb-5` }>Songx</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className = { `flex place-items-center place-content-center` }>1</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default ReportView
