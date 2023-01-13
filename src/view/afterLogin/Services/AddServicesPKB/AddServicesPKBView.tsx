import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown, { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import { IRadio } from "../../../../component/ITextField/IRadio";
import IIndicator from "../../../../component/ITextField/IIndicator";
import ITextArea from "../../../../component/ITextField/ITextArea";
import IButton from "../../../../component/IButton/IButton";
import { body1, bodyLabel3, Header1, Title1 } from "../../../../component/styles/Style";
import AddServicesVM from "./ViewModel/AddServicesVM";
import { ListOfPekerjaanModel, ModelAddServices } from "../interface/InterfaceAddServices";
import FormatDate from "../../../../utils/format/formatDate";
import { InterfacePemilik } from "../interface/InterfacePemilik";
import { Dropdown } from "@nextui-org/react";
import { EnumSearchKendaraanPKB } from "../../../../utils/enum/EnumSearchKendaraanPKB";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { ListofJasa } from "../../../../domain/models/Jasa/ModelJasa";
import { InterfaceAddJasaPKB } from "../interface/InterfaceAddJasaPKB";
import Currency from "../../../../utils/format/currency";
import { ValidationAddServicesPKB } from "./ViewModel/ValidationAddServicesPKB";
import { EnumDataListMekanik } from "../../../../utils/enum/EnumDataListMekanik";
import { InterfaceListSparePartPKB } from "../interface/interfaceListSparepartPKB";
import { InterfaceDataSparepart } from "../interface/InterfaceDataSparepart";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DialogDataContext } from "../../../../context/IDialogData";
import DialogAddKendaraan from "./component/DialogAddDataKendataan/DialogAddKendaraan";


const AddServicesPKBView = () => {
    const controller = AddServicesVM();

    const validation = ValidationAddServicesPKB();

    const route = useRouter();

    const dialog = useContext( DialogDataContext )

    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Pendaftaran Servis" } subtitle = { "services/tambah-services" }/>
            { FormSearch() }
            { FormData() }
            { jasaPKB() }
            { listSparepart() }
            {/*<JasaPKB/>*/ }
            {/*<SparepartComponentView/>*/ }
            { UangMuka() }
            { Total() }
            { PIC() }
            { ETA() }
            { JAM() }
            <div className = "grid tablet:flex tablet:flex-1 gap-5 tablet:place-content-end">
                <IButton size = { "medium" } rounded = { "full" } onClick = { () => {
                    route.back();
                } }>
                    Batal
                </IButton>
                <IButton size = { "medium" } rounded = { "full" } status = { 'success' } onClick = { () => {
                    controller.sendData()
                } }>
                    Simpan
                </IButton>
            </div>
        </div>
    );

    function listSparepart() {
        return (
            <div className = { `w-full grid gap-5 bg-white rounded-lg p-5` }>
                <ITitleMd title = { "Sparepart" }/>
                <div className = { `w-full grid gap-5 place-content-end` }>
                    <div className = "grid tablet:flex tablet:place-content-end">
                        <IButton rounded = { "full" } status = { "success" } onClick = { () => {
                            const sparepart = validation.validateSparePart( controller?.dataPkb?.idGudang?.id ?? 0 )
                            if ( sparepart ) {
                                controller.setShowSparepart( !controller.showSparepart )
                            }
                        } }>
                            + Tambah Sparepart
                        </IButton>
                    </div>
                </div>
                {
                    controller.showSparepart ? <div className = { `grid gap-5` }>
                        <IDropDown type = { 'text' }
                                   error = { false }
                                   label = { 'Cari Kode Sparepart' }
                                   data = { controller.listSparepart }
                                   onValueChange = { ( value ) => {
                                       controller.getListSparepart( value, controller.dataPkb?.idGudang?.id ?? 0 )
                                   } }
                                   onValue = { ( value ) => {
                                       controller.getDetailSparepart( value.id, controller.dataPkb?.idGudang?.id ?? 0, )
                                   } }
                                   onEnter = { 'enter' }/>

                        <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5` }>
                            <IDropDown type = { 'text' }
                                       label = { 'No Ref Jasa*' }
                                       onEnter = { 'next' }
                                       value = { undefined }
                                       disabled = { true }
                                       data = { controller?.dataPkb?.listOfPekerjaan?.map( ( item ) : InterfacePropsDropDown => {
                                           return {
                                               id : item?.idJasa,
                                               name : item?.namaPekerjaan,
                                               value : item?.idJasa.toString(),
                                               add : item
                                           }
                                       } ) ?? [] }
                                       onValue = { ( value ) => {
                                           controller.setDataSparePart( ( prevState ) => {
                                               return {
                                                   ...prevState,
                                                   noRefJasa : value.name,
                                                   kodeJasa : value.id,
                                               } as InterfaceDataSparepart
                                           } )
                                       } }
                                       error = { false }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Nama Material' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { controller.dataSparePart?.namaMaterial }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           namaMaterial : value.target.value
                                                       } as InterfaceDataSparepart
                                                   } )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Stock Tersedia' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { controller.dataSparePart?.stock }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           stock : Number( value.target.value )
                                                       } as InterfaceDataSparepart
                                                   } )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Harga Jual' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { Currency.stringToIdr( Currency.idrToString( controller.dataSparePart?.hargaJual ?? '0' ) ) }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           hargaJual : Currency.stringToIdr( value.target.value )
                                                       } as InterfaceDataSparepart
                                                   } )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Tambahan Harga' }
                                               onEnter = { 'next' }
                                               value = { Currency.stringToIdr( Currency.idrToString( controller.dataSparePart?.tambahanHarga?.toString() ?? '0' ) ) }
                                               errorMessages = { 'Penambahan harga menjadi tanggung jawab AHASS' }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           tambahanHarga : Number( Currency.idrToString( value.target.value ) )
                                                       } as InterfaceDataSparepart
                                                   } )
                                                   controller.totalHargaSparePart( Number( Currency.idrToString( value.target.value ) ) )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Nilai Diskon' }
                                               onEnter = { 'next' }
                                               value = { Currency.stringToIdr( Currency.idrToString( controller.dataSparePart?.nilaiDiskon?.toString() ?? '0' ) ) }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           nilaiDiskon : Number( Currency.idrToString( value.target.value ) )
                                                       } as InterfaceDataSparepart
                                                   } )
                                                   controller.hargaDiskonSparePart( Number( Currency.idrToString( value.target.value ) ) )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Persentase Diskon%' }
                                               onEnter = { 'next' }
                                               value = { controller.dataSparePart?.persentaseDiskon }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           persentaseDiskon : Number( value.target.value )
                                                       } as InterfaceDataSparepart
                                                   } )
                                                   controller.persentaseDiskonSparePart( Number( value.target.value ) )
                                               } }/>
                            <ITextFieldDefault type = { 'number' }
                                               label = { 'Jumlah*' }
                                               onEnter = { 'next' }
                                               value = { controller.dataSparePart?.jumlah }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           jumlah : Number( value.target.value )
                                                       } as InterfaceDataSparepart
                                                   } )
                                                   controller.JumlahTotalSparePart( Number( value.target.value ) )
                                               } }/>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Total Harga' }
                                               onEnter = { 'next' }
                                               disabled = { true }
                                               value = { Currency.stringToIdr( Currency.idrToString( controller.dataSparePart?.totalHarga.toString() ?? '0' ) ) }
                                               onChange = { ( value ) => {
                                                   controller.setDataSparePart( ( prevState ) => {
                                                       return {
                                                           ...prevState,
                                                           totalHarga : Number( Currency.stringToIdr( value.target.value ) )
                                                       } as InterfaceDataSparepart
                                                   } )
                                               } }/>
                        </div>
                        <IButton status = { 'success' } onClick = { () => {
                            const listDataJasa = controller.dataPkb?.listOfPekerjaan ?? []
                            if ( listDataJasa.length > 0 ) {
                                const data = listDataJasa.filter( ( item ) => {
                                    if ( item?.idJasa === controller.dataSparePart?.kodeJasa ) {
                                        return item
                                    }
                                    return []
                                } )

                                controller.dataPkb?.listOfPekerjaan.find( ( item : ListOfPekerjaanModel ) => {
                                    if ( item?.idJasa === controller.dataSparePart?.kodeJasa ) {
                                        controller.dataPkb?.listOfPekerjaan.splice( controller.dataPkb?.listOfPekerjaan.indexOf( item ), 1 )
                                    }
                                } )

                                controller.listSparepartTable.find( ( item : InterfaceListSparePartPKB ) => {
                                    if ( item.kodeSparepart === controller.dataSparePart?.kodeSparepart ) {
                                        controller.listSparepartTable.splice( controller.listSparepartTable.indexOf( item ), 1 )
                                    }
                                } )

                                let dataToPush = data[ 0 ]

                                dataToPush.listOfMaterial.push( {
                                    kodeSparepart : controller.dataSparePart?.kodeSparepart ?? '',
                                    refMaterialId : controller.dataSparePart?.idSparepart ?? 0,
                                    isHotline : controller.dataSparePart?.isHotLine ?? false,
                                    quantity : controller.dataSparePart?.jumlah ?? 0,
                                    hargaJual : Number( Currency.idrToString( controller.dataSparePart?.hargaJual ?? '0' ) ),
                                    namaMaterial : controller.dataSparePart?.namaMaterial ?? '',
                                    hargaJualMaterial : Number( Currency.idrToString( controller.dataSparePart?.hargaJual ?? '0' ) ),
                                    pajak : controller.dataSparePart?.pajakJual ?? 0,
                                    pajakMaterial : controller.dataSparePart?.pajakJual ?? 0,
                                    persentaseDiskonMaterial : controller.dataSparePart?.persentaseDiskon ?? 0,
                                    persentaseDiskon : controller.dataSparePart?.persentaseDiskon ?? 0,
                                    nilaiDiskonMaterial : Number( Currency.idrToString( controller.dataSparePart?.nilaiDiskon?.toString() ?? '0' ) ),
                                    pkbMaterialID : controller.dataSparePart?.idSparepart ?? 0,
                                    nilaiDiskon : Number( Currency.idrToString( controller.dataSparePart?.nilaiDiskon?.toString() ?? '0' ) ),
                                    refNoLabel : controller.dataSparePart?.noRefJasa ?? '',
                                    guid : '',
                                    isAdditionalMaterial : Number( Currency.idrToString( controller.dataSparePart?.tambahanHarga?.toString(
                                    ) ?? '0' ) ),
                                    pekerjaanID : controller.dataSparePart?.kodeJasa ?? 0,
                                    isEditable : false,
                                    itemNoMaterial : 0,
                                    markUpMaterial : 0,
                                    refNo : 0,
                                    stok : controller.dataSparePart?.stok ?? 0,
                                    totalMaterial : Number( Currency.idrToString( controller.dataSparePart?.totalHarga?.toString() ?? '0' ) ),
                                } )

                                controller.setDataPkb( ( prevState ) => {
                                    return {
                                        ...prevState,
                                        listOfPekerjaan : [
                                            ...prevState.listOfPekerjaan,
                                            dataToPush,
                                        ]
                                    }
                                } )

                                const dataInSparepart : InterfaceListSparePartPKB = {
                                    stok : controller.dataSparePart?.stok ?? 0,
                                    totalMaterial : Number( Currency.idrToString( controller.dataSparePart?.totalHarga.toString() ?? '0' ) ),
                                    refNo : 0,
                                    markUpMaterial : 0,
                                    itemNoMaterial : 0,
                                    isEditable : false,
                                    hargaJual : Number( Currency.idrToString( controller.dataSparePart?.hargaJual ?? '0' ) ),
                                    pekerjaanID : controller.dataSparePart?.kodeJasa ?? 0,
                                    guid : '',
                                    isAdditionalMaterial : Number( Currency.idrToString( controller.dataSparePart?.tambahanHarga?.toString() ?? '0' ) ),
                                    refNoLabel : controller.dataSparePart?.kodeSparepart + ' - ' + controller.dataSparePart?.namaMaterial,
                                    pkbMaterialID : controller.dataSparePart?.idSparepart ?? 0,
                                    nilaiDiskon : Number( Currency.idrToString( controller.dataSparePart?.nilaiDiskon?.toString() ?? '0' ) ),
                                    nilaiDiskonMaterial : Number( Currency.idrToString( controller.dataSparePart?.nilaiDiskon?.toString() ?? '0' ) ),
                                    persentaseDiskon : controller.dataSparePart?.persentaseDiskon ?? 0,
                                    persentaseDiskonMaterial : controller.dataSparePart?.persentaseDiskon ?? 0,
                                    pajakMaterial : controller.dataSparePart?.pajakJual ?? 0,
                                    pajak : controller.dataSparePart?.pajakJual ?? 0,
                                    hargaJualMaterial : Number( Currency.idrToString( controller.dataSparePart?.hargaJual ?? '0' ) ),
                                    quantity : controller.dataSparePart?.jumlah ?? 0,
                                    refMaterialId : controller.dataSparePart?.idSparepart ?? 0,
                                    kodeSparepart : controller.dataSparePart?.kodeSparepart ?? '',
                                    namaMaterial : controller.dataSparePart?.namaMaterial ?? '',
                                    isHotline : controller.dataSparePart?.isHotLine ?? false,
                                }


                                controller.setListSparepartTable( ( prevState ) => {
                                    controller.setTotalSparepart( prevState.reduce( ( a, b ) => a + (b.totalMaterial ??
                                        0), 0 ) + dataInSparepart.totalMaterial )
                                    return [
                                        ...prevState,
                                        dataInSparepart
                                    ]
                                } )

                            }
                            else {
                                controller.context.giveMessage( 'No Ref Jasa tidak boleh kosong' )
                                controller.context.onError( true )
                                controller.context.setOpen( true )
                            }
                        } }>
                            Simpan
                        </IButton>
                    </div> : null
                }
                { tableDataListSparePart() }
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
                        <div className = { `${ Header1 } text-primary` }>{ Currency.stringToIdr( controller.totalSparepart.toString() ) }.00</div>
                    </div>
                </div>
            </div>
        );
    }

    function tableDataListSparePart() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                           } }
                           delete = { ( data : InterfaceListSparePartPKB ) => {
                               // controller.listSparepartTable.splice( controller.listSparepartTable.indexOf( data ),
                               // 1 )
                               controller.setListSparepartTable( ( prevState ) => {
                                   return prevState.filter( ( item ) => item !== data )
                               } )
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Ref No Jasa',
                                   name : 'refNoLabel',
                               },
                               {
                                   label : 'Kode Sparepart',
                                   name : 'kodeSparepart',
                               },
                               {
                                   label : 'Nama Sparepart',
                                   name : 'namaMaterial',
                               },
                               {
                                   label : 'Harga Jual',
                                   name : 'hargaJual',
                               },
                               {
                                   label : 'Tambahan harga',
                                   name : 'isAdditionalMaterial',
                               },
                               {
                                   label : 'QTY',
                                   name : 'stok',
                               },
                               {
                                   label : 'Nilai Diskon',
                                   name : 'nilaiDiskon',
                               },
                               {
                                   label : 'Diskon %',
                                   name : 'persentaseDiskon',
                               },
                               {
                                   label : 'Total',
                                   name : 'totalMaterial',
                               },

                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { controller.listSparepartTable }/>
    }

    function jasaPKB() {
        // const jasa = controller.addJasa.add as ListofJasa
        return (
            <div className = { `flex-1 grid gap-5 bg-white rounded-lg p-5` }>
                <ITitleMd title = { "Jasa" }/>
                <div className = { `grid gap-5 flex-1 place-content-end` }>
                    <div className = "grid tablet:flex tablet:place-content-end">
                        <IButton rounded = { "full" } status = { "success" } onClick = { () => {
                            const validateJasa = validation.validationJasa( controller.pemilik?.noMesin ?? '',
                                controller.dataPkb.kmSekarang, controller.dataPkb.kmSekarang );
                            if ( validateJasa ) {
                                controller.setShowAddJasa( !controller.showAddJasa )
                            }
                        } }>
                            + Tambah Jasa
                        </IButton>
                    </div>
                </div>
                {
                    controller.showAddJasa ?
                        <div className = { `grid gap-5` }>
                            <div className = { `mb-5 grid gap-5` }>
                                <IDropDown type = { 'text' }
                                           label = { 'Cari Kode Jasa' }
                                           onEnter = { 'enter' }
                                           value = { undefined }
                                           onValue = { ( value ) => {
                                               controller.getDetailJasa( value.id )
                                               const dataValue = value.add as ListofJasa
                                               controller.setAddJasa( ( prevState ) => {
                                                   return {
                                                       ...prevState,
                                                       namaPekerjaan : dataValue.namaJasa,
                                                       hargaPekerjaan : dataValue.hargaJual,
                                                       totalHargaPekerjaan : dataValue.hargaJual,
                                                       tambahanHargaPekerjaan : 0,
                                                       persentaseDiskon : 0,
                                                       nilaiDiskon : 0,
                                                   } as InterfaceAddJasaPKB
                                               } )
                                               // controller.totalHargaJasa()
                                           } }
                                           onValueChange = { ( value ) => {
                                               controller.getJasa( value )

                                           } }
                                           data = { controller.listJasa }
                                           error = { false }/>

                                {
                                    controller.addJasa !== undefined ?
                                        <div className = { `grid grid-cols-1 tablet:grid-cols-2 gap-5` }>
                                            <ITextFieldDefault type = { "text" }
                                                               label = { 'Nama Pekerjaan' }
                                                               onEnter = { 'next' }
                                                               value = { controller.addJasa?.namaPekerjaan }
                                                               disabled = { true }
                                                               onChange = { () => {
                                                               } }/>
                                            <ITextFieldDefault type = { "text" }
                                                               label = { 'Harga Pekerjaan' }
                                                               onEnter = { 'next' }
                                                               value = { Currency.stringToIdr( controller.addJasa?.hargaPekerjaan.toString() ?? '0' ) }
                                                               disabled = { true }
                                                               onChange = { () => {
                                                               } }/>
                                            <ITextFieldDefault type = { "text" }
                                                               label = { 'Tambahan Harga' }
                                                               inputMode = { 'numeric' }
                                                               onEnter = { 'next' }
                                                               value = { Currency.stringToIdr( Currency.idrToString( controller.addJasa?.tambahanHargaPekerjaan?.toString() ?? '0' ) ) }
                                                               errorMessages = { 'Penambahan harga menjadi tanggung jawab AHASS' }
                                                               onChange = { ( value ) => {
                                                                   controller.setAddJasa( ( prevState ) => {
                                                                       return {
                                                                           ...prevState,
                                                                           tambahanHargaPekerjaan : Number( Currency.idrToString( value.target.value ) )
                                                                       } as InterfaceAddJasaPKB
                                                                   } )
                                                                   controller.totalHargaJasa( Number( Currency.idrToString( value.target.value ?? 0 ) ) )
                                                               } }/>
                                            <ITextFieldDefault type = { "text" }
                                                               inputMode = { 'numeric' }
                                                               label = { 'Nilai Diskon' }
                                                               onEnter = { 'next' }
                                                               value = { Currency.stringToIdr( Currency.idrToString( controller.addJasa?.nilaiDiskon?.toString() ?? '0' ) ) }
                                                               onChange = { ( value ) => {
                                                                   controller.setAddJasa( ( prevState ) => {
                                                                       return {
                                                                           ...prevState,
                                                                           nilaiDiskon : Number( Currency.idrToString( value.target.value ) )
                                                                       } as InterfaceAddJasaPKB
                                                                   } )
                                                                   controller.hargaDiskon( Number( Currency.idrToString( value.target.value ) ) )
                                                               } }/>
                                            <ITextFieldDefault type = { "text" }
                                                               label = { 'Persentase Diskon %' }
                                                               onEnter = { 'next' }
                                                               value = { controller.addJasa?.persentaseDiskon }
                                                               onChange = { ( value ) => {
                                                                   controller.persentaseDiskon( Number( Currency.idrToString( value.target.value ) ) )
                                                               } }/>
                                            <ITextFieldDefault type = { "text" }
                                                               label = { 'Total Harga' }
                                                               onEnter = { 'next' }
                                                               disabled = { true }
                                                               value = { Currency.stringToIdr( controller.addJasa?.totalHargaPekerjaan.toString() ?? '0' ) }
                                                               onChange = { () => {
                                                               } }/>
                                            <IRadio value = { controller.addJasa.opl ? 'Ya' : 'Tidak' }
                                                    value1 = { 'Ya' }
                                                    value2 = { 'Tidak' }
                                                    onClickValue1 = { () => {
                                                        controller.setAddJasa( ( prevState ) => {
                                                            return {
                                                                ...prevState,
                                                                opl : true
                                                            } as InterfaceAddJasaPKB
                                                        } )
                                                        // controller.ge
                                                    } }
                                                    onClickValue2 = { () => {
                                                        controller.setAddJasa( ( prevState ) => {
                                                            return {
                                                                ...prevState,
                                                                opl : false
                                                            } as InterfaceAddJasaPKB
                                                        } )
                                                    } }
                                                    label = { 'OPL' }
                                                    error = { false }/>

                                            {
                                                controller.addJasa.opl ? <IDropDown type = { 'text' }
                                                                                    error = { false }
                                                                                    label = { 'Nama Vendor' }
                                                                                    data = { controller.listVendor }
                                                                                    onValue = { ( value ) => {
                                                                                        controller.setAddJasa( ( prevState ) => {
                                                                                            return {
                                                                                                ...prevState,
                                                                                                vendorID : value?.id
                                                                                            } as InterfaceAddJasaPKB
                                                                                        } )
                                                                                    } }
                                                                                    onEnter = { 'enter' }/> : null
                                            }
                                        </div> : null
                                }
                            </div>
                            <IButton status = { 'success' } onClick = { () => {
                                const jasa = controller.jasa;
                                const addJasa = controller.addJasa
                                const dataSparepart : InterfaceListSparePartPKB[] = jasa?.listSparePart?.map( ( valueSparepart ) : InterfaceListSparePartPKB => {
                                    return {
                                        guid : '',
                                        pekerjaanID : jasa?.id ?? 0,
                                        pkbMaterialID : 0,
                                        itemNoMaterial : 0,
                                        refNo : 0,
                                        refNoLabel : valueSparepart.kodeSparepart + ' - ' + valueSparepart.namaSparepart,
                                        refMaterialId : valueSparepart.idRefMaterial,
                                        nilaiDiskon : 0,
                                        nilaiDiskonMaterial : 0,
                                        persentaseDiskon : 0,
                                        persentaseDiskonMaterial : 0,
                                        totalMaterial : valueSparepart.hargaJual,
                                        pajakMaterial : 0,
                                        pajak : 0,
                                        stok : valueSparepart.stok,
                                        hargaJualMaterial : valueSparepart.hargaJual,
                                        hargaJual : valueSparepart.hargaJual,
                                        namaMaterial : valueSparepart.namaSparepart,
                                        quantity : valueSparepart.quantity,
                                        isEditable : false,
                                        kodeSparepart : valueSparepart.kodeSparepart,
                                        markUpMaterial : 0,
                                        isHotline : false,
                                        isAdditionalMaterial : 1,
                                    } as InterfaceListSparePartPKB
                                } ) ?? []


                                if ( controller.listSparepartTable.length < 1 ) {
                                    controller.setListSparepartTable( ( prevState ) => {
                                        return [ ...prevState, ...dataSparepart ]
                                    } )
                                    controller.setTotalSparepart( dataSparepart.reduce( ( a, b ) => a + (b.totalMaterial ??
                                        0), 0 ) )
                                }
                                else {
                                    controller.listSparepartTable.forEach( ( value ) => {
                                        if ( dataSparepart.includes( value ) ) {
                                            controller.setListSparepartTable( ( prevState ) => {
                                                return [ ...prevState, ...dataSparepart ]
                                            } )
                                            controller.setTotalSparepart( dataSparepart.reduce( ( a, b ) => a + (b.totalMaterial ??
                                                0), 0 ) )
                                        }
                                    } )
                                }

                                const setDataJasa : ListOfPekerjaanModel = {
                                    idJasa : jasa?.id ?? 0,
                                    kodeJasa : jasa?.kodeJasa ?? '',
                                    kodeJasaAHM : jasa?.kodeJasa ?? '',
                                    namaPekerjaan : addJasa?.namaPekerjaan ?? '',
                                    hargaPekerjaan : Currency.stringToIdr( addJasa?.hargaPekerjaan.toString() ?? '0' ),
                                    persentaseDiskon : addJasa?.persentaseDiskon ?? 0,
                                    nilaiDiskonJasa : addJasa?.nilaiDiskon ?? 0,
                                    labelisOPL : addJasa?.opl ? 'Ya' : 'Tidak',
                                    isAdditionalPekerjaan : Currency.stringToIdr( addJasa?.tambahanHargaPekerjaan?.toString() ?? '0' ),
                                    nilaiDiskon : Currency.stringToIdr( addJasa?.nilaiDiskon?.toString() ?? '0' ),
                                    isFreeService : jasa?.isFreeService ?? false,
                                    flatRate : jasa?.flatRate ?? 0,
                                    isOPL : addJasa?.opl ?? false,
                                    isShowDelete : true,
                                    isEditable : true,
                                    pajakJasa : 0,
                                    persentaseDiskonJasa : addJasa?.persentaseDiskon ?? 0,
                                    totalJasa : Currency.stringToIdr( addJasa?.totalHargaPekerjaan.toString() ?? '0' ),
                                    itemNo : 0,
                                    guid : '',
                                    listOfMaterial : controller.listSparepartTable,
                                    markUpJasa : '0',
                                    noClaimC2 : '',
                                    pkbPekerjaanID : 0,
                                    listOfMaterialHotline : [],
                                    noBuku : '',
                                    refJobID : 0,
                                    vendorID : controller?.addJasa?.vendorID ?? 0,
                                }


                                const listData = controller.dataPkb?.listOfPekerjaan ?? []
                                if ( listData.length > 0 ) {
                                    controller.dataPkb?.listOfPekerjaan.find( ( item : ListOfPekerjaanModel ) => {
                                        if ( item?.idJasa === setDataJasa?.idJasa ) {
                                            controller.dataPkb?.listOfPekerjaan.splice( controller.dataPkb?.listOfPekerjaan.indexOf( item ), 1 )
                                        }
                                    } )
                                }
                                controller.setDataPkb( ( prevState ) => {
                                    if ( prevState?.listOfPekerjaan?.length > 0 ) {
                                        controller.countJasaBayar( [ ...prevState?.listOfPekerjaan, setDataJasa ] ?? [] )
                                        controller.countJasaEstimasi( [ ...prevState?.listOfPekerjaan, setDataJasa ] ?? [] )
                                    }
                                    else {
                                        controller.countJasaBayar( [ setDataJasa ] )
                                        controller.countJasaEstimasi( [ setDataJasa ] )
                                    }
                                    return {
                                        ...prevState,
                                        listOfPekerjaan : [
                                            ...prevState.listOfPekerjaan ?? [],
                                            setDataJasa,
                                        ],

                                    } as ModelAddServices
                                } )

                            } }>
                                Simpan
                            </IButton>
                        </div> : null
                }
                { tableDataJasaPKB() }
                <div className = "grid gap-10 tablet:flex mt-5">
                    <div className = "grid flex-1 place-items-center place-content-center gap-2">
                        <ITitleMd title = { "Jasa Gratis" }/>
                        <div className = { `${ Header1 } text-primary` }>Rp. 0.00</div>
                    </div>
                    <div className = "grid flex-1 place-items-center place-content-center gap-2">
                        <ITitleMd title = { "Jasa Bayar" }/>
                        <div className = { `${ Header1 } text-primary` }>{ Currency.stringToIdr( controller.jasaBayar.toString() ) }.00</div>
                    </div>
                    <div className = "grid flex-1 place-items-center place-content-center gap-2">
                        <ITitleMd title = { "Estimasi Waktu Pekerjaan" }/>
                        <div className = { `${ Header1 } text-primary` }>{ controller.jasaEstimasi } Menit</div>
                    </div>
                </div>
            </div>
        );
    }

    function tableDataJasaPKB() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           delete = { ( data : ListOfPekerjaanModel ) => {
                               controller.setDataPkb( ( prevState ) => {
                                   return {
                                       ...prevState,
                                       listOfPekerjaan : prevState.listOfPekerjaan.filter( ( item ) => item?.idJasa !== data.idJasa ),
                                   } as ModelAddServices
                               } )
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Kode Jasa',
                                   name : 'kodeJasa',
                               },
                               {
                                   label : 'Kode Jasa AHM',
                                   name : 'kodeJasaAHM',
                               },
                               {
                                   label : 'Nama Pekerjaan',
                                   name : 'namaPekerjaan',
                               },
                               {
                                   label : 'Harga Pekerjaan',
                                   name : 'hargaPekerjaan',
                               },
                               {
                                   label : 'Tambahan Harga',
                                   name : 'isAdditionalPekerjaan',
                               },
                               {
                                   label : 'Nilai Diskon',
                                   name : 'nilaiDiskonJasa',
                               },
                               {
                                   label : 'Diskon %',
                                   name : 'persentaseDiskon',
                               },
                               {
                                   label : 'isOPL',
                                   name : 'isOPL',
                               },
                               {
                                   label : 'Total',
                                   name : 'totalJasa',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { controller?.dataPkb?.listOfPekerjaan ?? [] }/>
    }

    function JAM() {
        return (
            <div className = "bg-white grid tablet:grid-cols-3 gap-5 p-10 rounded-lg place-content-center place-items-center">
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Masuk" }/>
                    <div className = { `${ Header1 } text-primary` }>{ controller.dataPkb.jamKedatanganCustomer }</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Proses" }/>
                    <div className = { `${ Header1 } text-primary` }>1</div>
                </div>
                <div className = "grid flex-1 place-items-center place-content-center gap-2">
                    <ITitleMd title = { "Jam Selesai" }/>
                    <div className = { `${ Header1 } text-primary` }>1</div>
                </div>
            </div>
        );
    }

    function ETA() {
        return (
            <div className = "bg-white grid gap-5 p-5 rounded-lg">
                <ITitleMd title = { "ETA" }/>
                <div className = "grid tablet:grid-cols-2">
                    <ITextFieldDefault
                        value = { controller.dataPkb?.jamEstimasiSelesai }
                        error = { false }
                        type = { "datetime-local" }
                        onChange = { ( value ) => {
                            // controller.setDataPkb( ( prevState ) => {
                            //     return {
                            //         ...prevState,
                            //         jamEstimasiSelesai : value.target.value
                            //     } as ModelAddServices;
                            // } )
                        } }
                        label = { "Estimasi Jam Selesai" }
                        onEnter = { "next" }
                    />
                </div>
            </div>
        );
    }

    function PIC() {
        return (
            <div className = "bg-white p-5 rounded-lg grid gap-5">
                <ITitleMd title = { "PIC" }/>
                <div className = "grid gap-5 laptop:grid-cols-3">
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Mekanik" }
                        data = { controller.listMekanik }
                        value = { controller.dataPkb?.refMechanicID?.name }
                        error = { false }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    refMechanicID : value
                                } as ModelAddServices;
                            } )
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Service Advisor *" }
                        data = { controller.listAdvisor }
                        value = { controller.dataPkb?.serviceAdvisorID?.name }
                        error = { false }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    serviceAdvisorID : value
                                } as ModelAddServices;
                            } )
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Final Inspector *" }
                        data = { controller.listInspector }
                        value = { controller.dataPkb?.finalInspectorID?.name }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    finalInspectorID : value
                                } as ModelAddServices;
                            } )
                        } }
                        error = { false }/>
                </div>
            </div>
        );
    }

    function Total() {
        return (
            <div className = "grid gap-5">
                <div className = "grid tablet:grid-cols-2 gap-5">
                    <div className = "p-5 bg-white rounded-lg grid gap-5">
                        <ITitleMd title = { "Total" }/>
                        <div className = "grid grid-cols-2 gap-16 text-primary">
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Sub Total Bayar</div>
                                <div className = { `${ body1 }` }>{ Currency.stringToIdr( (controller.jasaBayar + controller.totalSparepart).toString() ) }.00</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Dis. Final</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Total Gratis</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>PPn</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Nilai PPn</div>
                                <div className = { `${ body1 }` }>Rp. 0</div>
                            </div>
                            <div className = "grid gap-1">
                                <div className = { `${ bodyLabel3 }` }>Total Bayar</div>
                                <div className = { `${ body1 }` }>{ Currency.stringToIdr( (controller.jasaBayar + controller.totalSparepart).toString() ) }.00</div>
                            </div>
                        </div>
                    </div>
                    <div className = "grid grid-cols-2">
                        <div className = "bg-primary rounded-l-lg p-5 flex place-content-center place-items-center">
                            <div className = { ` text-white text-center grid gap-2` }>
                                <div className = { `${ body1 }` }>Est Biaya</div>
                                <div className = { `${ Title1 }` }>{ Currency.stringToIdr( (controller.jasaBayar + controller.totalSparepart).toString() ) }.00</div>
                            </div>
                        </div>
                        <div className = "bg-secondary rounded-r-lg p-5 flex place-content-center place-items-center">
                            <div className = { ` text-white text-center grid gap-2` }>
                                <div className = { `${ body1 }` }>Uang Muka</div>
                                <div className = { `${ Title1 }` }>{ Currency.stringToIdr( controller?.dataPkb?.uangMuka?.toString() ?? '0' ) }.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function UangMuka() {
        return (
            <div className = "p-5 bg-white rounded-lg grid gap-5">
                <ITitleMd title = { "Uang Muka" }/>
                <div className = "grid tablet:grid-cols-2">
                    <ITextFieldDefault
                        error = { false }
                        value = { Currency.stringToIdr( Currency.idrToString( controller.dataPkb?.uangMuka?.toString() ?? '0' ) ) }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    uangMuka : Number( Currency.idrToString( value.target.value ) )
                                } as ModelAddServices;
                            } )
                        } }
                        label = { "Uang Muka" }
                        onEnter = { "next" }
                    />
                </div>
            </div>
        );
    }

    function FormSearch() {
        return (
            <div className = { `grid gap-5 tablet:grid-cols-2 px-5` }>
                <ITextFieldDefault
                    type = { "text" }
                    onChange = { ( value ) => {
                        controller.setDataPkb( ( prevState ) => {
                            return {
                                ...prevState,
                                pkbNo : value.target.value
                            } as ModelAddServices
                        } )
                    } }
                    error = { false }
                    value = { controller.dataPkb?.pkbNo }
                    placeholder = { "No PKB" }
                    label = { "PKB" }
                    labelColor = { "text-white" }
                    backgroundLabel = { "bg-primary" }
                    onEnter = { "next" }
                />
                <ITextFieldDefault
                    type = { "text" }
                    onChange = { ( value ) => {
                        controller.setDataPkb( ( prevState ) => {
                            return {
                                ...prevState,
                                noAntrian : value.target.value
                            } as ModelAddServices
                        } )
                    } }
                    error = { false }
                    value = { controller.dataPkb?.noAntrian }
                    placeholder = { "No Antrian" }
                    label = { "Antrian" }
                    labelColor = { "text-white" }
                    backgroundLabel = { "bg-primary" }
                    onEnter = { "next" }
                />
                {/*<ITextFieldDefault*/ }
                {/*    type = { "text" }*/ }
                {/*    onChange = { ( value ) => {*/ }
                {/*        controller.setDataPkb( ( prevState ) => {*/ }
                {/*            return {*/ }
                {/*                ...prevState,*/ }
                {/*                svPKBReturnID : Number( value.target.value )*/ }
                {/*            } as ModelAddServices*/ }
                {/*        } )*/ }
                {/*    } }*/ }
                {/*    placeholder = { "PKB Return" }*/ }
                {/*    error = { false }*/ }
                {/*    value = { controller.dataPkb?.svPKBReturnID }*/ }
                {/*    label = { "PKB Return" }*/ }
                {/*    labelColor = { "text-white" }*/ }
                {/*    backgroundLabel = { "bg-primary" }*/ }
                {/*    onEnter = { "next" }*/ }
                {/*/>*/ }
            </div>
        );
    }

    function FormData() {
        return (
            <div className = { "flex-1 bg-white rounded-lg p-5 grid gap-5" }>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "date" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    tanggal : FormatDate.stringToDateInput( value.target.value )
                                } as ModelAddServices
                            } )
                        } }
                        error = { false }
                        disabled = { true }
                        value = { controller.dataPkb?.tanggal ?? '' }
                        label = { "Tanggal" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        type = { "time" }
                        disabled = { true }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    noAntrian : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        error = { false }
                        value = { controller.dataPkb?.jamKedatanganCustomer }
                        label = { "Jam Kedatangan Cutomer *" }
                        onEnter = { "next" }
                    />
                    {
                        dropdownSearchKendaraan()
                    }
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Antrian *" }
                        data = { controller.listTypeAntrian }
                        error = { false }
                        value = { controller.dataPkb?.tipeAntrian?.name }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    tipeAntrian : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {
                            // controller.setAntrian( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Type Kedatangan *" }
                        error = { false }
                        value = { controller.dataPkb?.tipePKB?.name }
                        data = { controller.listTypeKedatangan }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    tipeKedatangan : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {
                            // controller.setKedatangan( value );
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Activity Capacity *" }
                        error = { false }
                        value = { controller.dataPkb?.activityCapacity?.name }
                        data = { controller.listActivityCapacity }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    activityCapacity : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {
                            // controller.setCapacity( value );
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        type = { "text" }
                        error = { false }
                        value = { controller.pemilik?.pemilik }
                        onChange = { ( value ) => {
                            controller.setPemilik( ( prevState ) => {
                                return {
                                    ...prevState,
                                    pemilik : value.target.value
                                } as InterfacePemilik
                            } )
                        } }
                        label = { "Pemilik" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.pemilik?.noHp }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPemilik( ( prevState ) => {
                                return {
                                    ...prevState,
                                    noHp : value.target.value
                                } as InterfacePemilik
                            } )
                        } }
                        label = { "No HP" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.pemilik?.noMesin }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPemilik( ( prevState ) => {
                                return {
                                    ...prevState,
                                    noMesin : value.target.value
                                } as InterfacePemilik
                            } )
                        } }
                        label = { "No Mesin" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.pemilik?.tahunMotor }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setPemilik( ( prevState ) => {
                                return {
                                    ...prevState,
                                    tahunMotor : value.target.value
                                } as InterfacePemilik
                            } )
                        } }
                        label = { "Tahun Motor" }
                        onEnter = { "next" }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.namaPembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    namaPembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Nama Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.handphonePembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    handphonePembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Handphone Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.nikPembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    nikPembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "No KTP Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.alamatPembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    alamatPembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Alamat KTP Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.alamatPembawaSaatIni }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    alamatPembawaSaatIni : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Alamat Domisili *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.kotaPembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    kotaPembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Kota Pembawa *" }
                        onEnter = { "next" }
                    />
                    <ITextFieldDefault
                        error = { false }
                        value = { controller.dataPkb?.kecamatanPembawa }
                        type = { "text" }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    kecamatanPembawa : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                        label = { "Kecamatan Pembawa *" }
                        onEnter = { "next" }
                    />
                    <IDropDown
                        error = { false }
                        value = { controller.dataPkb?.hubunganDgPemilikID?.name }
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Hubungan Dengan Pemilik *" }
                        data = { controller.listHubPemilik }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    hubunganDgPemilikID : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {
                            // controller.setPemilik( value );
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <IDropDown
                        error = { false }
                        value = { controller.dataPkb?.alasanIngatServiceID?.name }
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Alasan Ke AHASS *" }
                        data = { controller.listAlasanAhass }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    alasanIngatServiceID : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {
                            // controller.setAlasan( value );
                        } }
                    />
                    <IRadio
                        error = { false }
                        label = "Dari Dealer Sendiri"
                        value = { controller.dataPkb?.dealerSendiri ? 'Ya' : 'Tidak' }
                        value1 = { "Ya" }
                        value2 = { "Tidak" }
                        onClickValue1 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    dealerSendiri : true
                                } as ModelAddServices
                            } )
                        } }
                        onClickValue2 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    dealerSendiri : false
                                } as ModelAddServices
                            } )
                        } }
                    />
                    <IRadio
                        error = { false }
                        label = "Konfirmasi Pergantian Part"
                        value = { controller.dataPkb?.pergantianPart ? 'Langsung' : 'Konfirmasi' }
                        value1 = { "Langsung" }
                        value2 = { "Konfirmasi" }
                        onClickValue1 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    pergantianPart : true
                                } as ModelAddServices
                            } )
                        } }
                        onClickValue2 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    pergantianPart : false
                                } as ModelAddServices
                            } )
                        } }
                    />
                    <IRadio
                        error = { false }
                        label = "Part Bekas Dibawa Pulang"
                        value = { controller.dataPkb?.partBekasDibawaKonsumen ? 'Ya' : 'Tidak' }
                        value1 = { "Ya" }
                        value2 = { "Tidak" }
                        onClickValue1 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    partBekasDibawaKonsumen : true
                                } as ModelAddServices
                            } )
                        } }
                        onClickValue2 = { () => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    partBekasDibawaKonsumen : false
                                } as ModelAddServices
                            } )
                        } }
                    />
                </div>
                <div className = { `grid tablet:grid-cols-2 gap-5` }>
                    <IIndicator
                        label = "Indikator Bensin"
                        value = { controller.dataPkb?.indikatorBensin?.toString() ?? '0' }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    indikatorBensin : Number( value.target.value )
                                } as ModelAddServices
                            } )
                        } }
                    />
                    <div className = { `grid grid-cols-2 gap-5 place-items-end` }>
                        <ITextFieldDefault
                            type = { "text" }
                            error = { false }
                            value = { controller.dataPkb?.kmSekarang }
                            onChange = { ( value ) => {
                                controller.setDataPkb( ( prevState ) => {
                                    return {
                                        ...prevState,
                                        kmSekarang : Number( value.target.value ),
                                        kmBerikutnya : Number( value.target.value ) + 2000
                                    } as ModelAddServices
                                } )
                            } }
                            label = { "Kilometer Sekarang *" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            error = { false }
                            disabled = { true }
                            value = { controller.dataPkb?.kmBerikutnya }
                            onChange = { ( value ) => {
                                controller.setDataPkb( ( prevState ) => {
                                    return {
                                        ...prevState,
                                        kmBerikutnya : Number( value.target.value )
                                    } as ModelAddServices
                                } )
                            } }
                            label = { "Kilometer Berikutnya *" }
                            onEnter = { "next" }
                        />
                    </div>
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Gudang" }
                        data = { controller.listGudang }
                        error = { false }
                        value = { controller.dataPkb?.idGudang?.name }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    idGudang : value
                                } as ModelAddServices
                            } )
                        } }
                        onValueChange = { ( value ) => {

                        } }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "No STNK" }
                        error = { false }
                        value = { controller.dataPkb?.noSTNK }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    noSTNK : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                    />
                    <IDropDown
                        type = { "text" }
                        onEnter = { "next" }
                        label = { "Customer yang Datang *" }
                        data = { controller.customerDatang }
                        onValue = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    tipeComingCustomer : value
                                } as ModelAddServices
                            } )
                        } }
                        error = { false }
                        value = { controller.dataPkb?.tipeComingCustomer?.name }

                    />
                    <div className = { `grid grid-cols-2 gap-5 place-items-end` }>
                        <ITextFieldDefault
                            type = { "text" }
                            disabled = { true }
                            error = { false }
                            value = { controller.dataPkb?.latitude }
                            onChange = { ( value ) => {
                                // controller.setDataPkb( ( prevState ) => {
                                //     return {
                                //         ...prevState,
                                //         latitude : Number( value.target.value )
                                //     } as ModelAddServices
                                // } )
                            } }
                            label = { "Latitude" }
                            onEnter = { "next" }
                        />
                        <ITextFieldDefault
                            type = { "text" }
                            disabled = { true }
                            value = { controller.dataPkb?.longitude }
                            error = { false }
                            onChange = { ( value ) => {
                                // controller.setDataPkb( ( prevState ) => {
                                //     return {
                                //         ...prevState,
                                //         longitude : Number( value.target.value )
                                //     } as ModelAddServices
                                // } )
                            } }
                            label = { "Longitude" }
                            onEnter = { "next" }
                        />
                    </div>
                </div>
                <div className = { `grid grid-cols-1 gap-5` }>
                    <ITextArea
                        label = { `Keluhan *` }
                        error = { false }
                        value = { controller.dataPkb?.keluhan }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    keluhan : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                    />
                    <ITextArea
                        error = { false }
                        label = { `Gejala (Analisa Service Advisor) *` }
                        value = { controller.dataPkb?.gejala }
                        onChange = { ( value ) => {
                            controller.setDataPkb( ( prevState ) => {
                                return {
                                    ...prevState,
                                    gejala : value.target.value
                                } as ModelAddServices
                            } )
                        } }
                    />
                </div>
                <div className = { `flex-1 grid tablet:flex tablet:place-content-end` }>
                    <IButton size = { "medium" } rounded = { "full" } onClick = { () => {
                    } }>
                        History
                    </IButton>
                </div>
            </div>
        );
    }

    function dropdownSearchKendaraan() {

        return <div className = { `flex gap-5 place-content-center place-items-center` }>
            <IDropDown
                loading = { controller.loading }
                type = { "text" }
                error = { false }
                value = { controller.noMesinNoPlat?.name }
                onEnter = { "next" }
                label = { controller.searchKendaraan === EnumSearchKendaraanPKB.mesin ? "No Mesin *" : controller.searchKendaraan === EnumSearchKendaraanPKB.polisi ? "No Polisi *" : "Nama Customer *" }
                data = { controller.listNoMesinNoPlat }
                activeAddOn = { true }
                onClickAddOn = { () => {
                    dialog.openDialog( true )
                    dialog.setDialogData(
                        <DialogAddKendaraan/>
                    )
                } }
                onValue = { ( value ) => {
                    controller.setNoMesinNoPlat( value );
                    controller.getDataCustomerServices( value );
                } }
                onValueChange = { ( value ) => {
                    if ( controller.searchKendaraan === EnumSearchKendaraanPKB.mesin || controller.searchKendaraan === EnumSearchKendaraanPKB.polisi ) {
                        controller.getDataCustomerFromPlatNoMesin( value );
                    }
                    else {
                        controller.listCustomerData( value );
                    }
                } }
            />
            <div>
                <Dropdown>
                    <Dropdown.Button flat>{
                        controller.searchKendaraan === EnumSearchKendaraanPKB.mesin ? "No Mesin" : controller.searchKendaraan === EnumSearchKendaraanPKB.polisi ? "No Polisi" : "Customer"
                    }</Dropdown.Button>
                    <Dropdown.Menu aria-label = "Static Actions"
                                   selectionMode = { 'single' }
                                   onSelectionChange = { ( value ) => {
                                       const dataValue : EnumSearchKendaraanPKB = Array.from( new Set( value ) )[ 0 ] as EnumSearchKendaraanPKB
                                       controller.setSearchKendaraan( dataValue );
                                   } }>
                        <Dropdown.Item key = { EnumSearchKendaraanPKB.mesin }
                                       textValue = { EnumSearchKendaraanPKB.mesin }>No Mesin</Dropdown.Item>
                        <Dropdown.Item key = { EnumSearchKendaraanPKB.polisi }
                                       textValue = { EnumSearchKendaraanPKB.polisi }>No
                                                                                     Polisi</Dropdown.Item>
                        <Dropdown.Item key = { EnumSearchKendaraanPKB.nama }
                                       textValue = { EnumSearchKendaraanPKB.nama }>Customer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    }
};
export default AddServicesPKBView;
