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
import FormatDate from "../../../../utils/format/formatDate";


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
                        value = { controller.cariPkb.noPKB }
                        label = { "No PKB" }
                        onEnter = { "next" }
                        name = { "pkb" }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { ( value ) => {
                            controller.setCariPkb( {
                                ...controller.cariPkb,
                                noPKB : value.target.value
                            } )
                        } }
                    />
                    <ITextFieldDefault
                        type = { "date" }
                        label = { "Tanggal Mulai" }
                        onEnter = { "next" }
                        name = { "tglMulai" }
                        error = { false }
                        value = { controller.cariPkb.tanggal }
                        placeholder = { "Masukan Tanggal Mulai" }
                        onChange = { ( value ) => {
                            controller.setCariPkb( {
                                ...controller.cariPkb,
                                tanggal : FormatDate.dateSend( value.target.value )
                            } )
                        } }
                    />
                    <ITextFieldDefault
                        type = { "date" }
                        label = { "Tanggal Sampai" }
                        onEnter = { "next" }
                        name = { "tglSampai" }
                        error = { false }
                        value = { controller.cariPkb.tanggalSampai }
                        placeholder = { "Masukan Nomor PKB" }
                        onChange = { ( value ) => {
                            controller.setCariPkb( {
                                ...controller.cariPkb,
                                tanggal : FormatDate.dateSend( value.target.value )
                            } )
                        } }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        label = { "No Polisi" }
                        onEnter = { "next" }
                        name = { "plat" }
                        error = { false }
                        value = { controller.cariPkb.noPolisi }
                        placeholder = { "Masukan Nomor Polisi" }
                        onChange = { ( value ) => {
                            controller.setCariPkb( {
                                ...controller.cariPkb,
                                noPolisi : value.target.value
                            } )
                        } }
                    />
                    <IDropDown type = { "text" }
                               error = { false }
                               label = { 'Status Pembayaran' }
                               placeholder = { '-- Select Status --' }
                               value = { controller.cariPkb.statusPencarianPKB.name }
                               data = { [
                                   { id : 1, value : "1", name : "Belum Dibayar" },
                                   { id : 2, value : "2", name : "Sudah Dibayar" }
                               ] }
                               onEnter = { 'next' }
                               onValueChange = { () => {
                               } }
                               onValue = { ( item ) => {
                                   controller.setCariPkb( {
                                       ...controller.cariPkb,
                                       statusPencarianPKB : item
                                   } )
                               } }/>
                </div>
                <div className = { `w-full flex place-content-end` }>
                    <div className = { `w-full tablet:w-9/12 laptop:w-5/12 flex place-content-end gap-2` }>
                        <IButton rounded = { "full" } status = { "danger" } onClick = { () => {
                            controller.setCariPkb( {
                                tanggal : "",
                                noPKB : "",
                                noPolisi : "",
                                statusPencarianPKB : { id : 0, value : "", name : "" },
                                pageSize : 10,
                                pageNumber : 1,
                                tanggalSampai : ""
                            } )
                        } }>
                            Reset
                        </IButton>
                        <IButton rounded = { "full" } onClick = { () => {
                            if ( controller.cariPkb !== undefined ) {
                                const dateNow = FormatDate.nowDate();
                                controller.getListPKB( {
                                    tanggal : controller.cariPkb.tanggal === '' ? dateNow + 'T00:00:00+07:00' : controller.cariPkb.tanggal,
                                    tanggalSampai : controller.cariPkb.tanggalSampai === '' ? dateNow + 'T00:00:00+07:00' : controller.cariPkb.tanggalSampai,
                                    noPKB : controller.cariPkb.noPKB,
                                    noPolisi : controller.cariPkb.noPolisi,
                                    statusPencarianPKB : controller.cariPkb.statusPencarianPKB,
                                    pageSize : 10,
                                    pageNumber : 1
                                } )
                            }
                            else {
                                console.log( "data kosong" )
                            }
                        } }>
                            Cari
                        </IButton>
                    </div>
                </div>
            </div>
            <div className = { `flex-1 bg-white rounded-lg grid gap-10 p-5 relative` }>
                <div className = { `w-full flex` }>
                    <ITitleMd title = { "List Data PKB" }/>
                </div>
                {/*{ controller.role === RoleEnum.Admin ? (*/ }
                {/*    <>*/ }
                {/*        <div*/ }
                {/*            className = { `grid w-full gap-2 tablet:flex tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 tablet:place-content-center` }*/ }
                {/*        >*/ }
                {/*            { controller.listCardInformationData.map( ( item, index ) => {*/ }
                {/*                return (*/ }
                {/*                    <CardInformationData*/ }
                {/*                        key = { index }*/ }
                {/*                        title = { item.title }*/ }
                {/*                        total = { item.total.toString() }*/ }
                {/*                        color = { item.color }*/ }
                {/*                    />*/ }
                {/*                );*/ }
                {/*            } ) }*/ }
                {/*        </div>*/ }
                {/*    </>*/ }
                {/*) : null }*/ }
                <div
                    className = { `w-full grid gap-5 laptop:grid-cols-2 laptop:place-items-center laptop:place-content-between` }
                >
                    <div className = { `laptop:w-fit` }>
                        { controller.role === RoleEnum.Admin ? null : (
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
                        { controller.role === RoleEnum.Admin ? (
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
            page = { controller.page - 1 }
            totalPage = { controller.totalPage }
            loading = { false }
            changePage = { index => {
                controller.setPage( index );
                controller.getListPKB( {
                    pageSize : 10,
                    pageNumber : index,
                    statusPencarianPKB : controller.cariPkb.statusPencarianPKB,
                    noPolisi : controller.cariPkb.noPolisi,
                    tanggal : controller.cariPkb.tanggal + 'T00:00:00+07:00',
                    tanggalSampai : controller.cariPkb.tanggalSampai + 'T00:00:00+07:00',
                    noPKB : controller.cariPkb.noPKB,
                } );
            } }
            updated = { ( data ) => {
            } }
            info = { () => {
            } }
            header = { controller.header }
            data = { controller.listPkb }/>
    }
};
export default ServicesView;
