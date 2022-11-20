import { MdModeEditOutline, MdInfo, MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import ISizeBox from "../../../../component/ISizeBox/ISizeBox";
import KendaraanTableController from "../controller/KendaraanTableController";
import ISpinLoading from "../../../../component/animation/ISpinLoading/ISpinLoading";


interface Interface {
    deleted? : () => void;
    updated? : () => void;
    info? : () => void;
}

const TableKendaraan = ( props : Interface ) => {
    const controller = KendaraanTableController();

    const loading : JSX.Element = <div className = { `w-full flex place-content-center py-5` }>
        <ISpinLoading/>
    </div>

    return controller.loading ? loading : <div className = { `overflow-auto py-5` }>
        <div className = { `px-5` }>
            <div className = { `border border-primary w-16 py-3 flex place-items-center place-content-center rounded-lg cursor-pointer` }>
                <div>1</div>
                <MdKeyboardArrowDown size = { 20 }/>
            </div>
        </div>
        <ISizeBox height = { 'h-5' }/>
        <table className = { `w-full` }>
            <thead className = { `bg-primary text-white` }>
            <tr>
                <th className = { `px-3 py-5 text-center` }>No</th>
                <th className = { `px-3 py-5 text-center` }>No Polisi</th>
                <th className = { `px-3 py-5 text-center` }>No Mesin</th>
                <th className = { `px-3 py-5 text-center` }>No Rangka</th>
                <th className = { `px-3 py-5 text-center` }>Customer</th>
                <th className = { `px-3 py-5 text-center` }>Type</th>
                <th className = { `px-3 py-5 text-center` }>Warna</th>
                <th className = { `px-3 py-5 text-center` }>Tahun Rakit</th>
                <th className = { `px-3 py-5 text-center` }>Status</th>
                <th className = { `px-3 py-5 text-center` }>Action</th>
            </tr>
            </thead>

            <tbody>
            {

                controller.kendaraan.map( ( item, index ) => {
                    return <tr key = { index }
                               className = { `${ index % 2 == 0 ? 'bg-white-secondary4' : 'bg-white' }` }>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ index + 1
                        }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.noPolisi
                        }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.noMesin
                        }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.noRangka
                        }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.customer
                        }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.type }</td>
                        <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.warna }</td>
                        <td
                            className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.tahunRakit }</td>
                        <td
                            className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ item.status }</td>
                        <td
                            className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px] flex gap-2 place-items-center
                place-content-center` }><MdInfo size = { 25 } color = { '#20A8D8' } className = { `cursor-pointer`
                        } onClick = { props.info }/> <MdModeEditOutline size = { 25 }
                                                                        color = { '#F0B900' }
                                                                        className = {
                                                                            `cursor-pointer` }
                                                                        onClick = { props.updated }/>
                            <MdDelete size = { 25 } color = { '#E21B1B' }
                                      className = { `cursor-pointer` } onClick = { props.deleted }/></td>
                    </tr>
                } )
            }
            </tbody>
        </table>
        <hr/>
        <div className = { `mt-5 px-5 flex gap-2 place-content-end` }>
            <div className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                 onClick = { () => {
                 } }>
                Prev
            </div>
            {
                // pagination
            }
            <div className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                 onClick = { () => {
                 } }>
                Next
            </div>
        </div>
    </div>


}
export default TableKendaraan


