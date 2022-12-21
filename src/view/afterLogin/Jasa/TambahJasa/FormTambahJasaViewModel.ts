import { useContext, useState } from "react";
import { InterfaceListSparePartDetailJasa } from "../InfoEditJasa/interface/InterfaceListSparePartDetailJasa";
import { InterfaceAddJasa, ListSparePart } from "../../../../domain/repository/jasa/interface/InterfaceAddJasa";
import JasaRepository from "../../../../domain/repository/jasa/JasaRepository";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../component/ILoading/ILoading";


const FormTambahJasaViewModel = () => {
    const context = useContext( IAlertDialogContext );
    const loadingLottie = useContext( ILoadingContext );


    const [ kode, setKode ] = useState( '' );
    const [ nama, setNama ] = useState( '' );
    const [ group, setGroup ] = useState( '' );
    const [ subGroup, setSubGroup ] = useState( '' );
    const [ hargaJual, setHargaJual ] = useState( 0 );
    const [ pajakJual, setPajakJual ] = useState<number | null>( 0 );
    const [ oumKerja, setOumKerja ] = useState( '' );
    const [ catatan, setCatatan ] = useState( '' );
    const [ tipeKomisi, setTipeKomisi ] = useState( 0 );
    const [ satuanKomisi, setSatuanKomisi ] = useState( '' );
    const [ nilaiKomisi, setNilaiKomisi ] = useState( 0 );
    const [ aktif, setAktif ] = useState( false );
    const [ waktuKerja, setWaktuKerja ] = useState( 0 );
    const [ listSparePart, setListSparePart ] = useState<InterfaceListSparePartDetailJasa[]>( [] );
    const [ kategoriPekerjaanID, setKategoriPekerjaanID ] = useState( 0 );

    const [ qty, setQty ] = useState( 1 );

    const addDataSparePart = ( data : InterfaceListSparePartDetailJasa ) => {
        if ( listSparePart.length === 0 ) {
            setListSparePart( ( prevState ) => [ ...prevState, {
                idRefMaterial : data.idRefMaterial ?? 0,
                kodeSparepart : data.kodeSparepart ?? '',
                namaSparepart : data.namaSparepart ?? '',
                quantity : qty,
                stok : data.stok ?? 0,
                labelAktif : 'Aktif',
                hargaJual : data.hargaJual ?? 0,
                isDisabel : true,
                aktif : data.aktif ?? false,
                isEdit : true,
            } ] );
        }
        else {
            listSparePart.map( ( item, index ) => {
                if ( item.idRefMaterial !== data.idRefMaterial ) {
                    // console.log( 'masuk' );
                    setListSparePart( ( prevState ) => [
                        ...prevState,
                        {
                            idRefMaterial : data.idRefMaterial ?? 0,
                            kodeSparepart : data.kodeSparepart ?? '',
                            namaSparepart : data.namaSparepart ?? '',
                            quantity : qty,
                            stok : data.stok ?? 0,
                            labelAktif : 'Aktif',
                            hargaJual : data.hargaJual ?? 0,
                            isDisabel : true,
                            aktif : data.aktif ?? false,
                            isEdit : true,
                        }
                    ] )
                }
                // else {
                //     console.log( 'gak masuk' );
                // }
            } )
        }
    }

    const changeDataListSparePart = ( id : number, qty : number, aktif : boolean ) => {
        listSparePart.map( ( item, indexItem ) => {
            if ( item.idRefMaterial === id ) {
                item.quantity = qty;
                item.labelAktif = aktif ? 'Aktif' : 'Tidak Aktif';
                item.aktif = aktif;
            }
        } )
        setListSparePart( ( prevState ) => [ ...prevState ] );
    }

    const addData = async () => {
        loadingLottie.openLoading( true );
        const data : InterfaceAddJasa = {
            action : 0,
            id : 0,
            kodeJasa : kode,
            namaJasa : nama,
            grupJasa : group,
            subGrup : subGroup,
            catatan : catatan,
            hargaJual : hargaJual,
            pajakJual : pajakJual ?? 0,
            listSparePart : listSparePart.map( ( item, index ) : ListSparePart => {
                return {
                    idRefMaterial : item.idRefMaterial,
                    aktif : item.aktif,
                    isDisabel : item.isDisabel,
                    labelAktif : item.labelAktif,
                    guid : '000000',
                    kodeSparepart : item.kodeSparepart,
                    namaSparepart : item.namaSparepart,
                    quantity : item.quantity,
                }
            } ),
            oumKerja : oumKerja,
            tipeKomisi : tipeKomisi,
            satuanKomisi : satuanKomisi,
            nilaiKomisi : nilaiKomisi,
            aktif : aktif,
            waktuKerja : waktuKerja,
            kategoriPekerjaanID : kategoriPekerjaanID.toString(),
        }

        const resp = await JasaRepository.addJasa( context, data )
        loadingLottie.openLoading( false );
    }

    return {
        kode, setKode,
        nama, setNama,
        group, setGroup,
        subGroup, setSubGroup,
        hargaJual, setHargaJual,
        pajakJual, setPajakJual,
        oumKerja, setOumKerja,
        catatan, setCatatan,
        tipeKomisi, setTipeKomisi,
        satuanKomisi, setSatuanKomisi,
        nilaiKomisi, setNilaiKomisi,
        aktif, setAktif,
        waktuKerja, setWaktuKerja,
        listSparePart, setListSparePart,
        kategoriPekerjaanID, setKategoriPekerjaanID,
        changeDataListSparePart,
        qty, setQty,
        addData, addDataSparePart
        // indexSparePart, setIndexSparePart
    }
}

export default FormTambahJasaViewModel
