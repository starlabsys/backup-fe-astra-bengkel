import { useContext, useEffect, useState } from "react";
import JasaRepository from "../../../../domain/repository/jasa/JasaRepository";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { DataModelDetailJasa } from "../../../../domain/models/Jasa/ModelDetailJasa";
import { InterfaceListSparePartDetailJasa } from "./interface/InterfaceListSparePartDetailJasa";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { KategoriPekerjaan } from "../../../../domain/models/MasterDropDown/ModelMasterDropDown";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import Currency from "../../../../utils/format/currency";
import SparepartRepository from "../../../../domain/repository/sparepart/SparepartRepository";


const EditJasaViewModel = ( id : number, action : number ) => {

    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );
    const header = [
        {
            label : '#',
            name : '#',
        },
        {
            label : 'Kode Sparepart',
            name : 'kodeSparepart',
        },
        {
            label : 'Nama Sparepart',
            name : 'namaSparepart',
        },
        {
            label : 'QTY',
            name : 'quantity',
        },
        {
            label : 'Status',
            name : 'labelAktif',
        },
        {
            label : 'Action',
            name : 'action',
        }
    ];

    const [ detailJasa, setDetailJasa ] = useState( {} as DataModelDetailJasa );
    const [ listSatuanKomisi, setListSatuanKomisi ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listSatuanWaktu, setListSatuanWaktu ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKategoriPekerjaan, setListKategoriPekerjaan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listGroup, setListGroup ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownSparePart, setListDropDownSparePart ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listSparePartData, setListSparePartData ] = useState<InterfaceListSparePartDetailJasa[]>( [] );
    const [ sparePart, setSparePart ] = useState<InterfaceListSparePartDetailJasa | null>( null );

    const [ searchSparePart, setSearchSparePart ] = useState( '' );
    const [ qtySparepart, setQtySparepart ] = useState( 1 );

    const [ kode, setKode ] = useState( '' );
    const [ status, setStatus ] = useState( false );
    const [ nama, setNama ] = useState( '' );
    const [ group, setGroup ] = useState( 0 );
    const [ subGroup, setSubGroup ] = useState( '' );
    const [ kategoriPekerjaan, setKategoriPekerjaan ] = useState( 0 );
    const [ hargaJasa, setHargaJasa ] = useState( '' );
    const [ pajak, setPajak ] = useState( 0 );
    const [ waktuKerja, setWaktuKerja ] = useState( 0 );
    const [ satuanWaktuKerja, setSatuanWaktuKerja ] = useState( 0 );
    const [ deskripsi, setDeskripsi ] = useState( '' );
    const [ typeKomisi, setTypeKomisi ] = useState( 0 );
    const [ nominalKomisi, setNominalKomisi ] = useState( 0 );
    const [ persentaseKomisi, setPersentaseKomisi ] = useState( 0 );
    const [ satuanKomisi, setSatuanKomisi ] = useState( 0 );
    const [ listSparePart, setListSparePart ] = useState<InterfaceListSparePartDetailJasa[]>( [] );


    const getDetail = async ( idData : number, actionData : number ) => {
        loadingLottie.openLoading( true );
        const resp = await JasaRepository.detailJasa( context, {
            id : idData,
            action : actionData
        } );
        if ( resp !== null ) {
            setDetailJasa( resp.data );
            const resultListData : InterfaceListSparePartDetailJasa[] = resp.data.listSparePart.map( ( item, index ) : InterfaceListSparePartDetailJasa => {
                return {
                    idRefMaterial : item.idRefMaterial,
                    hargaJual : item.hargaJual,
                    isDisabel : item.isDisabel,
                    stok : item.stok,
                    labelAktif : item.labelAktif,
                    isFreeService : item.isFreeService,
                    aktif : item.aktif,
                    kodeSparepart : item.kodeSparepart,
                    namaSparepart : item.namaSparepart,
                    quantity : item.quantity,
                    isEdit : true
                }
            } )
            setListSparePart( resultListData );
            setTypeKomisi( resp.data.tipeKomisi );
            setKode( resp.data.kodeJasa );
            setNama( resp.data.namaJasa );
            setStatus( resp.data.aktif );
            setGroup( resp.data.grupJasa );
            setSubGroup( resp.data.subGrup ?? '' );
            setKategoriPekerjaan( resp.data.kategoriPekerjaanID );
            setHargaJasa( Currency.stringToIdr( resp.data.hargaJual.toString() ) );
            setPajak( resp.data.pajakJual );
            setWaktuKerja( resp.data.waktuKerja );
            setSatuanWaktuKerja( resp.data.oumKerja );
            setNominalKomisi( resp.data.nilaiKomisi );
            setPersentaseKomisi( resp.data.nilaiKomisi );
            setSatuanKomisi( resp.data.satuanKomisi );

        }
    }

    const getDropdown = async () => {
        const resp = await DropDownRepository.getDropDown( context, [
            {
                "lastSyncTime" : "1900-01-01 00:00:00",
                "objectName" : "satuanKomisi"
            },
            {
                "lastSyncTime" : "1900-01-01 00:00:00",
                "objectName" : "RefUOM"
            },
            {
                "lastSyncTime" : "1900-01-01 00:00:00",
                "objectName" : "KategoriPekerjaan"
            }
        ] );

        if ( resp !== null ) {
            const listDropDownSatuanKomisi : InterfacePropsDropDown[] = resp.data.satuanKomisi.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    value : item.value,
                    name : item.text
                }
            } );
            const resultListSatuanWaktu : InterfacePropsDropDown[] = resp.data.refUOM.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    value : item.value,
                    name : item.text
                }
            } );
            const resultListKategoriPekerjaan : InterfacePropsDropDown[] = resp.data.kategoriPekerjaan.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    value : item.value,
                    name : item.text
                }
            } );
            setListSatuanKomisi( listDropDownSatuanKomisi )
            setListSatuanWaktu( resultListSatuanWaktu );
            setListKategoriPekerjaan( resultListKategoriPekerjaan );
        }
    }

    const getListGroup = async () => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 1,
                nilai : '1'
            }
        ] );

        if ( resp !== null ) {
            const resultListGroup : InterfacePropsDropDown[] = resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : index + 1,
                    value : item.nilai,
                    name : item.label
                }
            } );
            setListGroup( resultListGroup )
        }
    }

    const getSparePart = async ( pageSize : number, pageNumber : number, kodeSparePart : string ) => {
        const resp = await SparepartRepository.get( context, {
            action : 0,
            namaSparepart : kodeSparePart,
            kodeSparepart : '',
            pageNumber : pageNumber,
            pageSize : pageSize,
            totalRow : 100,
            sortColumn : 'ID',
            sortDirection : 0,
        } )
        if ( resp !== null ) {
            const resultListSparePart : InterfacePropsDropDown[] = resp.data.listofSparePart.map( ( item, index ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    value : item.kodeSparepart,
                    name : item.namaSparepart
                }
            } );
            setListDropDownSparePart( resultListSparePart );
            const resultListDataSparePart : InterfaceListSparePartDetailJasa[] = resp.data.listofSparePart.map( ( item, index ) : InterfaceListSparePartDetailJasa => {
                return {
                    idRefMaterial : item.id,
                    kodeSparepart : item.kodeSparepart,
                    namaSparepart : item.namaSparepart,
                    quantity : 1,
                    stok : item.stok,
                    labelAktif : item.aktif ? 'Aktif' : 'Tidak Aktif',
                    isFreeService : detailJasa.isFreeService,
                    aktif : item.aktif,
                    isDisabel : detailJasa.isDisable,
                    hargaJual : item.hargaJual,
                    isEdit : false
                }
            } )
            setListSparePartData( resultListDataSparePart );


        }
    }

    const changeDataListSparePart = ( index : number, qty : number, aktif : boolean ) => {
        const listData = listSparePart;
        listData.map( ( item, indexItem ) => {
            if ( item.idRefMaterial === index ) {
                item.quantity = qty;
                item.labelAktif = aktif ? 'Aktif' : 'Tidak Aktif';
                item.aktif = aktif;
            }
        } )
        setListSparePart( listData );
    }

    useEffect( () => {
        getSparePart( 0, 0, '' );
        getListGroup();
        getDetail( id, action ).then( () => {
            loadingLottie.openLoading( false );
        } );
        getDropdown();

        return () => {
            getDetail( id, action ).then( () => {
                loadingLottie.openLoading( false );
            } );
            getDropdown();
            getListGroup();
        }
    }, [] )

    return {
        context,
        header,
        detailJasa,
        listSparePart,
        listSatuanKomisi,
        listSatuanWaktu,
        listKategoriPekerjaan,
        listGroup,
        typeKomisi,
        setTypeKomisi,
        kode,
        setKode,
        status,
        setStatus,
        nama,
        setNama,
        group,
        setGroup,
        subGroup,
        setSubGroup,
        kategoriPekerjaan,
        setKategoriPekerjaan,
        hargaJasa,
        setHargaJasa,
        pajak, setPajak,
        waktuKerja,
        setWaktuKerja,
        satuanWaktuKerja,
        setSatuanWaktuKerja,
        deskripsi,
        setDeskripsi,
        nominalKomisi,
        setNominalKomisi,
        persentaseKomisi,
        setPersentaseKomisi,
        satuanKomisi,
        setSatuanKomisi,
        searchSparePart,
        setSearchSparePart,
        getSparePart,
        listDropDownSparePart,
        listSparePartData,
        sparePart,
        setSparePart,
        setListSparePart,
        qtySparepart, setQtySparepart,
        getDetail,
        loadingLottie,
        changeDataListSparePart
    }
}

export default EditJasaViewModel
