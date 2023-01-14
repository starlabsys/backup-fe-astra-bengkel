import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import ServicesController from "./ServicesController";
import { RoleEnum } from "../../../../utils/enum/RoleEnum";
import DialogAddExcel from "../component/DialogAddExcel/DialogAddExcel";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import FormatDate from "../../../../utils/format/formatDate";
import ProsesDataVm from "./ViewModel/ProsesDataVm";
import { ListOfPKB } from "../../../../domain/models/Pkb/ModelListPkb";
import { useContext } from "react";
import { DialogDataContext } from "../../../../context/IDialogData";
import { IDialog } from "../../../../component/IDialog/IDialog";
import { EnumProsesPKB } from "../../../../utils/enum/EnumProsesPKB";
import { EnumPausePKB } from "../../../../utils/enum/EnumPausePKB";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";


const ServicesView = () => {
    const controller = ServicesController();
    const proses = ProsesDataVm()
    const context = useContext( IAlertDialogContext )
    const dialog = useContext( DialogDataContext )
    const loadingLottie = useContext( ILoadingContext )


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
                                <IButton size = { "small" }
                                         rounded = { "full" }
                                         status = { "warning" }
                                         onClick = { () => {
                                             let id : number;
                                             dialog.openDialog( true )
                                             dialog.setDialogData(
                                                 <IDialog dialog = { dialog }
                                                          titleHeader = { '' }
                                                          onClick = { () => {
                                                              dialog.openDialog( false )
                                                              proses.prosesPkb( EnumProsesPKB.start, id ).then( ( res ) => {
                                                                  const dateNow = FormatDate.nowDate();
                                                                  // console.log( dateNow )
                                                                  controller.getListPKB( {
                                                                      pageSize : 10,
                                                                      pageNumber : 1,
                                                                      statusPencarianPKB : {
                                                                          id : 1,
                                                                          value : "1",
                                                                          name : "Belum Dibayar"
                                                                      },
                                                                      noPolisi : '',
                                                                      tanggal : dateNow + 'T00:00:00+07:00',
                                                                      tanggalSampai : dateNow + 'T00:00:00+07:00',
                                                                      noPKB : '',
                                                                  } )
                                                              } )
                                                          } }>
                                                     <IDropDown type = { 'text' }
                                                                error = { false }
                                                                label = { 'Pilih Mekanik' }
                                                                data = { proses.listMekanik }
                                                                onEnter = { 'done' }
                                                                onValue = { ( event ) => {
                                                                    id = event.id
                                                                } }/>
                                                 </IDialog> )
                                         } }>
                                    Proses
                                </IButton>
                                <IButton size = { "small" }
                                         rounded = { "full" }
                                         status = { "danger" }
                                         onClick = { () => {
                                             let id : number;
                                             let pause : number;
                                             dialog.openDialog( true )
                                             dialog.setDialogData(
                                                 <IDialog dialog = { dialog }
                                                          titleHeader = { '' }
                                                          onClick = { () => {
                                                              dialog.openDialog( false )
                                                              proses.prosesPkb( pause, id ).then( ( res ) => {
                                                                  const dateNow = FormatDate.nowDate();
                                                                  // console.log( dateNow )
                                                                  controller.getListPKB( {
                                                                      pageSize : 10,
                                                                      pageNumber : 1,
                                                                      statusPencarianPKB : {
                                                                          id : 1,
                                                                          value : "1",
                                                                          name : "Belum Dibayar"
                                                                      },
                                                                      noPolisi : '',
                                                                      tanggal : dateNow + 'T00:00:00+07:00',
                                                                      tanggalSampai : dateNow + 'T00:00:00+07:00',
                                                                      noPKB : '',
                                                                  } )
                                                              } )
                                                          } }>
                                                     <IDropDown type = { 'text' }
                                                                error = { false }
                                                                label = { 'Pilih Alasan' }
                                                                data = { proses.alasanPause }
                                                                onEnter = { 'done' }
                                                                onValue = { ( event ) => {
                                                                    id = event.id
                                                                    pause = event.value === EnumPausePKB.pause.toString() ? EnumPausePKB.pause : EnumPausePKB.pending
                                                                } }/>
                                                 </IDialog> )
                                         } }>
                                    Pause
                                </IButton>
                                <IButton size = { "small" }
                                         rounded = { "full" }
                                         status = { "success" }
                                         onClick = { () => {
                                             let id : number;
                                             let saran : string;
                                             dialog.openDialog( true )
                                             dialog.setDialogData(
                                                 <IDialog dialog = { dialog }
                                                          titleHeader = { '' }
                                                          onClick = { () => {
                                                              dialog.openDialog( false )
                                                              proses.prosesPkb( EnumProsesPKB.finish, id, saran ).then( ( res ) => {
                                                                  const dateNow = FormatDate.nowDate();
                                                                  // console.log( dateNow )
                                                                  controller.getListPKB( {
                                                                      pageSize : 10,
                                                                      pageNumber : 1,
                                                                      statusPencarianPKB : {
                                                                          id : 1,
                                                                          value : "1",
                                                                          name : "Belum Dibayar"
                                                                      },
                                                                      noPolisi : '',
                                                                      tanggal : dateNow + 'T00:00:00+07:00',
                                                                      tanggalSampai : dateNow + 'T00:00:00+07:00',
                                                                      noPKB : '',
                                                                  } )
                                                              } )
                                                          } }>
                                                     <ITextFieldDefault type = { 'text' }
                                                                        label = { 'Saran' }
                                                                        onEnter = { 'done' }
                                                                        value = { undefined }
                                                                        onChange = { ( value ) => {
                                                                            saran = value.target.value
                                                                        } }/>
                                                 </IDialog> )
                                         } }>
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
                                        controller.dialog.setDialogData(
                                            <DialogAddExcel loadingLottie = { loadingLottie }/> );
                                    } }
                                >
                                    Tambah Dari Excel
                                </IButton>
                            </>
                        ) : (
                            <>
                                <IButton size = { "medium" }
                                         rounded = { "full" }
                                         status = { "danger" }
                                         onClick = { () => {
                                             proses.batalServices().then( () => {
                                                 const dateNow = FormatDate.nowDate();
                                                 // console.log( dateNow )
                                                 controller.getListPKB( {
                                                     pageSize : 10,
                                                     pageNumber : 1,
                                                     statusPencarianPKB : {
                                                         id : 1,
                                                         value : "1",
                                                         name : "Belum Dibayar"
                                                     },
                                                     noPolisi : '',
                                                     tanggal : dateNow + 'T00:00:00+07:00',
                                                     tanggalSampai : dateNow + 'T00:00:00+07:00',
                                                     noPKB : '',
                                                 } )
                                             } )
                                         } }>
                                    Batal Selesai Services
                                </IButton>
                                <IButton size = { "medium" }
                                         rounded = { "full" }
                                         status = { "danger" }
                                         onClick = { () => {
                                             proses.batalPKB().then( () => {
                                                 const dateNow = FormatDate.nowDate();
                                                 // console.log( dateNow )
                                                 controller.getListPKB( {
                                                     pageSize : 10,
                                                     pageNumber : 1,
                                                     statusPencarianPKB : {
                                                         id : 1,
                                                         value : "1",
                                                         name : "Belum Dibayar"
                                                     },
                                                     noPolisi : '',
                                                     tanggal : dateNow + 'T00:00:00+07:00',
                                                     tanggalSampai : dateNow + 'T00:00:00+07:00',
                                                     noPKB : '',
                                                 } )
                                             } )
                                         } }>
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
            selectionMode = { 'single' }
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
            updated = { ( data : ListOfPKB ) => {
                // console.log( data )
                if ( data.statusPekerjaan === 'Start' ) {
                    controller.route.push( "/services/edit/" + data.id ).then( () => {
                    } );
                }
                else {
                    context.setOpen( true );
                    context.giveMessage( `PKB sudah ${ data.labelStatus }` );
                    context.onError( true )
                }
            } }
            info = { ( data : ListOfPKB ) => {
                controller.route.push( "/services/info/" + data.id ).then( () => {
                } );
            } }
            header = { controller.header }
            onSelect = { ( data ) => {
                const valueData : ListOfPKB = controller.listPkb[ data ]
                proses.setDataProsesPKB( {
                    id : valueData.id,
                    action : 0,
                    durasiPengerjaanPKB : valueData.durasiPengerjaan,
                    waktu : valueData.waktuTunggu,
                    saran : '',
                    refMechanicId : valueData.idMekanik,
                    isOverdue : 0,
                    alasanPauseId : 0,
                    etaOverdue : 0,
                } )
                proses.setDataAllPKB( valueData )
            } }
            data = { controller.listPkb }/>
    }
};
export default ServicesView;
