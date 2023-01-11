import { useContext, useEffect, useState } from "react";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import { InterfaceAddSparePart } from "../interfaces/InterfaceAddSparePart";
import { InterfaceKomisiPenjualan } from "../interfaces/InterfaceKomisiPenjualan";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import { InterfaceSendDataSparePart } from "../interfaces/InterfaceSendDataSparePart";
import SparepartRepository from "../../../../domain/repository/sparepart/SparepartRepository";
import Currency from "../../../../utils/format/currency";


export const TambahSparePartVM = () => {

    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );

    const [ listKomisi, setListKomisi ] = useState<InterfacePropsDropDown[]>( [
        {
            id : 1,
            name : "Persentase",
            value : "Persentase"
        },
        {
            id : 2,
            name : "Nominal",
            value : "Nominal"
        },
    ] );
    const [ listSatuanKomisi, setListSatuanKomisi ] = useState<InterfacePropsDropDown[]>( [
        {
            id : 0,
            name : "Harga",
            value : "Harga"
        },
        {
            id : 1,
            name : "Jumlah",
            value : "Jumlah"
        },
    ] );

    const [ listSatuan, setListSatuan ] = useState<InterfacePropsDropDown[]>( [
        {
            id : 1,
            name : "PCS",
            value : "PCS"
        },
        {
            id : 2,
            name : "SET",
            value : "SET"
        },
    ] );

    const [ sparePart, setSparePart ] = useState<InterfaceAddSparePart>();
    const [ komisiPenjualan, setKomisiPenjualan ] = useState<InterfaceKomisiPenjualan>();

    const [ listGroup, setListGroup ] = useState<InterfacePropsDropDown[]>( [] );

    const getDropDown = async ( tipe : number, nilai : number ) => {
        loadingLottie.openLoading( true );
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : tipe,
                nilai : nilai
            }
        ] )
        if ( resp !== null ) {
            if ( tipe === 2 ) {
                setListGroup( resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } ) );
            }
        }
        loadingLottie.openLoading( false );
    }

    const sendData = async () => {
        loadingLottie.openLoading( true );
        const sendData : InterfaceSendDataSparePart = {
            action : 0,
            id : 0,
            kodeSparepart : sparePart?.kode ?? '',
            aktif : sparePart?.status ?? true,
            namaSparepart : sparePart?.nama ?? '',
            namaLokal : sparePart?.namaLokal ?? '',
            grupSparepart : sparePart?.group?.id ?? 0,
            hargaClaimOli : Number( sparePart?.hargaClaimOli ?? 0 ),
            catatan : sparePart?.catatan ?? '',
            grupKodeAHM : sparePart?.grupKodeAHM?.id ?? 0,
            uom : sparePart?.satuan?.value ?? '',
            hargaJual : Number( Currency.idrToString( sparePart?.hargaLokal ?? '0' ) ),
            nilaiKomisi : Number( komisiPenjualan?.nominal ?? 0 ),
            tipeKomisi : komisiPenjualan?.komisi?.id ?? 0,
            satuanKomisi : komisiPenjualan?.satuan?.id ?? 0,
            rak : '',
            barcode : ''
        }
        // console.log( sendData );
        const resp = await SparepartRepository.add( context, sendData );
        loadingLottie.openLoading( false );
    }

    useEffect( () => {
        getDropDown( 2, 1 );
        return () => {

        };
    }, [] );


    return {
        listKomisi,
        sparePart, setSparePart,
        komisiPenjualan, setKomisiPenjualan,
        listGroup,
        getDropDown,
        listSatuanKomisi, setListSatuanKomisi,
        listSatuan,
        sendData
    }
}
