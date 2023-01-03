import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import KendaraanRepository from "../../../../domain/repository/kendaraan/KendaraanRepository";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { ListPelanggan } from "../../../../domain/models/Kendaraan/ModelGetListPelanggan";
import { ListDropDown } from "../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import { DataDetailKendaraan } from "../../../../domain/models/Kendaraan/ModelDetailKendaraan";
import FormatDate from "../../../../utils/format/formatDate";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";
import { InterfaceEditKendaraan } from "../../../../domain/repository/kendaraan/interface/InterfaceEditKendaraan";


const EditKendaraanViewModel = ( id : string ) => {
    const context = useContext( IAlertDialogContext );
    const loading = useContext( ILoadingContext );


    const [ listPelanggan, setListPelanggan ] = useState<ListPelanggan[]>( [] );
    const [ listKendaraan, setListKendaraan ] = useState<ListDropDown[]>( [] );
    const [ listWarna, setListWarna ] = useState<ListDropDown[]>( [] );
    const [ listDropDownPelanggan, setListDropDownPelanggan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownKendaraan, setListDropDownKendaraan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownWarna, setListDropDownWarna ] = useState<InterfacePropsDropDown[]>( [] );


    const [ noPolisi, setNoPolisi ] = useState( '' );
    const [ tahunRakit, setTahunRakit ] = useState( '' );
    const [ noRangka, setNoRangka ] = useState( '' );
    const [ noMesin, setNoMesin ] = useState( '' );
    const [ status, setStatus ] = useState( false );

    const [ warna, setWarna ] = useState<InterfacePropsDropDown>();
    const [ pelanggan, setPelanggan ] = useState<InterfacePropsDropDown>();
    const [ pemilik, setPemilik ] = useState<InterfacePropsDropDown>();
    const [ kendaraan, setKendaraan ] = useState<InterfacePropsDropDown>();

    const [ detail, setDetail ] = useState<DataDetailKendaraan>( {} as DataDetailKendaraan );

    const getDetail = async ( id : number ) => {
        loading.openLoading( true );
        const resp = await KendaraanRepository.detailKendaraan( context, {
            action : 1,
            id : id
        } );
        if ( resp !== null ) {

            setNoPolisi( resp.data.noPolisi );
            setTahunRakit( FormatDate.dateToYear( resp.data.tahunRakit ) );
            setNoRangka( resp.data.noRangka );
            setNoMesin( resp.data.noMesin );
            setStatus( resp.data.aktif );

            return resp.data;
        }
        loading.openLoading( false );
    }


    const getPelanggan = async ( nama : string ) => {

        const resp = await KendaraanRepository.getPelanggan( context, {
            action : 1,
            kodePelanggan : "",
            alamatPelanggan : "",
            namaPelanggan : nama,
            kotaPelanggan : "",
            isAktif : true
        } );
        if ( resp !== null ) {
            setListPelanggan( resp.data.listPelanggan );
            const dataPelanggan = resp.data.listPelanggan.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : `${ item.kodeCustomer } - ${ item.namaCustomer } - ${ item.alamat } - ${ item.labelAktif }`,
                    value : item.kodeCustomer
                }
            } )
            setListDropDownPelanggan( dataPelanggan );
            return dataPelanggan;
        }
        loading.openLoading( false );
    }

    const getTipeKendaraan = async () => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 8,
                label : "sample string 2",
                nilai : 0
            }
        ] );
        if ( resp !== null ) {
            setListKendaraan( resp.data.listDropDown );
            const dataKendaraan = resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListDropDownKendaraan( dataKendaraan );
            console.log( dataKendaraan.length )
            return dataKendaraan
        }
        loading.openLoading( false );
    }

    const getWarna = async ( nilai : number ) => {
        const resp = await DropDownRepository.getGroup( context, [
            {
                tipe : 9,
                label : "sample string 2",
                nilai : nilai
            }
        ] );
        if ( resp !== null ) {
            setListWarna( resp.data.listDropDown );
            const dataWarna = resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai
                }
            } )
            setListDropDownWarna( dataWarna );
            return dataWarna
            // setWarna( listDropDownWarna.find( ( item ) => item.id === detail?.warna ) ?? {} as
            // InterfacePropsDropDown ); return listDropDownWarna;
        }
        loading.openLoading( false );
    }

    const updateKendaraan = async () => {
        loading.openLoading( true );
        const dataSend : InterfaceEditKendaraan = {
            action : 1,
            id : detail.id,
            noPolisi : noPolisi,
            noMesin : noMesin,
            noRangka : noRangka,
            tahunRakit : tahunRakit + '-01-01T00:00:00+07:00',
            warna : warna?.id ?? 0,
            tipe : kendaraan?.id ?? 0,
            isUpdateQR : false,
            aktif : status,
            idPelangan : pelanggan?.id ?? 0,
            idPelanganSTNK : pemilik?.id ?? 0,
        }
        const resp = await KendaraanRepository.updateKendaraan( context, dataSend );
        if ( resp !== null ) {
            loading.openLoading( false );
            return resp;
        }
        loading.openLoading( false );
    }

    useEffect( () => {
        getDetail( Number( id ) ?? 0 ).then( ( data ) => {
            setDetail( data ?? {} as DataDetailKendaraan );
            getPelanggan( '' ).then( ( dataPelanggan ) => {
                getTipeKendaraan().then( ( dataKendaraan ) => {
                    getWarna( data?.tipe ?? 0 ).then( ( dataWarna ) => {
                        const dataSetKendaraan = dataKendaraan?.find( ( item ) => item.id === data?.tipe );
                        const dataSetPelanggan = dataPelanggan?.find( ( item ) => item.id === data?.idPelangan );
                        const dataSetPemilik = dataPelanggan?.find( ( item ) => item.id === data?.idPelanganSTNK );
                        const dataSetWarna = dataWarna?.find( ( item ) => item.id === data?.warna );
                        setKendaraan( dataSetKendaraan );
                        setPelanggan( dataSetPelanggan );
                        setPemilik( dataSetPemilik );
                        setWarna( dataSetWarna );
                        loading.openLoading( false );
                    } );
                } );
            } );
        } );
        return () => {
        };
    }, [] );

    return {
        listPelanggan, setListPelanggan,
        listDropDownPelanggan, setListDropDownPelanggan,
        listKendaraan, setListKendaraan,
        listDropDownKendaraan, setListDropDownKendaraan,
        listDropDownWarna, setListDropDownWarna,
        getPelanggan, getTipeKendaraan, getWarna,
        noPolisi, setNoPolisi,
        tahunRakit, setTahunRakit,
        noRangka, setNoRangka,
        noMesin, setNoMesin,
        status, setStatus,
        listWarna, setListWarna,
        detail, setDetail,
        warna, setWarna,
        pelanggan, setPelanggan,
        kendaraan, setKendaraan,
        pemilik, setPemilik,
        updateKendaraan
    }
}
export default EditKendaraanViewModel
