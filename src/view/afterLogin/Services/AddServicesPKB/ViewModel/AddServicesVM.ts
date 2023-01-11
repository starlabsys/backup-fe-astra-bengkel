import { useContext, useEffect, useState } from "react";
import { ListOfPekerjaanModel, ModelAddServices } from "../../interface/InterfaceAddServices";
import { InterfacePropsDropDown } from "../../../../../component/ITextField/IDropDown";
import { InterfacePemilik } from "../../interface/InterfacePemilik";
import {
    InterfaceAddDataServices, ListOfPekerjaan,
} from "../../../../../domain/repository/pkb/interface/InterfaceAddDataServices";
import FormatDate from "../../../../../utils/format/formatDate";
import GudangRepository from "../../../../../domain/repository/parameter/getGudang/GudangRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ListOfGudangModel } from "../../../../../domain/models/MasterDropDown/ModelListGudang";
import PkbRepository from "../../../../../domain/repository/pkb/PkbRepository";
// import { ListofKendaraan } from "../../../../../domain/models/Pkb/ModelGetKendaraanServices";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { EnumSearchKendaraanPKB } from "../../../../../utils/enum/EnumSearchKendaraanPKB";
import CustomerRepository from "../../../../../domain/repository/customer/CustomerRepository";
import { ListPelanggan } from "../../../../../domain/models/Customer/ModelGetListCustomer";
import KendaraanRepository from "../../../../../domain/repository/kendaraan/KendaraanRepository";
import { ListofKendaraanPKB } from "../../../../../domain/models/Pkb/ModelGetKendaraanServices";
import { ListofKendaraan } from "../../../../../domain/models/Kendaraan/ModelGetListKendaraan";
import JasaRepository from "../../../../../domain/repository/jasa/JasaRepository";
import { ListofJasa } from "../../../../../domain/models/Jasa/ModelJasa";
import { InterfaceAddJasaPKB } from "../../interface/InterfaceAddJasaPKB";
import VendorRepository from "../../../../../domain/repository/vendor/VendorRepository";
import { ListOfVendor } from "../../../../../domain/models/Vendor/ModelListVendor";
import { DataModelDetailJasa } from "../../../../../domain/models/Jasa/ModelDetailJasa";
import Currency from "../../../../../utils/format/currency";
import DropDownRepository from "../../../../../domain/repository/parameter/dropDown/DropDownRepository";
import ParameterMekanikRepository from "../../../../../domain/repository/parameter/mekanik/ParameterMekanikRepository";
import { EnumDataListMekanik } from "../../../../../utils/enum/EnumDataListMekanik";
import { ListDropDownMekanikServices } from "../../../../../domain/models/MasterDropDown/ModelDropDownMekanikServices";
import ParameterSparepartRepository
    from "../../../../../domain/repository/parameter/sparepart/ParameterSparepartRepository";
import { ParameterDetailSparepart } from "../../../../../domain/models/MasterDropDown/ModelParameterDetailSparepart";
import { ListofSparePartParameter } from "../../../../../domain/models/MasterDropDown/ModelParameterListSparepart";
import { InterfaceListSparePartPKB } from "../../interface/interfaceListSparepartPKB";
import { InterfaceDataSparepart } from "../../interface/InterfaceDataSparepart";


const AddServicesVM = () => {

    const context = useContext( IAlertDialogContext )
    const [ loading, setLoading ] = useState( false );
    const loadingLottie = useContext( ILoadingContext )

    const listTypeAntrian : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Regular',
            value : 'Regular'
        },
        {
            id : 2,
            name : 'Claim',
            value : 'Claim'
        },
        {
            id : 3,
            name : 'Fast Track',
            value : 'Fast Track'
        },
        {
            id : 4,
            name : 'Express',
            value : 'Express'
        },
        {
            id : 5,
            name : 'Booking',
            value : 'Booking'
        },
    ]
    const listTypeKedatangan : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Walk-in AHASS / Non Promotion',
            value : 'Walk-in AHASS / Non Promotion'
        },
        {
            id : 2,
            name : 'Pit Express',
            value : 'Pit Express'
        },
        {
            id : 3,
            name : 'Pos Service',
            value : 'Pos Service'
        },
        {
            id : 4,
            name : 'Service Kunjung Motor/Emergency',
            value : 'Service Kunjung Motor/Emergency'
        },
    ]
    const listActivityCapacity : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Booking Service',
            value : 'Booking Service'
        },
        {
            id : 2,
            name : 'Happy Hour',
            value : 'Happy Hour'
        },
        {
            id : 3,
            name : 'Lain Lain',
            value : 'Lain Lain'
        },
    ]
    const listHubPemilik : InterfacePropsDropDown[] = [
        {
            id : 7,
            name : 'Pemilik',
            value : 'Pemilik'
        },
        {
            id : 6,
            name : 'Suami/istri',
            value : 'Suami/istri'
        },
        {
            id : 5,
            name : 'Anak',
            value : 'Anak'
        },
        {
            id : 4,
            name : 'Orang tua',
            value : 'Orang tua'
        },
        {
            id : 3,
            name : 'Saudara',
            value : 'Saudara'
        },
        {
            id : 2,
            name : 'Kerabat/teman',
            value : 'Kerabat/teman'
        },
        {
            id : 1,
            name : 'Supir/atasan',
            value : 'Supir/atasan'
        },
    ]
    const listAlasanAhass : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'Inisiatif Sendiri',
            value : 'Inisiatif Sendiri'
        },
        {
            id : 2,
            name : 'SMS',
            value : 'SMS'
        },
        {
            id : 3,
            name : 'Telepon',
            value : 'Telepon'
        },
        {
            id : 4,
            name : 'Undangan',
            value : 'Undangan'
        },
        {
            id : 5,
            name : 'Sticker',
            value : 'Sticker'
        },
        {
            id : 6,
            name : 'Promosi',
            value : 'Promosi'
        },
        {
            id : 7,
            name : 'Buku KPB',
            value : 'Buku KPB'
        },
    ]
    const [ listGudang, setListGudang ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listNoMesinNoPlat, setListNoMesinNoPlat ] = useState<InterfacePropsDropDown[]>( [] );
    const [ noMesinNoPlat, setNoMesinNoPlat ] = useState<InterfacePropsDropDown>();
    const [ searchKendaraan, setSearchKendaraan ] = useState<EnumSearchKendaraanPKB>( EnumSearchKendaraanPKB.mesin );

    const [ dataPkb, setDataPkb ] = useState<ModelAddServices>( {
        hubunganDgPemilikID : listHubPemilik[ 0 ],
        alasanIngatServiceID : listAlasanAhass[ 0 ],
    } as ModelAddServices );

    const [ pemilik, setPemilik ] = useState<InterfacePemilik>();

    const getListGudang = async () => {
        const resp = await GudangRepository.getGudang( context, {
            action : 1,
            kodeGudang : '',
            alamat : '',
            namaGudang : '',
            kota : '',
        } )
        if ( resp !== null ) {
            setListGudang( resp.data.listOfGudangModel.map( ( item : ListOfGudangModel ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.namaGudang,
                    value : item.kodeGudang,
                    add : item,
                } as InterfacePropsDropDown
            } ) )
        }
    }

    const sendData = () => {
        // const now = new Date();
        const sendData : InterfaceAddDataServices = {
            action : 0,
            idPKB : 0,
            pkbNo : '',
            refEquipmentID : dataPkb?.refEquipmentID ?? 0,
            statusPKB : dataPkb?.statusPKB ?? 0,
            tipePKB : dataPkb?.tipePKB?.id ?? 0,
            noAntrian : '',
            kmSekarang : dataPkb?.kmSekarang ?? 0,
            kmBerikutnya : dataPkb?.kmBerikutnya ?? 0,
            namaPembawa : dataPkb?.namaPembawa ?? '',
            alamatPembawa : dataPkb?.alamatPembawa ?? '',
            alamatPembawaSaatIni : dataPkb?.alamatPembawaSaatIni ?? '',
            kotaPembawa : dataPkb?.kotaPembawa ?? '',
            handphonePembawa : dataPkb?.handphonePembawa ?? '',
            hubunganDgPemilikID : dataPkb?.hubunganDgPemilikID?.id ?? 0,
            alasanIngatServiceID : dataPkb?.alasanIngatServiceID?.id ?? 0,
            dealerSendiri : dataPkb?.dealerSendiri ?? false,
            keluhan : dataPkb?.keluhan ?? '',
            gejala : dataPkb?.gejala ?? '',
            pergantianPart : dataPkb?.pergantianPart ?? false,
            partBekasDibawaKonsumen : dataPkb?.partBekasDibawaKonsumen ?? false,
            refMechanicID : dataPkb?.refMechanicID?.id.toString() ?? '',
            serviceAdvisorID : dataPkb?.serviceAdvisorID?.id.toString() ?? '',
            finalInspectorID : dataPkb?.finalInspectorID?.id.toString() ?? '',
            jamMasuk : dataPkb?.jamMasuk ?? '',
            jamProses : dataPkb?.jamProses ?? '',
            jamSelesai : dataPkb?.jamSelesai ?? '',
            uangMuka : dataPkb?.uangMuka ?? 0,
            idGudang : dataPkb?.idGudang?.id ?? 0,
            idPit : dataPkb?.idPit ?? 0,
            listOfPekerjaan : dataPkb?.listOfPekerjaan?.map( ( item : ListOfPekerjaanModel ) : ListOfPekerjaan => {
                return {
                    hargaPekerjaan : Number( Currency.idrToString( item.hargaPekerjaan ?? '0' ) ) ?? 0,
                    nilaiDiskon : 0,
                    listOfMaterialHotline : [],
                    flatRate : item.flatRate,
                    guid : item.guid,
                    idJasa : item.idJasa,
                    isAdditionalPekerjaan : Number( Currency.idrToString( item.isAdditionalPekerjaan ) ),
                    isFreeService : item.isFreeService,
                    isEditable : item.isEditable,
                    isOPL : item.isOPL,
                    itemNo : item.itemNo,
                    kodeJasa : item.kodeJasa,
                    isShowDelete : item.isShowDelete,
                    kodeJasaAHM : item.kodeJasaAHM,
                    listOfMaterial : listSparepartTable.map( ( valueData ) : InterfaceListSparePartPKB => {
                        if ( valueData.pekerjaanID === item.idJasa ) {
                            return valueData
                        }
                        return {} as InterfaceListSparePartPKB
                    } ),
                    labelisOPL : item.labelisOPL,
                    markUpJasa : item.markUpJasa,
                    namaPekerjaan : item.namaPekerjaan,
                    noBuku : item.noBuku,
                    nilaiDiskonJasa : item.nilaiDiskonJasa,
                    noClaimC2 : item.noClaimC2,
                    pajakJasa : item.pajakJasa,
                    persentaseDiskon : item.persentaseDiskon,
                    persentaseDiskonJasa : item.persentaseDiskonJasa,
                    pkbPekerjaanID : item.pkbPekerjaanID,
                    refJobID : item.refJobID,
                    totalJasa : Number( Currency.idrToString( item.totalJasa ?? '0' ) ),
                    vendorID : item.vendorID,
                }
            } ),
            listOfMaterialHotline : dataPkb?.listOfMaterialHotline ?? [],
            tanggal : dataPkb?.tanggal ?? FormatDate.nowDate() + 'T11:35:19+07:00',
            latitude : dataPkb?.latitude ?? 0,
            longitude : dataPkb?.longitude ?? 0,
            noSTNK : dataPkb?.noSTNK?.value ?? '',
            indikatorBensin : dataPkb?.indikatorBensin ?? 0,
            svPKBReturnID : dataPkb?.svPKBReturnID ?? 0,
            kodeAntrian : dataPkb?.kodeAntrian ?? '',
            tipeAntrian : dataPkb?.tipeAntrian?.value ?? '',
            activityCapacity : dataPkb?.activityCapacity?.id ?? 0,
            kecamatanPembawa : dataPkb?.kecamatanPembawa ?? '',
            pkbRemove : dataPkb?.pkbRemove ?? {
                listRemoveMaterial : [],
                listRemovePekerjaan : [],
            },
            tipeComingCustomer : dataPkb?.tipeComingCustomer?.value ?? '',
            isEngineNo : dataPkb?.isEngineNo ?? false,
            isFrameNo : dataPkb?.isFrameNo ?? false,
            isPKBHotline : dataPkb?.isPKBHotline ?? false,
            jamEstimasiSelesai : dataPkb?.jamEstimasiSelesai ?? '',
            jamKedatanganCustomer : dataPkb?.jamKedatanganCustomer ?? '',
            noClaimC2 : dataPkb?.noClaimC2 ?? '',
            noBuku : dataPkb?.noBuku ?? '',
            DataMotorkuX : dataPkb?.DataMotorkuX ?? {
                VoucherType : 0,
                VoucherValue : 0,
            }
        }

        console.log( sendData );
    }

    const getDataCustomerFromPlatNoMesin = async ( platNoMesin : string ) => {
        loadingLottie.openLoading( true );
        const resp = await PkbRepository.getKendaraanDetail( context, {
            action : 1,
            noMesin : platNoMesin,
            noPolisi : '',
        } )
        if ( resp !== null ) {
            setListNoMesinNoPlat( resp.data.listofKendaraan.map( ( item : ListofKendaraanPKB ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.noMesin + ' - ' + item.namaPembawa,
                    value : item.idPelanggan.toString(),
                    add : item,
                }
            } ) )
        }
        loadingLottie.openLoading( false );
    }

    const getDataCustomerServices = async ( idPelanggan : InterfacePropsDropDown ) => {
        loadingLottie.openLoading( true );
        const resp = await PkbRepository.getCustomerDetail( context, {
            action : 1,
            id : Number( idPelanggan?.value ),
        } )
        if ( resp !== null ) {
            const dataKendaraan = idPelanggan?.add as ListofKendaraanPKB;
            const tahun = dataKendaraan?.tahunRakit?.toString().split( '-' )[ 0 ];
            setPemilik( ( prevState ) => {
                return {
                    ...prevState,
                    pemilik : resp.data.namaCustomer,
                    noHp : resp.data.noHp,
                    noMesin : dataKendaraan?.noMesin,
                    tahunMotor : tahun,
                } as InterfacePemilik
            } )
            setDataPkb( ( prevState ) => {
                return {
                    namaPembawa : dataKendaraan.namaPembawa,
                    nikPembawa : resp.data.noktp,
                    handphonePembawa : dataKendaraan.handphonePembawa,
                    kecamatanPembawa : dataKendaraan.kecamatanPembawa,
                    kotaPembawa : dataKendaraan.kotaPembawa,
                    alamatPembawaSaatIni : dataKendaraan.alamatPembawa,
                    alamatPembawa : dataKendaraan.alamatPembawa,
                } as ModelAddServices
            } )
        }
        loadingLottie.openLoading( false );
    }

    const listCustomerData = async ( name : string ) => {
        loadingLottie.openLoading( true );
        const resp = await KendaraanRepository.getKendaraan( context, {
            action : 0,
            noPolisi : '',
            noMesin : "",
            namaCustomer : name,
            noRangka : "",
            pageNumber : 1,
            pageSize : 10,
            totalRow : 0,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp !== null ) {
            setListNoMesinNoPlat( resp.data.listofKendaraan.map( ( item : ListofKendaraan ) : InterfacePropsDropDown => {
                return {
                    id : item.idPelanggan,
                    name : item.noMesin + ' - ' + item.namaPembawa,
                    value : item.idPelanggan.toString(),
                    add : item,
                }
            } ) )
        }
        loadingLottie.openLoading( false );
    }

    const [ listJasa, setListJasa ] = useState<InterfacePropsDropDown[]>( [] );
    const [ addJasa, setAddJasa ] = useState<InterfaceAddJasaPKB>();

    const [ showAddJasa, setShowAddJasa ] = useState( false );
    const [ showSparepart, setShowSparepart ] = useState( false );

    const totalHargaJasa = ( hargaTambahan : number ) => {
        const harga = addJasa?.hargaPekerjaan ?? 0;
        const total = harga + hargaTambahan;
        setAddJasa( ( prevState ) => {
            return {
                ...prevState,
                totalHargaPekerjaan : total,
            } as InterfaceAddJasaPKB
        } )
    }

    const persentaseDiskon = ( persentase : number ) => {
        const harga = addJasa?.hargaPekerjaan ?? 0;
        const tambahan = addJasa?.tambahanHargaPekerjaan ?? 0;
        const diskon = (harga + tambahan) * (persentase / 100);
        const total = (harga + tambahan) - diskon;
        setAddJasa( ( prevState ) => {
            return {
                ...prevState,
                totalHargaPekerjaan : total,
                nilaiDiskon : diskon,
            } as InterfaceAddJasaPKB
        } )
    }

    const hargaDiskon = ( hargaDiskon : number ) => {
        const harga = addJasa?.hargaPekerjaan ?? 0;
        const tambahan = addJasa?.tambahanHargaPekerjaan ?? 0;
        const hargaDiskonResult = hargaDiskon / (harga + tambahan) * 100;
        const total = (harga + tambahan) - hargaDiskon;
        setAddJasa( ( prevState ) => {
            return {
                ...prevState,
                totalHargaPekerjaan : total,
                persentaseDiskon : hargaDiskonResult,
            } as InterfaceAddJasaPKB
        } )
    }

    const getJasa = async ( value : string ) => {
        loadingLottie.openLoading( true );
        const resp = await JasaRepository.getJasa( context, {
            page : 1,
            size : 10,
            kodeJasa : value,
            namaJasa : ''
        } )
        if ( resp !== null ) {
            setListJasa( resp.data.listofJasa.map( ( item : ListofJasa ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.kodeJasa + ' - ' + item.namaJasa,
                    value : item.kodeJasa,
                    add : item as ListofJasa,
                }
            } ) )
        }
        loadingLottie.openLoading( false );
    }

    const [ jasa, setJasa ] = useState<DataModelDetailJasa>();

    const [ jasaBayar, setJasaBayar ] = useState( 0 );
    const [ jasaEstimasi, setJasaEstimasi ] = useState( 0 );

    const countJasaBayar = ( listOfPekerjaan : ListOfPekerjaanModel[] ) => {
        let total = 0;
        listOfPekerjaan.forEach( ( item ) => {
            total += Number( Currency.idrToString( item.totalJasa ) );
        } )
        setJasaBayar( total );
    }

    const countJasaEstimasi = ( listOfPekerjaan : ListOfPekerjaanModel[] ) => {
        let total = 0;
        listOfPekerjaan.forEach( ( item ) => {
            total += Number( item.flatRate );
        } )
        setJasaEstimasi( total );
    }

    const getDetailJasa = async ( idData : number ) => {
        loadingLottie.openLoading( true );
        const resp = await JasaRepository.detailJasa( context, {
            id : idData,
            action : 1
        } );
        if ( resp !== null ) {
            setJasa( resp.data )

        }
        loadingLottie.openLoading( false );
    }

    const getLat = async () => {
        await navigator.geolocation.getCurrentPosition( ( position ) => {
            // setLat(position.coords.latitude)
            // setLng(position.coords.longitude)
            setDataPkb( ( prevState ) => {
                return {
                    ...prevState,
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude,
                } as ModelAddServices
            } )
        } )
    }

    const [ listVendor, setListVendor ] = useState<InterfacePropsDropDown[]>( [] );

    const getVendor = async () => {
        loadingLottie.openLoading( true );
        const resp = await VendorRepository.getVendor( context, {
            action : 1,
            kodeVendor : '',
            namaVendor : '',
            alamat : "",
            kota : "",
            pageNumber : 1,
            pageSize : 10,
            totalRow : 0,
            sortColumn : "ID",
            sortDirection : 0
        } )
        if ( resp !== null ) {
            setListVendor( resp.data.listOfVendor.map( ( item : ListOfVendor ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.kodeVendor + ' - ' + item.namaVendor,
                    value : item.kodeVendor,
                }
            } ) )
        }
        loadingLottie.openLoading( false );
    }

    const [ listMekanik, setListMekanik ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listAdvisor, setListAdvisor ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listInspector, setListInspector ] = useState<InterfacePropsDropDown[]>( [] );

    const getMekanik = async ( data : EnumDataListMekanik, namaMekanik : string ) => {
        const resp = await ParameterMekanikRepository.getListMekanik( context, {
            tipe : data,
            namaMekanik : namaMekanik,
        } )
        if ( resp !== null ) {
            if ( data === EnumDataListMekanik.mekanik ) {
                setListMekanik( resp.data.listDropDown.map( ( item : ListDropDownMekanikServices ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.labelStatusKehadiran,
                        add : item as ListDropDownMekanikServices,
                    }
                } ) )
            }
            if ( data === EnumDataListMekanik.advisor ) {
                setListAdvisor( resp.data.listDropDown.map( ( item : ListDropDownMekanikServices ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.labelStatusKehadiran,
                        add : item as ListDropDownMekanikServices,
                    }
                } ) )
            }
            if ( data === EnumDataListMekanik.inspector ) {
                setListInspector( resp.data.listDropDown.map( ( item : ListDropDownMekanikServices ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.labelStatusKehadiran,
                        add : item as ListDropDownMekanikServices,
                    }
                } ) )
            }
        }
    }

    // const [ totalBayar, setTotalBayar ] = useState( '' );
    //
    // const countTotalBayar = () => {
    // }

    const [ listSparepart, setListSparepart ] = useState<InterfacePropsDropDown[]>( [] );
    const [ detailSparepart, setDetailSparepart ] = useState<ParameterDetailSparepart>();
    const [ listSparepartTable, setListSparepartTable ] = useState<InterfaceListSparePartPKB[]>( [] );
    const [ dataSparePart, setDataSparePart ] = useState<InterfaceDataSparepart>();

    const totalHargaSparePart = ( hargaTambahan : number ) => {
        const harga = Number( Currency.idrToString( dataSparePart?.hargaJual ?? '0' ) ) ?? 0;
        const jumlah = dataSparePart?.jumlah ?? 1
        const total = (harga + hargaTambahan);
        setDataSparePart( ( prevState ) => {
            return {
                ...prevState,
                totalHarga : total,
            } as InterfaceDataSparepart
        } )
    }

    const persentaseDiskonSparePart = ( persentase : number ) => {
        const harga = Number( Currency.idrToString( dataSparePart?.hargaJual ?? '0' ) ) ?? 0;
        const tambahan = dataSparePart?.tambahanHarga ?? 0;
        const diskon = (harga + tambahan) * (persentase / 100);
        const jumlah = dataSparePart?.jumlah ?? 1
        const total = ((harga + tambahan) - diskon);
        setDataSparePart( ( prevState ) => {
            return {
                ...prevState,
                totalHarga : total,
                nilaiDiskon : diskon,
            } as InterfaceDataSparepart
        } )
    }

    const JumlahTotalSparePart = ( jumlah : number ) => {
        if ( jumlah > 0 ) {
            const harga = Number( Currency.idrToString( dataSparePart?.totalHarga?.toString() ?? '0' ) );
            if ( harga > 0 ) {
                const total = (harga * jumlah);
                setDataSparePart( ( prevState ) => {
                    return {
                        ...prevState,
                        totalHarga : total,
                    } as InterfaceDataSparepart
                } )
            }
        }
        else {
            context.onError( true )
            context.giveMessage( 'Jumlah tidak boleh kurang dari 1' )
            context.setOpen( true )
            setDataSparePart( ( prevState ) => {
                return {
                    ...prevState,
                    jumlah : 1,
                } as InterfaceDataSparepart
            } )
        }
    }

    const hargaDiskonSparePart = ( hargaDiskon : number ) => {
        const harga = Number( Currency.idrToString( dataSparePart?.hargaJual ?? '0' ) ) ?? 0;
        const tambahan = dataSparePart?.tambahanHarga ?? 0;
        const hargaDiskonResult = hargaDiskon / (harga + tambahan) * 100;
        const jumlah = dataSparePart?.jumlah ?? 1
        const total = ((harga + tambahan) - hargaDiskon);
        setDataSparePart( ( prevState ) => {
            return {
                ...prevState,
                totalHarga : total,
                persentaseDiskon : hargaDiskonResult,
            } as InterfaceDataSparepart
        } )
    }

    const getListSparepart = async ( kodeSparepart : string, idGudang : number ) => {
        loadingLottie.openLoading( true )
        const resp = await ParameterSparepartRepository.getListSparepart( context, {
            action : 1,
            namaSparepart : "",
            kodeSparepart : kodeSparepart,
            idGudang : idGudang, //51,
        } )
        if ( resp !== null ) {
            setListSparepart( resp.data.listofSparePart.map( ( item : ListofSparePartParameter ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : item.kodeSparepart + ' - ' + item.namaSparepart,
                    value : item.kodeSparepart,
                    add : item as ListofSparePartParameter,
                }
            } ) )
        }
        loadingLottie.openLoading( false )
    }

    const getDetailSparepart = async ( idSparepart : number, idGudang : number ) => {
        const resp = await ParameterSparepartRepository.getDetailSparepart( context, {
            action : 1,
            id : idSparepart,//60245,
            idGudang : idGudang //51
        } )
        if ( resp !== null ) {
            setDetailSparepart( resp?.data )
            setDataSparePart( {
                kodeJasa : 0,
                noRefJasa : resp?.data?.kodeSparepart + ' - ' + resp?.data?.namaSparepart,
                stock : resp?.data?.stok,
                namaMaterial : resp?.data?.namaSparepart,
                tambahanHarga : 0,
                hargaJual : Currency.stringToIdr( resp?.data?.hargaJual?.toString() ?? '0' ),
                persentaseDiskon : 0,
                nilaiDiskon : 0,
                jumlah : 1,
                totalHarga : resp.data.hargaJual,

                ack : resp?.data?.ack,
                idSparepart : resp?.data?.idSparepart,
                aktif : resp?.data?.aktif,
                barcode : resp?.data?.barcode,
                catatan : resp?.data?.catatan,
                etaTercepat : resp?.data?.etaTercepat,
                etaTerlama : resp?.data?.etaTerlama,
                grupSparepart : resp?.data?.grupSparepart,
                grupKodeAHM : resp?.data?.grupKodeAHM,
                hargaClaimOli : resp?.data?.hargaClaimOli,
                hargaLokal : resp?.data?.hargaLokal,
                hargaNasional : resp?.data?.hargaNasional,
                isHotLine : resp?.data?.isHotLine,
                kodeSparepart : resp?.data?.kodeSparepart,
                isOriginalPart : resp?.data?.isOriginalPart,
                message : resp?.data?.message,
                namaSparepart : resp?.data?.namaSparepart,
                rak : resp?.data?.rak,
                kategoriETD : resp?.data?.kategoriETD,
                namaLokal : resp?.data?.namaLokal,
                uom : resp?.data?.uom,
                nilaiKomisi : resp?.data?.nilaiKomisi,
                stok : resp?.data?.stok,
                pajakJual : resp?.data?.pajakJual,
                satuanKomisi : resp?.data?.satuanKomisi,
                tipeKomisi : resp?.data?.satuanKomisi
            } )
        }
    }


    useEffect( () => {
        getListGudang();
        getLat();
        getVendor();
        getMekanik( EnumDataListMekanik.mekanik, '' )
        getMekanik( EnumDataListMekanik.advisor, '' )
        getMekanik( EnumDataListMekanik.inspector, '' )
        // getListSparepart();
        // getDetailSparepart();
        return () => {
        };
    }, [] );

    return {
        context,
        dataPkb,
        setDataPkb,
        sendData,
        // noPolisiNoMesin, setNoPolisiNoMesin,
        pemilik,
        setPemilik,
        listTypeAntrian,
        listActivityCapacity,
        listGudang,
        listAlasanAhass,
        listHubPemilik,
        listTypeKedatangan,
        getDataCustomerFromPlatNoMesin,
        listNoMesinNoPlat,
        loading,
        getDataCustomerServices,
        noMesinNoPlat,
        setNoMesinNoPlat,
        searchKendaraan,
        setSearchKendaraan,
        listCustomerData,
        getJasa,
        listJasa,
        showAddJasa,
        setShowAddJasa,
        addJasa,
        setAddJasa,
        totalHargaJasa,
        persentaseDiskon,
        hargaDiskon,
        listVendor,
        jasa,
        setJasa,
        getDetailJasa,
        getMekanik,
        listMekanik,
        listAdvisor,
        listInspector,
        countJasaBayar,
        jasaBayar,
        jasaEstimasi,
        countJasaEstimasi,
        getListSparepart,
        getDetailSparepart,
        listSparepart,
        setListSparepart,
        detailSparepart,
        setDetailSparepart,
        showSparepart, setShowSparepart,
        listSparepartTable, setListSparepartTable,
        dataSparePart, setDataSparePart,
        totalHargaSparePart, persentaseDiskonSparePart,
        hargaDiskonSparePart, JumlahTotalSparePart
    }
}

export default AddServicesVM
