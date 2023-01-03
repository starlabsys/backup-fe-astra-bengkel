import ITitleMd from "../../../../../component/ITitle/ITitleMd";
import IButton from "../../../../../component/IButton/IButton";
import { Header1 } from "../../../../../component/styles/Style";
import TableJasaServices from "./component/TableJasaServices";
import { ITableData } from "../../../../../component/ITable/ITableNextUI";


const JasaPKB = () => {
    return (
        <div className = { `flex-1 grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { "Jasa" }/>
            <div className = { `grid gap-5 flex-1 place-content-end` }>
                <div className = "grid tablet:flex tablet:place-content-end">
                    <IButton rounded = { "full" } status = { "success" }>
                        + Tambah Jasa
                    </IButton>
                </div>
            </div>
            { tableData() }
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

    function tableData() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           updated = { ( data ) => {
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Kode Jasa',
                                   name : 'kode_jasa',
                               },
                               {
                                   label : 'Kode Jasa AHM',
                                   name : 'kode_jasa_ahm',
                               },
                               {
                                   label : 'Nama Pekerjaan',
                                   name : 'nama_pekerjaan',
                               },
                               {
                                   label : 'Harga Pekerjaan',
                                   name : 'harga_pekerjaan',
                               },
                               {
                                   label : 'Nilai Diskon',
                                   name : 'nilai_diskon',
                               },
                               {
                                   label : 'Diskon %',
                                   name : 'diskon_persen',
                               },
                               {
                                   label : 'isOPL',
                                   name : 'isOPL',
                               },
                               {
                                   label : 'Total',
                                   name : 'total',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { [] }/>
    }
};
export default JasaPKB;
