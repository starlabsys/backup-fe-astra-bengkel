import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import SparepartRepository from "../../../../domain/repository/sparepart/SparepartRepository";
import { InterfaceListSparePartDetailJasa } from "../InfoEditJasa/interface/InterfaceListSparePartDetailJasa";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import { ListofSparePart } from "../../../../domain/models/SparePart/ModelListSparePart";


const TambahJasaViewModel = () => {

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

    const [ typeKomisi, setTypeKomisi ] = useState( 0 );
    const [ qtySparepart, setQtySparepart ] = useState( 1 );

    const [ listSatuanKomisi, setListSatuanKomisi ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listSatuanWaktu, setListSatuanWaktu ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKategoriPekerjaan, setListKategoriPekerjaan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listGroup, setListGroup ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownSparePart, setListDropDownSparePart ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listSparePartData, setListSparePartData ] = useState<InterfaceListSparePartDetailJasa[]>( [] );
    const [ sparePart, setSparePart ] = useState<InterfaceListSparePartDetailJasa | null>( null );

    const [ listSparePart, setListSparePart ] = useState<InterfaceListSparePartDetailJasa[]>( [] );

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
                    aktif : item.aktif,
                    isDisabel : false,
                    hargaJual : item.hargaJual,
                    isEdit : false
                }
            } )
            setListSparePartData( resultListDataSparePart );


        }
    }

    useEffect( () => {
        getDropdown();
        getListGroup();
        getSparePart( 100, 1, '' );
        return () => {

        };
    }, [] );


    return {
        header,
        listSatuanKomisi,
        listSatuanWaktu,
        listKategoriPekerjaan,
        listGroup,
        listDropDownSparePart,
        listSparePartData,
        sparePart, setSparePart,
        typeKomisi, setTypeKomisi,
        getSparePart,
        qtySparepart, setQtySparepart,
        listSparePart, setListSparePart
    }
}

export default TambahJasaViewModel
