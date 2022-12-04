import ITitleMd from "../../../../../component/ITitle/ITitleMd";
import IButton from "../../../../../component/IButton/IButton";
import { Header1 } from "../../../../../component/styles/Style";
import TableJasaServices from "./component/TableJasaServices";


const JasaPKB = () => {
    return (
        <div className = { `flex-1 grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { "Jasa" }/>
            <div className = { `grid gap-5 flex-1 place-content-end` }>
                <div className = "grid tablet:flex tablet:place-content-end">
                    <IButton size = { "small" } rounded = { "full" } status = { "success" }>
                        + Tambah Jasa
                    </IButton>
                </div>
                <TableJasaServices/>
            </div>
            <div className = "grid gap-10 tablet:flex mt-10">
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jasa Gratis" }/>
                    <div className = { `${ Header1 } text-primary` }>Rp. 0.00</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jasa Bayar" }/>
                    <div className = { `${ Header1 } text-primary` }>Rp. 0.00</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Estimasi Waktu Pekerjaan" }/>
                    <div className = { `${ Header1 } text-primary` }>0 Menit</div>
                </div>
            </div>
        </div>
    );
};
export default JasaPKB;
