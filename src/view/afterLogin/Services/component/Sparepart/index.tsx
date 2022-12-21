import ITitleMd from "../../../../../component/ITitle/ITitleMd";
import IButton from "../../../../../component/IButton/IButton";
import { Header1 } from "../../../../../component/styles/Style";
import TableSparepartServices from "./component/TableJasaServices";
import { ITableData } from "../../../../../component/ITable/ITableNextUI";


const SparepartComponentView = () => {
    return (
        <div className = { `w-full grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { "Sparepart" }/>
            <div className = { `w-full grid gap-5 place-content-end` }>
                <div className = "grid tablet:flex tablet:place-content-end">
                    <IButton rounded = { "full" } status = { "success" }>
                        + Tambah Sparepart
                    </IButton>
                </div>
            </div>
            { tableData() }
            <div className = "grid gap-10 tablet:flex mt-10">
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Total Qty" }/>
                    <div className = { `${ Header1 } text-primary` }>0</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Part Gratis" }/>
                    <div className = { `${ Header1 } text-primary` }>Rp. 0.00</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Part Bayar" }/>
                    <div className = { `${ Header1 } text-primary` }>Rp. 0.00</div>
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
                                   label : 'Ref No Jasa',
                                   name : 'ref_no_jasa',
                               },
                               {
                                   label : 'Kode Sparepart',
                                   name : 'kode_sparepart',
                               },
                               {
                                   label : 'Nama Sparepart',
                                   name : 'nama_sparepart',
                               },
                               {
                                   label : 'Harga Jual',
                                   name : 'harga_jual',
                               },
                               {
                                   label : 'Tambahan harga',
                                   name : 'tambahan_harga',
                               },
                               {
                                   label : 'QTY',
                                   name : 'qty',
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
export default SparepartComponentView;
