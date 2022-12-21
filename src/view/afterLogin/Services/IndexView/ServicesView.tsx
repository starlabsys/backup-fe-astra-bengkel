import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import ISelectOption from "../../../../component/ITextField/ISelectOption";
import IButton from "../../../../component/IButton/IButton";
import CardInformationData from "../component/CardInformationData";
import ServicesController from "./ServicesController";
import TablePKB from "../component/TablePKB";
import { RoleEnum } from "../../../../utils/enum/RoleEnum";
import DialogAddExcel from "../component/DialogAddExcel/DialogAddExcel";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { ITableData } from "../../../../component/ITable/ITableNextUI";


const ServicesView = () => {
    const controller = ServicesController();

    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Services" } subtitle = { "services" }/>
            <div className = { `flex-1 p-5 bg-white rounded-lg grid gap-10` }>
                <ITitleMd title = { "Pencarian PKB" }/>
                <div className = { `flex-1 grid gap-5 laptop:grid-cols-3` }>
                    <ITextFieldDefault
                        type = { "text" }
                        error = { false }
                        value = { undefined }
                        label = { "No PKB" }
                        onEnter = { "next" }
                        name = { "pkb" }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { () => {
                        } }
                    />
                    <ITextFieldDefault
                        type = { "date" }
                        label = { "Tanggal Mulai" }
                        onEnter = { "next" }
                        name = { "tglMulai" }
                        error = { false }
                        value = { undefined }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { () => {
                        } }
                    />
                    <ITextFieldDefault
                        type = { "date" }
                        label = { "Tanggal Sampai" }
                        onEnter = { "next" }
                        name = { "tglSampai" }
                        error = { false }
                        value = { undefined }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { () => {
                        } }
                    />
                    <ITextFieldDefault
                        type = { "No Polisi" }
                        label = { "PKB" }
                        onEnter = { "next" }
                        name = { "plat" }
                        error = { false }
                        value = { undefined }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { () => {
                        } }
                    />
                    <IDropDown type = { "text" }
                               error = { false }
                               label = { 'Status Pembayaran' }
                               placeholder = { '-- Select Status --' }
                               data = { [
                                   { id : 1, value : "1", name : "Lunas" },
                                   { id : 2, value : "2", name : "Belum Lunas" }
                               ] }
                               onEnter = { 'next' }
                               onValueChange = { () => {
                               } }
                               onValue = { () => {
                               } }/>
                </div>
                <div className = { `w-full flex place-content-end` }>
                    <div className = { `w-full tablet:w-9/12 laptop:w-5/12 flex place-content-end gap-2` }>
                        <IButton rounded = { "full" } status = { "danger" }>
                            Reset
                        </IButton>
                        <IButton rounded = { "full" }>
                            Cari
                        </IButton>
                    </div>
                </div>
            </div>
            <div className = { `flex-1 bg-white rounded-lg grid gap-10 p-5 relative` }>
                <div className = { `w-full flex` }>
                    <ITitleMd title = { "List Data PKB" }/>
                </div>
                { controller.role === RoleEnum.SuperAdmin ? (
                    <>
                        <div
                            className = { `grid w-full gap-2 tablet:flex tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 tablet:place-content-center` }
                        >
                            { controller.listCardInformationData.map( ( item, index ) => {
                                return (
                                    <CardInformationData
                                        key = { index }
                                        title = { item.title }
                                        total = { item.total.toString() }
                                        color = { item.color }
                                    />
                                );
                            } ) }
                        </div>
                    </>
                ) : null }
                <div
                    className = { `w-full grid gap-5 laptop:grid-cols-2 laptop:place-items-center laptop:place-content-between` }
                >
                    <div className = { `laptop:w-fit` }>
                        { controller.role === RoleEnum.SuperAdmin ? null : (
                            <div
                                className = { `grid gap-2 border border-primary py-4 relative rounded-md tablet:grid-cols-2 laptop:flex` }
                            >
                                <IButton size = { "small" } rounded = { "full" } status = { "warning" }>
                                    Proses
                                </IButton>
                                <IButton size = { "small" } rounded = { "full" } status = { "danger" }>
                                    Pause
                                </IButton>
                                <IButton size = { "small" } rounded = { "full" } status = { "success" }>
                                    Selesai
                                </IButton>
                                <div className = { `absolute -top-3 left-4 bg-white` }>Status</div>
                            </div>
                        ) }
                    </div>
                    <div
                        className = { `w-full grid gap-2 laptop:flex tablet:grid-cols-2 laptop:grid-cols-3 laptop:place-content-end laptop:py-5` }
                    >
                        { controller.role === RoleEnum.SuperAdmin ? (
                            <>
                                <IButton
                                    size = { "medium" }
                                    rounded = { "full" }
                                    status = { "success" }
                                    onClick = { () => {
                                        controller.dialog.openDialog( true );
                                        controller.dialog.setDialogData( <DialogAddExcel/> );
                                    } }
                                >
                                    Tambah Dari Excel
                                </IButton>
                            </>
                        ) : (
                            <>
                                <IButton size = { "medium" } rounded = { "full" } status = { "danger" }>
                                    Batal Selesai Services
                                </IButton>
                                <IButton size = { "medium" } rounded = { "full" } status = { "danger" }>
                                    Batal PKB
                                </IButton>
                            </>
                        ) }
                        <IButton
                            size = { "medium" }
                            rounded = { "full" }
                            status = { "success" }
                            onClick = { async () => {
                                controller.route.push( "/services/tambah-pkb" ).then( () => {
                                } );
                            } }
                        >
                            Tambah PKB
                        </IButton>
                    </div>
                </div>
                { tableData() }
            </div>
        </div>
    );

    function tableData() {
        return <ITableData
            selectionMode = { 'multiple' }
            page = { 0 }
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
                    label : 'Action',
                    name : 'action',
                },
                {
                    label : 'Status PKB',
                    name : 'status_pkb',
                },
                {
                    label : 'Status Pekerjaan',
                    name : 'status_pekerjaan',
                },
                {
                    label : 'Nama Mekanik',
                    name : 'nama_mekanik',
                },
                {
                    label : 'Nama Pemilik',
                    name : 'nama_pemilik',
                },
                {
                    label : 'No Antrian',
                    name : 'no_antrian',
                },
                {
                    label : 'No PKB',
                    name : 'no_pkb',
                },
                {
                    label : 'No Polisi',
                    name : 'no_polisi',
                },
                {
                    label : 'Engine No',
                    name : 'engine_no',
                },
                {
                    label : 'Tanggal',
                    name : 'tanggal',
                },
                {
                    label : 'Waktu Tunggu',
                    name : 'waktu_tunggu',
                },
                {
                    label : 'Durasi Pengerjaan',
                    name : 'durasi_pengerjan',
                },
                {
                    label : 'Jenis Pekerjaan',
                    name : 'jenis_pekerjaan',
                },
                {
                    label : 'PIT',
                    name : 'pit',
                },
            ] }
            data = { [] }/>
    }
};
export default ServicesView;
