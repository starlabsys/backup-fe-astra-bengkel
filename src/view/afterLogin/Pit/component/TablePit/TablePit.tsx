import {
    MdModeEditOutline,
    MdInfo,
    MdDelete,
    MdKeyboardArrowDown
} from "react-icons/md";
import ISizeBox from "../../../../../component/ISizeBox/ISizeBox";
import ISpinLoading from "../../../../../component/animation/ISpinLoading/ISpinLoading";
import TablePitController from "./TablePitController";
import { InterfacePit } from "../../interface/InterfacePit";


interface Interface {
    updated : ( data : InterfacePit ) => void;
}

const TablePit = ( props : Interface ) => {
    const controller = TablePitController();

    return controller.loading ? (
        <div className = { `w-full flex place-content-center py-5` }>
            <ISpinLoading/>
        </div>
    ) : (
        <div className = { `overflow-auto py-5` }>
            <div className = { `px-5` }>
                <div
                    className = { `border border-primary w-16 py-3 flex place-items-center place-content-center rounded-lg cursor-pointer` }
                >
                    <div>1</div>
                    <MdKeyboardArrowDown size = { 20 }/>
                </div>
            </div>
            <ISizeBox height = { "h-5" }/>
            <table className = { `w-full` }>
                <thead className = { `bg-primary text-white` }>
                <tr>
                    <th className = { `px-3 py-5 text-center` }>#</th>
                    <th className = { `px-3 py-5 text-center` }>Kode PIT</th>
                    <th className = { `px-3 py-5 text-center` }>Type PIT</th>
                    <th className = { `px-3 py-5 text-center` }>Status</th>
                    <th className = { `px-3 py-5 text-center` }>Action</th>
                </tr>
                </thead>

                <tbody>
                { controller.pit.map( ( item, index ) => {
                    return (
                        <tr
                            key = { index }
                            className = { `${
                                index % 2 == 0 ? "bg-white-secondary4" : "bg-white"
                            }` }
                        >
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { index + 1 }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { item.kode_pit }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { item.tipe_pit }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { item.is_active ? "Aktif" : "Tidak Aktif" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px] flex gap-2 place-items-center
                place-content-center` }
                            >
                                <MdModeEditOutline
                                    size = { 25 }
                                    color = { "#F0B900" }
                                    className = { `cursor-pointer` }
                                    onClick = { () => {
                                        props.updated( item )
                                    } }
                                />
                            </td>
                        </tr>
                    );
                } ) }
                </tbody>
            </table>
            <hr/>
            <div className = { `mt-5 px-5 flex gap-2 place-content-end` }>
                <div
                    className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                    onClick = { () => {
                        // if ( state > 1 ) {
                        //     setState( state - 1 )
                        //
                        // }
                    } }
                >
                    Prev
                </div>
                {
                    // pagination
                }
                <div
                    className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                    onClick = { () => {
                        // setState( state + 1 )
                        // setStart( start + 10 )
                    } }
                >
                    Next
                </div>
            </div>
        </div>
    );
};
export default TablePit;
