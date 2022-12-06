import {
    MdModeEditOutline,
    MdInfo,
    MdKeyboardArrowDown,
    MdLocalPrintshop
} from "react-icons/md";
import ISizeBox from "../../../../../component/ISizeBox/ISizeBox";
import ISpinLoading from "../../../../../component/animation/ISpinLoading/ISpinLoading";


interface Interface {
    deleted? : () => void;
    updated? : () => void;
    info? : () => void;
}

const TablePKB = ( props : Interface ) => {
    const index = 1;

    const loading : JSX.Element = (
        <div className = { `w-full flex place-content-center py-5` }>
            <ISpinLoading/>
        </div>
    );

    // VIewModel.loading ? loading :

    return (
        <div className = { `w-full grid gap-3` }>
            <div className = { `px-5` }>
                <div
                    className = { `border border-primary w-16 py-3 flex place-items-center place-content-center rounded-lg cursor-pointer` }
                >
                    <div>1</div>
                    <MdKeyboardArrowDown size = { 20 }/>
                </div>
            </div>
            <div className = { `overflow-auto` }>
                <table className = { `w-full` }>
                    <thead className = { `bg-primary text-white` }>
                    <tr>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>#</th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Action
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Status PKB
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Status Pengerjaan
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Nama Mekanik
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Nama Pemilik
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            No Antrian
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            No PKB
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            No Polisi
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Engine No
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Tanggal
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Waktu Tunggu
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Durasi Pengerjaan
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>
                            Jenis Pengerjaan
                        </th>
                        <th className = { `px-3 py-5 text-center whitespace-nowrap` }>PIT</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        // VIewModel.kendaraan.map( ( item, index ) => {
                        //     return
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
                                className = { `px-3 py-4 text-center 
                    whitespace-nowrap min-w-[60px] flex gap-2
                    place-items-center place-content-center` }
                            >
                                <MdInfo
                                    size = { 25 }
                                    color = { "#20A8D8" }
                                    className = { `cursor-pointer` }
                                    onClick = { props.info }
                                />
                                <MdModeEditOutline
                                    size = { 25 }
                                    color = { "#F0B900" }
                                    className = { `cursor-pointer` }
                                    onClick = { props.updated }
                                />
                                <MdLocalPrintshop
                                    size = { 25 }
                                    color = { "#73B106" }
                                    className = { `cursor-pointer` }
                                    onClick = { props.deleted }
                                />
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.noMesin" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.noRangka" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.customer" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.type" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.warna" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.tahunRakit" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                            <td
                                className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }
                            >
                                { "item.status" }
                            </td>
                        </tr>
                        //
                        // } )
                    }
                    </tbody>
                </table>
            </div>
            <div className = { `px-5 flex gap-2 place-content-end` }>
                <div
                    className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                    onClick = { () => {
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
                    } }
                >
                    Next
                </div>
            </div>
        </div>
    );
};
export default TablePKB;
