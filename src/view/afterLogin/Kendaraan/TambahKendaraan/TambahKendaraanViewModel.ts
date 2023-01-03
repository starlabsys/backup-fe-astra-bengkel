import { InterfaceGetPelanggan } from "../../../../domain/repository/kendaraan/interface/InterfaceGetPelanggan";
import KendaraanRepository from "../../../../domain/repository/kendaraan/KendaraanRepository";
import { useContext, useEffect, useState } from "react";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ListPelanggan } from "../../../../domain/models/Kendaraan/ModelGetListPelanggan";
import { InterfacePropsDropDown } from "../../../../component/ITextField/IDropDown";
import DropDownRepository from "../../../../domain/repository/parameter/dropDown/DropDownRepository";
import { ListDropDown } from "../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";
import { useFormik } from "formik";
import * as yup from 'yup';


const TambahKendaraanViewModel = () => {

    const context = useContext( IAlertDialogContext );
    const [ loading, setLoading ] = useState( false );

    const [ listPelanggan, setListPelanggan ] = useState<ListPelanggan[]>( [] );
    const [ listDropDownPelanggan, setListDropDownPelanggan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listKendaraan, setListKendaraan ] = useState<ListDropDown[]>( [] );
    const [ listDropDownKendaraan, setListDropDownKendaraan ] = useState<InterfacePropsDropDown[]>( [] );
    const [ listDropDownWarna, setListDropDownWarna ] = useState<InterfacePropsDropDown[]>( [] );
    const [ pemilik, setPemilik ] = useState<InterfacePropsDropDown>( {} as InterfacePropsDropDown );
    const [ customer, setCustomer ] = useState<InterfacePropsDropDown>( {} as InterfacePropsDropDown );
    const [ status, setStatus ] = useState( true );
    const [ noPolisi, setNoPolisi ] = useState( '' );
    const [ kendaraan, setKendaraan ] = useState<InterfacePropsDropDown>( {} as InterfacePropsDropDown );
    const [ warna, setWarna ] = useState<InterfacePropsDropDown>( {} as InterfacePropsDropDown );
    const [ tahunRakit, setTahunRakit ] = useState( '' );
    const [ noRangka, setNoRangka ] = useState( '' );
    const [ noMesin, setNoMesin ] = useState( '' );
    const [ nilaiWarna, setNilaiWarna ] = useState( 0 );


    const save = async () => {
        const dataSend = {
            action : 0,
            id : 0,
            idPelangan : Number( customer.id ),
            idPelanganSTNK : Number( pemilik.id ),
            noPolisi : noPolisi,
            aktif : status,
            noMesin : noMesin,
            noRangka : noRangka,
            tahunRakit : tahunRakit + '-01-01T00:00:00+07:00',
            tipe : kendaraan.value,
            warna : warna.value,
            isUpdateQR : false
        }
        const resp = await KendaraanRepository.addKendaraan( context, dataSend );

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
            setListDropDownPelanggan( resp.data.listPelanggan.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : item.id,
                    name : `${ item.kodeCustomer } - ${ item.namaCustomer } - ${ item.alamat } - ${ item.labelAktif }`,
                    value : item.kodeCustomer
                }
            } ) );
        }
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
            setListDropDownKendaraan( resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai
                }
            } ) );
        }
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
            setListDropDownWarna( resp.data.listDropDown.map( ( item ) : InterfacePropsDropDown => {
                return {
                    id : Number( item.nilai ),
                    name : item.label,
                    value : item.nilai
                }
            } ) );
        }
    }

    useEffect( () => {
        getPelanggan( '' );
        getTipeKendaraan();
        return () => {
            getPelanggan( '' );
            getTipeKendaraan();
        };
    }, [] );


    return {
        listPelanggan,
        listDropDownPelanggan,
        getPelanggan,
        pemilik, setPemilik,
        customer, setCustomer,
        status, setStatus,
        noPolisi, setNoPolisi,
        listKendaraan, listDropDownKendaraan,
        kendaraan, setKendaraan,
        warna, setWarna,
        tahunRakit, setTahunRakit,
        noRangka, setNoRangka,
        noMesin, setNoMesin,
        nilaiWarna, setNilaiWarna,
        getWarna,
        listDropDownWarna, setListDropDownKendaraan,
        save
    }
}

export default TambahKendaraanViewModel
