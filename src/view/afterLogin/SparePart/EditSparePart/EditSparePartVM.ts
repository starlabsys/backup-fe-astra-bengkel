import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import { InterfaceAddSparePart } from "../interfaces/InterfaceAddSparePart";
import { InterfaceKomisiPenjualan } from "../interfaces/InterfaceKomisiPenjualan";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { InterfaceSendDataSparePart } from "../interfaces/InterfaceSendDataSparePart";
import Currency from "../../../../utils/format/currency";
import SparepartRepository from "../../../../domain/repository/sparepart/SparepartRepository";
import { useRouter } from "next/router";


export const EditSparePartVM = ( idDetail : string ) => {
    const route = useRouter();

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

    const [ listGroupAhm, setListGroupAhm ] = useState<InterfacePropsDropDown[]>( [] );

    const getDropDown = async ( tipe : number, nilai : number ) => {

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
                return resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } );
            }
            if ( tipe === 44 ) {
                setListGroupAhm( resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } ) )
                return resp.data.listDropDown.map( ( item, index ) : InterfacePropsDropDown => {
                    return {
                        id : Number( item.nilai ),
                        name : item.label,
                        value : item.nilai
                    }
                } )
            }
            return [];
        }

        return [];
    }

    const getDetailSparePart = async ( id : number ) => {
        loadingLottie.openLoading( true );
        const resp = await SparepartRepository.detail( context, {
            action : 1,
            id : id
        } );
        if ( resp !== null ) {
            const dataGroup : InterfacePropsDropDown[] = await getDropDown( 2, 1 )
            const dataGroupAhm : InterfacePropsDropDown[] = await getDropDown( 44, 1 )

            setSparePart( {
                id : resp.data.idSparepart,
                kode : resp.data.kodeSparepart,
                namaLokal : resp.data.namaLokal,
                status : resp.data.aktif,
                catatan : resp.data.catatan,
                hargaLokal : Currency.stringToIdr( resp.data.hargaLokal.toString() ),
                satuan : listSatuan.find( item => item.value === resp.data.uom ) || {} as InterfacePropsDropDown,
                hargaClaimOli : Currency.stringToIdr( resp.data.hargaClaimOli.toString() ),
                nama : resp.data.namaSparepart,
                group : dataGroup.find( item => item.id === resp.data.grupSparepart ) || {} as InterfacePropsDropDown,
                grupKodeAHM : dataGroupAhm.find( item => item.id === resp.data.grupKodeAHM ) || {} as InterfacePropsDropDown,
                hargaNasional : Currency.stringToIdr( resp.data.hargaNasional.toString() ),
            } )
            setKomisiPenjualan( {
                satuan : listSatuanKomisi.find( item => item.id === resp.data.satuanKomisi ) || {} as InterfacePropsDropDown,
                komisi : listKomisi.find( item => item.id === resp.data.tipeKomisi ) || {} as InterfacePropsDropDown,
                nominal : resp.data.nilaiKomisi.toString(),
            } )
        }
        loadingLottie.openLoading( false );
    }

    const sendData = async () => {
        const sendData : InterfaceSendDataSparePart = {
            action : 1,
            id : sparePart?.id ?? 0,
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
            nilaiKomisi : Number( Currency.idrToString( komisiPenjualan?.nominal ?? '0' ) ),
            tipeKomisi : komisiPenjualan?.komisi?.id ?? 0,
            satuanKomisi : komisiPenjualan?.satuan?.id ?? 0,
            rak : '',
            barcode : ''
        }
        console.log( sendData );
        const resp = await SparepartRepository.add( context, sendData );
    }

    useEffect( () => {
        console.log( 'idDetail', idDetail );
        if ( idDetail === undefined ) {
            route.back();
        }
        // getDropDown( 2, 1 ).then( ( dataGroup ) => {
        //     setListGroup( dataGroup ?? [] );
        //     getDropDown( 44, 1 ).then( ( dataGroupAhm ) => {
        //         setListGroupAhm( dataGroupAhm ?? [] );
        getDetailSparePart( Number( idDetail ) ).then( () => {
            // loadingLottie.openLoading( false );
        } );
        // } )
        // } );
        // getDropDown( 44, 1 );

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
        sendData,
        listGroupAhm
    }
}
